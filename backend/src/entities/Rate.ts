import { v4 as uuid } from "uuid";

export class Rate {
  public readonly id: string;

  public ownerId: string;
  public rateNumber: number;
  public comment: string;
  public propertyId: string;

  constructor(props: Omit<Rate, "id">, id?: string) {
    Object.assign(this, props);
    if (!id) {
      this.id = uuid();
    } else {
      this.id = id;
    }
  }
}
