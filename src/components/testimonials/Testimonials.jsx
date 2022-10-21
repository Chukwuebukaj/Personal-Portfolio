import React from "react";
import "./testimonials.css";
import AVTR1 from "../../assets/avt1.jpg";
import AVTR2 from "../../assets/avt2.jpg";
import AVTR3 from "../../assets/avt3.jpg";
import AVTR4 from "../../assets/avt4.jpg";
// import Swiper core and required modules
import { Pagination } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

const data = [
  {
    avatar: AVTR1,
    name: "Tina snow",
    review:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae  eligendi reprehenderit modi provident maiores, aliquam inciduntcumque minima excepturi nisi in a odio reiciendis assumenda repellat repellendus alias eveniet doloribus!",
  },
  {
    avatar: AVTR2,
    name: "Shatta Wale",
    review:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae  eligendi reprehenderit modi provident maiores, aliquam inciduntcumque minima excepturi nisi in a odio reiciendis assumenda repellat repellendus alias eveniet doloribus!",
  },
  {
    avatar: AVTR3,
    name: "Kwame Despite",
    review:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae  eligendi reprehenderit modi provident maiores, aliquam inciduntcumque minima excepturi nisi in a odio reiciendis assumenda repellat repellendus alias eveniet doloribus!",
  },
  {
    avatar: AVTR4,
    name: "Nana Ama McBrown",
    review:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae  eligendi reprehenderit modi provident maiores, aliquam inciduntcumque minima excepturi nisi in a odio reiciendis assumenda repellat repellendus alias eveniet doloribus!",
  },
];

const Testimonials = () => {
  return (
    <section id="testimonials">
      <h5>Review from clients</h5>
      <h2>Testimonials</h2>
      <Swiper
        className="container testimonials__container"
        // install Swiper modules
        modules={[Pagination]}
        spaceBetween={40}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
      >
        {data.map(({ avatar, name, review }, index) => {
          return (
            <SwiperSlide key={index} className="testimonial">
              <div className="client__avatar">
                <img src={avatar} alt="Avatar One" />
              </div>
              <h5 className="client__name">{name}</h5>
              <small className="client__review">{review}</small>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};

export default Testimonials;
