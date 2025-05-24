import Image from "next/image";

interface CompanyLogoProps {
  company: string;
  className?: string;
  size?: number;
}

const LOGO_MAP: Record<string, string> = {
  Catawiki: "/images/logos/catawiki-logo.jpeg",
  SnappMarket: "/images/logos/snappmarket-logo.jpeg",
  Shab: "/images/logos/shabir-logo.jpeg",
};

export function CompanyLogo({
  company,
  className = "",
  size = 24,
}: CompanyLogoProps) {
  const logoSrc = LOGO_MAP[company];
  if (!logoSrc) return null;
  return (
    <span
      className={className}
      style={{ display: "inline-block", width: size, height: size }}
    >
      <Image
        src={logoSrc}
        alt={company + " logo"}
        width={size}
        height={size}
        className="rounded-full object-cover border border-[#4285f4] bg-white"
        style={{ background: "white" }}
      />
    </span>
  );
}
