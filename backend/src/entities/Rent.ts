import { v4 as uuid } from "uuid";

export class Rent {
  public readonly id: string;

  public propertyId: string;
  public ownerId: string;
  public startDate: number;
  public endDate: number;

  constructor(props: Omit<Rent, "id">, id?: string) {
    Object.assign(this, props);
    if (!id) {
      this.id = uuid();
    } else {
      this.id = id;
    }
  }
}
