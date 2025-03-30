import { createBrowserRouter } from "react-router";
import Game from "./app/game/game";
import Games from "./app/game/games";
import { default as ErrorBoundary, default as NotFound } from "./app/not-found";
import RootLayout from "./app/root-layout";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    ErrorBoundary: ErrorBoundary,
    children: [
      {
        index: true,
        Component: Games,
      },
      {
        path: "games/:game",
        Component: Game,
      },
      {
        path: "*",
        Component: NotFound,
      },
    ],
  },
]);
