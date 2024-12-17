import { Product } from "../../sanity.types";

interface Props {
  product: Product;
}

const ProductCard = ({ product }: Props) => {
  return (
    <div className=" border border-gray-300 rounded-lg overflow-hidden group text-sm">
      ProductCard
    </div>
  );
};
export default ProductCard;
