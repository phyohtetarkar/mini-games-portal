import { getGames } from "@/lib/api/game-api";
import GameGridItem from "@/components/game-grid-item";
import { APP_NAME } from "@/lib/constants";
import { Game } from "@/lib/models";
import { useEffect, useState } from "react";

export default function Games() {
  const [games, setGames] = useState<Game[]>([]);
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    document.title = APP_NAME;
  });

  useEffect(() => {
    const loadGames = async () => {
      try {
        setLoading(true);
        const data = await getGames();
        setGames(data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    loadGames();
  }, []);

  return (
    <div className="container py-8">
      {isLoading && <span>Loading games...</span>}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
        {games.map((g) => {
          return <GameGridItem key={g.id} data={g} />;
        })}
      </div>
    </div>
  );
}
