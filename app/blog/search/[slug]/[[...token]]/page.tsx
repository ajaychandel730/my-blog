import Navbar from '@/app/components/Navbar'
import SearchBlogs from '@/app/components/SearchBlogs'
import React from 'react'
type Props = {
  params : Promise<{slug : string; token?:string[]}>;
}

const SearchPage = async ({params}: Props) => {
  
  const {slug, token} =  (await params);
  const query = decodeURIComponent(slug);
  const searchToken:(string|undefined) = token? decodeURIComponent(token[0]) : undefined;

  return (
    <>
      <Navbar/>
      <SearchBlogs query={query} token={searchToken}/>
    </>
  )
}

export default SearchPage