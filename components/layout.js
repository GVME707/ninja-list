import Footer from "./footer";
import NavBar from "./navBar";

const Layout = ({ children }) => {
  return (
    <>
      <NavBar />
      {children}
      <Footer/>
    </>
  );
};

export default Layout;
