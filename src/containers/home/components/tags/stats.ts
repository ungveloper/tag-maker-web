import { AtomKeys } from "@/recoils/constants";
import { atom } from "recoil";

export const tagsAtom = atom({
  key: AtomKeys.TAGS,
  default: "",
});
