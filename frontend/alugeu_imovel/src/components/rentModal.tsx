import React, { useState } from "react";
import Modal from "react-modal";

Modal.setAppElement("#root"); // Define o elemento raiz do aplicativo

const RentModal = ({ isOpen, onClose, onSave }) => {
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");

  const handleSave = () => {
    // Validar as datas, executar a lógica necessária e passar as datas para a função onSave
    if (startDate && endDate) {
      onSave(startDate, endDate);
      onClose();
    }
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      contentLabel="Inserir Período"
      className="modal" // Adicione classes CSS apropriadas para estilização
    >
      <h2>Inserir Período</h2>
      <form>
        <label>
          Data Inicial:
          <input
            type="date"
            value={startDate}
            onChange={(e) => setStartDate(e.target.value)}
          />
        </label>
        <label>
          Data Final:
          <input
            type="date"
            value={endDate}
            onChange={(e) => setEndDate(e.target.value)}
          />
        </label>
      </form>
      <button onClick={handleSave}>Salvar</button>
      <button onClick={onClose}>Cancelar</button>
    </Modal>
  );
};

export default RentModal;
