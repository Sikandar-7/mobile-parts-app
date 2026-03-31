import Image from "next/image";

export default function Logo({ size = 40 }) {
  // We use a wider width because the GH logo is rectangular
  return (
    <div className="flex items-center justify-center bg-white rounded-md p-1">
      <Image
        src="/logo.png"
        alt="GH Logo"
        width={size * 1.5}
        height={size}
        className="object-contain"
        priority
      />
    </div>
  );
}
