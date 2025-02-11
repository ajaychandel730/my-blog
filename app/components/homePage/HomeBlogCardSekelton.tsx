import React from "react";
import { Skeleton } from "@nextui-org/skeleton";
import { Card, CardHeader, CardBody, CardFooter } from "@nextui-org/card";

const HomeBlogCardSekelton = () => {
  return (
    <Card className={"py-4 w-full lg:w-[700px]"} shadow={"none"} radius="none" >
      <CardBody className="overflow-visible py-2 flex-col items-center md:items-start space-y-4">
        <Skeleton className="w-full h-[350px] rounded-lg">
          <div className="h-full w-full"></div>
        </Skeleton>
        <div className="space-y-3 w-full">
          <Skeleton className="w-3/5 rounded-lg">
            <div className="h-3 w-3/5 rounded-lg bg-default-200"></div>
          </Skeleton>
          <Skeleton className="w-4/5 rounded-lg">
            <div className="h-3 w-full rounded-lg bg-default-200"></div>
          </Skeleton>
          <Skeleton className="w-2/5 rounded-lg">
            <div className="h-3 w-full rounded-lg bg-default-300"></div>
          </Skeleton>
        </div>
      </CardBody>
    </Card>
  );
};

export default HomeBlogCardSekelton;
