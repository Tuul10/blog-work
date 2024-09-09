import { Item } from "@/components/Item";
import { Logo } from "@/components/Logo";
import { Input } from "../components/Input";
import useSWR from "swr";
import { Searching } from "@/components/Searching";
import { Hero } from "@/components/Hero";
import { Right } from "@/components/Right";
import { Left } from "@/components/Left";
import { Title } from "@/components/Title";
import { Tags } from "@/components/Tags";
import { Facebook } from "../components/Icons/Facebook";
import { Twitter } from "../components/Icons/Twitter";
import { Instagram } from "../components/Icons/Instagram";
import { Negative } from "../components/Icons/Negative";
import Navbar from "../components/Navbar";
import Link from "next/link";
const url = "https://dev.to/api/articles";
const fetcher = (...args) => fetch(...args).then((res) => res.json());

const texts = ["Home", "Blog", "Contact"];
const tags = ["Design", "Travel", "Fashion", "Technology", "Branding"];
const names = ["Terms of Use", "Privacy Policy", "Cookie Policy"];

const Page = () => {
  const { data: blogs = {}, error, isLoading } = useSWR(url, fetcher);

  if (isLoading) {
    return <p>...loading</p>;
  }

  if (error) {
    return <p>...oh sorry error</p>;
  }

  return (
    <div className="">
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
      </div>
      <div>
        <Hero />
        <div className="flex mr-auto gap-1 mb-[100px]">
          <Left />
          <Right />
        </div>
        <div className="mx-auto  max-w-[1230px]">
          <Title text={"Tranding"} />
        </div>
        <div className="grid grid-cols-4 gap-6 mb-[100px] mt-8 mx-auto  max-w-[1230px]">
          <img className="w-[289px] h-[320px]" src="trend1.png" />
          <img className="w-[289px] h-[320px]" src="trend1.png" />
          <img className="w-[289px] h-[320px]" src="trend1.png" />
          <img className="w-[289px] h-[320px]" src="trend1.png" />
        </div>
      </div>
      <div className="mx-auto  max-w-[1230px]">
        <Title text={"All blog post"} />
        <div className="flex gap-5 mt-8 mb-8">
          <p className="text-xs font-bold text-[#D4A373]">All</p>
          {tags.map((tag, index) => {
            return <Tags key={index} text={tag} />;
          })}
        </div>
      </div>
      <div className="grid grid-cols-3  max-w-[1230px] mx-auto ">
        {blogs.map((blog) => (
          <Link href={`blog/${blog.id}`}>
            <div>
              <BlogCard
                key={blog.id}
                image={blog.cover_image}
                tag={blog.tags[0]}
                title={blog.title}
                date={blog.published_at}
              />
            </div>
          </Link>
        ))}
      </div>
      <div className="bg-[#F6F6F7] h-[495px] ">
        <div className=" pt-16 items-start mx-auto max-w-[1230px] flex gap-5 mb-6">
          <div>
            <Title text={"About"} />
            <p className="font-['Work Sans'] text-base font normal text-[#696A75] w-[280px] h-30 mt-3 mb-6">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam
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
          <div className="flex flex-col w-[521px] justify-center items-center  ">
            {texts.map((text, index) => {
              return <Item key={index} text={text} />;
            })}
          </div>
          <div className="flex gap-5">
            <Facebook />
            <Twitter />
            <Instagram />
            <Negative />
          </div>
        </div>
        <div className="py-8 flex w-[1216px] justify-between mx-auto max-w-[1230px] border-t-2">
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
    </div>
  );
};

export default Page;

const BlogCard = (props) => {
  const { image, tag, title, date } = props;
  return (
    <div>
      <div className="px-4 py-2 border border-solid rounded-xl flex flex-col  w-[360px]  gap-6  mt-5   ">
        <img className="w-[360px] h-[240px] rounded-md" src={image} />
        <p className="text-[#4B6BFB] bg-[#d5daec] w-fit">{tag}</p>
        <h2 className="font-semibold text-xl">{title}</h2>
        <p className="text-[#97989F]">{date}</p>
      </div>
    </div>
  );
};
