import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
import Image from "next/image";
import { Avatar, AvatarFallback } from "../ui/avatar";
import Link from "next/link";
import moment from "moment";

type Props = {
  title: string;
  description: string;
  slug: string;
  image: any;
  createdAt: string;
};

function ArticleCard({ title, description, slug, image, createdAt }: Props) {
  return (
    <Link
      href={`/blog/${slug}`}
      className=" w-full border border-[#cccccc30] p-2 rounded-md"
    >
      <Image
        src={image}
        width={500}
        height={500}
        alt={title}
        className="rounded max-h-[350px] xl:max-h-[400px] object-cover"
      />
      <div className="p-2 flex flex-col gap-3">
        <p className="font-normal text-sm text-time">
          {moment(createdAt).format("MMM Do YY")}
        </p>
        <h1 className="text-xl xl:text-2xl font-semibold hover:underline line-clamp-2">
          {title}
        </h1>
        <div className="flex items-center gap-4">
          <Avatar>
            <AvatarFallback>MA</AvatarFallback>
          </Avatar>
          <div className="flex flex-col">
            <h1 className="font-bold text-base text-text">Mechbiche Ahmed</h1>
            <p className="text-sm text-time">President</p>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default ArticleCard;
