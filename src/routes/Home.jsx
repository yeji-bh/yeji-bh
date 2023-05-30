import React, { useState } from "react"
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react"

import ContentLayout from "../components/layouts/CotentLayout"

const Home = () => {
  const [open, setOpen] = useState(0);

  const handleOpen = (value) => {
    setOpen(open === value ? 0 : value);
  };

  const customAnimation = {
    mount: { scale: 1 },
    unmount: { scale: 0.9 },
  };

  return (
    <ContentLayout>
      <div className="mx-auto max-w-screen-md py-12">
        <Accordion open={open === 1} animate={customAnimation}>
          <AccordionHeader onClick={() => handleOpen(1)}>
            1
          </AccordionHeader>
          <AccordionBody>
            test
          </AccordionBody>
        </Accordion>
        <Accordion open={open === 2} animate={customAnimation}>
          <AccordionHeader onClick={() => handleOpen(2)}>
            2
          </AccordionHeader>
          <AccordionBody>
            test2
          </AccordionBody>
        </Accordion>
        <Accordion open={open === 3} animate={customAnimation}>
          <AccordionHeader onClick={() => handleOpen(3)}>
            3
          </AccordionHeader>
          <AccordionBody>
            test3
          </AccordionBody>
        </Accordion>
      </div>
    </ContentLayout>
  )
}

export default Home