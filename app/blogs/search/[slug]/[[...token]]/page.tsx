import React from 'react';
import SearchBlogs from '@/app/components/searchPage/SearchBlogs';

type Props = {
  params : Promise<{slug : string; token?:string[]}>;
}

const SearchPage = async ({params}: Props) => {
  const {slug, token} =  (await params);
  const query = decodeURIComponent(slug);
  const searchToken:(string|undefined) = token? decodeURIComponent(token[0]) : undefined;

  return (
    <>
      <SearchBlogs query={query} token={searchToken}/>
    </>
  )
}

export default SearchPage