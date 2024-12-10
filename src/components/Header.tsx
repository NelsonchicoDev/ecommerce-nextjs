import Image from "next/image";
import logo from "@/images/logo.png";
import Container from "./Container";
import Form from "next/Form";
import Link from "next/link";
import CartIcon from "./CartIcon";
import { ShoppingBasket, User } from "lucide-react";

import { currentUser } from "@clerk/nextjs/server";
import { ClerkLoaded, SignedIn, SignInButton, UserButton } from "@clerk/nextjs";

const Header = async () => {
  const user = await currentUser();
  return (
    <header className=" w-full bg-gray-200 py-4 border-b border-b-gray-400">
      <Container className=" flex items-center justify-center gap-5">
        <Link href={"/"}>
          <Image
            src={logo}
            alt="logo"
            className="w-24"
            priority
          />
        </Link>

        <Form
          action="/search"
          className=" flex-1"
        >
          <input
            type="text"
            name="query"
            placeholder="Search..."
            className="w-ful border-2 border-gray-200 px-4 py-2.5 rounded-md focus-visible:border-darkBlue outline-none "
          />
        </Form>
        <div className="flex items-center gap-5">
          <CartIcon />
          <ClerkLoaded>
            <SignedIn>
              <Link
                href={"/orders"}
                className=" flex items-center text-sm gap-2 border border-gray-200 px-2 py-1 rounded-md shadow-md hover:shadow-none hoverEffect"
              >
                <ShoppingBasket />
                <div className=" flex flex-col">
                  <p className="text-xs">
                    <span className=" font-semibold">0</span> items
                  </p>
                  <p className=" font-semibold">Orders</p>
                </div>
              </Link>
            </SignedIn>
            {user ? (
              <div className=" flex items-center text-sm gap-2 border border-gray-200 px-2 py-1 rounded-md shadow-md hover:shadow-none hoverEffect">
                <UserButton />
                <div className=" flex flex-col">
                  <p className="text-xs">Bienvenido</p>
                  <p className=" font-semibold">{user?.fullName}</p>
                </div>
              </div>
            ) : (
              <SignInButton mode="modal">
                <div className=" flex items-center text-sm gap-2 border border-gray-200 px-2 py-1 rounded-md shadow-md hover:shadow-none hoverEffect">
                  <User className=" w-6 h-6 text-darkBlue" />
                  <div className=" flex flex-col">
                    <p className="text-xs">Cuenta</p>
                    <p className=" font-semibold">Ingresar</p>
                  </div>
                </div>
              </SignInButton>
            )}
          </ClerkLoaded>
        </div>
      </Container>
    </header>
  );
};
export default Header;
