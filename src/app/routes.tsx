import { RouteObject } from "react-router";
import Game, { loadGame } from "./game/game";
import Games, { loadGames } from "./game/games";
import { default as ErrorBoundary, default as NotFound } from "./not-found";
import RootLayout from "./root-layout";
import { LoadingSpinner } from "@/components/loading-spinner";

export const routes = [
  {
    path: "/",
    Component: RootLayout,
    ErrorBoundary: ErrorBoundary,
    children: [
      {
        index: true,
        loader: loadGames,
        Component: Games,
        HydrateFallback: LoadingSpinner,
      },
      {
        path: "games/:game",
        loader: loadGame,
        Component: Game,
        HydrateFallback: LoadingSpinner,
      },
      {
        path: "*",
        Component: NotFound,
      },
    ],
  },
] satisfies RouteObject[];
