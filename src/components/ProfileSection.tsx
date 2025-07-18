// components/ProfileSection.tsx
import Image from 'next/image';

export default function ProfileSection() {
  return (
    <div className="relative flex flex-col md:flex-row items-center gap-10 py-10 md:py-20 overflow-hidden">
      {/* Background Cloud Shape */}
      <div className="absolute -right-1/4 -top-1/4 w-3/4 h-3/4 bg-orange-300 rounded-full blur-3xl opacity-60"
           style={{
             // Using a more complex clip-path for a cloud-like shape
             clipPath: 'path("M350.5,142c-29.4-44.4-69.3-73.6-118-80.6c-48.7-7-98.8,11.3-138.8,37.3c-40,26-70.9,60.9-82.6,103.9c-11.7,43-3.6,89.5,23.4,124.5c27,35,70.9,56,117.9,59c47,3,96.4-14,136.4-40c40-26,70.9-60.9,82.6-103.9C369.2,217,377.9,176.4,350.5,142z")'
             // Note: This is a sample cloud path. You can generate your own more complex
             // SVG cloud paths using design tools (like Figma, Illustrator, Inkscape)
             // and then extract the 'd' attribute value.
           }}>
      </div>

      <div className="relative z-10 w-40 h-50 md:w-56 md:h-56 transition-transform duration-300 hover:scale-105">
        <Image
          src="/images/heroimg1.png"
          alt="Bedasa Profile"
          fill
          className="object-cover transition-transform duration-300 rounded-3xl shadow-xl"
        />
      </div>

      <div className="relative z-10">
        <h1 className="text-4xl md:text-5xl font-bold text-orange-600">
          👋 Hi, I’m Bedasa Negash
        </h1>
        <p className="mt-4 text-lg text-gray-700 dark:text-gray-300 max-w-xl">
          A creative and passionate web developer from Ethiopia 🇪🇹 who enjoys crafting modern, responsive websites with great user experience.
          I code for fun, love solving real-world problems, and burn with curiosity 🔥😊.
        </p>
      </div>
    </div>
  );
}