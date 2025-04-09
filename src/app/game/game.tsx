import { getGame } from "@/lib/api/game-api";
import { firebaseApp } from "@/lib/firebase.config";
import { getAnalytics, logEvent } from "firebase/analytics";
import { useLayoutEffect, useRef } from "react";
import { LoaderFunctionArgs, useLoaderData } from "react-router";

export const loadGame = async ({ params }: LoaderFunctionArgs) => {
  try {
    const id = params.game;
    return await getGame(id ?? "none");
  } catch (error) {
    console.error(error);
  }

  return null;
}

export default function Game() {
  const initRef = useRef(false);
  const containerRef = useRef<HTMLDivElement | null>(null);

  const game = useLoaderData<typeof loadGame>();

  useLayoutEffect(() => {
    if (initRef.current) {
      return;
    }

    initRef.current = true;

    const loadGame = async () => {
      if (!containerRef.current) {
        return;
      }

      if (!game) {
        return;
      }

      try {
        document.title = game.name;

        containerRef.current.innerHTML = "";

        const links = game.links ?? [];

        for (const l of links) {
          const link = document.createElement("link");
          link.href = l;
          link.rel = "stylesheet";
          containerRef.current.appendChild(link);
        }

        const scripts = game.scripts ?? [];

        for (const s of scripts) {
          const script = document.createElement("script");
          script.src = s;
          containerRef.current.appendChild(script);
        }

        const analytics = getAnalytics(firebaseApp);
        logEvent(analytics, game.id);
      } catch (error) {
        console.error(error);
        containerRef.current.innerHTML = "";
      }
    };

    loadGame();
    return () => {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const w = window as any;
      if (w.destroy && typeof w.destroy === "function") {
        w.destroy();
      }

      w.destroy = null;
    };
  }, [game]);

  return (
    <div className="h-full">
      {!game && (
        <div className="container py-5">
          <span className="text-muted-foreground">Game not found</span>
        </div>
      )}
      <div
        ref={containerRef}
        id="game-container"
        className="relative w-full h-full bg-background"
      ></div>
    </div>
  );
}
