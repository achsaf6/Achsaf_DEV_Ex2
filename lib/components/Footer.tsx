import { COURSE_CREDITS } from "@/lib/config";
import { AuthAction } from "./AuthAction";
import "./Footer.css";


export default function Footer() {
  return (
    <footer>
      <p>This is some example footer content.</p>
      <p>
        <AuthAction /> | {COURSE_CREDITS}
      </p>
    </footer>
  );
}
