import Image from "next/image";
import Link from "next/link";
// import cert from "./cert.JPG";
import meme from "../../public/meme.png";
import practise from "../../public/images/practise.png" 

export default function Home() {
  return (
    <div>
      <main>
        <Link href="/blog/article1">Go to Article1</Link>
        <Image src={meme} alt="Meme" />
        <Image src={practise} alt="Practise problem" />
        <Image src="https://saidbali.netlify.app/_astro/icon.BLzldhDC.webp" alt="" width={500} height={500} />
        </main>
    </div>
  );
}
