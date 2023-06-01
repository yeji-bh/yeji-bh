import React, { useRef, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  Navbar,
  Collapse,
  Typography,
  IconButton
} from "@material-tailwind/react";
import { LazyLoadImage } from 'react-lazy-load-image-component';
import LOGO from '../../assets/logo.png'

const MENUS = [
  { path: '/', name: '买专 Q&A' },
  { path: '/special', name: '特典汇总' },
  { path: '/videos', name: '安利视频' },
  { path: '/data', name: '数据/实绩' },
  { path: '/fansite', name: '站子整理' },
  { path: 'https://blackheart-hyj.notion.site/blackheart-hyj/60707e3e27024614807d7b97145b89bf', name: '考古必看' },
]

const Header = () => {
  const navRef = useRef(null);
  const [openNav, setOpenNav] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 960) {
        setOpenNav(false);
      }
    };

    const handleClickOutside = (event) => {
      if (navRef.current && !navRef.current.contains(event.target)) {
        setOpenNav(false);
      }
    };

    window.addEventListener("resize", handleResize);
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      window.removeEventListener("resize", handleResize);
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const navList = (
    <ul ref={navRef} className="mb-4 mt-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
      {MENUS.map(item => (
        <Typography
          key={item.name}
          as="li"
          variant="h6"
          color="blue-gray"
          className="p-1 font-normal"
        >
          {
            item.path.includes('http')
              ? (
                <a href={item.path} className="flex items-center" target="_blank">
                  {item.name}
                </a>
              )
              : <Link to={item.path}>{item.name}</Link>
          }
        </Typography>
      ))}
    </ul>
  );

  return (
    <Navbar className="sticky inset-0 z-10 h-max max-w-full rounded-none py-2 px-4 lg:px-8 lg:py-4">
      <div className="flex items-center justify-between text-blue-gray-900">
        <div className="flex flex-row items-center select-none">
          <LazyLoadImage
            alt="logo"
            className="w-8 h-8 mr-3"
            src={LOGO}
          />
          <Typography
            as="a"
            href="#"
            className="mr-4 cursor-pointer py-1.5 text-xl"
          >
            YEJI-bh
          </Typography>
        </div>
        <div className="flex items-center gap-4">
          <div className="mr-4 hidden select-none lg:block">{navList}</div>
          <IconButton
            variant="text"
            className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
            ripple={false}
            onClick={() => setOpenNav(!openNav)}
          >
            {openNav ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                className="h-6 w-6"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </IconButton>
        </div>
      </div>
      <Collapse open={openNav}>
        {navList}
      </Collapse>
    </Navbar>
  );
}

export default Header