import Link from "next/link";
import routes from "../../routes";

const Header = () => {
  return (
    <header>
      <ul>
        {routes.map((r) => {
          return (
            <li key={r.id}>
              <Link href={r.path}>{r.title}</Link>
            </li>
          );
        })}
      </ul>
    </header>
  );
};

export default Header;
