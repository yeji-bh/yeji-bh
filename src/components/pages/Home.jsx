import React, { useState } from "react"
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
  Timeline,
  TimelineItem,
  TimelineConnector,
  TimelineHeader,
  TimelineIcon,
  TimelineBody,
  Typography,
  Chip
} from "@material-tailwind/react"
import CarouselBase, { Modal, ModalGateway } from "react-images";

const Home = () => {
  const [open, setOpen] = useState(0);
  const [viewerIsOpen, setViewerIsOpen] = useState(false);

  const handleOpen = (value) => {
    setOpen(open === value ? 0 : value);
  };

  const customAnimation = {
    mount: { scale: 1 },
    unmount: { scale: 0.9 },
  };

  return (
    <div className="mx-auto max-w-screen-md p-12">
      <div className="mb-5 cursor-pointer" onClick={() => setViewerIsOpen(true)}>
        <img src="home/qna_1.png" />
        <Typography className="text-sm text-center mt-3">
          (懒人版，可点击图片放大)
        </Typography>
      </div>
      <Typography as="span" variant="h4">买专 Q&A</Typography>
      <Accordion open={open === 1} animate={customAnimation}>
        <AccordionHeader className="text-base" onClick={() => handleOpen(1)}>
          1. 什么是中输？
        </AccordionHeader>
        <AccordionBody className="text-sm">
          中输是指爱豆所发的专辑在中国的销量，是爱豆的人气鉴定指标之一，从微博站子{' '}
          <a href="https://weibo.com/n/%E9%BB%84%E7%A4%BC%E5%BF%97_OasisForYEJI" className=" text-blue-500" target="_blank">@黄礼志_OasisForYEJI</a>
          {' '}开出的链结下单都会算进黄礼志的个人中输。
        </AccordionBody>
      </Accordion>
      <Accordion open={open === 2} animate={customAnimation}>
        <AccordionHeader className="text-base" onClick={() => handleOpen(2)}>
          2. 我只是好感礼志想给礼志贡献中输，并且希望拿到专辑小卡，哪个平台最快？该怎么买？
        </AccordionHeader>
        <AccordionBody className="text-sm">
          在志首
          <a href="https://weibo.com/n/%E9%BB%84%E7%A4%BC%E5%BF%97_OasisForYEJI" className=" text-blue-500" target="_blank">@黄礼志_OasisForYEJI</a>
          发的 k4 链结中购买 <b className="text-red-500">k4 裸专直邮</b>
        </AccordionBody>
      </Accordion>
      <Accordion open={open === 3} animate={customAnimation}>
        <AccordionHeader className="text-base" onClick={() => handleOpen(3)}>
          3. 有哪些专辑类别？
        </AccordionHeader>
        <AccordionBody className="text-sm">
          主要为<b>裸专、拆卡专。</b><br />
          <Timeline className="my-3">
            <TimelineItem>
              <TimelineConnector />
              <TimelineHeader className="h-3">
                <TimelineIcon />
                <Typography as="span" variant="h6" color="blue-gray" className="leading-none">
                  裸专
                </Typography>
              </TimelineHeader>
              <TimelineBody className="pb-8">
                <Typography
                  as="span"
                  variant="small"
                  className="font-normal text-gray-600"
                >
                  未拆专，包含专辑所有配置。下单时即包括专辑本身费用和国际邮费，由平台直接发货，从韩国直邮。专辑全新不会拆开，且站子不经手。
                  <div className="flex gap-2">
                    <Chip className="my-3" variant="ghost" color="green" value="优点" size="sm" icon={<span className="content-[''] block w-2 h-2 rounded-full mx-auto mt-1 bg-green-900" />} />
                  </div>速度快、专辑未拆封
                  <div className="flex gap-2">
                    <Chip className="my-3" variant="ghost" color="pink" value="缺点" size="sm" icon={<span className="content-[''] block w-2 h-2 rounded-full mx-auto mt-1 bg-red-900" />} />
                  </div>专辑重、国际邮费贵
                </Typography>
              </TimelineBody>
            </TimelineItem>
            <TimelineItem>
              <TimelineConnector />
              <TimelineHeader className="h-3">
                <TimelineIcon />
                <Typography as="span" variant="h6" color="blue-gray" className="leading-none">
                  拆卡专
                </Typography>
              </TimelineHeader>
              <TimelineBody className="pb-4">
                <Typography
                  as="span"
                  variant="small"
                  className="font-normal text-gray-600"
                >
                  又称不运回专，仅包含专辑中部分配置，专辑中较为重的东西（比如 PB 和 CD）不运回节省运费。可以获得专辑中小卡，经由站子发货。
                  <div className="flex gap-2">
                    <Chip className="my-3" variant="ghost" color="green" value="优点" size="sm" icon={<span className="content-[''] block w-2 h-2 rounded-full mx-auto mt-1 bg-green-900" />} />
                  </div>较重的东西不运回、邮费便宜
                  <div className="flex gap-2">
                    <Chip className="my-3" variant="ghost" color="pink" value="缺点" size="sm" icon={<span className="content-[''] block w-2 h-2 rounded-full mx-auto mt-1 bg-red-900" />} />
                  </div>站子拆卡、速度相對較慢、到手时间迟
                </Typography>
              </TimelineBody>
            </TimelineItem>
          </Timeline>
          <Typography
            as="span"
            variant="small"
            className="font-normal text-gray-600"
          >
            <b>该如何抉择裸专和拆卡专？</b><br />
            想要快点拿到专不介意国际邮费的话建议选择裸专直邮<br />
            嫌专辑体积大占空间、只想要小卡的话建议选择拆卡专
          </Typography>
        </AccordionBody>
      </Accordion>
      <Accordion open={open === 4} animate={customAnimation}>
        <AccordionHeader className="text-base" onClick={() => handleOpen(4)}>
          4. 什么是平台特典？如何购买？
        </AccordionHeader>
        <AccordionBody className="text-sm">
          <Typography
            as="span"
            variant="small"
            className="font-normal text-gray-600 my-3"
          >
            平台为了刺激销量，会在裸专的基础上每张专辑额外赠送购买者一张小卡，常见平台有 JYP, SW, WM, K4...等。不同平台不同批次会有不同的特典。
          </Typography>
          <Typography
            as="span"
            variant="small"
            className="font-normal text-gray-600 mt-3"
          >
            平台特典购买方式请关注 <a href="https://weibo.com/n/%E9%BB%84%E7%A4%BC%E5%BF%97_OasisForYEJI" className=" text-blue-500" target="_blank">@黄礼志_OasisForYEJI</a>，
            志首会在评论区发出链结，直接通过链结购买即可。
          </Typography>
        </AccordionBody>
      </Accordion>
      <Accordion open={open === 5} animate={customAnimation}>
        <AccordionHeader className="text-base" onClick={() => handleOpen(5)}>
          5. 志首发的k4/熊宝之类的是什么？
        </AccordionHeader>
        <AccordionBody className="text-sm">
          K4, yetimall, 熊宝, kpopshop, 楠艺...等志首发出来的是下单的代购平台，大家可以选择不同的代购平台来购买专辑。
        </AccordionBody>
      </Accordion>
      <Accordion open={open === 6} animate={customAnimation}>
        <AccordionHeader className="text-base" onClick={() => handleOpen(6)}>
          6. 什么是拼车？拼车有哪些类别？
        </AccordionHeader>
        <AccordionBody className="text-sm">
          拼车是几个人一起拼专辑，车主在一个平台下单后把专辑寄到自己手上，专辑到手后再分别寄给车员。
          拼车分为拼国际邮费和拼特典卡两种。
          <Chip
            variant="ghost"
            color="green"
            size="sm"
            value="拼国际邮费"
            className="my-3"
            icon={<span className="content-[''] block w-2 h-2 rounded-full mx-auto mt-1 bg-green-900" />}
          />
          <Typography
            as="span"
            variant="small"
            className="font-normal text-gray-600 my-3"
          >
            拼国际邮费是几个<b>所在地区相近的人</b>在购买专辑时为了节省国际邮费，车主在一个平台下单数本后寄到自己手上，专辑到手后再分别寄给车员。
          </Typography>
          <Typography
            as="span"
            variant="small"
            className="font-normal text-gray-600"
          >
            举个🌰：柴郡猫回归预售期间，荷兰猪和她的五个朋友们每人购买一本专辑，所以荷兰猪在K4购买普版专辑 6 本，邮费总和为 56 元，荷兰猪和她的朋友们分摊后每人国际邮费只需付 9.33 元，朋友们后续再向荷兰猪支付国内邮费即可。
          </Typography>
          <Chip
            variant="ghost"
            color="red"
            size="sm"
            value="拼特典卡"
            className="my-3"
            icon={<span className="content-[''] block w-2 h-2 rounded-full mx-auto mt-1 bg-red-900" />}
          />
          <Typography
            as="span"
            variant="small"
            className="font-normal text-gray-600"
          >
            拼特典卡是在平台特典购买五张凑一套五个成员的特典卡时，为了百分百获得礼志的特典卡，和需要其他成员的卡的车员进行拼车，车主拿到专辑后需要将特典卡和专辑一起寄给车员。
          </Typography>
        </AccordionBody>
      </Accordion>
      <Accordion open={open === 7} animate={customAnimation}>
        <AccordionHeader className="text-base" onClick={() => handleOpen(7)}>
          7. 什么是上车？为什么不建议上队友粉的车？
        </AccordionHeader>
        <AccordionBody className="text-sm">
          上车是自己做车员和别人拼车，别人做车主，车主下单。<br />
          <Typography
            as="span"
            variant="small"
            className="my-3 font-normal text-gray-600"
          >
            不建议上队友粉的车的原因：
          </Typography>
          <ol className="list-decimal ml-4">
            <li>队友粉可能骂过礼志。</li>
            <li>车主是队友粉会在队友站子下单，你花了钱还给队友送了中输。</li>
            <li>车主不靠谱，可能会跑路，最后你花了钱什么都拿不到。</li>
            <li>队友粉给礼志调不合理的高价，花的钱多有的时候还要带队友。</li>
          </ol>
        </AccordionBody>
      </Accordion>
      <Accordion open={open === 8} animate={customAnimation}>
        <AccordionHeader className="text-base" onClick={() => handleOpen(8)}>
          8. 拼车调价计算（仅举例）
        </AccordionHeader>
        <AccordionBody className="text-sm">
          <Typography
            as="span"
            variant="small"
            className="font-normal text-gray-600 mb-3"
          >
            柴郡猫回归预售期间，荷兰猪和四个朋友在YETIMALL拼车购买了MP特典，每本 62 元，五本凑套，国际邮费为 45 元，志位调价 1.1，所以荷兰猪需要支付的专辑费用（包含国际邮费）为
            <div className="flex gap-2 mt-3">
              <Chip color="blue" value="(62 * 5 + 45) / 5 * 1.1 = 78.1" />
            </div>
          </Typography>
          <Typography
            as="span"
            variant="small"
            className="font-bold mb-3"
          >
            *有的人不调邮费而是直接平摊，看不懂的话可以到{' '}
            <a href="https://weibo.com/p/100808b168d6138145713a69ef415bcd91eb72" target="_blank" className="text-blue-500">ITZY中转站</a>{' '}
            超话抄作业。
          </Typography>
        </AccordionBody>
      </Accordion>
      <Accordion open={open === 9} animate={customAnimation}>
        <AccordionHeader className="text-base" onClick={() => handleOpen(9)}>
          9. 开车会不会花很多时间？
        </AccordionHeader>
        <AccordionBody className="text-sm">
          <Typography
            as="span"
            variant="small"
            className="font-normal text-gray-600 my-3"
          >
            开车需要比较多的时间，跟进物流、给车员打包、录开箱视频...等。
          </Typography>
        </AccordionBody>
      </Accordion>
      <Accordion open={open === 10} animate={customAnimation}>
        <AccordionHeader className="text-base" onClick={() => handleOpen(10)}>
          10. 没时间开车也不想上队友车怎么办？
        </AccordionHeader>
        <AccordionBody className="text-sm">
          <Typography
            as="span"
            variant="small"
            className="font-normal text-gray-600 my-3"
          >
            进入答疑群，群里有眉粉可以帮忙没时间的眉粉开车（车员需要你自己找），同担比队友粉更加靠谱。
          </Typography>
        </AccordionBody>
      </Accordion>
      <Accordion open={open === 11} animate={customAnimation}>
        <AccordionHeader className="text-base" onClick={() => handleOpen(11)}>
          11. 我要在哪里发拼车贴？
        </AccordionHeader>
        <AccordionBody className="text-sm">
          <Typography
            as="span"
            variant="small"
            className="font-normal text-gray-600 my-3"
          >
            拼车信息建议发在微博超话：<a href="https://weibo.com/p/100808b168d6138145713a69ef415bcd91eb72/super_index" target="_blank" className=" text-blue-500">ITZY中转站</a>，或者小红书也可以。
          </Typography>
        </AccordionBody>
      </Accordion>
      <Accordion open={open === 12} animate={customAnimation}>
        <AccordionHeader className="text-base" onClick={() => handleOpen(12)}>
          12. 为什么我在志首k4同样的链结买专，第一天和第二天价格/邮费不一样？
        </AccordionHeader>
        <AccordionBody className="text-sm">
          汇率浮动，属于正常现象。
        </AccordionBody>
      </Accordion>
      <Accordion open={open === 13} animate={customAnimation}>
        <AccordionHeader className="text-base" onClick={() => handleOpen(13)}>
          13. 为什么代购平台有单数限制？ (例如yetimall只能买两单)之后还想买不可以买吗？买了会怎样？
        </AccordionHeader>
        <AccordionBody className="text-sm">
          单数限制是为了防止集货，所以每个身分证号买的专辑数有限制，如果已经用自己的身分证号下单次数达到限制，需要换身分证号下单，如果不换身分证号依然可以购买，只是发货会很慢。
        </AccordionBody>
      </Accordion>
      <Accordion open={open === 14} animate={customAnimation}>
        <AccordionHeader className="text-base" onClick={() => handleOpen(14)}>
          14. n随1、凑套是什么意思？
        </AccordionHeader>
        <AccordionBody className="text-sm">
          n随1就是买一张专随机送一名成员的卡，买两张随机送两人，买五张就能凑一套卡（ITZY 五个人）。
        </AccordionBody>
      </Accordion>
      <Accordion open={open === 15} animate={customAnimation}>
        <AccordionHeader className="text-base" onClick={() => handleOpen(15)}>
          15. 专辑多久发货？应该寄哪里？
        </AccordionHeader>
        <AccordionBody className="text-sm">
          通常来说专辑在回归当天就会发货，或者第二天会陆续安排出库，K4 物流较快，希望快一点拿到专辑的话建议选 K4。
        </AccordionBody>
      </Accordion>
      <Accordion open={open === 16} animate={customAnimation}>
        <AccordionHeader className="text-base" onClick={() => handleOpen(16)}>
          16. 买什么专需要补邮？怎么知道什么时候该补邮？
        </AccordionHeader>
        <AccordionBody className="text-sm">
          只有 拆卡专 或者 站子的自制特典 这种经过站子手中的才会需要补邮，补邮信息请关注志首或者{' '}
          <a href="https://weibo.com/u/5401448120" target="_blank" className=" text-blue-500">@志首小助理</a>{' '}
          会提醒补邮。
        </AccordionBody>
      </Accordion>
      <ModalGateway>
        {viewerIsOpen ? (
          <Modal onClose={() => setViewerIsOpen(false)}>
            <CarouselBase
              currentIndex={0}
              views={[{
                src: "home/qna_1.png",
                caption: "志首代购博说明"
              }]}
            />
          </Modal>
        ) : null}
      </ModalGateway>
    </div>
  )
}

export default Home