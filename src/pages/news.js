import Navbar from "@/components/Navbar";
import useSWR from "swr";
import Blog from "./blog/blog";
import { About } from "@/components/About";

const News = () => {
  return (
    <div>
      <Navbar />
      <div className="mt-12 mb-12 max-w-[1230px] mx-auto">
        <h1 className="text-2xl font-bold">All Blog Post</h1>
      </div>
      <Blog />
      <About />
    </div>
  );
};
export default News;
