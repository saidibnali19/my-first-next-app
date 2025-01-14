import Link from "next/link";

export default function Home() {
  return (
    <div>
      <main>
        <Link href={"/blog/article1"}>Go to Article1</Link>
        </main>
    </div>
  );
}
