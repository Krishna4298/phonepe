import Image from "next/image";
import Link from "next/link";
import { MenuIcon, UserCircle } from "lucide-react";

const Header = () => {
  return (
    <header className="py-4 px-6 bg-white flex items-center justify-between border-b border-slate-100 mb-0">
      <div className="flex items-center">
        <Link href="/">
          <Image
            src="/images/phonepe-logo.png"
            alt="PhonePe Logo"
            width={105}
            height={32}
            priority
          />
        </Link>
      </div>
      <div className="flex items-center">
        <UserCircle className="w-8 h-8 text-primary" />
      </div>
    </header>
  );
};

export default Header;
