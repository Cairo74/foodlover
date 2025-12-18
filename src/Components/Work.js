import React from "react";
import PickMeals from "../Assets/pick-meals-image.png";
import ChooseMeals from "../Assets/choose-image.png";
import DeliveryMeals from "../Assets/delivery-image.png";

const Work = () => {
  const workInfoData = [
    {
      image: PickMeals,
      title: "Escolha Refeições",
      text: "Navegue pelo nosso cardápio diversificado e escolha as refeições que mais combinam com seu paladar e necessidades.",
    },
    {
      image: ChooseMeals,
      title: "Escolha a Frequência",
      text: "Defina quando e quantas vezes por semana deseja receber suas refeições, de acordo com sua rotina.",
    },
    {
      image: DeliveryMeals,
      title: "Entregas Rápidas",
      text: "Receba suas refeições fresquinhas e quentinhas, com entregas rápidas e pontuais diretamente na sua porta.",
    },
  ];
  return (
    <div className="work-section-wrapper">
      <div className="work-section-top">
  <p className="primary-subheading">Como Funciona</p>
  <h1 className="primary-heading">Simples e Prático</h1>
        <p className="primary-text">
          Nosso processo foi desenvolvido para tornar sua vida mais fácil.
          Em apenas três passos simples, você terá refeições deliciosas na sua casa.
        </p>
      </div>
      <div className="work-section-bottom">
        {workInfoData.map((data) => (
          <div className="work-section-info" key={data.title}>
            <div className="info-boxes-img-container">
              <img src={data.image} alt="" />
            </div>
            <h2>{data.title}</h2>
            <p>{data.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Work;
