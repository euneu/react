import { atom } from "recoil";

export const isDarkAtom = atom({
  key: "isDark", // 유니크한 ID(다른 atom/selector와 관련하여)
  default: false, // 기본값 (초기값)
});
