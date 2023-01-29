import { Newsletter } from "./Newsletter";
import Navbar from "./Navbar";
import Services from "./Services";
import  Footer  from "./Footer";



const Layout = (props) => (
  <div className="flex flex-col items-center justify-center w-full h-max-content">
    <div className="max-w-[1500px] w-full">
      <main>
        <Navbar/>
        {props.children}
      </main>
    </div>
    <Services/>
    <Newsletter/>
    <Footer/>
  </div>
);

export default Layout;
