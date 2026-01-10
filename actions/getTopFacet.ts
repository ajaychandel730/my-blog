import { SearchFacet } from "@/types/blog";
import { getErrorMessage } from "@/utils/errors";

export default async function (limit:number):Promise<SearchFacet[]> {
     try{
      const res = await fetch(process.env.DOMAIN_NAME + `/api/blogs/category/filters?limit=${limit}`, {
        method : "GET",
        headers : {
            "Accept" : "application/json",
        },
        next : {
            revalidate : 43200,
            tags : ["get_top_facet"],
        }
      });

      const data = await res.json();

      if(data?.status == "ok" && "result" in data && Array.isArray(data.result)){
        return data.result;

      }else{
        return [];
      }
      
     }catch(err){
        console.log("homeFacetError:", getErrorMessage(err));
        return [];
     }
};