import React from "react";
import { useEffect, useState } from "react";
import { api } from "../../services/api";
import Cookies from "js-cookie";
import Modal from "react-modal";

import "./styles.css";
import { useNavigate } from "react-router-dom";

export function HomePage() {
  const [property, setProperty] = useState([]);
  const [rate, setRate] = useState([]);

  const [selectedProperty, setSelectedProperty] = useState(null);
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);

  const navigate = useNavigate();

  const PropertyCard = ({ property }) => (
    <div className="property-card">
      <h3 className="property-name">{property.name}</h3>
      <p className="property-info">
        <span>Bedrooms: {property.bedrooms}</span>
        <span>Bathrooms: {property.bathrooms}</span>
      </p>
      <p className="property-address">
        <span>City: {property.address.city}</span>
        <span>State: {property.address.state}</span>
        <span>Country: {property.address.country}</span>
      </p>
      <button>Alugar</button>
      <button onClick={() => openModal(property.id)}>Avaliar</button>
    </div>
  );

  const PropertyList = ({ properties }) => (
    <div className="property-list">
      {properties.map((property) => (
        <PropertyCard key={property.id} property={property} />
      ))}
    </div>
  );

  const openModal = async (propertyId) => {
    console.log(propertyId);
    setSelectedProperty(propertyId);
    const token = Cookies.get("authToken");
    const rateResponse = await api.get(`/rate/${propertyId}`, {
      headers: { Authorization: token },
    }); // Substitua pela URL da sua API real
    setRate(rateResponse.data);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setSelectedProperty(null);
    setIsModalOpen(false);
  };

  const handleRatingChange = (e) => {
    setRating(Number(e.target.value));
  };

  const handleCommentChange = (e) => {
    setComment(e.target.value);
  };

  const submitRating = async () => {
    // Aqui você pode processar a avaliação (nota e comentário) para a propriedade selecionada
    const response = await api.post(
      "/rate",
      {
        rateNumber: rating,
        comment: comment,
        propertyId: selectedProperty,
      },
      {
        headers: {
          Authorization: Cookies.get("authToken"),
        },
      }
    );
    console.log(response);
    closeModal();
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const token = Cookies.get("authToken");
        const response = await api.get("/property", {
          headers: { Authorization: token },
        }); // Substitua pela URL da sua API real
        setProperty(response.data);
      } catch (error) {
        console.error("Erro ao buscar dados da API:", error);
      }
    };

    fetchData();
  });

  const handleMyPage = async () => {
    const token: string = Cookies.get("authToken") || "";
    const decoded = await api.get(`/user/${token}`);
    navigate(`/perfil/${decoded.data.id}`);
  };

  return (
    <>
      <button onClick={handleMyPage}>Minha Pagina</button>
      <Modal
        isOpen={isModalOpen}
        onRequestClose={closeModal}
        contentLabel="Avaliação"
        className="modal-container"
        overlayClassName="modal-overlay"
      >
        <div className="modal-content">
          <h2 className="modal-title">Avalie a propriedade</h2>
          <label className="modal-label">
            Sua nota (0 a 10):
            <input
              type="number"
              min="0"
              max="10"
              value={rating}
              onChange={handleRatingChange}
              className="modal-input"
              maxLength={2}
            />
          </label>
          <label className="modal-label">
            Comentário:
            <textarea
              value={comment}
              onChange={handleCommentChange}
              className="modal-textarea"
              maxLength={100}
            />
          </label>

          <h3 className="modal-title">Avaliações anteriores:</h3>
          <div>
            {rate &&
              rate.map((review, index) => (
                <div key={index} className="review-card">
                  <p>
                    Nota:{" "}
                    <span className="review-rating">{review.rateNumber}</span>
                  </p>
                  <p>
                    Comentário:{" "}
                    <span className="review-comment">{review.comment}</span>
                  </p>
                </div>
              ))}
          </div>

          <div className="modal-buttons">
            <button onClick={submitRating} className="modal-button">
              Enviar Avaliação
            </button>
            <button onClick={closeModal} className="modal-close-button">
              Cancelar
            </button>
          </div>
        </div>
      </Modal>

      <PropertyList properties={property} />
    </>
  );
}
