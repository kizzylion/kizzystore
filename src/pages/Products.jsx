import { removeTransparentBg } from "@/utilities/utilities";
import { useEffect } from "react";

function Products() {
  useEffect(() => {
    removeTransparentBg();
    window.removeEventListener("scroll", headerScroll);
    return () => {
      removeTransparentBg();
    };
  }, []);

  return <div>Products</div>;
}

export default Products;
