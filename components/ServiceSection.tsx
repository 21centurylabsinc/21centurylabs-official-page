import Image from "next/image";
import Link from "next/link";

export default function ServiceSection() {
  const services = [
    {
      title: "Web design and development for your business.",
      href: "#",
      imageUrl: "/service-card-img-1.jpg",
    },
    {
      title: "Custom, well-made web solutions for your specific business needs.",
      href: "#",
      imageUrl: "/service-card-img-2.jpg",
    },
  ];

  return (
    <section id="services" className="max-w-7xl mx-auto p-4 sm:p-8">
      <div className="text-center py-16">
        <h2 className="text-3xl font-bold mb-2">What We Do Best</h2>
        <p className="text-foreground/80 mb-8">
          Leverage our talent to build well-made software and web solutions for your business growth
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service) => (
            <Link
              key={service.title}
              href={service.href}
              className="group relative block h-120 overflow-hidden rounded-sm"
            >
              <Image
                src={service.imageUrl}
                alt={service.title}
                fill
                className="object-cover transition-transform duration-500 ease-in-out group-hover:scale-105"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-black/60 p-4">
                <h3 className="text-2xl font-bold text-white text-center">
                  {service.title}
                </h3>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
