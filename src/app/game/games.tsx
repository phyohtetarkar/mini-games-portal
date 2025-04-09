import GameGridItem from "@/components/game-grid-item";
import { getGames } from "@/lib/api/game-api";
import { APP_NAME } from "@/lib/constants";
import { useEffect } from "react";
import { useLoaderData } from "react-router";

export const loadGames = async () => {
  try {
    return await getGames();
  } catch (error) {
    console.error(error);
  }

  return [];
}

export default function Games() {
  const games = useLoaderData<typeof loadGames>();

  useEffect(() => {
    document.title = APP_NAME;
  });

  return (
    <div className="container py-8">
      {games.length === 0 && <span className="text-muted-foreground">Games not found</span>}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
        {games.map((g) => {
          return <GameGridItem key={g.id} data={g} />;
        })}
      </div>
    </div>
  );
}
