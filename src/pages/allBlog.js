"use client";

import { Blog } from "@/components/Blog";
import useSWR from "swr";
import { useState } from "react";
import BigBlog from "@/components/BigBlog";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

const AllBlog = () => {
  const url = "https://dev.to/api/articles";
  const { data: blogs = {}, error, isLoading } = useSWR(url, fetcher);

  if (isLoading) {
    return <p>...loading</p>;
  }
  if (error) {
    return <p>...oh sorry error</p>;
  }

  return (
    <div>
      <div className="max-w-[1230px] mx-auto">
        <h1 className="text-xl font-bold mt-[50px] mb-[20px] p-4">All Blog</h1>
      </div>
      <div className="max-w-[1230px] mx-auto">
        <div className=" gap-4">
          <BigBlog filteredBlogs={blogs} />
        </div>
      </div>
    </div>
  );
};

export default AllBlog;
