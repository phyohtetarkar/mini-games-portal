"use client";

import { APP_NAME } from "@/lib/constants";
import Image from "next/image";
import Link from "next/link";
import GitHubButton from "react-github-btn";
import { Input } from "./ui/input";

export default function AppHeader() {
  return (
    <header className="fixed top-0 start-0 end-0 items-center space-x-2 z-10 border-b bg-background">
      <div className="container flex h-16 shrink-0 items-center space-x-3">
        <Link href="/" className="flex items-center space-x-2">
          <Image
            src="/images/logo.png"
            alt="Logo"
            width={0}
            height={0}
            sizes="100vw"
            priority
            className="object-contain min-w-[56px] h-auto"
          />
          <h4 className="scroll-m-20 text-xl font-bold truncate hidden sm:block">
            {APP_NAME}
          </h4>
        </Link>
        <div>
          <Input
            type="search"
            placeholder="Search games..."
            className="rounded-full"
            size={30}
          />
        </div>
        <div className="grow"></div>
        <div className="h-[28px]">
          <GitHubButton
            href="https://github.com/phyohtetarkar/mini-games-portal"
            data-size="large"
            data-show-count="true"
            aria-label="Star buttons/github-buttons on GitHub"
          >
            Star
          </GitHubButton>
        </div>
        {/* <Link href="https://www.buymeacoffee.com/yzox2vc1i" target="_blank">
          <Image
            src="/images/bmc-logo-yellow.png"
            alt="Buy me a coffee"
            width={0}
            height={0}
            sizes="100vw"
            className="object-contain min-w-[38px] h-auto rounded"
          />
        </Link> */}
      </div>
    </header>
  );
}
