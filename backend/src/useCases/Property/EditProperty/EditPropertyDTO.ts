import { address } from "../../../entities/Property";

export interface IEditPropertyDTO {
  name: string;
  bedrooms: number;
  bathrooms: number;
  ownerId: string;
  address: address;
}
