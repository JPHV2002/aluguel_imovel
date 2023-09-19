import { address } from "../../../entities/Property";

export interface ICreatePropertyRequestDTO {
  name: string;
  bedrooms: number;
  bathrooms: number;
  ownerId: string;
  address: address;
}
