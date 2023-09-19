import { address } from "../../../entities/Property";

export interface IGetPropertyRequestDTO {
  name: string;
  bedrooms: number;
  bathrooms: number;
  ownerId: string;
  address: address;
}
