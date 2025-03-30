"use client";

import { APP_NAME } from "@/lib/constants";
import GitHubButton from "react-github-btn";
import { Link } from "react-router";

export default function Header() {
  return (
    <header className="fixed top-0 start-0 end-0 items-center space-x-2 z-10 border-b bg-background">
      <div className="container flex h-16 shrink-0 items-center space-x-3">
        <Link to="" className="flex items-center space-x-2.5 truncate">
          <img
            src="/images/logo.png"
            alt="Logo"
            width={0}
            height={0}
            className="object-contain min-w-[56px] h-auto"
          />
          <h4 className="scroll-m-20 text-xl lg:text-2xl font-bold truncate">
            {APP_NAME}
          </h4>
        </Link>
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
        {/* <a to="https://www.buymeacoffee.com/yzox2vc1i" target="_blank">
          <img
            src="/images/bmc-logo-yellow.png"
            alt="Buy me a coffee"
            className="object-contain min-w-[38px] h-auto rounded"
          />
        </a> */}
      </div>
    </header>
  );
}
