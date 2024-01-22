// Dependencies
import { Pagination, Divider } from "@nextui-org/react";
import { useLayoutEffect } from "react";

// Local Files
import BlogCard from "./BlogCard";
import blogSummary from "../assets/data.json";

const OurBlogs = () => {
  const courseCount = 50;

  useLayoutEffect(() => {});

  return (
    <div className="bg-[#e9ecef] px-[2rem] sm:px-[5rem] py-[5rem] flex flex-col gap-[3rem]">
      <div className="flex flex-col gap-[2rem]">
        <h1 className="font-['lilita_one'] text-[3rem] text-center">
          Our <span className="text-[#F5A524]">Blogs</span>
        </h1>
        <Divider />
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-[3rem]">
        {blogSummary.map((data, index) => (
          <BlogCard key={index} thumbnail={data.thumbnail} title={data.title} summary={data.summary} />
        ))}
      </div>
      <Pagination
        loop
        showControls
        color="warning"
        variant="flat"
        total={courseCount ? Math.ceil(courseCount / 15) : 1}
        initialPage={1}
        className="self-center"
        // onChange={setCurPage}
      />
    </div>
  );
};

export default OurBlogs;
