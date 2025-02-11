export default function(date:string):string{
    const getDate  = new Date(date);
    if(isNaN(getDate.getTime())) return "";

    return getDate.toLocaleDateString(undefined, {
        month: "short",
        day: "numeric",
        year: "numeric",
      })
};