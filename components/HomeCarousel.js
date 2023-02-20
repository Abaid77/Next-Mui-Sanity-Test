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
        <img
          src={
            mobileSize
              ? "https://img.sm360.ca/images/promo/sundance-mazda/49806//mazda-header-768x1000-promos-tire-offer-en1630533873834.jpg"
              : tabletSize
              ? "https://img.sm360.ca/images/promo/sundance-mazda/49806//mazda-header-1200x450-promos-tire-offer-en1630533868927.jpg"
              : "https://img.sm360.ca/images/promo/sundance-mazda/49806//mazda-header-1920x500-promos-tire-offer-en1630533864335.jpg"
          }
          alt="Mazda Banner"
        />
      </div>
      <div>
        <Link href="/cars">
          <div>
            <img
              src={
                mobileSize
                  ? "https://img.sm360.ca/images/promo/sundance-mazda/104213//2020-06-sundance-mazda-header-mobile-build-and-price1592490710811.jpg"
                  : tabletSize
                  ? "https://img.sm360.ca/images/promo/sundance-mazda/104213//2020-06-sundance-mazda-header-tablette-build-and-price1592490706476.jpg"
                  : "https://img.sm360.ca/images/promo/sundance-mazda/104213//2020-06-sundance-mazda-header-desktop-build-and-price1592490700836.jpg"
              }
              alt="Mazda Banner"
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
              alt="Mazda Banner"
            />
          </div>
        </Link>
      </div>
    </Carousel>
  );
}
