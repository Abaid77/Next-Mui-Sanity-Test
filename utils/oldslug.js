// import { useState } from 'react';
// import {
//   Alert,
//   CircularProgress,
//   Grid,
//   Typography,
//   Box,
//   Button,
// } from '@mui/material';

// import { useEffect } from 'react';
// import { Link } from '@mui/material';

// import NextLink from 'next/link';
// import ProductCarousel from '@/components/ProductCarousel';
// import ProductCard from '@/components/ProductCard';
// import { createClient } from 'next-sanity';
// import { urlFor } from '@/utils/client';
// import { NextSeo } from 'next-seo';

// export default function ProductScreen(props) {
//   const client = createClient({
//     projectId: 'n6yo3af7',
//     dataset: 'production',
//     apiVersion: '2022-03-25',
//     useCdn: false,
//   });
//   const { slug } = props;
//   const [state, setState] = useState({
//     product: null,
//     products: null,
//     loading: true,
//     error: '',
//   });

//   const { product, loading, error, products } = state;
//   const [randomArrayIndex, setRandomArrayIndex] = useState();
//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const product = await client.fetch(
//           `
//             *[_type == "jewelry" && slug.current == $slug][0]`,
//           { slug }
//         );
//         const products = await client.fetch('*[_type == "jewelry"]');

//         setState({ ...state, product, products, loading: false });
//         setRandomArrayIndex(Math.floor(Math.random() * (products.length - 3)));
//       } catch (err) {
//         setState({ ...state, error: err.message, loading: false });
//       }
//     };
//     fetchData();
//   }, []);

//   return (
//     <>
//       {loading ? (
//         <Box
//           sx={{
//             display: 'flex',
//             flexDirection: 'column',
//             justifyContent: 'center',
//             alignItems: 'center',
//             padding: '10px',
//             minHeight: '80vh',
//           }}
//         >
//           <CircularProgress size="200px" color="success" />
//         </Box>
//       ) : error ? (
//         <Alert variant="error">{error}</Alert>
//       ) : (
//         <>
//           <NextSeo
//             title={`${product.brand} ${product.name}| Maggie's Diamond Boutique`}
//             description={`${product.description}`}
//             canonical={`https://maggiesdiamond.com/product/jewelry/${product.slug.current}`}
//             openGraph={{
//               type: 'website',
//               url: `https://maggiesdiamond.com/product/jewelry/${product.slug.current}`,
//               title: `${product.brand} ${product.name}| Maggie's Diamond Boutique`,
//               description: `${product.description}`,
//               images: [
//                 {
//                   url: `${urlFor(product.image[0])}`,
//                   width: 2700,
//                   height: 2250,
//                   alt: `Maggie's Diamond Boutique - ${product.name}`,
//                 },
//               ],
//             }}
//           />
//           <Box padding={5}>
//             <Grid
//               container
//               spacing={1}
//               sx={{
//                 display: 'flex',
//                 justifyContent: 'center',
//                 flexDirection: 'row',
//                 alignItems: 'center',
//                 paddingBottom: 4,
//               }}
//             >
//               <Grid item md={6} xs={12}>
//                 <ProductCarousel images={product.image} />
//               </Grid>
//               <Grid
//                 item
//                 md={6}
//                 xs={12}
//                 sx={{
//                   display: 'flex',
//                   flexDirection: 'column',
//                   alignItems: 'center',
//                 }}
//               >
//                 <Typography
//                   component="h4"
//                   variant="h5"
//                   align="center"
//                   gutterBottom
//                 >
//                   {product.name}
//                 </Typography>

//                 <Typography variant="body2" align="justify" gutterBottom>
//                   Description: {product.description}
//                 </Typography>

//                 <Typography variant="body1" gutterBottom paddingBottom={3}>
//                   Price:
//                   {product.price ? product.price : ' Contact for pricing'}
//                 </Typography>

//                 <Link
//                   href={`mailto:sales@maggiesdiamonds.com?subject=Info on ${product.name} Model #: ${product.model}}`}
//                   underline="none"
//                 >
//                   <Button variant="contained" color="success">
//                     Request Info
//                   </Button>
//                 </Link>
//               </Grid>
//               <Grid
//                 item
//                 md={6}
//                 xs={12}
//                 sx={{
//                   display: 'flex',
//                   flexDirection: 'column',
//                   alignItems: 'center',
//                   marginTop: 2,
//                 }}
//               >
//                 <Typography variant="h6" gutterBottom>
//                   Specs:
//                 </Typography>
//                 <Typography variant="body2" gutterBottom>
//                   Metal: {product.metal}
//                 </Typography>
//                 <Typography variant="body2" gutterBottom>
//                   Diamond: {product.diamond ? product.diamond : 'N/A'}
//                 </Typography>
//                 <Typography variant="body2" gutterBottom>
//                   Model #: {product.model}
//                 </Typography>
//                 <Typography variant="body2" gutterBottom>
//                   Brand: {product.brand}
//                 </Typography>
//               </Grid>
//             </Grid>
//             <Box display="flex" justifyContent="center">
//               <Typography variant="h5">Other items you might like:</Typography>
//             </Box>

//             <Grid
//               container
//               spacing={1}
//               sx={{
//                 display: 'flex',
//                 flexWrap: 'wrap',
//               }}
//             >
//               {products
//                 .slice(randomArrayIndex, randomArrayIndex + 3)
//                 .map((product) => (
//                   <Grid
//                     item
//                     xs={12}
//                     md={6}
//                     lg={4}
//                     key={product.slug.current}
//                     sx={{ display: 'flex', justifyContent: 'center' }}
//                   >
//                     <ProductCard product={product} />
//                   </Grid>
//                 ))}
//             </Grid>
//             <Box
//               sx={{
//                 display: 'flex',
//                 flexDirection: 'column',
//                 alignItems: 'center',
//                 marginTop: 3,
//               }}
//             >
//               <Link
//                 component={NextLink}
//                 href="/product/jewelry"
//                 style={{
//                   textDecoration: 'none',
//                   color: '#ffb302',
//                   marginTop: '20px',
//                 }}
//               >
//                 <Button
//                   variant="outlined"
//                   color="success"
//                   style={{ margin: 10 }}
//                 >
//                   Back to All Jewelry
//                 </Button>
//               </Link>
//             </Box>
//           </Box>
//         </>
//       )}
//     </>
//   );
// }

// export function getServerSideProps(context) {
//   return {
//     props: { slug: context.params.slug },
//   };
// }
