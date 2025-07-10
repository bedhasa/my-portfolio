// components/ProfileSection.tsx
import Image from 'next/image';

export default function ProfileSection() {
  return (
    <div className="flex flex-col md:flex-row items-center gap-10">
      <div className="w-40 h-40 md:w-56 md:h-56 relative overflow-hidden rounded-xl transition-transform duration-300 hover:scale-105">
        <Image
          src="/images/heroimg2.png"
          alt="Bedasa Profile"
          fill
          className="object-cover transition-transform duration-300"
        />
      </div>

      <div>
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
