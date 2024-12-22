import { useState } from "react";
import { Blog } from "./Blog";

const BigBlog = (props) => {
  const { filteredBlogs } = props;

  const [load, setLoad] = useState(9);

  if (!Array.isArray(filteredBlogs) || filteredBlogs.length === 0) {
    return <p>No blogs to display</p>;
  }

  const cards = filteredBlogs.slice(0, Math.min(load, filteredBlogs.length));

  const loadmore = () => {
    setLoad((p) => p + 9);
  };

  return (
    <div className="max-w-[1230px] mx-auto">
      <div className="grid grid-cols-3 gap-4">
        {cards.map((blog, index) => {
          const { cover_image, tag_list, title, published_at } = blog || {};
          if (!cover_image || !tag_list || !title || !published_at) return null;

          return (
            <div key={index}>
              <Blog
                key={blog.id}
                image={cover_image}
                tags={tag_list}
                title={title}
                date={published_at}
              />
            </div>
          );
        })}
      </div>
      <div className="flex justify-center items-center max-w-[1230px] mx-auto mt-4 mb-4">
        {load < filteredBlogs.length && (
          <button
            onClick={loadmore}
            className="py-3 px-5 flex justify-center items-center w-fit h-10 rounded-md border border-s-gray-400"
          >
            Load more
          </button>
        )}
      </div>
    </div>
  );
};

export default BigBlog;
