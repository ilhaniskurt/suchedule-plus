import ThemeType from "@/constants/themes";
import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

interface States {
  theme: ThemeType;
}

interface Actions {
  setTheme: (theme: ThemeType) => void;
}

type ThemeStore = States & Actions;

export const useTheme = create<ThemeStore>()(
  persist(
    (set) => ({
      theme: "system",
      setTheme: (theme: ThemeType) => set({ theme: theme }),
    }),
    {
      name: "theme",
      version: 0,
      partialize: (state) => ({ theme: state.theme }),
      storage: createJSONStorage(() => localStorage),
    },
  ),
);
