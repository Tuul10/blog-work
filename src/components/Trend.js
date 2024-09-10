import Link from "next/link";
export const Trend = (props) => {
  const { img, tags, text, id } = props;
  return (
    <Link href={`blog/${id}`}>
      <div className="relative carousel-item card">
        <div className="">
          <div
            style={{
              height: 320,
              width: 289,
              backgroundImage: `url(${img})`,
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
              backgroundSize: "cover",
              borderRadius: "12px",
            }}
          ></div>
          <div className="p-2 text-start w-[230px] flex flex-col gap-7 absolute bottom-2 left-2 rounded-md">
            <div className=" boder bg-blue-700 text-white py-1 px-[10px] font-normal text-sm rounded-lg w-fit">
              {tags}
            </div>
            <div className="text-lg text-white font-medium">{text}</div>
          </div>
        </div>
      </div>
    </Link>
  );
};
