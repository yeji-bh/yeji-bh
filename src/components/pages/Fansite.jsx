import React from "react";
import { Alert, Typography } from "@material-tailwind/react";
import FanSiteCard from "../atoms/card/FanSiteCard";
import List from "../molecules/List";
import FanSiteData from "../../data/fansite.json";

const FanSite = () => {
  return (
    <div className="pt-6">
      <Typography as="span" color="gray" style={{ textAlign: 'center' }}>
        仅整理只发黄礼志且近期还有在更新的。
      </Typography>
      {Object.keys(FanSiteData).map(platform => (
        <div className="mt-5">
          <Typography variant="h4" style={{ textAlign: 'center' }}>{platform}</Typography>
          <div className="mt-5 flex justify-center">
            <List data={FanSiteData[platform]} Element={FanSiteCard} />
          </div>
        </div>
      ))}
    </div>
  )
}

export default FanSite;