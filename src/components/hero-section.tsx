import Image from "next/image";
import { BookOpen, Users, Award } from "lucide-react";
import { cn } from "@/lib/utils";
import { SubscribeForm } from "./subscribe-form";

export default function HeroSection() {
  return (
    <section className="relative bg-black flex items-center text-white overflow-hidden min-h-screen">
      {" "}
      <TechLogos />
      <div className="container z-10 mx-auto px-4 py-20 sm:py-24 lg:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 lg:col-start-2 space-y-8">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight">
              Code Smarter <br />
              <span className="bg-gradient-to-r from-emerald-400 to-emerald-800 bg-clip-text text-transparent">
                Build Better
              </span>
            </h1>
            <p className="text-xl text-gray-300 lg:max-w-2xl max-w-[45ch]">
              Sign up with your email to be the first to know about our launch
              and receive an exclusive discount.
            </p>
            <div className="w-full max-w-sm space-y-2">
              <SubscribeForm />
              <p className="text-xs text-gray-500 dark:text-gray-400">
                Join our waiting list to get early access and exclusive offers.
              </p>
            </div>
          </div>
          <div className="lg:col-span-4 lg:col-start-8 relative">
            <div className="absolute inset-0 bg-emerald-400 rounded-full opacity-20 blur-3xl"></div>
            <div className="relative z-10 rounded-lg shadow-2xl">
              <div className="bg-emerald-500/50 backdrop-blur-lg z-[-1] absolute top-[20%] bottom-0 left-0 right-0 rounded-lg" />
              <div className="aspect-w-16 aspect-h-9 lg:h-[400px]">
                <Image
                  src="/brett.png"
                  alt="Brett Westwood"
                  width={1740}
                  height={1660}
                  className="rounded-md object-cover h-full w-full"
                />
              </div>
              <div className="grid absolute -translate-y-[50%] w-full p-5 lg:p-0 lg:w-[120%] lg:-translate-x-[10%] grid-cols-3 gap-4 text-center">
                <FeatureCard icon={BookOpen} title="Experience" value="4+" />
                <FeatureCard icon={Users} title="Subscribers" value="9.3K" />
                <FeatureCard icon={Award} title="Technologies" value="50+" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-emerald-900 to-transparent"></div>
    </section>
  );
}

function FeatureCard({
  icon: Icon,
  title,
  value,
}: {
  icon: React.ElementType;
  title: string;
  value: string;
}) {
  return (
    <div className="bg-gray-800 rounded-lg md:p-4 p-2">
      <Icon className="h-8 w-8 mx-auto mb-2 text-emerald-400" />
      <h3 className="text-lg font-semibold">{value}</h3>
      <p className="text-gray-300 text-sm">{title}</p>
    </div>
  );
}

function TechLogos() {
  const logos = [
    { src: "/auth-js.png", alt: "Moodle", className: "" },
    { src: "/nextjs-logo.png", alt: "Canvas", className: "invert" },
    { src: "/github-logo.png", alt: "Google Classroom", className: "invert" },
    { src: "/react-hook-form-logo.png", alt: "Microsoft Teams", className: "" },
    { src: "/nodejs-logo.png", alt: "Zoom", className: "" },
    { src: "/npm-package.png", alt: "Coursera", className: "" },
    { src: "/prisma-logo.png", alt: "edX", className: "" },
    { src: "/react-email.webp", alt: "Udemy", className: "" },
    { src: "/react-logo.png", alt: "Kahoot", className: "" },
    { src: "/typescript-logo.png", alt: "Kahoot", className: "" },
    { src: "/tailwindcss-logo.png", alt: "Kahoot", className: "" },
  ];

  const positions = logos.map((_, index) => {
    const angle = (index / logos.length) * 2 * Math.PI;
    const radius = 35; // Adjust the radius as needed
    const top = 50 + radius * Math.sin(angle) + "%";
    const left = 50 + radius * Math.cos(angle) + "%";
    return { top, left };
  });

  return (
    <div className="absolute inset-0 pointer-events-none ">
      {logos.map((logo, index) => (
        <div
          key={index}
          style={{ top: positions[index].top, left: positions[index].left }}
          className={cn(
            "absolute opacity-20 transition-opacity duration-300 hover:opacity-70",
            logo.className
          )}
        >
          <Image
            src={logo.src}
            alt={logo.alt}
            width={50}
            height={50}
            className="w-20 h-20 object-contain"
          />
        </div>
      ))}
    </div>
  );
}
