import Modal from "react-modal";
import { useState } from "react";
import "./styles.css";
import { rentProperty } from "../../service/api/rent";

Modal.setAppElement("#root"); // Define o elemento raiz do aplicativo

export const RentModal = ({ isOpen, onClose, propertyId }) => {
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");

  const handleSave = async () => {
    // Validar as datas, executar a lógica necessária e passar as datas para a função onSave
    if (startDate && endDate) {
      const startDateSplit = startDate.split("-");
      const newDateStart = new Date(
        parseInt(startDateSplit[0]),
        parseInt(startDateSplit[1]) - 1,
        parseInt(startDateSplit[2])
      );

      const endDateSplit = endDate.split("-");
      const newDateend = new Date(
        parseInt(endDateSplit[0]),
        parseInt(endDateSplit[1]) - 1,
        parseInt(endDateSplit[2])
      );

      const response = await rentProperty(
        propertyId,
        newDateStart.getTime(),
        newDateend.getTime()
      );
      if (!response) {
        alert("Essa data ja foi alugada");
      }
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
