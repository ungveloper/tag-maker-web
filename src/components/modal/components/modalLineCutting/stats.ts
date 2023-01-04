import { atom } from "recoil";
import { AtomKeys } from "@/recoils/constants";
import { persistAtomEffect } from "@/utils/recoil_utils";

export const linesAtom = atom<number>({
  key: AtomKeys.LINES,
  default: 30,
  effects: [persistAtomEffect<number>(AtomKeys.LINES)],
});
