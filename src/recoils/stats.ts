import { atom } from "recoil";
import { AtomKeys } from "@/recoils/constants";
import { persistAtomEffect } from "@/utils/recoil_utils";

export type ThemeState = {
  isDark: boolean;
};
export const themeAtom = atom<ThemeState>({
  key: AtomKeys.THEME,
  default: {
    isDark: false,
  },
  effects: [persistAtomEffect<ThemeState>(AtomKeys.THEME)],
});
