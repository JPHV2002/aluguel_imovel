export type ILoginResponse = {
  status: number;
  token: string;
};

export type IGetUser = {
  status: number;
  user?: {
    email: string;
    id: string;
    iat: number;
    exp: number;
  };
};
