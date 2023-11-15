import { IGetUser, ILoginResponse } from "../../../types/requests/user";
import { api } from "../api";

export async function userLogin(
  email: string,
  password: string
): Promise<ILoginResponse> {
  try {
    const reposne = await api.post("/user/login", {
      email: email,
      password: password,
    });
    if (reposne.status === 200) {
      return {
        status: 200,
        token: reposne.data.token,
      };
    }
    return {
      status: 400,
      token: "Invalid credentials",
    };
  } catch (error) {
    console.log("Fail to make login");
    return {
      status: 500,
      token: "Error",
    };
  }
}

export async function getUserName(): Promise<IGetUser> {
  const token = localStorage.getItem("token");
  const response = await api.get("/user/", {
    headers: {
      Authorization: `${token}`,
    },
  });
  return {
    status: response.status,
    user: response.data,
  };
}
