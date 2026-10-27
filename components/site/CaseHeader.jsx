import Image from "next/image";
import Link from "next/link";
import { IconArrow } from "@/components/site/icons";

export default function CaseHeader() {
  return (
    <header className="border-b border-line bg-canvas">
      <div className="mx-auto flex max-w-content flex-wrap items-center justify-between gap-4 px-6 py-[18px]">
        <Link href="/" className="inline-flex items-center">
          <Image
            src="/img/logo/logo-light.svg"
            alt="Sajid Jaber"
            width={134}
            height={40}
            priority
          />
        </Link>
        <Link
          href="/#work"
          className="inline-flex min-h-11 items-center gap-2 font-semibold text-white no-underline"
        >
          <IconArrow className="h-4 w-4 rotate-180" />
          All Work
        </Link>
      </div>
    </header>
  );
}
