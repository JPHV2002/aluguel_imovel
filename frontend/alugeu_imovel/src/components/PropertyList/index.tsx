import { IProperty } from "../../types/requests/property";
import { PropertyCard } from "../PropertyCard";

import * as C from "./styles";

export const PropertyList = ({ allProperty }) => {
  return (
    <>
      <C.ListContainer>
        {allProperty.map((data: IProperty) => (
          <PropertyCard key={data.id} property={data} />
        ))}
      </C.ListContainer>
    </>
  );
};
