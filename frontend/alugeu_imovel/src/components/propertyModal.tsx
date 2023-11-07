import React, { useState } from "react";
import Modal from "react-modal";
import "./styles.css";

Modal.setAppElement("#root"); // Define o elemento raiz do aplicativo

const PropertyModal = ({ isOpen, onClose, onSave }) => {
  const [property, setProperty] = useState({
    id: "",
    name: "",
    ownerId: "",
    bedrooms: 0,
    bathrooms: 0,
    city: "",
    state: "",
    country: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProperty({
      ...property,
      [name]: value,
    });
  };

  const handleSave = () => {
    onSave(property);
    onClose();
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      contentLabel="Adicionar Propriedade"
      className="modal"
    >
      <h2>Adicionar Propriedade</h2>
      <form>
        <label>
          Nome:
          <input
            type="text"
            name="name"
            value={property.name}
            onChange={handleInputChange}
          />
        </label>
        <label>
          Proprietário:
          <input
            type="text"
            name="ownerId"
            value={property.ownerId}
            onChange={handleInputChange}
          />
        </label>
        <label>
          Quartos:
          <input
            type="number"
            name="bedrooms"
            value={property.bedrooms}
            onChange={handleInputChange}
          />
        </label>
        <label>
          Banheiros:
          <input
            type="number"
            name="bathrooms"
            value={property.bathrooms}
            onChange={handleInputChange}
          />
        </label>
        <label>
          Cidade:
          <input
            type="text"
            name="city"
            value={property.city}
            onChange={handleInputChange}
          />
        </label>
        <label>
          Estado:
          <input
            type="text"
            name="state"
            value={property.state}
            onChange={handleInputChange}
          />
        </label>
        <label>
          País:
          <input
            type="text"
            name="country"
            value={property.country}
            onChange={handleInputChange}
          />
        </label>
      </form>
      <button onClick={handleSave}>Salvar</button>
      <button onClick={onClose}>Cancelar</button>
    </Modal>
  );
};

export default PropertyModal;
