import { useEffect, useState } from "react";
import watchImg from "../../public/images/apple-watch.png";
import Button from "../components/Elements/Button";
import CardProduct from "../components/Fragments/CardProduct";
import { getProducts } from "../services/product.services";

const ProductPage = () => {
  const [products, setProducts] = useState([]);

  const handleLogout = () => {
    localStorage.removeItem("email");
    localStorage.removeItem("password");
    localStorage.removeItem("token");
    window.location.href = "/";
  };

  useEffect(() => {
    getProducts((data) => {
      setProducts(data);
    });
  }, []);

  return (
    <>
      <div className="flex justify-end h-12 bg-blue-600 sticky top-0 text-white items-center px-10">
        <Button onClick={handleLogout} type="button" classname="ml-5 bg-black">
          Logout
        </Button>
      </div>

      <div className="flex flex-wrap justify-center min-h-screen items-center mt-5">
        {products.length > 0 &&
          products.map((product) => (
            <CardProduct key={product.id}>
              <CardProduct.Header image={product.image} />
              <CardProduct.Body title={product.title}>
                {product.description.length > 100
                  ? `${product.description.substring(0, 100)}...`
                  : product.description}
              </CardProduct.Body>
              <CardProduct.Footer price={product.price}></CardProduct.Footer>
            </CardProduct>
          ))}
      </div>
    </>
  );
};

export default ProductPage;
