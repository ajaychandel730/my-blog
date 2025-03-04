type DateFormatOptions = {
  weekday?: 'narrow' | 'short' | 'long';
  era?: 'narrow' | 'short' | 'long';
  year?: 'numeric' | '2-digit';
  month?: 'numeric' | '2-digit' | 'narrow' | 'short' | 'long';
  day?: 'numeric' | '2-digit';
  hour?: 'numeric' | '2-digit';
  minute?: 'numeric' | '2-digit';
  second?: 'numeric' | '2-digit';
  timeZoneName?: 'short' | 'long';
  hour12?: boolean;
  timeZone?: string;
};


export default function(date:string, options : DateFormatOptions={}):string{
    const getDate  = new Date(date);
    if(isNaN(getDate.getTime())) return "";

    const defaultOptions:DateFormatOptions = {
      month: "short",
      day: "numeric",
      year: "numeric",
      ...options
    }  

    return getDate.toLocaleDateString(undefined, {...defaultOptions})
};