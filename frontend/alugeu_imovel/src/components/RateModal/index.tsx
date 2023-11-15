import React, { useState } from "react";
import Modal from "react-modal";
import "./styles.css"; // Importe o arquivo de estilos CSS
import { addRate } from "../../service/api/rate";

Modal.setAppElement("#root");

export const RategModal = ({ isOpen, onClose, propertyId }) => {
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState("");

  const handleSave = () => {
    // Validar os dados, executar a lógica necessária e passar para a função onSave
    if (rating >= 0 && rating <= 10) {
      console.log(rating, comment);
      addRate(propertyId, comment, rating);
      onClose();
    }
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      contentLabel="Avaliação"
      className="rating-modal" // Adicione classes CSS apropriadas para estilização
    >
      <h2>Avaliação</h2>
      <form>
        <label>
          Nota:
          <input
            type="number"
            min="0"
            max="10"
            value={rating}
            onChange={(e) => setRating(Number(e.target.value))}
          />
        </label>
        <label>
          Comentário:
          <textarea
            value={comment}
            onChange={(e) => setComment(e.target.value)}
          />
        </label>
      </form>
      <button onClick={handleSave}>Salvar</button>
      <button onClick={onClose}>Cancelar</button>
    </Modal>
  );
};
