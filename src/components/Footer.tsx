import Image from "next/image";
import Container from "./Container";
import payment from "@/images/payment.png";

const Footer = () => {
  return (
    <footer className=" bg-lightBg text-sm">
      <Container className=" py-5 flex items-center justify-between">
        <p className="text-gray-500">
          Copyright @ 2024{" "}
          <span className="text-darkBlue font-semibold">RegalosDey</span>
          Todos los derechos reservados
        </p>
        <Image
          src={payment}
          alt="payment"
          className=" w-64 object-cover"
        />
      </Container>
    </footer>
  );
};
export default Footer;
