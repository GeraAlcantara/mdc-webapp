import Footer from "./Footer";
import Header from "./Header";

function layout({ children }) {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
}

export default layout;
