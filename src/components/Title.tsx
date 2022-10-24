import Head from "next/head";
import routes from "../routes";
import { useRouter } from "next/router";

const Title = () => {
  const baseTitle = process.env.NEXT_PUBLIC_TITLE;
  const { pathname } = useRouter();
  const { title = "" } = routes.find((r) => r.path.includes(pathname)) || {};

  return (
    <Head>
      <title>
        {title === ""
          ? `${baseTitle} - 404 Not Found`
          : `${baseTitle} - ${title}`}
      </title>
    </Head>
  );
};

export default Title;
