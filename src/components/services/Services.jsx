import React from "react";
import "./services.css";
import { BiCheck } from "react-icons/bi";

const Services = () => {
  return (
    <section id="services">
      <h5>What I Offer</h5>
      <h2>Services</h2>

      <div className="container services__container">
//         <article className="service">
//           <div className="service__head">
//             <h3>UI/UX Design</h3>
//           </div>
//           <ul className="service__list">
//             <li>
//               <BiCheck className="service__list-icon" />
//               <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
//             </li>
//             <li>
//               <BiCheck className="service__list-icon" />
//               <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
//             </li>
//             <li>
//               <BiCheck className="service__list-icon" />
//               <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
//             </li>
//             <li>
//               <BiCheck className="service__list-icon" />
//               <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
//             </li>
//             <li>
//               <BiCheck className="service__list-icon" />
//               <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
//             </li>
//             <li>
//               <BiCheck className="service__list-icon" />
//               <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
//             </li>
//           </ul>
//         </article>
        {/* END OF UI/UX */}
        <article className="service">
          <div className="service__head">
            <h3>Web Development</h3>
          </div>
          <ul className="service__list">
            <li>
              <BiCheck className="service__list-icon" />
              <p>Website design and development.</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Front-end development.</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Back-end development.</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>E-commerce development.</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Content management systems.</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Web optimization.</p>
            </li>
          </ul>
        </article>
        {/* END OF WEB DEVELOPMENT */}
//         <article className="service">
//           <div className="service__head">
//             <h3>Content Creation</h3>
//           </div>
//           <ul className="service__list">
//             <li>
//               <BiCheck className="service__list-icon" />
//               <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
//             </li>
//             <li>
//               <BiCheck className="service__list-icon" />
//               <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
//             </li>
//             <li>
//               <BiCheck className="service__list-icon" />
//               <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
//             </li>
//             <li>
//               <BiCheck className="service__list-icon" />
//               <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
//             </li>
//             <li>
//               <BiCheck className="service__list-icon" />
//               <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
//             </li>
//             <li>
//               <BiCheck className="service__list-icon" />
//               <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
//             </li>
//           </ul>
//         </article>
        {/* END OF CONTENT CREATION */}
      </div>
    </section>
  );
};

export default Services;
