type address = {
  city: string;
  state: string;
  country: string;
};

export class Property {
  public readonly id: string;

  public name: string;
  public bedrooms: number;
  public bathrooms: number;
  public address: address;

  constructor(props: Omit<Property, "id">, id?: string) {
    Object.assign(this, props);
    if (id) {
      this.id = id;
    }
  }
}
