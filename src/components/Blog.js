import moment from "moment";
import Link from "next/link";

export const Blog = (props) => {
  const { image, tags, title, date, id } = props;
  return (
    <Link href={`blog/${id}`}>
      <div>
        <div className="px-4 py-2 border border-solid rounded-xl flex flex-col  w-[360px]  gap-6  mt-5   ">
          <img className="w-[360px] h-[240px] rounded-md" src={image} />
          <div className="flex gap-2 flex-wrap">
            {tags.map((tag) => {
              return (
                <p className="text-[#4B6BFB] bg-[#f3f6f9] w-fit rounded-md px-2 flex-wrap">
                  {tag}
                </p>
              );
            })}
          </div>

          <h2 className="font-semibold text-xl">{title}</h2>
          <p className="text-[#97989F]"> {moment(date).format("ll")}</p>
        </div>
      </div>
    </Link>
  );
};
