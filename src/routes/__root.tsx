import { ThemeList } from "@/constants/themes";
import { fetchCourses } from "@/lib/courses";
import { useTheme } from "@/stores/theme";
import {
  Outlet,
  ScrollRestoration,
  createRootRoute,
} from "@tanstack/react-router";
// import { TanStackRouterDevtools } from "@tanstack/router-devtools";
import { useEffect } from "react";

export const Route = createRootRoute({
  loader: () => fetchCourses(),
  component: RootComponent,
  staleTime: Infinity,
});

function RootComponent() {
  const { theme } = useTheme();

  useEffect(() => {
    const root = window.document.documentElement;

    root.classList.remove(...ThemeList);

    if (theme === "system") {
      const systemTheme = window.matchMedia("(prefers-color-scheme: dark)")
        .matches
        ? "dark"
        : "light";

      root.classList.add(systemTheme);
      return;
    }

    root.classList.add(theme);
  }, [theme]);

  return (
    <>
      <ScrollRestoration />
      <Outlet />
      {/* <TanStackRouterDevtools position="bottom-right" /> */}
    </>
  );
}
