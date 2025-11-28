import React from "react";
import EmptyBlogs from "./EmptyBlogs";
import BlogBrief from "../blogs/BlogBrief";

type Props = {
  blogs: Promise<
    { _id: string; title: string; banner: string; description: string }[]
  >;
};

const HomeBlogs = async({ blogs }: Props) => {
  const allBlogs =  await blogs;

  return  Array.isArray(allBlogs) && allBlogs.length > 0 ? (
    <div className="flex space-y-4 flex-col items-center mx-auto w-full ">
      {allBlogs.map(({ _id, title, banner, description }) => (
        <BlogBrief
          key={_id}
          _id={_id}
          title={title}
          banner={banner}
          description={description}
        />
      ))}
    </div>
  ) : (
    <EmptyBlogs />
  );
};

export default HomeBlogs;

//   const { data, error, isLoading } = useSWR(
//     "/api/getBlogs/?page=1&limit=10",
//     fetcheAllPublishBlogs,
//     {
//     dedupingInterval: 60000, // cache for 1 min
//     revalidateOnFocus: false
//     }
//   );
//   const blogData = !data || !("data" in data) ? [] : data.data;
//   const blogs: TBlogCard[] = blogData
//     ? Array.isArray(blogData)
//       ? blogData
//       : []
//     : [];

//   if (typeof error === "object" && "status" in error && error.status >= 400) {
//     toast.warn(
//       error.message || "Something went wrong on server. Please try later."
//     );
//   }

//   if (blogs.length == 0 && isLoading) {
//     return Array(10)
//       .fill(1)
//       .map((_, idx) => <HomeBlogCardSekelton key={idx} />);
//   }

//   return blogs.length > 0 ? (
//     <div className="flex space-y-4 flex-col items-center mx-auto w-full ">
//       {blogs.map(({ _id, title, banner, description }) => (
//         <BlogBrief
//           key={_id}
//           _id={_id}
//           title={title}
//           banner={banner}
//           description={description}
//         />
//       ))}
//     </div>
//   ) : (
//     <EmptyBlogs />
//   );
// };

// export default HomeBlogs;
