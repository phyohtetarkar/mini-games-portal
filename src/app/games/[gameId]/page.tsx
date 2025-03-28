import { getGames } from "@/lib/api/game-api";
import GameContainer from "./game-container";

export async function generateStaticParams() {
  const games = await getGames();
 
  return games.map((game) => ({
    gameId: game.id,
  }))
}

export default async function MiniGame({
  params,
}: {
  params: Promise<{ gameId: string }>
}) {

  const { gameId } = await params

  return (
    <div className="h-full">
      <GameContainer gameId={gameId} />
    </div>
  );
}
