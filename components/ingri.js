import Image from "next/image";

const Ing = () => {
  return (
    <div>
      <div>
        <div className="flex justify-center items-center flex-col text-2xl text-[#30449e]">
          <div className="flex px-4">
            <div className="w-1/2 pb-2 pt-8 flex justify-center items-center">
              <img src="/images/OIP.jpg" height="400" width="350" alt="image" />
            </div>
            <div className="w-1/2 pb-2 pt-8">
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illum
                rem inventore cumque modi eos, ducimus vitae et illo, debitis
                quam odit officia similique adipisci. Ipsam rerum unde odio
                animi nemo.
              </p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Adipisci rerum iusto consequuntur sed consectetur, ipsam
                exercitationem! Ipsum quod officia iusto ducimus sed, fugit
                perferendis velit optio. Amet neque modi velit.
              </p>
            </div>
          </div>
        </div>

        <div className="flex my-8 text-[#30449e] px-6">
          <div className="w-1/2 flex justify-center items-center text-2xl">
            <p className="pt-15 pb-8">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illum
              rem inventore cumque modi eos, ducimus vitae et illo, debitis quam
              odit officia similique adipisci. Ipsum rerum unde odio animi nemo.
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illum
              rem inventore cumque modi eos, ducimus vitae et illo, debitis quam
              odit officia similique adipisci. Ipsum rerum unde odio animi nemo.
            </p>
          </div>
          <div className="w-1/2 flex justify-center items-center">
            <img src="/images/kmk.jpg" height="400" width="350" alt="image" />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Ing;
