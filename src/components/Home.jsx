import { BiBitcoin } from "react-icons/bi";
import { MdExplore } from "react-icons/md";
import { HiOutlineArrowRight } from "react-icons/hi";

import SliderContent from "./Slider";
import TrendingAuthors from "./TrendingAuthors";

import HomeImg1 from "../components/assets/w1.png";
import HomeImg2 from "../components/assets/w2.png";
import HomeImg3 from "../components/assets/w3.png";
import Banner from "./Banner";
import Collections from "./Collections";
const HomePage = () => {
  return (
    <>
      <Home />
      <SliderContent />
      <TrendingAuthors />
      <HomeWrapper />
      <Banner />
      <Collections />
    </>
  );
};
export default HomePage;

export const Home = () => {
  return (
    <>
      <section className="home">
        <div className="container">
          <div className="left w-50">
            <h1>
              We Are Becca <span>NFTs</span> <br />
              Collection. Place <br /> Your First Bid
            </h1>
            <button className="flex-b-g">
              Start using Becca today <HiOutlineArrowRight size={25} />
            </button>
          </div>
          <div className="right">
            <div className="card">
              <div className="flex">
                <div className="user-img">
                  <img
                    src="https://media.istockphoto.com/id/1219051797/photo/happy-latin-american-man-leaning-against-a-wall.jpg?s=612x612&w=0&k=20&c=j-JzKwmESLi4Cmi_jZr1y4MU17N4vZC6HXacev8--UM="
                    alt=""
                  />

                  <img
                    src="https://media.istockphoto.com/id/529241547/photo/hes-got-style.jpg?s=612x612&w=0&k=20&c=odxvX6cRO9OkIsljbLjEznYLDfSQp5-NDn6BpXIxFag="
                    alt=""
                  />

                  <img
                    src="https://media.istockphoto.com/id/853840188/photo/confidence-and-charisma.jpg?s=612x612&w=0&k=20&c=Vv8cQWCTDAJRtgOSxPb6jBdPTizbEFBcygd8bHiAt_U="
                    alt=""
                  />
                </div>
                <label htmlFor="">3657 + USERs</label>
              </div>
              <br />
              <h3>$18.017.497</h3>
              <h5>+$6.338.822 +73,5%</h5>
              <div className="flex">
                <BiBitcoin size={25} />
                <MdExplore size={25} />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export const HomeWrapper = () => {
  return (
    <section className="home home-wrapper">
      <div className="container">
        <div className="w-50">
          <h1>
            We Work Together To <br /> Create Beautiful Products <br /> That
            People <span>Love</span>.
          </h1>
        </div>
        <div className="w-50 right">
          <div className="images">
            <img src={HomeImg1} alt="" />
            <img src={HomeImg2} alt="" />
            <img src={HomeImg3} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};
