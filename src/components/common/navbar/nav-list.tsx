import Link from "next/link";

const NavbarList = ({ href, title }: { href: string; title: string }) => {
  return (
    <Link href={href} className="rounded-md px-4 py-2 hover:bg-white/10">
      <span className="text-xs">{title}</span>
    </Link>
  );
};

export default NavbarList;
