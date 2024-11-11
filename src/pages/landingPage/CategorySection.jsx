import CategoryCard from "../../components/CategoryCard";
import clothing from "@/assets/clothing.jpg";
import electronics from "@/assets/electronics.jpg";
import shoes from "@/assets/shoes.jpg";
import maleSuits from "@/assets/maleSuit.jpg";
import femaleSuits from "@/assets/femaleSuit.jpg";
import mobilePhone from "@/assets/mobilePhone.jpg";

function CategorySection() {
  return (
    <section id="CategorySection" className="px-5 md:px-8">
      <div className="content mx-auto grid grid-cols-1 gap-x-5 gap-y-8 border-y border-gray-300 py-10 text-center md:grid-cols-3">
        {Categories.map((category) => (
          <CategoryCard key={category.id} {...category} />
        ))}
      </div>
    </section>
  );
}

export default CategorySection;

const Categories = [
  {
    id: 1,
    name: "Clothes",
    description: "Elevated tailoring",
    image: clothing,
  },
  {
    id: 2,
    name: "Electronics",
    description: "Tech for everyone",
    image: electronics,
  },
  {
    id: 4,
    name: "Shoes",
    description: "Big Steppers",
    image: shoes,
  },
  {
    id: 6,
    name: "Male Suits",
    description: "Elevated tailoring",
    image: maleSuits,
  },
  {
    id: 7,
    name: "Female Suits",
    description: "Elevated tailoring",
    image: femaleSuits,
  },
  {
    id: 8,
    name: "Mobile Phones",
    description: "Smartphones for everyone",
    image: mobilePhone,
  },
];
