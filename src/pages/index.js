import { Item } from "@/components/Item";
import { Logo } from "@/components/Logo";
import { Input } from "../components/Input";
import useSWR from "swr";
import { Searching } from "@/components/Searching";
import { Hero } from "@/components/Hero";
import { Title } from "@/components/Title";
import { Tags } from "@/components/Tags";
import Link from "next/link";
import { Trend } from "@/components/Trend";
import { useState } from "react";
import { About } from "@/components/About";
import { Blog } from "./blog";
const url = "https://dev.to/api/articles";
const fetcher = (...args) => fetch(...args).then((res) => res.json());

const tags = ["Design", "Travel", "Fashion", "Technology", "Branding"];

const Page = () => {
  const { data: blogs = {}, error, isLoading } = useSWR(url, fetcher);
  const [load, setLoad] = useState(6);
  const [hide, setHide] = useState(4);
  const [view, setView] = useState(5);
  if (isLoading) {
    return <p>...loading</p>;
  }

  if (error) {
    return <p>...oh sorry error</p>;
  }
  const posts = blogs.slice(0, hide);
  const cards = blogs.slice(0, load);
  const tags = blogs.slice(0, view);
  // const cards = blogs.slice(0, hide);
  const viewAll = () => {
    setView((p) => p + 25);
  };
  const hidemore = () => {
    setHide((p) => p + 4);
  };
  const loadmore = () => {
    setLoad((p) => p + 6);
  };

  return (
    <div className="">
      <div className="w-[1917px] py-8  flex mx-auto  max-w-[1230px]">
        <Logo />
        <div className="flex text-2xl items-center">
          <h1 className="text-[#3B3C4A] ">Meta</h1>
          <h1 className="text-[#141624] font-bold">Blog</h1>
        </div>

        <div className="flex w-[667px] gap-10 justify-center items-center">
          <Link href={`/`}>Home</Link>
          <Link href={`blog/`}>Blog</Link>
          <Link>Contact</Link>
        </div>
        <div className="flex bg-[#F4F4F5] rounded-md p-2 ">
          <Input />
          <Searching />
        </div>
      </div>
      <div>
        <Hero />

        <div className="mx-auto  max-w-[1230px]">
          <Title text={"Trending"} />
        </div>
        <div className="  mb-[100px] mt-8 mx-auto  max-w-[1230px] ">
          <div className=" flex mx-auto  max-w-[1230px] gap-5 mt-8 mb-[100px]">
            {posts.map((blog, index) => {
              return (
                <div key={blog.id}>
                  <Trend
                    id={blog.id}
                    key={index}
                    img={blog.cover_image}
                    text={blog.title}
                    tags={blog.tag_list[0]}
                  />
                </div>
              );
            })}
          </div>
        </div>
        <Blog />
      </div>
      <div className="mx-auto  max-w-[1230px]">
        <Title text={"All blog post"} />
        <div className="flex gap-5 mt-8 mb-8 flex-wrap">
          <p className="text-xs font-bold text-[#D4A373]">All</p>
          {tags.map((blog, index) => {
            return <Tags key={index} text={blog.tag_list[0]} />;
          })}
          <button className="flex ml-auto" onClick={viewAll}>
            View All
          </button>
        </div>
      </div>
      <div className="grid grid-cols-3  max-w-[1230px] mx-auto ">
        {cards.map((blog) => (
          <Link href={`blog/${blog.id}`}>
            <Blog />
          </Link>
        ))}
      </div>

      <About />
    </div>
  );
};

export default Page;
