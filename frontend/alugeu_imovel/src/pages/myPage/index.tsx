import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

import { PropertyList } from "../../components/PropertyList";
import * as C from "./styles";
import { getMyProperty } from "../../service/api/property";
import { IProperty } from "../../types/requests/property";
import { AddPropertyModal } from "../../components/AddProperty";

export const MyPage = () => {
  const [property, setProperty] = useState([] as IProperty[]);

  const [isModalOpenAdd, setIsModalOpenAdd] = useState(false);

  const location = useLocation().pathname;

  const openAdd = () => {
    setIsModalOpenAdd(true);
  };

  const closeModalAdd = () => {
    setIsModalOpenAdd(false);
  };

  useEffect(() => {
    const fetchData = async () => {
      const response = await getMyProperty(location);
      return response;
    };

    fetchData().then((data) => {
      setProperty(data);
    });
  }, []);

  return (
    <>
      <AddPropertyModal isOpen={isModalOpenAdd} onClose={closeModalAdd} />
      <C.AddPropertyButton onClick={openAdd}>
        Adicionar nova propriedade
      </C.AddPropertyButton>
      <C.MyPageContainer>
        <h1>Minhas propriedades</h1>
      </C.MyPageContainer>
      <PropertyList allProperty={property} />
    </>
  );
};
