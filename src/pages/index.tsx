import type { GetServerSideProps, NextPage } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Home from "@/containers/home";

const HomePage: NextPage = () => {
  return <Home />;
};

export const getServerSideProps: GetServerSideProps = async (props) => {
  return {
    props: {
      ...(await serverSideTranslations(props.locale!, [
        "common",
        "navBar",
        "textarea",
      ])),
    },
  };
};

export default HomePage;
