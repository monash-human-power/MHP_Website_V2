"use client";
import { usePathname } from "next/navigation";
import Link from "next/link";

interface navItemProps {
  text: string;
  hrefString: string;
  srcString: string;
}

function NavItem({ text, hrefString, srcString }: navItemProps) {
  const pathname = usePathname();
  return (
    <div className="transition ease-in-out hover:-translate-y-1 px-10 py-2">
      <Link href={hrefString}>
        {srcString !== "" ? (
          <img src={srcString} width={100} height={75}></img>
        ) : (
          <span
            className={
              pathname === hrefString
                ? "font-Aldrich border-b-2 border-greenbutton"
                : "font-Aldrich hover:border-b-2 hover:border-greenbutton"
            }
          >
            {text}
          </span>
        )}
      </Link>
    </div>
  );
}

export default NavItem;
