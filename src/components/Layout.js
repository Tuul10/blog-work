import { About } from "./About";
import Navbar from "./Navbar";

export const Layout = ({ children }) => {
  return (
    <div>
      <Navbar />
      {children}
      <About />
    </div>
  );
};
