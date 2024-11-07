import { removeTransparentBg } from "@/utilities/utilities";
import { useEffect } from "react";

function AllCategoriesPage() {
  useEffect(() => {
    removeTransparentBg();
  }, []);

  return <div>AllCategoriesPage</div>;
}

export default AllCategoriesPage;
