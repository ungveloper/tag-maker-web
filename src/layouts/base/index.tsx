import { memo } from "react";
import isEqual from "react-fast-compare";
import NavBar from "@/components/navBar";
import Footer from "@/components/footer";

type BaseLayoutProps = {
  children: JSX.Element | JSX.Element[];
};
function BaseLayout(props: BaseLayoutProps): JSX.Element {
  const { children } = props;
  return (
    <>
      <NavBar />
      {children}
      <Footer />
    </>
  );
}

export default memo(BaseLayout, isEqual);
