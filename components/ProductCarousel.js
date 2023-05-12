import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import { urlFor } from '@/utils/client';

export default function ProductCarousel(props) {
  return (
    <Carousel
      className="car-spin-carousel"
      showThumbs={true}
      autoPlay={false}
      infiniteLoop={true}
      showArrows={true}
      showStatus={false}
      stopOnHover={false}
    >
      {props.images?.map((image) => (
        <div key={props.slug}>
          <img src={urlFor(image)} alt="Product Image" key={props.slug} />
        </div>
      ))}
    </Carousel>
  );
}
