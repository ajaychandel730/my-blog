import React from 'react'
import BlogsEmptyState from '../blogs/BlogsEmptyState';
import EmptyBlogsErrorMessage from '../blogs/EmptyBlogsErrorMessage';

interface Props {
    isLoading : boolean;
    data: object[] | undefined;
    error : unknown;
}

const HandleErrrorMessage = ({isLoading, data, error}:Props) => {
  if (isLoading) return null;
  if (error || data && "status" in data[0] && data[0].status === "error") {
    return (
      <div className="flex w-full justify-center">
        <BlogsEmptyState type="connection_error" />
      </div>
    );
  }
  
  if (
    !data ||
    !("result" in data[0]) ||
    !Array.isArray(data[0].result) ||
    data[0].result.length == 0
  ) {
    return <EmptyBlogsErrorMessage />;
  }
  return null;
}

export default HandleErrrorMessage