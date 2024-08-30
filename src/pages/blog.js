import useSWR from "swr";
const url = "https://dev.to/api/articles";
const fetcher = (...args) => fetch(...args).then((res) => res.json());

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
    <div className="max-w-[1000px] grid grid-cols-3 mx-auto">
      {data.map((blog) => {
        return (
          <div className="w-[392px] h-[592px] rounded-2xl p-4 gap-4">
            <BlogCard
              key={blog.id}
              image={blog.cover_image}
              tag={blog.tags}
              title={blog.title}
              date={blog.published_at}
            />
          </div>
        );
      })}
    </div>
  );
};

export default Page;

const BlogCard = (props) => {
  const { image, tag, title, date } = props;
  return (
    <div>
      <div className="px-4 py-2 border border-solid rounded  w-[392px] h-[592px] gap-6 max-w-[1256px] justify-center items-center">
        <img className="w-[360px] h-[240px]" src={image} alt={title} />
        <p className="text-[#4B6BFB] bg-[#d5daec] w-fit">{tag}</p>
        <h2 className="font-semibold text-xl">{title}</h2>
        <p className="text-[#97989F]">{date}</p>
      </div>
    </div>
  );
};
