import { Blog } from "@/components/Blog";
import useSWR from "swr";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

const allBlog = () => {
  const url = "https://dev.to/api/articles";
  // const { data: blogs = {}, error, isLoading } = useSWR(url, fetcher);

  if (isLoading) {
    return <p>...loading</p>;
  }
  if (error) {
    return <p>...oh sorry error</p>;
  }

  const posts = blogs.slice(0, load);

  const loadmore = () => {
    setLoad((p) => p + 9);
  };

  return (
    <div>
      <div className="max-w-[1230px] mx-auto">
        <h1 className="text-xl font-bold mt-[50px] mb-[20px] p-4">All Blog</h1>
      </div>
      <div className="max-w-[1230px] mx-auto">
        <div className="grid grid-cols-3   ">
          {posts.map((blog) => {
            return (
              <Blog
                key={blog.id}
                image={blog.cover_image}
                tags={blog.tag_list}
                title={blog.title}
                date={blog.published_at}
              />
            );
          })}
        </div>
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
export default allBlog;
