import { create } from "zustand";
import { persist } from "zustand/middleware";

import { LanguageType } from "@/interface/GlobalInterface";

import {
  ErrorNotifyInterface,
  globalAction,
  HeaderLayoutInterface,
} from "./action";

export type GlobalInitialState = {
  isLoading: boolean;
  notifyError?: { type: string; message?: string; title: string };
  headerLayout?: HeaderLayoutInterface;
  translation?: LanguageType;
};

export type GlobalActionState = {
  setIsLoading: (payload: boolean, callBack?: () => void) => void;
  setErrorApi: (payload?: ErrorNotifyInterface, callBack?: () => void) => void;
  setHeaderLayout: (payload?: HeaderLayoutInterface) => void;
  setTranslation: (payload?: LanguageType) => void;
};

const initialState: GlobalInitialState = {
  isLoading: false,
  notifyError: {
    type: "",
    message: "",
    title: "",
  },
  headerLayout: {
    title: "",
    description: "",
    isSearch: true,
  },
  translation: "en",
};

export const useGlobalStore = create(
  persist<GlobalInitialState & GlobalActionState>(
    (set) => ({
      ...initialState,
      ...globalAction(set),
    }),
    {
      name: "global state",
    },
  ),
);
