import { type AtomEffect } from "recoil";
import localForage from "localforage";

export const persistAtomEffect =
  <T>(key: string): AtomEffect<T> =>
  ({ setSelf, onSet }) => {
    if (typeof window === "undefined") {
      return;
    }

    localForage.getItem<any>(key).then((savedValue) => {
      if (savedValue != null) {
        setSelf(JSON.parse(savedValue));
      }
    });

    onSet((newValue: any, _, isReset: boolean) => {
      if (isReset || newValue === undefined) {
        localForage.removeItem(key);
      } else {
        localForage.setItem(key, JSON.stringify(newValue));
      }
    });
  };
