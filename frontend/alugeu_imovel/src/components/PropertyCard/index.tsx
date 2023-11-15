import { useState } from "react";
import { excludeProperty } from "../../service/api/property";
import { RentModal } from "../RentModal";
import * as C from "./styles";
import { useLocation } from "react-router-dom";
import { AddPropertyModal } from "../AddProperty";
import { RategModal } from "../RateModal";

export const PropertyCard = (props) => {
  const { property } = props;

  const [isModalOpenRent, setIsModalOpenRent] = useState(false);
  const [isModalOpenRate, setIsModalOpenRate] = useState(false);

  const location = useLocation().pathname;

  const rateSubmit = () => {
    setIsModalOpenRate(true);
  };

  const rentSubmit = () => {
    setIsModalOpenRent(true);
  };

  const showRateSubmit = () => {
    console.log("Show Rate");
  };

  const showRentSubmit = () => {
    console.log("Show Rent");
  };

  const excludeSubmit = () => {
    excludeProperty(property.id);
  };

  const closeModalRent = () => {
    setIsModalOpenRent(false);
  };

  const closeModalRate = () => {
    setIsModalOpenRate(false);
  };

  const buttonRender =
    location === "/home" ? (
      <C.ButtonContainer>
        <C.Button onClick={rateSubmit}>Avaliar</C.Button>
        <C.Button onClick={rentSubmit}>Alugar</C.Button>
      </C.ButtonContainer>
    ) : (
      <C.ButtonContainer>
        <C.Button onClick={showRateSubmit}>Mostrar Avaliacao</C.Button>
        <C.Button onClick={showRentSubmit}>Mostrar Alugel</C.Button>
        <C.Button onClick={excludeSubmit}>Excluir</C.Button>
      </C.ButtonContainer>
    );

  return (
    <C.CardBorder>
      <RentModal
        isOpen={isModalOpenRent}
        onClose={closeModalRent}
        propertyId={property.id}
      />
      <RategModal
        isOpen={isModalOpenRate}
        onClose={closeModalRate}
        propertyId={property.id}
      />
      <C.CardContent>
        <C.TitleSpan>{property.name}</C.TitleSpan>
        <C.DataContainer>
          <C.SpanTitle>Cômodos</C.SpanTitle>
          <C.InfoContainer>
            <C.InfoLabel>Banheiros:</C.InfoLabel>
            <C.InfoData>{property.bathrooms}</C.InfoData>
          </C.InfoContainer>
          <C.InfoContainer>
            <C.InfoLabel>Quartos:</C.InfoLabel>
            <C.InfoData>{property.bedrooms}</C.InfoData>
          </C.InfoContainer>
          <C.SpanTitle>Endereço</C.SpanTitle>
          <C.InfoContainer>
            <C.InfoLabel>Cidade:</C.InfoLabel>
            <C.InfoData>{property.address.city}</C.InfoData>
          </C.InfoContainer>
          <C.InfoContainer>
            <C.InfoLabel>Estado:</C.InfoLabel>
            <C.InfoData>{property.address.state}</C.InfoData>
          </C.InfoContainer>
          <C.InfoContainer>
            <C.InfoLabel>Pais:</C.InfoLabel>
            <C.InfoData>{property.address.country}</C.InfoData>
          </C.InfoContainer>
          {buttonRender}
        </C.DataContainer>
      </C.CardContent>
    </C.CardBorder>
  );
};
