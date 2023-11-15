export type IProperty = {
  address: {
    city: string;
    state: string;
    country: string;
  };
  _id: string;
  id: string;
  name: string;
  ownerId: string;
  bedrooms: number;
  bathrooms: number;
  __v: number;
};

export type IAddProperty = {
  name: string;
  bedrooms: number;
  bathrooms: number;
  city: string;
  state: string;
  country: string;
};
