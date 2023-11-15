import { IAddProperty, IProperty } from "../../../types/requests/property";
import { api } from "../api";

export async function getAllProperty(): Promise<IProperty[]> {
  const response = await api.get("/property", {
    headers: {
      Authorization: localStorage.getItem("token"),
    },
  });
  return response.data;
}

export async function getMyProperty(id: string): Promise<IProperty[]> {
  const response = await api.get(`/property${id}`, {
    headers: {
      Authorization: localStorage.getItem("token"),
    },
  });
  return response.data;
}

export async function excludeProperty(id: string): Promise<void> {
  await api.delete(`/property/${id}`, {
    headers: {
      Authorization: localStorage.getItem("token"),
    },
  });
}

export async function addProperty(property: IAddProperty) {
  await api.post(`/property/`, property, {
    headers: {
      Authorization: localStorage.getItem("token"),
    },
  });
}
