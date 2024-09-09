import { Input } from "postcss";
import { Item } from "./Item";
import { Logo } from "./Logo";
import { Searching } from "./Searching";

const texts = ["Home", "Blog", "Contact"];

const Navbar = () => {
  <div className="w-[1917px] py-8  flex mx-auto  max-w-[1230px]">
    <Logo />
    <div className="flex text-2xl items-center">
      <h1 className="text-[#3B3C4A] ">Meta</h1>
      <h1 className="text-[#141624] font-bold">Blog</h1>
    </div>

    <div className="flex w-[667px] gap-10 justify-center items-center">
      {texts.map((text, index) => {
        return <Item key={index} text={text} />;
      })}
    </div>
    <div className="flex bg-[#F4F4F5] rounded-md p-2 ">
      <Input />
      <Searching />
    </div>
  </div>;
};
export default Navbar;
