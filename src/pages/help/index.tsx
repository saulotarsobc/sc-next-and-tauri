import Link from "next/link";
import React from "react";

export default function Help() {
  return (
    <main>
      <nav className="bg-blue-500">
        <Link href="/help">Help</Link>
        <Link href="/">Home</Link>
      </nav>
      <br />
      <br />
      <br />
      <h1>Help</h1>
    </main>
  );
}
