import { sortBlogs } from "@/src/utils";
import React from "react";
import BlogLayoutOne from "../Blog/BlogLayoutOne";
import BlogLayoutTwo from "../Blog/BlogLayoutTwo";

const FeaturedPosts = ({ blogs }) => {
  const sortedBlogs = sortBlogs(blogs);
  
  // Ensure we have enough blogs and they have the required properties
  if (!sortedBlogs || sortedBlogs.length < 4) {
    return null;
  }

  // Filter blogs that have all required properties
  const validBlogs = sortedBlogs.filter(blog => 
    blog && blog.title && blog.slug && (blog.url || blog.slug) && blog.image
  );

  if (validBlogs.length < 4) {
    return null;
  }

  return (
    <section className="w-full mt-16 sm:mt-24 md:mt-32 px-5 sm:px-10 md:px-24 sxl:px-32 flex flex-col items-center justify-center">
      <h2 className="w-full inline-block font-bold capitalize text-2xl md:text-4xl text-dark dark:text-light">
        Featured Posts
      </h2>

      <div className="grid grid-cols-2 grid-rows-2 gap-6 mt-10 sm:mt-16">
        <article className="col-span-2 sxl:col-span-1 row-span-2 relative">
          <BlogLayoutOne blog={validBlogs[1]} />
        </article>
        <article className="col-span-2 sm:col-span-1 row-span-1 relative">
          <BlogLayoutTwo blog={validBlogs[2]} />
        </article>
        <article className="col-span-2 sm:col-span-1 row-span-1 relative">
          <BlogLayoutTwo blog={validBlogs[3]} />
        </article>
      </div>
    </section>
  );
};

export default FeaturedPosts;
