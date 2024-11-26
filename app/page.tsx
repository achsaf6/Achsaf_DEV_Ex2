import Image from "next/image";

export default function Home() {
  return (
    <main>
      <div>
        <h2>Welcome to the Product Jam Starter Kit</h2>
        <p>
          Feel free to look around, edit the source code and navigate to the
          demos.
        </p>
        <Image
          src="/huji.svg"
          alt="HUJI Logo"
          width="80"
          height="80"
          priority
        />
        <Image
          src="/bezalel.svg"
          alt="Bezalel Logo"
          className="item"
          width="80"
          height="80"
          priority
        />
        <div>
          <h2>Achsaf Atzmon | Product Development Jam Ex2</h2>
          <ul>
            <li>
              <a href="/tic-tac-toe">Tic-Tac-Toe</a>
            </li>
            <li>
              <a href="/nasa">NASA</a>
            </li>
            <li>
              <a href="/design">Figma</a>
            </li>
          </ul>
        </div>
      </div>
    </main>
  );
}
