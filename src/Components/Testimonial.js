import React from "react";
import ProfilePic from "../Assets/john-doe-image.png";
import { AiFillStar } from "react-icons/ai";

const Testimonial = () => {
  return (
    <div className="work-section-wrapper">
      <div className="work-section-top">
  <p className="primary-subheading">Depoimentos</p>
  <h1 className="primary-heading">O que nossos clientes dizem</h1>
        <p className="primary-text">
          A satisfação dos nossos clientes é nossa maior recompensa.
          Veja o que eles têm a dizer sobre nossa comida e serviço.
        </p>
      </div>
      <div className="testimonial-section-bottom">
        <img src={ProfilePic} alt="" />
        <p>
          Estou impressionado com a qualidade das refeições e a pontualidade
          nas entregas. A comida sempre chega fresquinha e com um sabor
          incrível. Recomendo demais!
        </p>
        <div className="testimonials-stars-container">
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
        </div>
  <h2>João Silva</h2>
      </div>
    </div>
  );
};

export default Testimonial;
