import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

import { useMediaQuery } from "@mui/material";
import Link from "next/link";
export default function HomeCarousel() {
  const mobileSize = useMediaQuery((theme) => theme.breakpoints.down("sm"));
  const tabletSize = useMediaQuery((theme) => theme.breakpoints.down("md"));
  return (
    <Carousel
      className="home-carousel"
      showThumbs={false}
      autoPlay={true}
      infiniteLoop={true}
      showArrows={false}
      showStatus={false}
    >
      <div>
        <Link href="/about">
          <div>
            <img
              src={
                mobileSize
                  ? "/static/home-carousel-mobile02.webp"
                  : tabletSize
                  ? "/static/home-carousel-tablet02.webp"
                  : "/static/home-carousel-desktop02.webp"
              }
              alt="Maggie's Banner"
            />
          </div>
        </Link>
      </div>
      <div>
        <Link href="/about">
          <div>
            <img
              src={
                mobileSize
                  ? "/static/home-carousel-mobile01.webp"
                  : tabletSize
                  ? "/static/home-carousel-tablet01.webp"
                  : "/static/home-carousel-desktop01.webp"
              }
              alt="Maggie's Banner"
            />
          </div>
        </Link>
      </div>
    </Carousel>
  );
}
