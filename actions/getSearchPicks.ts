"use server";
import { getErrorMessage } from "@/utils/errors";


export default async function(){
    try{
      const res = await fetch(process.env.DOMAIN_NAME + "/api/blogs/search/picksForYou", {
        method : "GET",
        headers : {
            "Accept" : "application/json", 
        },
        next : {
            revalidate : 3600,
            tags : ["get_search_picks"]
        }
      });

      const data = await res.json();
      if(data?.status == "ok" && "result" in data && Array.isArray(data.result)){
        return data.result;
      }else{
        return [];
      }
    }catch(err){
      console.log("HomePicksError", getErrorMessage(err));
      return [];
    }
}