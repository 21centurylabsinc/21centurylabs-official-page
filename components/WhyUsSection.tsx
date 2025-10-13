import Image from "next/image";

export default function WhyUsSection() {
  return (
    <section id="why-us" className="max-w-7xl mx-auto p-4 sm:p-8">
      <div className="rounded-sm bg-primary text-white overflow-hidden">
        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-8">
          <div className="relative h-64 md:h-full overflow-hidden">
            <Image
              src="/logo-white-trans.svg"
              alt="Company Logo"
              fill
              className="object-cover object-left scale-110"
            />
          </div>
          <div className="flex flex-col justify-center p-8 md:py-24">
            <h2 className="text-3xl font-bold mb-4">Why Work With Us?</h2>
            <p className="text-white/80">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
