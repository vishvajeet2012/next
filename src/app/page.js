import Counter from "@/components/Counter";
import SearchFunctionalty from "@/components/searchFunctionalty";
import axios from "axios";
import Image from "next/image";

// async function getProductData() {
//   try {
//     // Server-side में full URL की जरूरत होती है
//     const baseUrl =  'http://192.168.1.4:3000';
//     const res = await axios.post(`${baseUrl}/api/vishu`);
//     return res.data;
//   } catch (error) {
//     console.error('Error fetching product data:', error);
//     throw new Error(`Error fetching product data: ${error.message}`);
//   }
// }

// Server Component - by default async होता है
export default async function Home() {
  let products = [];
  let error = null;

  try {
    products = await getProductData();
    console.log("Products fetched:", products);
  } catch (err) {
    error = err.message;
  }

  // // Error state
  // if (error) {
  //   return (
  //     <div className="flex items-center justify-center min-h-screen bg-gray-100">
  //       <div className="text-center">
  //         <h1 className="text-2xl font-semibold text-red-600 mb-4">
  //           Something went wrong!
  //         </h1>
  //         <p className="text-gray-600">{error}</p>
  //       </div>
  //     </div>
  //   );
  // }

  // Empty state
  // if (!products || products.length === 0) {
  //   return (
  //     <div className="flex items-center justify-center min-h-screen bg-gray-100">
  //       <div className="text-center">
  //         <h1 className="text-2xl font-semibold text-gray-600 mb-4">
  //           No Products Found
  //         </h1>
  //         <p className="text-gray-500">Please check back later.</p>
  //       </div>
  //     </div>
  //   );
  // }

  // Success state
  return (
    <>

<Counter/>


    </>
  );
}