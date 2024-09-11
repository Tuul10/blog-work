import Link from "next/link";
import { Input } from "../components/Input";
import { Item } from "./Item";
import { Logo } from "./Logo";
import { Searching } from "./Searching";

const Navbar = () => {
  return (
    <div className="w-[1917px] py-8  flex mx-auto  max-w-[1230px]">
      <Logo />
      <div className="flex text-2xl items-center">
        <h1 className="text-[#3B3C4A] ">Meta</h1>
        <h1 className="text-[#141624] font-bold">Blog</h1>
      </div>

      <div className="flex w-[667px] gap-10 justify-center items-center">
        <Link href={`/`}>Home</Link>
        <Link href={`/news`}>Blog</Link>
        <Link href={`/contact`}>Contact</Link>
      </div>
      <div className="flex bg-[#F4F4F5]  p-2 rounded-md ">
        <Input />
        <Searching />
      </div>
    </div>
  );
};
export default Navbar;
