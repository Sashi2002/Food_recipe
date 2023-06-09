import Semi from "../../components/semi";
import Navbar from "../../components/navbar";
import Footer from "../../components/footer";
const Egg = () => {
  return (
    <div>
      <Navbar />
      <div className="flex justify-evenly items-center my-8">
        <Semi />
        <Semi />
        <Semi />
        <Semi />
      </div>
      <div className="flex justify-evenly items-center my-8">
        <Semi />
        <Semi />
        <Semi />
        <Semi />
      </div>
      <Footer />
    </div>
  );
};
export default Egg;
