import { HiOutlineArrowRight } from "react-icons/hi";

const Banner = () => {
  return (
    <>
      <section className="banner">
        <div className="container">
          <div className="box box1">
            <div className="w-50">
              <h1>
                Awesome NFT Collectibles - Rare, Original & Exclusive Card NFTs
              </h1>
              <button className="flex-b-g">
                Start using Becca today <HiOutlineArrowRight />{" "}
              </button>
            </div>
          </div>
          <div className="boxs flex-b-g">
            <div className="box box2">
              <h1>Filter By Type, Artists & Currency NFTs</h1>
              <button className="flex-b-g">
                Find out more at our Shop
                <HiOutlineArrowRight />{" "}
              </button>
            </div>
            <div className="box box3">
              <h1>Artists & Bids On A Single Platform 😎</h1>
              <button className="flex-b-g">
                Find out more at our Shop <HiOutlineArrowRight />{" "}
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default Banner;
