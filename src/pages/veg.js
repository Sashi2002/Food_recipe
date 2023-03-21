import Recipe from "../../components/recipies";
import Image from "next/image";
import Navbar from "../../components/navbar";
import Footer from "../../components/footer";
const Veg = () => {
  return (
    <div>
      <Navbar />
      <div className="flex justify-evenly items-center my-8">
        <Recipe />
        <Recipe />
        <Recipe />
        <Recipe />
      </div>
      <div className="flex justify-evenly items-center my-8">
        <Recipe />
        <Recipe />
        <Recipe />
        <Recipe />
      </div>
      <Footer />
    </div>
  );
};
export default Veg;
