import React from "react";
import AboutBackground from "../Assets/about-background.png";
import AboutBackgroundImage from "../Assets/about-background-image.png";
import { BsFillPlayCircleFill } from "react-icons/bs";

const About = () => {
  return (
    <div className="about-section-container">
      <div className="about-background-image-container">
        <img src={AboutBackground} alt="" />
      </div>
      <div className="about-section-image-container">
        <img src={AboutBackgroundImage} alt="" />
      </div>
      <div className="about-section-text-container">
        <p className="primary-subheading">Sobre</p>
        <h1 className="primary-heading">
          A comida é uma parte importante de uma dieta equilibrada
        </h1>
        <p className="primary-text">
          Trabalhamos com ingredientes selecionados e da mais alta qualidade.
          Nossa equipe prepara tudo com cuidado para garantir sabor e frescor
          em cada prato que servimos.
        </p>
        <p className="primary-text">
          Valorizamos a experiência gastronômica completa, desde a escolha dos
          ingredientes até a entrega na sua casa, sempre com agilidade e carinho.
        </p>
        <div className="about-buttons-container">
          <button className="secondary-button">Saiba Mais</button>
          <button className="watch-video-button">
            <BsFillPlayCircleFill /> Assistir Vídeo
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;
