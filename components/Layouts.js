import Navbar from "./Navbar";

const Layout = (props) => (
  <div className="flex items-center justify-center w-full h-max-content">
    <div className="max-w-[1500px] w-full">
      <main>
        <Navbar />
        {props.children}
      </main>
    </div>
  </div>
);

export default Layout;
