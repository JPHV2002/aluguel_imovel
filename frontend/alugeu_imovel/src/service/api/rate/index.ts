import { api } from "../api";

export async function addRate(
  property: string,
  comment: string,
  value: number
) {
  await api.post(
    `/rate/`,
    {
      rateNumber: value,
      comment: comment,
      propertyId: property,
    },
    {
      headers: {
        Authorization: localStorage.getItem("token"),
      },
    }
  );
  return;
}
