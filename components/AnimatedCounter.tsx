// "use client";
// import { useEffect, useRef } from "react";
// import { useInView, useMotionValue, useTransform, animate } from "framer-motion";

// const AnimatedCounter = ({ target }: { target: number }) => {
//   const count = useMotionValue(0);
//   const rounded = useTransform(count, (latest) => Math.round(latest));
//   const ref = useRef(null);

//   // Triggers when the element is 50% visible in the viewport
//   const isInView = useInView(ref, { once: true, margin: "-50px" });

//   useEffect(() => {
//     if (isInView) {
//       animate(count, target, {
//         duration: 2, // 2 seconds for the count-up
//         ease: "easeOut",
//       });
//     }
//   }, [isInView, count, target]);

//   return <span ref={ref}>{rounded}</span>;
// };

// export default AnimatedCounter
