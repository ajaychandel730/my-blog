import React from "react";


interface FormLinkProps {
  text: string;
  linkText: string;
  href: string;
}

 const  FormLink = ({ text, linkText, href }: FormLinkProps)=>{
  return (
    <div className="mt-6 text-center">
      <p className="text-gray-500 dark:text-gray-400">
        {text}{" "}
        <a
          href={href}
          className="text-blue-600 hover:underline dark:text-blue-500"
        >
          {linkText}
        </a>
      </p>
    </div>
  );
}

export default FormLink;