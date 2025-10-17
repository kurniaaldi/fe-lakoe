import {
  UseMutationOptions,
  UseMutationResult,
  useMutation,
  useQueryClient,
} from "@tanstack/react-query";
import { AxiosError } from "axios";

import {
  AuthenticationInterface,
  SignInterfaceInterface,
} from "@/interfaces/authenticationInterface";
import { postSign } from "@/services/auth/signin";

export const usePostSign = (
  options?: Omit<
    UseMutationOptions<
      AuthenticationInterface,
      AxiosError,
      SignInterfaceInterface
    >,
    "mutationKey" | "mutationFn"
  >,
): UseMutationResult<
  AuthenticationInterface,
  AxiosError,
  SignInterfaceInterface
> => {
  const queryClient = useQueryClient();

  return useMutation<
    AuthenticationInterface,
    AxiosError,
    SignInterfaceInterface
  >({
    mutationFn: postSign,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["sign"],
      });
    },
    retry: false,
    ...options,
  });
};
