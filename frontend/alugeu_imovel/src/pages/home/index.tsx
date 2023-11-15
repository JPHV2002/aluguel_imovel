import { useEffect, useState } from "react";
import { PropertyList } from "../../components/PropertyList";
import * as C from "./styles";

import { IProperty } from "../../types/requests/property";
import { getAllProperty } from "../../service/api/property";

export const Homepage = () => {
  const [property, setProperty] = useState([] as IProperty[]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await getAllProperty();
      return response;
    };

    fetchData().then((data) => {
      setProperty(data);
    });
  }, []);

  return (
    <>
      <C.HomePageContainer>
        <h1>Propriedades</h1>
      </C.HomePageContainer>
      <PropertyList allProperty={property} />
    </>
  );
};
