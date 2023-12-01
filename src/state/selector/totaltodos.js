import { selector } from "recoil";
import { todoState } from "../atom/todo";
export const charCountState = selector({
  key: "charCountState",
  get: ({ get }) => {
    const text = get(todoState);

    return text.length;
  },
});
