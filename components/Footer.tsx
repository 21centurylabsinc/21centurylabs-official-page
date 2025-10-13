import Link from "next/link";

const socialLinks = [
  { name: "LinkedIn", href: "https://www.linkedin.com/company/21centurylabs/" },
  { name: "X", href: "https://x.com/21centurylabs" },
  { name: "Facebook", href: "#" },
  { name: "YouTube", href: "https://www.youtube.com/@21CenturyLabs" },
  { name: "TikTok", href: "#" },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 py-6">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-foreground/60">
            &copy; {currentYear} 21CenturyLabs. All Rights Reserved.
          </p>
          <div className="flex items-center gap-6">
            {socialLinks.map((social) => (
              <Link
                key={social.name}
                href={social.href}
                className="text-sm text-foreground/60 hover:text-foreground transition-colors"
              >
                {social.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
