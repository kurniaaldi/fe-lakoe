import {
  AuthenticationInterface,
  SignInterfaceInterface,
} from "@/interfaces/authenticationInterface";
import appleAPI from "@/services/axios/axiosBase";

export const postSign = async (
  body: SignInterfaceInterface,
): Promise<AuthenticationInterface> => {
  const response = await appleAPI.post<APIResponse<AuthenticationInterface>>(
    `/auth/login`,
    body,
  );

  return response.data.data;
};
