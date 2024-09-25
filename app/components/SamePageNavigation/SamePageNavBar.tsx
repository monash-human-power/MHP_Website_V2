import Link from "next/link";

interface SamePageNavBarProps {
    sections: string[]; // list of the sections to scroll to
}

const SamePageNavBar = ({ sections } : SamePageNavBarProps) => {
    return (
        <nav className="sticky top-0 w-full bg-black text-white font-Aldrich xl:text-xl lg:text-l z-100">
            <div className="hidden lg:block font-Aldrich">
            <div className="flex justify-center items-center h-full w-full space-x-10 pl-4 pt-2 pb-2">
            {sections.map((section, key) => (
            <Link href={'#'+section}>{section}</Link>
        ))}
            </div>
            </div>
        </nav>
    )
}

export default SamePageNavBar