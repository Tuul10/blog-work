import useSWR from "swr";
import moment from "moment";
import { Tags } from "./Tags";
import { useState } from "react";
import { Left } from "./Left";
import { Right } from "./Right";
import Link from "next/link";

const url = "https://dev.to/api/articles";
const fetcher = (...args) => fetch(...args).then((res) => res.json());

export const Hero = () => {
  const { data: blogs = {}, error, isLoading } = useSWR(url, fetcher);
  const [slide, setSlide] = useState(1);

  if (isLoading) return null;

  if (error) {
    return <p>...oh sorry error</p>;
  }
  const nextSlide = () => {
    setSlide((prev) => prev + 1);
  };
  const prevSlide = () => {
    if (slide > 0) setSlide((prev) => prev - 1);
  };
  return (
    <div className="mx-auto max-w-[1230px] mt-[100px]">
      {blogs.map((blog, index) => {
        if (index === slide) {
          return (
            <Screen
              key={index}
              img={blog.cover_image}
              text={blog.title}
              tags={blog.tag_list[0]}
            />
          );
        }
      })}
      <div className="flex mr-auto gap-1 mb-[100px] justify-end">
        <button
          onClick={prevSlide}
          className="w-10 h-10 border border-solid-[#696A75] flex justify-center items-center"
        >
          <Left />
        </button>
        <button
          onClick={nextSlide}
          className="w-10 h-10 border border-solid-[#696A75] flex justify-center items-center"
        >
          <Right />
        </button>
      </div>
    </div>
  );
};

const Screen = (props) => {
  const { img, text, tags, date, id } = props;
  return (
    <Link href={`blog/${id}`}>
      <div className="relative">
        <div
          style={{
            height: 600,
            backgroundImage: `url(${img})`,
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            backgroundSize: "cover",
            borderRadius: "12px",
          }}
        ></div>
        <div className="p-10 bg-white text-start w-[598px] flex flex-col gap-7 absolute bottom-2 left-2 rounded-md">
          <div className="boder bg-blue-700 text-white py-1 px-[10px] font-normal text-sm rounded-lg w-fit ">
            {tags}
          </div>
          <div className="text-2xl font-medium">{text}</div>
          <div className="font-normal text-gray-400">
            {moment(date).format("ll")}
          </div>
        </div>
      </div>
    </Link>
  );
};
