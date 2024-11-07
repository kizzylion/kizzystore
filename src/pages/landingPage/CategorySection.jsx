import CategoryCard from "../../components/CategoryCard";
import clothing from "@/assets/clothing.jpg";
import electronics from "@/assets/electronics.jpg";
import shoes from "@/assets/shoes.jpg";

function CategorySection() {
  return (
    <section id="CategorySection " className="px-5">
      <div className="content mx-auto grid grid-cols-1 gap-4 border-y border-gray-300 py-10 text-center md:grid-cols-3">
        {Categories.map((category) => (
          <CategoryCard key={category.name} {...category} />
        ))}
      </div>
    </section>
  );
}

export default CategorySection;

const Categories = [
  {
    name: "Clothing",
    description: "Elevated tailoring",
    image: clothing,
  },
  {
    name: "Electronics",
    description: "Tech for everyone",
    image: electronics,
  },
  {
    name: "Shoes",
    description: "Big Steppers",
    image: shoes,
  },
];