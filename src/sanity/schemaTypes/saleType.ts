import { TagIcon } from "@sanity/icons";
import { defineField, defineType} from "sanity";


export const salesType = defineType({
    name: 'sales',
    title: 'Sales',
    type: 'document',
    icon: TagIcon,
    fields: [
        defineField({
            name: 'title',
            title: 'Sale Title',
            type: 'string',
        }),
        defineField({
            name: 'description',
            title: 'Sale Description',
            type: 'text',
        }),
        defineField({
            name: 'badge',
            title: 'Discount Badge',
            type: 'string',
            description: 'Discount Bade Ratio'
        }),
        defineField({
            name: 'discountAmount',
            title: 'Discount Amount',
            type: 'number',
            description: 'Amount off in percentage or fixed value'
        }),
        defineField({
            name: 'couponCode',
            title: 'Coupon Code',
            type: 'string'
        }),
        defineField({
            name: 'validFrom',
            title: 'Valid From',
            type: 'datetime'
        }),
        defineField({
            name: 'validUntil',
            title: 'Valid Until',
            type: 'datetime'
        }),
        defineField({
            name: 'isActive',
            title: 'Is Active',
            type: 'boolean',
            description: 'Toggle to activate/desactivate the sale',
            initialValue: true
        }),
        defineField({
            name: 'image',
            title: 'Product Image',
            type: 'image',
            options: {
                hotspot: true
            },
            validation:(Rule)=>Rule.required()
        }),
    ],
    preview:{
        select:{
            title: 'title',
            discountAmount: 'discountAmount',
            couponCode: 'couponCode',
            isActive:'isActive'
        }
    },
    prepare(select){
        const {title, discountAmount, couponCode, isActive} = select
        const status = isActive ? "Active":'Inactive'
        return{
            title,
            subtitle: `${discountAmount}% off -code: ${couponCode} - ${status}`,
        }
    }

})