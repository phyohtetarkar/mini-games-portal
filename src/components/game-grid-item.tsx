import { Game } from "@/lib/models";
import { Link } from "react-router";

export default function GameGridItem({ data }: { data: Game }) {
  return (
    <Link
      to={`games/${data.id}`}
      className="flex flex-col items-center"
      reloadDocument
    >
      <img
        src={data.logo}
        alt={data.name}
        width={0}
        height={0}
        className="object-cover rounded-md size-[80px] shadow-2xl"
      />
      <h5 className="mt-3 font-semibold">{data.name}</h5>
      {/* <span className="text-muted-foreground text-sm">
        {pluralize(data.playCount, "play")}
      </span> */}
    </Link>
  );
}
