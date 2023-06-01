import React from "react"
import {
  Card,
  CardBody,
  Typography,
} from "@material-tailwind/react";

const VideoCard = ({ name, cover, url }) => {
  return (
    <Card className="w-fit mx-3 rounded-none mb-4 cursor-pointer" onClick={() => window.open(url, '_blank')}>
      <CardBody className="p-0 select-none" style={{ width: 210, height: 190 }}>
        <img
          style={{ width: 210, height: 120 }}
          src={cover}
          alt={name}
        />
        <Typography className="text-sm mt-4 text-center px-3">
          {name}
        </Typography>
      </CardBody>
    </Card>
  )
}

export default VideoCard