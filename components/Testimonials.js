import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Testimonials() {
  const settings = {
    dots: true,
    autoplay: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
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
          slidesToShow: 1,
          infinite: true,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="container px-4 mb-24">
      <p className="text-center text-[#FFB23F] text-base inter">Testimonials</p>
      <p className="font-bold sm:text-4xl inter text-center py-4">What our lovely constumers say</p>
      <p className="text-xl text-black/60 inter text-center sm:w-4/12 mx-auto pb-4">Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
      <div className="my-4 sm:12/12 w-10/12 mx-auto ">
        <Slider {...settings}>
          <div className="sm:w-4/12 w-6/12 sm:mx-12 my-8">
            <div className="sm:w-8/12 w-10/12 mx-auto">
              <div className="shadow-lg py-2 px-4 rounded-md">
                <Image src="/quote-up.png" width="30" height="30" />
                <p className="sm:text-xl text-black/60 inter my-3">Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>

                <div className="flex">
                  <div className="w-10/12 flex items-center">
                    <Image src="/p-1.png" width="30" height="30" />
                    <p className="font-bold inter ml-2">Berry Gunnawan</p>
                  </div>
                  <div className="flex items-center">
                    <Image src="/star.png" width="30" height="30" />
                    <p className="font-bold inter ml-1">3.5</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="sm:w-4/12 w-6/12 sm:mx-12 my-8">
            <div className="sm:w-8/12 w-10/12 mx-auto">
              <div className="shadow-lg py-2 px-4 rounded-md">
                <Image src="/quote-up.png" width="30" height="30" />
                <p className="sm:text-xl text-black/60 inter my-3">Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>

                <div className="flex">
                  <div className="w-10/12 flex items-center">
                    <Image src="/p-1.png" width="30" height="30" />
                    <p className="font-bold inter ml-2">Janne cooper</p>
                  </div>
                  <div className="flex items-center">
                    <Image src="/star.png" width="30" height="30" />
                    <p className="font-bold inter ml-1">4.3</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="sm:w-4/12 w-6/12 sm:mx-12 my-8">
            <div className="sm:w-8/12 w-10/12 mx-auto">
              <div className="shadow-lg py-2 px-4 rounded-md">
                <Image src="/quote-up.png" width="30" height="30" />
                <p className="sm:text-xl text-black/60 inter my-3">Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>

                <div className="flex">
                  <div className="w-10/12 flex items-center">
                    <Image src="/p-1.png" width="30" height="30" />
                    <p className="font-bold inter ml-2">Cobocannaeru</p>
                  </div>
                  <div className="flex items-center">
                    <Image src="/star.png" width="30" height="30" />
                    <p className="font-bold inter ml-1">4.3</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Slider>
      </div>
    </div>
  );
}
