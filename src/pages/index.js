import useSWR from "swr";
import { Title } from "@/components/Title";
import { Trend } from "@/components/Trend";
import { useContext, useState } from "react";
import { ThemeContext } from "@/components/ThemeContext";
import { Hero } from "@/components/Hero";
import BigBlog from "../components/BigBlog";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

const Page = (props) => {
  const url = "https://dev.to/api/articles";
  const [numberOfTags, setNumberOfTags] = useState(5);
  const url3 = `https://dev.to/api/tags?per_page=${numberOfTags}`;
  const { data: tags = [] } = useSWR(url3, fetcher);
  const [tagName, setTagName] = useState("");
  const { data: blogs = {}, error, isLoading } = useSWR(url, fetcher);
  const light = useContext(ThemeContext);
  const [hide, setHide] = useState(4);
  const [tagCountChangeText, setTagCountChangeText] = useState("All view");

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
    if (numberOfTags === 5) setNumberOfTags(30);
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

  const allTags = () => {};

  const filteredBlogs = blogs.filter((blog) => {
    if (tagName === "") {
      return blog;
    }
    return blog.tag_list.includes(tagName);
  });

  return (
    <div className="">
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
          <p
            onClick={allTags}
            className="text-xs flex font-bold items-center justify-center text-[#D4A373]"
          >
            All
          </p>
          <div className="flex gap-5 flex-wrap">
            {tags.map((tag, index) => {
              return (
                <p
                  className="flex flex-wrap"
                  onClick={() => {
                    handleSelectTag(tag.name);
                  }}
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
      <BigBlog filteredBlogs={filteredBlogs} />
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
