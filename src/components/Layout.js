import { About } from "./About";
import Navbar from "./Navbar";

export const Layout = ({ children }) => {
  return (
    <div>
      <Navbar />
      <div className="flex-grow">{children}</div>
      <About />
    </div>
  );
};
