import watchImg from "../../public/images/apple-watch.png";
import Button from "../components/Elements/Button";
import CardProduct from "../components/Fragments/CardProduct";

// const products = [
//   {
//     id: 1,
//     title:
//       "Apple Watch Series 7 GPS, Aluminium Case, Starlight Sport",
//     price: 599,
//     image: watchImg,
//     description: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolor beatae inventore illo fugit similique, voluptate omnis nesciunt quam ipsum incidunt!`,
//   },
//   {
//     id: 2,
//     title: "Apple Watch Lama",
//     price: 599,
//     image: watchImg,
//     description: `Lorem ipsum dolor sit, amet consectetur adipisicing elit.`,
//   },
// ];

const ProductPage = () => {
  return (
    <>
      <div className="flex justify-end h-12 bg-blue-600 sticky top-0 text-white items-center px-10">
        <Button type="button" classname="ml-5 bg-black">
          Logout
        </Button>
      </div>

      <div className="flex flex-wrap justify-center min-h-screen items-center mt-5">
        <CardProduct>
          <CardProduct.Header image={watchImg} />
          <CardProduct.Body></CardProduct.Body>
          <CardProduct.Footer></CardProduct.Footer>
        </CardProduct>
      </div>
    </>
  );
};

export default ProductPage;
