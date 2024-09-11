import useSWR from "swr";
import { Hero } from "@/components/Hero";
import { Title } from "@/components/Title";
import { Tags } from "@/components/Tags";
import { Trend } from "@/components/Trend";
import { useContext, useState } from "react";
import { About } from "@/components/About";
import Blog from "./blog/blog";
import Navbar from "@/components/Navbar";
import { ThemeContext } from "@/components/ThemeContext";
const url = "https://dev.to/api/articles";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

const Page = () => {
  const { data: blogs = {}, error, isLoading } = useSWR(url, fetcher);
  const light = useContext(ThemeContext);
  const [hide, setHide] = useState(4);
  const [tagCount, setTagCount] = useState(5);

  console.log(light);
  if (isLoading) {
    return <p>...loading</p>;
  }

  if (error) {
    return <p>...oh sorry error</p>;
  }
  const posts = blogs.slice(0, hide);
  const tags = blogs.slice(0, tagCount);

  // const cards = blogs.slice(0, hide);
  const viewAll = () => {
    setTagCount(tagCount.length);
  };
  const hidemore = () => {
    setHide((p) => p + 4);
  };

  return (
    <div className="">
      <Navbar />
      <div>
        <Hero />
        <div className="mx-auto  max-w-[1230px]">
          <Title text={"Trending"} />
        </div>
        <div className="  ">
          <div className=" flex  gap-5 mt-8 mb-[100px] mx-auto  max-w-[1230px]">
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
      </div>
      <div className="mx-auto  max-w-[1230px]">
        <Title text={"All blog post"} />
        <div className="flex gap-5 mt-8 mb-8 flex-wrap">
          <p className="text-xs font-bold text-[#D4A373]">All</p>
          {tags.map((blog, index) => {
            return (
              <div>
                <Tags key={index} text={blog.tag_list[0]} />
              </div>
            );
          })}
          <button className="flex ml-auto" onClick={viewAll}>
            View All
          </button>
        </div>
      </div>
      <Blog />
      <About />
    </div>
  );
};

export default Page;
