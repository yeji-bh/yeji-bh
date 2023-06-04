import React from "react";
import Carousel from "../atoms/Carousel";
import AllData from "../../data/data.json";
import {
  Typography,
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
  Alert
} from "@material-tailwind/react";

const data = [
  {
    label: "生日",
    value: "birthday",
    body: <div>
      <Alert className="mb-3" color="red" variant="ghost">
        <Typography className="text-md font-bold">
          2023 生日世趋队内第一
        </Typography>
      </Alert>
      <div className="mb-3">
        <Typography className="text-lg font-bold">
          HWANG AND ONLY YEJI DAY
        </Typography>
        <Typography>
          🌏世趋 8 🇵🇭菲律宾 8 🇮🇩印尼 8 🇲🇾马来西亚 8 🇹🇭泰国 9 🇧🇷巴西 18 🇵🇷波多黎各 42 🇺🇸美国 47
        </Typography>
      </div>
      <div className="mb-3">
        <Typography className="text-lg font-bold">
          #AcePrincessYEJIday
        </Typography>
        <Typography>
          🇵🇭菲律宾 5 🇰🇷韩国 8 🇹🇭泰国 24 🇮🇩印尼 30
        </Typography>
      </div>
      <div className="mb-3">
        <Typography className="text-lg font-bold">
          #행복덩어리예지를만난건_행운이야
        </Typography>
        <Typography>
          🇵🇭菲律宾 6 🇰🇷韩国 8 🇹🇭泰国 24 🇮🇩印尼 30
        </Typography>
      </div>
      <div className="mb-3">
        <Typography className="text-lg font-bold">
          イェジちゃん
        </Typography>
        <Typography>
          🇯🇵日本 37
        </Typography>
      </div>
      <div className="mb-3">
        <Typography className="text-lg font-bold">
          Yeji
        </Typography>
        <Typography>
          🇮🇩印尼 28
        </Typography>
      </div>
      <Carousel images={AllData.birthday} />
      <Typography className="text-sm mt-3">
        (可点击图片放大)
      </Typography>
    </div>,
  }, {
    label: "搜索量",
    value: "searches",
    body: <div>
      <Alert className="mb-3" color="red" variant="ghost">
        <Typography className="text-md font-bold">
          2023 Google 全球搜索量队内第一、美国油管搜索量队内第一
        </Typography>
      </Alert>
      <Carousel images={AllData.searches} />
      <Typography className="text-sm mt-3">
        (可点击图片放大)
      </Typography>
    </div>,
  }, {
    label: "看秀",
    value: "show",
    body: <div>
      <Alert className="mb-3" color="red" variant="ghost">
        <Typography className="text-md font-bold">
          看秀全面数据超过队友，並无队友粉口中「看秀无人在意」一说
        </Typography>
      </Alert>
      <Carousel images={AllData.show} />
      <Typography className="text-sm mt-3">
        (可点击图片放大)
      </Typography>
    </div>,
  }, {
    label: "世巡",
    value: "worldtour",
    body: <div>
      <Alert className="mb-3" color="red" variant="ghost">
        <Typography className="text-md font-bold">
          世巡各平台收获多条万赞万转推文(微博)、百万播放甚至千万播放的视频
        </Typography>
      </Alert>
      <Carousel images={AllData.worldTour} />
      <Typography className="text-sm mt-3">
        (可点击图片放大)
      </Typography>
    </div>,
  }, {
    label: "River",
    value: "river",
    body: <div>
      <ul className="list-disc">
        <li>
          <Typography className="text-sm text-gray my-3">
            五代第一位且唯一单人舞蹈视频达到5000万播放的艺人
          </Typography>
        </li>
        <li>
          <Typography className="text-sm text-gray my-3">
            五代最高播放量、五代女爱豆中最高且唯一达到189万赞的单人舞蹈视频
          </Typography>
        </li>
        <li>
          <Typography className="text-sm text-gray my-3">
            五代第一位且唯一在脸书上超过33万点赞的艺人
          </Typography>
        </li>
        <li>
          <Typography className="text-sm text-gray my-3">
            本视频为AOTM栏目最快且唯一达到4000万 5000万播放量的视频
          </Typography>
        </li>
        <li>
          <Typography className="text-sm text-gray my-3">
            本视频为AOTM栏目最快达到2300万~5000万播放量的视频
          </Typography>
        </li>
        <li>
          <Typography className="text-sm text-gray my-3">
            本视频为2021年Studio Choom全频道发布的舞蹈视频(含团体)中播放量最高、点赞量最高的舞蹈视频
          </Typography>
        </li>
        <li>
          <Typography className="text-sm text-gray my-3">
            本视频为Studio Choom全频道点赞量第二高、单人视频中最高、播放量第三高且为全频道前十播放视频中唯一的单人视频
          </Typography>
        </li>
      </ul>
      <Carousel images={AllData.river} />
      <Typography className="text-sm mt-3">
        (可点击图片放大)
      </Typography>
    </div>,
  }
]

const Data = () => {
  return (
    <div className="mt-5 px-5 w-full">
      <Typography className="text-lg font-bold my-3">
        2023 最新数据
      </Typography>
      <Tabs value="birthday">
        <TabsHeader
          className="bg-transparent"
          indicatorProps={{
            className: "bg-blue-500/10 shadow-none text-blue-500",
          }}
        >
          {data.map(({ label, value }) => (
            <Tab key={value} value={value}>
              {label}
            </Tab>
          ))}
        </TabsHeader>
        <TabsBody>
          {data.map(({ value, body }) => (
            <TabPanel key={value} value={value}>
              {body}
            </TabPanel>
          ))}
        </TabsBody>
      </Tabs>
    </div>
  )
}

export default Data;