import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Product() {

  const settings = {
    dots: true,
    autoplay: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          infinite: true,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="container sm:px-0 py-2 my-24">
      <p className="text-center text-[#FFB23F] text-base inter">Products</p>
      <p className="font-bold sm:text-4xl inter text-center py-2">Our popular products</p>
      <p className="text-xl text-black/60 inter text-center sm:w-4/12 mx-auto pb-4">Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
      <div className="my-14 sm:12/12 w-10/12 mx-auto">
        <Slider {...settings}>
          <div className="w-4/12">
            <div className="sm:w-8/12 w-10/12 mx-auto">
              <img src="/pro-1.png" className="w-full mx-auto" />
              <p className="inter text-base text-black/60 mt-2">Table</p>
              <p className="inter sm:text-4xl font-bold mt-2">New Table</p>
              <p className="inter text-base text-black/60 mt-2">lorem ipsum</p>
              <p className="inter text-xl font-bold mt-2">$45.7</p>
            </div>
          </div>
          <div className="w-4/12">
            <div className="sm:w-8/12 w-10/12 mx-auto">
              <img src="/pro-2.png" className="w-full mx-auto" />
              <p className="inter text-base text-black/60 mt-2">Sofa</p>
              <p className="inter sm:text-4xl font-bold mt-2">Sofa Empuk</p>
              <p className="inter text-base text-black/60 mt-2">lorem ipsum</p>
              <p className="inter text-xl font-bold mt-2">$50.5</p>
            </div>
          </div>
          <div className="w-4/12">
            <div className="sm:w-8/12 w-10/12 mx-auto">
              <img src="/pro-3.png" className="w-full mx-auto" />
              <p className="inter text-base text-black/60 mt-2">Lamp</p>
              <p className="inter sm:text-4xl font-bold mt-2">White Lamp</p>
              <p className="inter text-base text-black/60 mt-2">lorem ipsum</p>
              <p className="inter text-xl font-bold mt-2">$34.6</p>
            </div>
          </div>
          <div className="w-4/12">
            <div className="sm:w-8/12 w-10/12 mx-auto">
              <img src="/pro-4.png" className="w-full mx-auto" />
              <p className="inter text-base text-black/60 mt-2">Chair</p>
              <p className="inter sm:text-4xl font-bold mt-2">White Chaier</p>
              <p className="inter text-base text-black/60 mt-2">lorem ipsum</p>
              <p className="inter text-xl font-bold mt-2">$34.6</p>
            </div>
          </div>
        </Slider>
      </div>
    </div>
  );
}
