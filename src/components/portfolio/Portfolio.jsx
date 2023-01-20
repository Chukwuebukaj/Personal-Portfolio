import React from "react";
import "./portfolio.css";
import IMG1 from "../../assets/image1.svg";
import IMG2 from "../../assets/cardio-class.jpg";
import IMG3 from "../../assets/todo.jpeg";
import IMG4 from "../../assets/tip-calc.jpg";
import IMG5 from "../../assets/advice-gen.jpg";
import IMG6 from "../../assets/multi-step-form.jpg";

const data = [
  {
    id: 1,
    image: IMG1,
    title: "FoodBag: A food ordering website",
    github: "https://github.com/Chukwuebukaj/Food-Bag.git",
    demo: "https://my-restaurant-psi.vercel.app/",
  },
  {
    id: 2,
    image: IMG2,
    title: "Health-fit: MentalHealth and Physical Fitness",
    github: "https://github.com/Chukwuebukaj/Health-Fit.git",
    demo: "https://health-fit.vercel.app/",
  },
  {
    id: 3,
    image: IMG3,
    title: "Todo App: Track your daily activities",
    github: "https://github.com/Chukwuebukaj/To-do-App.git",
    demo: "https://to-do-app-two-theta.vercel.app/",
  },
  {
    id: 4,
    image: IMG4,
    title: "Tip Calculator",
    github: "https://github.com/Chukwuebukaj/Tip-Calc.git",
    demo: "https://tip-calc-sigma.vercel.app/",
  },
  {
    id: 5,
    image: IMG5,
    title: "Advice Generator",
    github: "https://github.com/Chukwuebukaj/advice-generator-app.git",
    demo: "https://advice-generator-app-topaz-nine.vercel.app/",
  },
  {
    id: 6,
    image: IMG6,
    title: "Multi-step Form",
    github: "https://github.com/Chukwuebukaj/Multi-step-form.git",
    demo: "https://multi-step-form-sooty.vercel.app/",
  },
];

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>
      <div className="container portfolio__container">
        {data.map(({ id, image, title, github, demo }) => {
          return (
            <article key={id} className="portfolio__item">
              <div className="portfolio__item-image">
                <img src={image} alt={title} />
              </div>
              <h3>{title}</h3>
              <div className="portfolio__item-cta">
                <a href={github} className="btn">
                  Github
                </a>
                <a href={demo} className="btn btn-primary" target="blank">
                  Live Demo
                </a>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Portfolio;
