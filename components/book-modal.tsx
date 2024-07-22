// "use client";

// import React from "react";
// import Image from "next/image";
// import { motion } from "framer-motion";

// import {
//   Modal,
//   ModalBody,
//   ModalContent,
//   ModalFooter,
//   ModalTrigger,
// } from "@/components/ui/animated-modal";

// export function BookModal() {
//   const images = [
//     "/images/image-2.jpg",
//     "/images/image-3.jpg",
//     "/images/image-4.jpg",
//     "/images/image-5.jpg",
//     "/images/image-6.jpg",
//   ];
//   return (
//     <div className="flex items-center justify-center">
//       <Modal>
//         <ModalTrigger className="bg-black dark:bg-white dark:text-black text-white flex justify-center group/modal-btn">
//           <span className="group-hover/modal-btn:translate-x-40 text-center transition duration-500">
//             Book your flight
//           </span>
//           <div className="-translate-x-40 group-hover/modal-btn:translate-x-0 flex items-center justify-center absolute inset-0 transition duration-500 text-white z-20">
//             ✈️
//           </div>
//         </ModalTrigger>
//         <ModalBody>
//           <ModalContent>
//             <h4 className="text-lg md:text-2xl text-neutral-600 dark:text-neutral-100 font-bold text-center mb-8">
//               Book your trip to{" "}
//               <span className="px-1 py-0.5 rounded-md bg-gray-100 dark:bg-neutral-800 dark:border-neutral-700 border border-gray-200">
//                 Bali
//               </span>{" "}
//               now! ✈️
//             </h4>
//             <div className="flex justify-center items-center">
//               {images.map((image, idx) => (
//                 <motion.div
//                   key={"images" + idx}
//                   style={{
//                     rotate: Math.random() * 20 - 10,
//                   }}
//                   whileHover={{
//                     scale: 1.1,
//                     rotate: 0,
//                     zIndex: 100,
//                   }}
//                   whileTap={{
//                     scale: 1.1,
//                     rotate: 0,
//                     zIndex: 100,
//                   }}
//                   className="rounded-xl -mr-4 mt-4 p-1 bg-white dark:bg-neutral-800 dark:border-neutral-700 border border-neutral-100 flex-shrink-0 overflow-hidden"
//                 >
//                   <Image
//                     src={image}
//                     alt="bali images"
//                     width="500"
//                     height="500"
//                     className="rounded-lg h-20 w-20 md:h-40 md:w-40 object-cover flex-shrink-0"
//                   />
//                 </motion.div>
//               ))}
//             </div>
//             <div className="py-10 flex flex-wrap gap-x-4 gap-y-6 items-start justify-start max-w-sm mx-auto">
//               <div className="flex  items-center justify-center">
//                 <PlaneIcon className="mr-1 text-neutral-700 dark:text-neutral-300 h-4 w-4" />
//                 <span className="text-neutral-700 dark:text-neutral-300 text-sm">
//                   5 connecting flights
//                 </span>
//               </div>
//               <div className="flex items-center justify-center">
//                 <ElevatorIcon className="mr-1 text-neutral-700 dark:text-neutral-300 h-4 w-4" />
//                 <span className="text-neutral-700 dark:text-neutral-300 text-sm">
//                   12 hotels
//                 </span>
//               </div>
//               <div className="flex items-center justify-center">
//                 <VacationIcon className="mr-1 text-neutral-700 dark:text-neutral-300 h-4 w-4" />
//                 <span className="text-neutral-700 dark:text-neutral-300 text-sm">
//                   69 visiting spots
//                 </span>
//               </div>
//               <div className="flex  items-center justify-center">
//                 <FoodIcon className="mr-1 text-neutral-700 dark:text-neutral-300 h-4 w-4" />
//                 <span className="text-neutral-700 dark:text-neutral-300 text-sm">
//                   Good food everyday
//                 </span>
//               </div>
//               <div className="flex items-center justify-center">
//                 <MicIcon className="mr-1 text-neutral-700 dark:text-neutral-300 h-4 w-4" />
//                 <span className="text-neutral-700 dark:text-neutral-300 text-sm">
//                   Open Mic
//                 </span>
//               </div>
//               <div className="flex items-center justify-center">
//                 <ParachuteIcon className="mr-1 text-neutral-700 dark:text-neutral-300 h-4 w-4" />
//                 <span className="text-neutral-700 dark:text-neutral-300 text-sm">
//                   Paragliding
//                 </span>
//               </div>
//             </div>
//           </ModalContent>
//           <ModalFooter className="gap-4">
//             <button className="px-2 py-1 bg-gray-200 text-black dark:bg-black dark:border-black dark:text-white border border-gray-300 rounded-md text-sm w-28">
//               Cancel
//             </button>
//             <button className="bg-black text-white dark:bg-white dark:text-black text-sm px-2 py-1 rounded-md border border-black w-28">
//               Book Now
//             </button>
//           </ModalFooter>
//         </ModalBody>
//       </Modal>
//     </div>
//   );
// }

// const PlaneIcon = ({ className }: { className?: string }) => {
//   return (
//     <svg
//       xmlns="http://www.w3.org/2000/svg"
//       width="24"
//       height="24"
//       viewBox="0 0 24 24"
//       fill="none"
//       stroke="currentColor"
//       strokeWidth="2"
//       strokeLinecap="round"
//       strokeLinejoin="round"
//       className={className}
//     >
//       <path stroke="none" d="M0 0h24v24H0z" fill="none" />
//       <path d="M16 10h4a2 2 0 0 1 0 4h-4l-4 7h-3l2 -7h-4l-2 2h-3l2 -4l-2 -4h3l2 2h4l-2 -7h3z" />
//     </svg>
//   );
// };

// const VacationIcon = ({ className }: { className?: string }) => {
//   return (
//     <svg
//       xmlns="http://www.w3.org/2000/svg"
//       width="24"
//       height="24"
//       viewBox="0 0 24 24"
//       fill="none"
//       stroke="currentColor"
//       strokeWidth="2"
//       strokeLinecap="round"
//       strokeLinejoin="round"
//       className={className}
//     >
//       <path stroke="none" d="M0 0h24v24H0z" fill="none" />
//       <path d="M17.553 16.75a7.5 7.5 0 0 0 -10.606 0" />
//       <path d="M18 3.804a6 6 0 0 0 -8.196 2.196l10.392 6a6 6 0 0 0 -2.196 -8.196z" />
//       <path d="M16.732 10c1.658 -2.87 2.225 -5.644 1.268 -6.196c-.957 -.552 -3.075 1.326 -4.732 4.196" />
//       <path d="M15 9l-3 5.196" />
//       <path d="M3 19.25a2.4 2.4 0 0 1 1 -.25a2.4 2.4 0 0 1 2 1a2.4 2.4 0 0 0 2 1a2.4 2.4 0 0 0 2 -1a2.4 2.4 0 0 1 2 -1a2.4 2.4 0 0 1 2 1a2.4 2.4 0 0 0 2 1a2.4 2.4 0 0 0 2 -1a2.4 2.4 0 0 1 2 -1a2.4 2.4 0 0 1 1 .25" />
//     </svg>
//   );
// };

// const ElevatorIcon = ({ className }: { className?: string }) => {
//   return (
//     <svg
//       xmlns="http://www.w3.org/2000/svg"
//       width="24"
//       height="24"
//       viewBox="0 0 24 24"
//       fill="none"
//       stroke="currentColor"
//       strokeWidth="2"
//       strokeLinecap="round"
//       strokeLinejoin="round"
//       className={className}
//     >
//       <path stroke="none" d="M0 0h24v24H0z" fill="none" />
//       <path d="M5 4m0 1a1 1 0 0 1 1 -1h12a1 1 0 0 1 1 1v14a1 1 0 0 1 -1 1h-12a1 1 0 0 1 -1 -1z" />
//       <path d="M10 10l2 -2l2 2" />
//       <path d="M10 14l2 2l2 -2" />
//     </svg>
//   );
// };

// const FoodIcon = ({ className }: { className?: string }) => {
//   return (
//     <svg
//       xmlns="http://www.w3.org/2000/svg"
//       width="24"
//       height="24"
//       viewBox="0 0 24 24"
//       fill="none"
//       stroke="currentColor"
//       strokeWidth="2"
//       strokeLinecap="round"
//       strokeLinejoin="round"
//       className={className}
//     >
//       <path stroke="none" d="M0 0h24v24H0z" fill="none" />
//       <path d="M20 20c0 -3.952 -.966 -16 -4.038 -16s-3.962 9.087 -3.962 14.756c0 -5.669 -.896 -14.756 -3.962 -14.756c-3.065 0 -4.038 12.048 -4.038 16" />
//     </svg>
//   );
// };

// const MicIcon = ({ className }: { className?: string }) => {
//   return (
//     <svg
//       xmlns="http://www.w3.org/2000/svg"
//       width="24"
//       height="24"
//       viewBox="0 0 24 24"
//       fill="none"
//       stroke="currentColor"
//       strokeWidth="2"
//       strokeLinecap="round"
//       strokeLinejoin="round"
//       className={className}
//     >
//       <path stroke="none" d="M0 0h24v24H0z" fill="none" />
//       <path d="M15 12.9a5 5 0 1 0 -3.902 -3.9" />
//       <path d="M15 12.9l-3.902 -3.899l-7.513 8.584a2 2 0 1 0 2.827 2.83l8.588 -7.515z" />
//     </svg>
//   );
// };

// const ParachuteIcon = ({ className }: { className?: string }) => {
//   return (
//     <svg
//       xmlns="http://www.w3.org/2000/svg"
//       width="24"
//       height="24"
//       viewBox="0 0 24 24"
//       fill="none"
//       stroke="currentColor"
//       strokeWidth="2"
//       strokeLinecap="round"
//       strokeLinejoin="round"
//       className={className}
//     >
//       <path stroke="none" d="M0 0h24v24H0z" fill="none" />
//       <path d="M22 12a10 10 0 1 0 -20 0" />
//       <path d="M22 12c0 -1.66 -1.46 -3 -3.25 -3c-1.8 0 -3.25 1.34 -3.25 3c0 -1.66 -1.57 -3 -3.5 -3s-3.5 1.34 -3.5 3c0 -1.66 -1.46 -3 -3.25 -3c-1.8 0 -3.25 1.34 -3.25 3" />
//       <path d="M2 12l10 10l-3.5 -10" />
//       <path d="M15.5 12l-3.5 10l10 -10" />
//     </svg>
//   );
// };

"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

import {
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalTrigger,
} from "@/components/ui/animated-modal";
import Link from "next/link";

export function BookModal() {
  const images = [
    "/images/image-2.jpg",
    "/images/image-3.jpg",
    "/images/image-4.jpg",
    "/images/image-5.jpg",
    "/images/image-6.jpg",
  ];

  return (
    <div className="flex items-center justify-center">
      <Modal>
        <ModalTrigger className="bg-black dark:bg-white dark:text-black text-white flex justify-center group/modal-btn">
          <span className="group-hover/modal-btn:translate-x-40 text-center transition duration-500">
            Book a Tour
          </span>
          <div className="-translate-x-40 group-hover/modal-btn:translate-x-0 flex items-center justify-center absolute inset-0 transition duration-500 text-white z-20">
            🏡
          </div>
        </ModalTrigger>
        <ModalBody>
          <ModalContent>
            <h4 className="text-lg md:text-2xl text-neutral-600 dark:text-neutral-100 font-bold text-center mb-8">
              Schedule a tour for{" "}
              <span className="px-1 py-0.5 rounded-md bg-gray-100 dark:bg-neutral-800 dark:border-neutral-700 border border-gray-200">
                Luxury Villas
              </span>{" "}
              today! 🏡
            </h4>
            <div className="flex justify-center items-center">
              {images.map((image, idx) => (
                <motion.div
                  key={"images" + idx}
                  style={{
                    rotate: Math.random() * 20 - 10,
                  }}
                  whileHover={{
                    scale: 1.1,
                    rotate: 0,
                    zIndex: 100,
                  }}
                  whileTap={{
                    scale: 1.1,
                    rotate: 0,
                    zIndex: 100,
                  }}
                  className="rounded-xl -mr-4 mt-4 p-1 bg-white dark:bg-neutral-800 dark:border-neutral-700 border border-neutral-100 flex-shrink-0 overflow-hidden"
                >
                  <Image
                    src={image}
                    alt="property images"
                    width="500"
                    height="500"
                    className="rounded-lg h-20 w-20 md:h-40 md:w-40 object-cover flex-shrink-0"
                  />
                </motion.div>
              ))}
            </div>
            <div className="py-10 grid grid-cols-2 lg:grid-cols-3 gap-x-4 gap-y-6">
              <div className="flex items-center justify-start">
                <HomeIcon className="mr-1 text-neutral-700 dark:text-neutral-300 h-4 w-4" />
                <span className="text-neutral-700 dark:text-neutral-300 text-sm">
                  5 Bedrooms
                </span>
              </div>
              <div className="flex items-center justify-start">
                <BathIcon className="mr-1 text-neutral-700 dark:text-neutral-300 h-4 w-4" />
                <span className="text-neutral-700 dark:text-neutral-300 text-sm">
                  4 Bathrooms
                </span>
              </div>
              <div className="flex items-center justify-start">
                <LocationIcon className="mr-1 text-neutral-700 dark:text-neutral-300 h-4 w-4" />
                <span className="text-neutral-700 dark:text-neutral-300 text-sm">
                  Prime Location
                </span>
              </div>
              <div className="flex items-center justify-start">
                <PoolIcon className="mr-1 text-neutral-700 dark:text-neutral-300 h-4 w-4" />
                <span className="text-neutral-700 dark:text-neutral-300 text-sm">
                  Swimming Pool
                </span>
              </div>
              <div className="flex items-center justify-start">
                <GardenIcon className="mr-1 text-neutral-700 dark:text-neutral-300 h-4 w-4" />
                <span className="text-neutral-700 dark:text-neutral-300 text-sm">
                  Beautiful Garden
                </span>
              </div>
              <div className="flex items-center justify-start">
                <GarageIcon className="mr-1 text-neutral-700 dark:text-neutral-300 h-4 w-4" />
                <span className="text-neutral-700 dark:text-neutral-300 text-sm">
                  2-Car Garage
                </span>
              </div>
            </div>
          </ModalContent>
          <ModalFooter className="gap-4">
            <ModalTrigger className="px-2 py-1 bg-gray-200 text-black dark:bg-black dark:border-black dark:text-white border border-gray-300 rounded-md text-sm w-28">
              Cancel
            </ModalTrigger>
            <Link
              href={"/book-a-call"}
              className="bg-primary text-white dark:bg-white dark:text-black text-sm px-2 py-1 rounded-md border border-black w-28 text-center"
            >
              Book Now
            </Link>
          </ModalFooter>
        </ModalBody>
      </Modal>
    </div>
  );
}

const HomeIcon = ({ className }: { className?: string }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M5 12l1 1l1 1h3v2h4v-2h3l1 -1l1 -1v-6h-2l-6 -4l-6 4h-2z" />
      <path d="M9 21v-6h6v6" />
    </svg>
  );
};

const BathIcon = ({ className }: { className?: string }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M4 12v-6a2 2 0 1 1 4 0v6" />
      <path d="M10 12v-6a2 2 0 1 1 4 0v6" />
      <path d="M16 12v-6a2 2 0 1 1 4 0v6" />
      <path d="M4 12a8 8 0 0 0 16 0" />
      <path d="M4 18h16" />
      <path d="M2 21h20" />
    </svg>
  );
};

const LocationIcon = ({ className }: { className?: string }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M12 2a6 6 0 0 1 6 6c0 1.375 -.457 2.705 -1.23 3.83l-.21 .32l-4.56 5.85a2 2 0 0 1 -2.618 .372l-.23 -.176l-4.56 -5.85a6 6 0 0 1 -1.23 -3.83a6 6 0 0 1 6 -6z" />
      <circle cx="12" cy="8" r="2" />
    </svg>
  );
};

const PoolIcon = ({ className }: { className?: string }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M4 4h16v2a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2v-2" />
      <path d="M4 10h16v6a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2v-6" />
      <path d="M4 22h16v-2a2 2 0 0 0 -2 -2h-12a2 2 0 0 0 -2 2v2" />
    </svg>
  );
};

const GardenIcon = ({ className }: { className?: string }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M8 12a4 4 0 1 1 8 0" />
      <path d="M4 8a8 8 0 1 1 16 0" />
      <path d="M12 12l4 4m-4 0l-4 4m0 -4l4 -4" />
    </svg>
  );
};

const GarageIcon = ({ className }: { className?: string }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M4 20v-16a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v16" />
      <path d="M3 13h18" />
      <path d="M8 16h8v4h-8z" />
    </svg>
  );
};
