import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Cookies from "js-cookie";
import { api } from "../../services/api";
import Modal from "react-modal";
import { useNavigate } from "react-router-dom";
import PropertyModal from "../../components/propertyModal";

export function ProfilePage() {
  const { id } = useParams();

  const [property, setProperty] = useState([]);

  const [rate, setRate] = useState([]);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isModalOpenProperty, setIsModalOpenProperty] = useState(false);

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
      <button
        onClick={() => {
          openModal(property.id);
        }}
      >
        Ver Avaliacao
      </button>
      <button
        onClick={() => {
          deleteProperty(property.id);
        }}
      >
        Excluir
      </button>
    </div>
  );

  const deleteProperty = async (id) => {
    console.log(id);
    const response = await api.delete(`/property/${id}`, {
      headers: {
        Authorization: Cookies.get("authToken"),
      },
    });
    console.log(response);
  };

  const PropertyList = ({ properties }) => (
    <div className="property-list">
      {properties.map((property) => (
        <PropertyCard key={property.id} property={property} />
      ))}
    </div>
  );

  const openModal = async (propertyId) => {
    const token = Cookies.get("authToken");
    const rateResponse = await api.get(`/rate/${propertyId}`, {
      headers: { Authorization: token },
    }); // Substitua pela URL da sua API real
    setRate(rateResponse.data);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const token = Cookies.get("authToken");
        const response = await api.get(`/property/${id}`, {
          headers: { Authorization: token },
        }); // Substitua pela URL da sua API real
        setProperty(response.data);
      } catch (error) {
        console.error("Erro ao buscar dados da API:", error);
      }
    };

    fetchData();
  });

  const returnHome = () => {
    navigate("/home");
  };

  const openModalProperty = () => {
    setIsModalOpenProperty(true);
  };

  const closeModalProperty = () => {
    setIsModalOpenProperty(false);
  };

  const handleSave = async (property) => {
    const token = Cookies.get("authToken");
    const response = await api.post(
      "/property",
      {
        name: property.name,
        bedrooms: property.bedrooms,
        bathrooms: property.bathrooms,
        city: property.city,
        state: property.state,
        country: property.country,
      },
      {
        headers: {
          Authorization: token,
        },
      }
    );
    console.log(response);
  };

  return (
    <div>
      <button onClick={returnHome}>Home</button>
      <button onClick={openModalProperty}>Cadastrar Imovel</button>
      <PropertyModal
        isOpen={isModalOpenProperty}
        onClose={closeModalProperty}
        onSave={handleSave}
      />

      <Modal
        isOpen={isModalOpen}
        onRequestClose={closeModal}
        contentLabel="Avaliação"
        className="modal-container"
        overlayClassName="modal-overlay"
      >
        <div className="modal-content">
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
            <button onClick={closeModal} className="modal-close-button">
              Fechar
            </button>
          </div>
        </div>
      </Modal>

      <PropertyList properties={property} />
    </div>
  );
}
