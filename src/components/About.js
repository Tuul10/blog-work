import { Facebook } from "./Icons/Facebook";
import { Instagram } from "./Icons/Instagram";
import { Negative } from "./Icons/Negative";
import { Twitter } from "./Icons/Twitter";
import { Item } from "./Item";
import { Logo } from "./Logo";
import { Title } from "./Title";

const names = ["Terms of Use", "Privacy Policy", "Cookie Policy"];

export const About = () => {
  return (
    <div className="bg-[#F6F6F7] h-[495px] ">
      <div className=" pt-16 items-start mx-auto max-w-[1230px] flex gap-5 mb-6">
        <div>
          <Title text={"About"} />
          <p className="font-['Work Sans'] text-base font normal text-[#696A75] w-[280px] h-30 mt-3 mb-6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam
          </p>
          <div className="flex ">
            <h1 className="text-[#181A2A] font-bold">Email</h1>
            <p className="font-['Work Sans'] text-base font normal text-[#3B3C4A]">
              :info@jstemplate.net
            </p>
          </div>
          <div className="flex ">
            <h1 className="text-[#181A2A] font-bold">Phone</h1>
            <p className="font-['Work Sans'] text-base font normal text-[#3B3C4A]">
              :880 123 456 789
            </p>
          </div>
        </div>
        <div className="flex flex-col w-[521px] justify-center items-center text-[#3B3C4A] ">
          <p>Home</p>
          <p>Blog</p>
          <p>Contact</p>
        </div>
        <div className="flex gap-5">
          <Facebook />
          <Twitter />
          <Instagram />
          <Negative />
        </div>
      </div>
      <div className="py-8 flex   justify-between mx-auto max-w-[1230px] border-t-2">
        <div className="flex">
          <Logo />
          <div>
            <div className="flex text-xl ">
              <h1 className="text-[#3B3C4A] ">Meta</h1>
              <h1 className="text-[#141624] font-bold">Blog</h1>
            </div>
            <p className="text-[#3B3C4A]">© All Rights Reserved.</p>
          </div>
        </div>
        <div className="flex justify-end items-center gap-4 text-[#3B3C4A]">
          {names.map((name, index) => {
            return <Item key={index} text={name} />;
          })}
        </div>
      </div>
    </div>
  );
};
