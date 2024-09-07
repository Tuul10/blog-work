import { Item } from "@/components/Item";
import { Logo } from "@/components/Logo";
import { Input } from "../components/Input";
import useSWR from "swr";
import { Searching } from "@/components/Searching";
import { Hero } from "@/components/Hero";
import { Right } from "@/components/Right";
import { Left } from "@/components/Left";
const url = "https://dev.to/api/articles";
const fetcher = (...args) => fetch(...args).then((res) => res.json());

const texts = ["Home", "Blog", "Contact"];

const Page = () => {
  const { data, error, isLoading } = useSWR(url, fetcher);
  console.log(data);
  if (isLoading) {
    return <p>...loading</p>;
  }

  if (error) {
    return <p>...oh sorry error</p>;
  }

  return (
    <div>
      <div className="w-[1917px] py-8  flex mx-auto  max-w-[1230px]">
        <Logo />
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
        <div className="flex mr-auto gap-1">
          <Left />
          <Right />
        </div>
      </div>
      <div className="grid grid-cols-3  max-w-[1230px] mx-auto ">
        {data.map((blog) => {
          return (
            <div>
              <BlogCard
                key={blog.id}
                image={blog.cover_image}
                tag={blog.tags[0]}
                title={blog.title}
                date={blog.published_at}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Page;

const BlogCard = (props) => {
  const { image, tag, title, date } = props;
  return (
    <div>
      <div className="px-4 py-2 border border-solid rounded-xl flex flex-col  w-[360px] h-[592px] gap-6  mt-5   ">
        <img className="w-[360px] h-[240px] rounded-md" src={image} />
        <p className="text-[#4B6BFB] bg-[#d5daec] w-fit">{tag}</p>
        <h2 className="font-semibold text-xl">{title}</h2>
        <p className="text-[#97989F]">{date}</p>
      </div>
    </div>
  );
};
