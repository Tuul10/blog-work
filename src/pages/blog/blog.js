import Link from "next/link";
import { useState } from "react";
import useSWR from "swr";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

const Blog = (props) => {
  const { tag } = props;
  const url = `https://dev.to/api/articles?tag=${tag}`;
  const { data: blogs = {}, error, isLoading } = useSWR(url, fetcher);
  const [load, setLoad] = useState(9);
  console.log(blogs);
  if (isLoading) {
    return <p>...loading</p>;
  }

  if (error) {
    return <p>...oh sorry error</p>;
  }
  const loadmore = () => {
    setLoad((p) => p + 9);
  };

  const cards = blogs.slice(0, load);

  return (
    <div>
      <div className="grid grid-cols-3  max-w-[1230px] mx-auto ">
        {cards.map((blog) => (
          <Link href={`blog/${blog.id}`}>
            <div>
              <BlogCard
                key={blog.id}
                image={blog.cover_image}
                tags={blog.tag_list}
                title={blog.title}
                date={blog.published_at}
              />
            </div>
          </Link>
        ))}
      </div>
      <div className="  flex justify-center items-center   max-w-[1230px] mx-auto mt-4 mb-4">
        <button
          onClick={loadmore}
          className=" py-3 px-5 flex justify-center items-center w-fit h-10 rounded-md border border-s-gray-400"
        >
          Load more
        </button>
      </div>
    </div>
  );
};
export default Blog;

const BlogCard = (props) => {
  const { image, tags, title, date } = props;
  return (
    <div>
      <div className="px-4 py-2 border border-solid rounded-xl flex flex-col  w-[360px]  gap-6  mt-5   ">
        <img className="w-[360px] h-[240px] rounded-md" src={image} />
        <div className="flex gap-2">
          {tags.map((tag) => {
            return (
              <p className="text-[#4B6BFB] bg-[#f3f6f9] w-fit rounded-md px-2 flex-wrap">
                {tag}
              </p>
            );
          })}
        </div>

        <h2 className="font-semibold text-xl">{title}</h2>
        <p className="text-[#97989F]">{date}</p>
      </div>
    </div>
  );
};
