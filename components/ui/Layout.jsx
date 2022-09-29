import Footer from "./Footer";
import Header from "./Header";

function layout({ children }) {
  return (
    <div className=' mx-auto'>
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
}

export default layout;
