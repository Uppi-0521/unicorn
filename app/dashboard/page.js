import Image from "next/image";
import nextImage from "@/app/image.png";

export default function Dashboard() {
    return (
        <Image
            src={nextImage}
            alt="nextJS image demo"
            width={300}
            height={300}
            className="w-full rounded-lg border border-gray-200 dark:border-gray-800 shadow-lg"
        />
    )
}