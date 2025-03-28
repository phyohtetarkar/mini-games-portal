"use client";

import { getGame } from "@/lib/api/game-api";
import { firebaseApp } from "@/lib/firebase.config";
import { getAnalytics, logEvent } from "firebase/analytics";
import { useLayoutEffect, useRef, useState } from "react";

export default function GameContainer({ gameId }: { gameId: string }) {
  const initRef = useRef(false);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [error, setError] = useState<string>();
  const [isLoading, setLoading] = useState(false);

  useLayoutEffect(() => {
    if (initRef.current) {
      return;
    }

    initRef.current = true;

    const loadGame = async () => {
      if (!containerRef.current) {
        return;
      }

      try {
        setLoading(true);
        const game = await getGame(gameId);

        if (!game) {
          setError("Game not found");
          return;
        }

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
        setError("Unable to load game");
      } finally {
        setLoading(false);
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
  }, [gameId]);

  if (error) {
    return (
      <div className="container py-5">
        <span className="text-destructive text-sm">{error}</span>
      </div>
    );
  }

  return (
    <>
      {isLoading && (
        <div className="flex items-center justify-center p-5">
          Loading game...
        </div>
      )}
      <div
        ref={containerRef}
        id="game-container"
        className="relative w-full h-full bg-background"
      ></div>
    </>
  );
}
