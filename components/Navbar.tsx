import Link from "next/link";
import Image from "next/image";

const navLinks = [
  { name: "Services", href: "#services" },
  { name: "Why Work With Us", href: "#why-us" },
  { name: "Contact Us", href: "#contact" },
];

export default function Navbar() {
  return (
    <nav className="border-b border-gray-100 dark:border-gray-800 bg-white dark:bg-black sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-14">
          <Link href="/" className="flex-shrink-0">
            <div className="relative h-8 w-32">
              <Image src="/logo.svg" alt="Company Logo" fill priority />
            </div>
          </Link>

          <div className="hidden md:flex md:ml-auto md:space-x-8 h-full">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-gray-600 hover:text-gray-900 h-full flex items-center border-b-2 border-transparent hover:border-primary"
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}
