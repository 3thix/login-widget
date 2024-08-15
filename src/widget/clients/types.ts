export interface Error3thix {
  message: string;
}

export type LoginSuccess = {
  token: string;
};

export type PinSuccess = {
  expire_at: string;
};

export type RespAPI<Success> = {
  status: number;
  data: Success | Error3thix;
};