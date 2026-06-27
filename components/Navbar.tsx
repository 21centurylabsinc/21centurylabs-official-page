import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  return (
    <nav className="border-b border-gray-100 dark:border-gray-800 bg-white dark:bg-black sticky top-0 z-50">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center h-14">
          <Link href="/" className="shrink-0">
            <div className="relative h-8 w-32">
              <Image src="/logo.svg" alt="Company Logo" fill priority />
            </div>
          </Link>
        </div>
      </div>
    </nav>
  );
}
