import Image from "next/image";
import Link from "next/link";

// import cert from "./cert.JPG";
// import meme from "../../public/meme.png";
import practise from "../../public/images/practise.png" 
import { Geist } from "next/font/google";
import { Roboto } from "next/font/google";
import { Open_Sans } from "next/font/google";

import localFont from 'next/font/local'

const montserrat = localFont({
  src: '../../public/fonts/Montserrat-VariableFont_wght.woff2',
})

const open_sans = Open_Sans({
  subsets: ["latin"]
})

const roboto = Roboto({
  weight: "400",
  subsets: ["latin"]
})

const geist = Geist({
  subsets: ['latin'],
})


export default function Home() {
  return (
    <div>
      <main>
        <Link href="/blog/article1">Go to Article1</Link>
        {/* <Image src={meme} alt="Meme" /> */}
        {/* <Image src={practise} alt="Practise problem" /> */}
        {/* <Image src="https://saidbali.netlify.app/_astro/icon.BLzldhDC.webp" alt="" width={500} height={500} /> */}
        <p className={open_sans.className}><span className="bold">Lorem ipsum dolor, sit amet consectetur adipisicing elit. </span>Sapiente, maiores repellat obcaecati odit, exercitationem ex accusamus cum beatae totam tempora hic sunt! Ut officiis eligendi sapiente, odio cupiditate delectus soluta assumenda suscipit nesciunt blanditiis illo porro enim a, mollitia necessitatibus culpa commodi dolorem facere dolore aliquid nam quasi non fugiat. Iure officia assumenda recusandae explicabo, suscipit voluptas nobis laborum excepturi quibusdam quod nesciunt, quisquam dolorum repellendus est eius doloremque impedit reprehenderit aut. Voluptatem ullam esse vero a! Recusandae, iste libero?</p>
        <p className={montserrat.className}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sapiente, maiores repellat obcaecati odit, exercitationem ex accusamus cum beatae totam tempora hic sunt! Ut officiis eligendi sapiente, odio cupiditate delectus soluta assumenda suscipit nesciunt blanditiis illo porro enim a, mollitia necessitatibus culpa commodi dolorem facere dolore aliquid nam quasi non fugiat. Iure officia assumenda recusandae explicabo, suscipit voluptas nobis laborum excepturi quibusdam quod nesciunt, quisquam dolorum repellendus est eius doloremque impedit reprehenderit aut. Voluptatem ullam esse vero a! Recusandae, iste libero?</p>
        </main>
    </div>
  );
}
