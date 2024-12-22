import { Blog } from "@/components/Blog";
import useSWR from "swr";
import { useState } from "react";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

const AllBlog = () => {
  const [load, setLoad] = useState(9); // Load more-д ашиглах төлөв
  const {
    data: blogs = [],
    error,
    isLoading,
  } = useSWR("https://dev.to/api/articles", fetcher);

  if (isLoading) {
    return <p>...loading</p>;
  }
  if (error) {
    return <p>...oh sorry error</p>;
  }

  const posts = blogs.slice(0, load);

  const loadMore = () => {
    setLoad((prev) => prev + 9); // Илүү бичлэг ачааллах
  };

  return (
    <div>
      <div className="max-w-[1230px] mx-auto">
        <h1 className="text-xl font-bold mt-[50px] mb-[20px] p-4">All Blog</h1>
      </div>
      <div className="max-w-[1230px] mx-auto">
        <div className="grid grid-cols-3 gap-4">
          {posts.map((blog) => (
            <Blog
              key={blog.id}
              image={blog.cover_image}
              tags={blog.tag_list}
              title={blog.title}
              date={blog.published_at}
            />
          ))}
        </div>
      </div>
      <div className="flex justify-center items-center max-w-[1230px] mx-auto mt-4 mb-4">
        <button
          onClick={loadMore}
          className="py-3 px-5 flex justify-center items-center w-fit h-10 rounded-md border border-s-gray-400"
        >
          Load more
        </button>
      </div>
    </div>
  );
};

export default AllBlog;
