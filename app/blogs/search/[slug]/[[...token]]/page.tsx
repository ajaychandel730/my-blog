import React, { Suspense } from 'react';
import SearchBlogs from '@/app/components/searchPage/SearchBlogs';
import BlogLoading from '@/app/components/blogs/BlogLoading';

type Props = {
  params : Promise<{slug : string; token?:string[]}>;
}

const SearchPage = async ({params}: Props) => {
  const {slug, token} =  (await params);
  const query = decodeURIComponent(slug);
  const searchToken:(string|undefined) = token? decodeURIComponent(token[0]) : undefined;

  return (
    <>
      <Suspense fallback={<BlogLoading/>}>
      <SearchBlogs query={query} token={searchToken}/>
      </Suspense>
    </>
  )
}

export default SearchPage