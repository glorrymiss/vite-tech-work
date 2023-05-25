import { Outlet } from "react-router-dom";
import { Suspense } from "react";
import Header from "../Header/Header";
import { Container } from "./Layout.styled";
import { Footer } from "../Footer/Footer";
import Loader from "../Loader/Loader";
const Layout = () => {
  return (
    <>
      <Header />
      <Container>
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </Container>
      <Footer />
    </>
  );
};

export default Layout;
