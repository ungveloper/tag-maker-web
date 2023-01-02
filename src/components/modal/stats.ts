import { AtomKeys } from "@/recoils/constants";
import { atom } from "recoil";

export type modalState = {
  isOpen: boolean;
  selectedModal: string;
};
export const modalAtom = atom<modalState>({
  key: AtomKeys.MODALS,
  default: {
    isOpen: false,
    selectedModal: "",
  },
});
