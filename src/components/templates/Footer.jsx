import React from "react";
import { Typography } from "@material-tailwind/react";

export default function Footer() {
  return (
    <footer className="w-full bg-white p-8">
      <hr className="my-8 border-blue-gray-50" />
      <Typography color="blue-gray" className="text-center font-normal select-none">
        微博 <a href="https://weibo.com/u/7786771214" target="_blank">@luyuxxouo</a> | 有任何问题欢迎私信
      </Typography>
    </footer>
  );
}