import Areaaes from "@/components/areaaes/areaaes";
import AreaSha256 from "@/components/areasha256/areasha256";
import Dock from "@/components/dock/Dock";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-24 responsive gap-[20px]">
      <AreaSha256></AreaSha256>
      <Areaaes></Areaaes>
    </main>
  );
}
