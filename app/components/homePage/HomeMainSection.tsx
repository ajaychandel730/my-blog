import React, { Suspense } from 'react'
import HomeBlogs from './HomeBlogs'
import HomeBlogCardSekelton from './HomeBlogCardSekelton';

const getBlogs = async()=>{
  try{
   const res = await fetch(`${process.env.DOMAIN_NAME}/api/getBlogs/?page=1&limit=10`, {next : {revalidate : 10800}});
   const data = await res.json();

   if(data.status === "ok" && !!data.data){
    return data.data
   }

   return [];
  }catch(err){
   console.log(err);
   return []
  }
}

const HomeMainSection = async() => {
  const blogs = getBlogs(); 
  return (
    <section className='mt-20 flex flex-col items-center mx-auto  w-full lg:w-[900px]'>
      <Suspense fallback={<HomeBlogCardSekelton/>}>
        <HomeBlogs blogs={blogs}/>
      </Suspense>
    </section>
  )
}

export default HomeMainSection