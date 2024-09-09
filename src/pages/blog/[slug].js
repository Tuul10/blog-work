import { useRouter } from "next/router";
import useSWR from "swr";
import parse from "html-react-parser";
import { Logo } from "@/components/Logo";
import { Input } from "../../components/Input";
import { Searching } from "@/components/Searching";
import { Item } from "@/components/Item";

const texts = ["Home", "Blog", "Contact"];
const fetcher = (...args) => fetch(...args).then((res) => res.json());

const Slug = () => {
  const router = useRouter();
  const slug = router.query.slug;
  const url = `https://dev.to/api/articles/${slug}`;

  const { data: blogDetail = {}, isLoading } = useSWR(url, fetcher);

  if (isLoading) return null;

  const body_html = blogDetail?.body_html;
  console.log(body_html);

  return (
    <div>
      <div className="w-[1917px] py-8  flex mx-auto  max-w-[1230px]">
        <Logo />
        <div className="flex text-2xl items-center">
          <h1 className="text-[#3B3C4A] ">Meta</h1>
          <h1 className="text-[#141624] font-bold">Blog</h1>
        </div>

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
      <div className="mx-auto w-[800px]">{parse(body_html)}</div>
    </div>
  );
};
export default Slug;
