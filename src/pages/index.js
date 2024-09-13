import useSWR from "swr";

import { Title } from "@/components/Title";
import { Trend } from "@/components/Trend";
import { useContext, useState } from "react";
import { About } from "@/components/About";
import Blog from "./blog/blog";
import Navbar from "@/components/Navbar";
import { ThemeContext } from "@/components/ThemeContext";
import { Hero, Screen } from "@/components/Hero";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

const Page = (props) => {
  const [numberOfTags, setNumberOfTags] = useState(5);
  const url3 = `https://dev.to/api/tags?per_page=${numberOfTags}`;
  const { data: tags = [] } = useSWR(url3, fetcher);
  const [tagName, setTagName] = useState("all");
  const url2 = `https://dev.to/api/articles?tag=${tagName}`;
  const { data: blogs = {}, error, isLoading } = useSWR(url2, fetcher);
  const light = useContext(ThemeContext);
  const [hide, setHide] = useState(4);
  const [tagCountChangeText, setTagCountChangeText] = useState("All view");
  const [slide, setSlide] = useState(1);

  if (isLoading) {
    return <p>...loading</p>;
  }

  if (error) {
    return <p>...oh sorry error</p>;
  }

  const posts = blogs.slice(0, hide);
  const changeTagCountText = () => {
    if (tagCountChangeText === "All view") setTagCountChangeText("Show less");
    else {
      setTagCountChangeText("All view");
    }
  };

  const onClickShowTag = () => {
    changeTagCountText();
    viewAll();
  };

  const viewAll = () => {
    if (numberOfTags === 5) setNumberOfTags(50);
    else {
      setNumberOfTags(5);
    }
  };
  const hidemore = () => {
    setHide((p) => p + 4);
  };

  const handleSelectTag = (tag) => {
    setTagName(tag);
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
          <p className="text-xs flex font-bold items-center justify-center text-[#D4A373]">
            All
          </p>
          <div className="flex gap-5 flex-wrap">
            {tags.map((tag, index) => {
              return (
                <p
                  className="flex flex-wrap"
                  onClick={() => handleSelectTag(tag.name)}
                  key={index}
                >
                  {tag.name}
                </p>
              );
            })}
          </div>
          <button className="flex ml-auto" onClick={onClickShowTag}>
            {tagCountChangeText}
          </button>
        </div>
      </div>
      <Blog tag={`${tagName}`} />
      <About />
    </div>
  );
};

export default Page;

export async function getServerSideProps() {
  try {
    const response = await fetch(`https://dev.to/api/articles`);
    const articles = await response.json();

    return {
      props: {
        articles,
      },
    };
  } catch (error) {
    return {
      notFound: true,
    };
  }
}
