import React from "react";
import "./portfolio.css";
import IMG1 from "../../assets/image1.svg";
import IMG2 from "../../assets/cardio-class.jpg";
import IMG3 from "../../assets/todo.jpeg";
import IMG4 from "../../assets/tip-calc.jpg";
import IMG5 from "../../assets/advice-gen.jpg";
import IMG6 from "../../assets/multi-step-form.jpg";
import IMG7 from "../../assets/20230924_113728.jpg";
import IMG8 from "../../assets/mockup.png";

const data = [
  {
    image: IMG7,
    title: "GetLinked: A pre-hackathon registration website",
    github: "https://github.com/Chukwuebukaj/getLinked",
    demo: "https://get-linked-psi.vercel.app/",
  },
  {
    image: IMG8,
    title: "Pavoce: A decentralized (web3) invoicing app",
    github: "https://github.com/Chukwuebukaj/frontend",
    demo: "https://frontend-zeta-rust.vercel.app/",
  },
  {
    image: IMG1,
    title: "FoodBag: A food ordering website",
    github: "https://github.com/Chukwuebukaj/Food-Bag.git",
    demo: "https://my-restaurant-psi.vercel.app/",
  },
  {
    image: IMG2,
    title: "Health-fit: MentalHealth and Physical Fitness",
    github: "https://github.com/Chukwuebukaj/Health-Fit.git",
    demo: "https://health-fit.vercel.app/",
  },
  {
    image: IMG3,
    title: "Todo App: Track your daily activities",
    github: "https://github.com/Chukwuebukaj/To-do-App.git",
    demo: "https://to-do-app-two-theta.vercel.app/",
  },
  {
    image: IMG4,
    title: "Tip Calculator",
    github: "https://github.com/Chukwuebukaj/Tip-Calc.git",
    demo: "https://tip-calc-sigma.vercel.app/",
  },
  {
    image: IMG5,
    title: "Advice Generator",
    github: "https://github.com/Chukwuebukaj/advice-generator-app.git",
    demo: "https://advice-generator-app-topaz-nine.vercel.app/",
  },
  {
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
        {data.map(({ image, title, github, demo }, index) => {
          return (
            <article key={index} className="portfolio__item">
              <div className="portfolio__item-image">
                <img src={image} alt={title} />
              </div>
              <h3>{title}</h3>
              <div className="portfolio__item-cta">
                <a
                  href={github}
                  className="btn"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Github
                </a>
                <a
                  href={demo}
                  className="btn btn-primary"
                  target="_blank"
                  rel="noopener noreferrer"
                >
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
