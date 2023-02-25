import { useEffect } from "react";
import { useRouter } from "next/router";
import dynamic from "next/dynamic";

// remote component
const Home = dynamic(import("home/home"), { ssr: false });

const Page = (props) => {
  const router = useRouter();

  useEffect(() => {
    if (props.needsPush) {
      router.push(router.route);
    }
  }, []);

  if (props.needsPush) {
    return null;
  }

  return <Home {...props} />;
};

export default Page;
