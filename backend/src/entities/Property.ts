import { v4 as uuid } from "uuid";

export type address = {
  city: string;
  state: string;
  country: string;
};

export class Property {
  public readonly id: string;

  public name: string;
  public ownerId: string;
  public bedrooms: number;
  public bathrooms: number;
  public address: address;

  constructor(props: Omit<Property, "id">, id?: string) {
    Object.assign(this, props);
    if (id) {
      this.id = uuid;
    }
  }
}
