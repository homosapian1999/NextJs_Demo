import Link from "next/link";

const HomePage = () => {
  return (
    <div>
      <h1>Hello Next Js</h1>
      <ul>
        <li>
          <Link href="/portfolio">Portfolio</Link>
        </li>
        <li>
          <Link href="/client">Client</Link>
        </li>
      </ul>
    </div>
  );
};

export default HomePage;
