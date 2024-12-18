import Link from "next/link";
import { APP_NAME, COURSE_GITHUB, DEMOS_ENABLED } from "../config";
import "./Navbar.css";

export default function Navbar() {
  return (
    <header id="navbar">
      <h1>
        <Link href="/">{APP_NAME}</Link>
      </h1>
      <nav>
        <Link href="/">Home</Link>
        <Link href="/tic-tac-toe">Tic-Tac-Toe</Link>
        <Link href="/nasa">NASA</Link>
        <Link href="/design">Figma</Link>
        <Link href={COURSE_GITHUB} target="_blank">
          GitHub
        </Link>
        {DEMOS_ENABLED ? <Link href="/demos">Demos</Link> : null}
      </nav>
    </header>
  );
}
