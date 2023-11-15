import { api } from "../api";

export async function rentProperty(
  id: string,
  startDate: number,
  endDate: number
): Promise<boolean> {
  try {
    const response = await api.post(
      `/rent`,
      {
        propertyId: id,
        startDate: startDate,
        endDate: endDate,
      },
      {
        headers: {
          Authorization: localStorage.getItem("token"),
        },
      }
    );
    return true;
  } catch (error) {
    return false;
  }
}
