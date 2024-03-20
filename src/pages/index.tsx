import Image from "next/image";
import { Inter } from "next/font/google";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main>
      <nav className="bg-blue-500">
        <Link href="/help">Help</Link>
        <Link href="/">Home</Link>
      </nav>
      <br />
      <br />
      <br />
      <h1>Home</h1>
    </main>
  );
}
