import Recipe from "../../components/recipies";
import Image from "next/image";
import Navbar from "../../components/navbar";
import Footer from "../../components/footer";
const Veg = () => {
  return (
    <div>
      <Navbar />
      <div>
        <Recipe />
      </div>
      <Footer />
    </div>
  );
};
export default Veg;
