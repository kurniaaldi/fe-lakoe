import { LanguageType } from "@/interface/GlobalInterface";

import { GlobalActionState, GlobalInitialState } from ".";

type SetStateFunction<T> = (newState: T | ((prevState: T) => T)) => void;

interface ErrorUnavailavelService {
  error?: string;
  path?: string;
  requestId?: string;
  status?: number;
  timestamp?: string;
}

export interface ErrorNotifyInterface extends ErrorUnavailavelService {
  config?: any;
  message: string;
  status?: number;
  data?: {
    error_message?: string;
    caused_by?: string | null;
  };
}

export interface HeaderLayoutInterface {
  title?: string;
  description?: string;
  isSearch?: boolean;
}

export const globalAction = (
  set: SetStateFunction<GlobalInitialState>,
): GlobalActionState => {
  return {
    setIsLoading: (payload: boolean, callBack?: () => void) => {
      set((val) => ({
        ...val,
        isLoading: payload,
      }));
      if (typeof callBack === "function") {
        callBack();
      }
    },
    setErrorApi: (
      payload: ErrorNotifyInterface | undefined | null,
      callBack?: () => void,
    ) => {
      if (payload) {
        const title = payload.message || payload?.error;
        const typeError = "error";

        let errorMessages: any = "";

        if (payload?.data) {
          const keys = Object.keys(payload?.data);

          errorMessages = keys
            .map(
              (key) => ` ${payload?.data?.[key as keyof typeof payload.data]}`,
            )
            .filter((element) => element !== undefined && element !== " null");
        }

        set((val) => {
          if (payload?.status) {
            return {
              ...val,
              notifyError: {
                type: typeError,
                title: `${title}`,
                message: `${errorMessages || payload?.data?.error_message || ""}`,
              },
            };
          } else {
            return {
              ...val,
              notifyError: {
                type: typeError,
                title: `${payload.message ?? payload}`,
              },
            };
          }
        });
      } else {
        set((val) => {
          return {
            ...val,
            notifyError: {
              type: "",
              title: "",
              message: "",
            },
          };
        });
      }

      if (typeof callBack === "function") {
        callBack();
      }
    },
    setHeaderLayout: (payload?: HeaderLayoutInterface) => {
      set((val) => ({
        ...val,
        headerLayout: {
          title: payload?.title,
          description: payload?.description,
          isSearch: (payload?.isSearch as boolean) ?? true,
        },
      }));
    },
    setTranslation: (payload?: LanguageType) => {
      set((val) => {
        const newTranslation = payload;

        // Language change will be handled by the component that calls this action
        return {
          ...val,
          translation: newTranslation,
        };
      });
    },
  };
};
