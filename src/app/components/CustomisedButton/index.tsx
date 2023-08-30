import GoogleDrive from "@/Icons/GoogleDrive";
import FreeCodeCamp from "@/Icons/FreeCodeCamp";
import Link from "next/link";
import Figma from "@/Icons/Figma";

export default function CustomisedButton({
  title,
  className,
  link,
  icon,
}: any) {
  const buttonIcon = (icon: string) => {
    switch (icon) {
      case "googleDrive":
        return <GoogleDrive />;
      case "freecodeCamp":
        return <FreeCodeCamp />;
      case "figma":
        return <Figma />;
      default:
        return "Check out";
    }
  };
  return (
    <Link href={link} target="_blank">
      <div className={className} title={title}>
        {buttonIcon(icon)}
        {/* { icon === "googleDrive" ? <GoogleDrive /> : <FreeCodeCamp /> } */}
      </div>
    </Link>
  );
}
