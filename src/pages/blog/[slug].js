import { useRouter } from "next/router";
import useSWR from "swr";
import Markdown from "react-markdown";
import Navbar from "@/components/Navbar";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

const Slug = () => {
  const router = useRouter();
  const slug = router.query.slug;
  const url = `https://dev.to/api/articles/${slug}`;

  const { data: blogDetail = {}, isLoading } = useSWR(url, fetcher);
  console.log(blogDetail);
  if (isLoading) return null;

  const bodyMarkdown = blogDetail?.body_markdown;

  return (
    <div>
      <div className="mx-auto w-[800px] prose">
        <Markdown>{bodyMarkdown}</Markdown>
      </div>
    </div>
  );
};
export default Slug;
