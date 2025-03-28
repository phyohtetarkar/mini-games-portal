import GameContainer from "../game-container";

export default async function Game2048() {
  return (
    <div className="h-full">
      <GameContainer gameId="2048" />
    </div>
  );
}
