import { useState } from "react";
import { Blog } from "./Blog";

const BigBlog = (props) => {
  const { filteredBlogs } = props;

  const [load, setLoad] = useState(9);

  const cards = filteredBlogs.slice(0, load);

  const loadmore = () => {
    setLoad((p) => p + 9);
  };

  return (
    <div className="max-w-[1230px] mx-auto">
      {/* <div>
        <h1 className="text-xl font-bold mt-[50px] mb-[20px] p-4">All Blog</h1>
      </div> */}
      <div className="grid grid-cols-3   ">
        {cards.map((blog, index) => (
          <div key={index}>
            <Blog
              key={blog.id}
              image={blog.cover_image}
              tags={blog.tag_list}
              title={blog.title}
              date={blog.published_at}
            />
          </div>
        ))}
        <div></div>
        <div className="  flex justify-center items-center   max-w-[1230px] mx-auto mt-4 mb-4">
          <button
            onClick={loadmore}
            className=" py-3 px-5 flex justify-center items-center w-fit h-10 rounded-md border border-s-gray-400"
          >
            Load more
          </button>
        </div>
      </div>
    </div>
  );
};
export default BigBlog;
