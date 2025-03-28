import { Game } from "@/lib/models";
import Image from "next/image";

export default function GameGridItem({ data }: { data: Game }) {
  return (
    <a href={`/games/${data.id}`} className="flex flex-col items-center">
      <Image
        src={data.logo}
        alt={data.name}
        width={0}
        height={0}
        sizes="100vw"
        className="object-cover rounded-md size-[80px] shadow-2xl"
        priority
      />
      <h5 className="mt-3 font-semibold">{data.name}</h5>
      {/* <span className="text-muted-foreground text-sm">
        {pluralize(data.playCount, "play")}
      </span> */}
    </a>
  );
}
