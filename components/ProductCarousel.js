import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import { urlFor } from '@/utils/client';

//Spining Product Carousel for Product Details page

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
      {/* {products?.map((product) => (
          <Product key={product._id} product={product} />
        ))} */}

      {props.images?.map((image) => (
        <div key={props.slug}>
          <img src={urlFor(image)} alt="Product Image" key={props.slug} />
        </div>
      ))}
      {/* <div>
        <img src={urlFor(props.images[0])} alt="Maggies Banner" />
      </div>
      <div>
        <img src={urlFor(props.images[1])} alt="Maggies Banner" />
      </div>
      <div>
        <img src={urlFor(props.images[2])} alt="Maggies Banner" />
      </div> */}
    </Carousel>
  );
}
