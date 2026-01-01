import React from "react";
import { Skeleton } from "@heroui/skeleton";
import { Card, CardBody } from "@heroui/card";

type Props = {
  limit?: number;
};

const HomeBlogCardSekelton = ({ limit = 10 }: Props) => {
  return (
    <div className="mt-20 flex">
      {Array(limit)
        .fill(1)
        .map((_, idx) => (
          <Card
            key={idx}
            className={"py-4 w-full lg:w-[700px] rounded-lg dark:bg-midnight-900"}
            shadow={"none"}
            radius="none"
          >
            <CardBody className="overflow-visible py-2 flex-col items-center md:items-start space-y-4">
              <Skeleton className="w-full h-[350px] rounded-lg dark:bg-midnight-800">
                <div className="h-full w-full"></div>
              </Skeleton>
              <div className="space-y-3 w-full">
                <Skeleton className="w-3/5 rounded-lg dark:bg-midnight-800">
                  <div className="h-3 w-3/5 rounded-lg bg-default-200"></div>
                </Skeleton>
                <Skeleton className="w-4/5 rounded-lg dark:bg-midnight-800">
                  <div className="h-3 w-full rounded-lg bg-default-200"></div>
                </Skeleton>
                <Skeleton className="w-2/5 rounded-lg dark:bg-midnight-800">
                  <div className="h-3 w-full rounded-lg bg-default-300"></div>
                </Skeleton>
              </div>
            </CardBody>
          </Card>
        ))}
    </div>
  );
};

export default HomeBlogCardSekelton;
