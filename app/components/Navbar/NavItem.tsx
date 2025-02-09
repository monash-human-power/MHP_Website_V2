"use client";
import { usePathname } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { GoogleAnalytics } from '@next/third-parties/google';

interface navItemProps {
  text: string;
  hrefString: string;
  srcString: string;
}

function NavItem({ text, hrefString, srcString }: navItemProps) {
  const pathname = usePathname();
  return (
    <>
    <div className="transition ease-in-out hover:-translate-y-1 px-2 py-2">
      <Link href={hrefString}>
        {srcString !== "" ? (
          <Image src={srcString} alt="Logo" width={100} height={10} />
        ) : (
          <span
            className={
              pathname === hrefString
                ? "font-Aldrich border-b-2 border-green"
                : "font-Aldrich hover:border-b-2 hover:border-green"
            }
          >
            {text}
          </span>
        )}
      </Link>
    </div>
    </>
  );
}

export default NavItem;
