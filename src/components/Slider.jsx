import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { shopData } from "./assets/data/dummyData";
const SliderContent = () => {
  const settings = {
    dots: true,
    infinite: true,
    arrows: false,
    autoPlay: true,
    speed: 5000,
    autoPlaySpeed: 2000,
    cssEase: "linear",
    slidesToShow: 7,
    slidesToScroll: 7,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 512,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
        },
      },
    ],
  };
  return (
    <>
      <section className="sider">
        <Slider {...settings}>
          {shopData.map((item) => {
            return (
              <div className="box" key={item.id}>
                <div>
                  <div className="img">
                    <img src={item.cover} alt="" />
                  </div>
                  <div className="text">
                    <h3>{item.name}</h3>
                    <span>{item.price}</span>
                  </div>
                </div>
              </div>
            );
          })}
        </Slider>
      </section>
    </>
  );
};
export default SliderContent;
