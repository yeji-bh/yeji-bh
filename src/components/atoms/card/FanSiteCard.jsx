import {
  Card,
  CardBody,
  Typography,
  Chip
} from "@material-tailwind/react";
import { LazyLoadImage } from 'react-lazy-load-image-component';
import TwitterLogo from "/icons/twitter.png";
import WeiboLogo from "/icons/weibo.png";
import BiliBiliLogo from "/icons/bilibili.png";
import YoutubeLogo from "/icons/youtube.png";
import TikTokLogo from "/icons/tiktok.png";

const TYPE_COLORS = {
  "站子": "red",
  "资源": "blue",
  "数据": "green",
  "应援": "amber",
  "bot": "purple"
}

const PLATFORM_LOGOS = {
  "twitter": TwitterLogo,
  "weibo": WeiboLogo,
  "bilibili": BiliBiliLogo,
  "youtube": YoutubeLogo,
  "tiktok": TikTokLogo
}

export default function FanSiteCard({ name, url, avatar, type, platform }) {
  return (
    <Card className="w-full max-w-[26rem] m-3 rounded-md cursor-pointer" onClick={() => window.open(url, '_blank')}>
      <CardBody className="flex w-full items-center">
        <div className="flex flex-col">
          <LazyLoadImage
            className="rounded-full"
            width={68}
            height={68}
            src={avatar}
            alt={name}
          />
        </div>
        <div className="flex flex-col ml-3 flex-1">
          <div className="flex flex-row justify-between">
            <Typography as="span" variant="h6" color="blue-gray">
              {name}
            </Typography>
            <LazyLoadImage src={PLATFORM_LOGOS[platform]} width={25} height={25} />
          </div>
          <div className="flex mt-2">
            <Chip className="rounded-full" variant="outlined" value={type} color={TYPE_COLORS[type]} />
          </div>
        </div>
      </CardBody>
    </Card>
  );
}