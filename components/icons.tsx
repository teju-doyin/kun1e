import { Menu, X, type LucideIcon } from "lucide-react";

export type Icon = LucideIcon;

export const Icons = {
  menu: Menu,
  close: X,
  // For custom SVGs (like a personal logo)
  logo: (props: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" {...props}>
      <path fill="currentColor" d="..." />
    </svg>
  ),
  linkedin: (props: React.ComponentProps<"svg">) => (
    <svg 
      viewBox="0 0 24 24" 
      fill="currentColor" // Let Tailwind control this
      xmlns="http://www.w3.org/2000/svg" 
      {...props}
    >
      <path d="M5.5047 23.7597375H0.6285v-15.702749999999998h4.8762Zm-2.440725 -17.844749999999998c-1.55925 0 -2.823975 -1.2914999999999999 -2.823975 -2.8507499999999997 0 -2.1738964285714286 2.3533125 -3.5325803571428573 4.235962499999999 -2.445632142857143 0.8737392857142856 0.50445 1.4119875 1.4367214285714285 1.4119875 2.445632142857143 0 1.55925 -1.2652499999999998 2.8507499999999997 -2.823975 2.8507499999999997Zm20.690775 17.844749999999998h-4.8657v-7.643999999999999c0 -1.82175 -0.03675 -4.1579999999999995 -2.5352249999999996 -4.1579999999999995 -2.5352249999999996 0 -2.9237249999999997 1.9792499999999997 -2.9237249999999997 4.02675v7.77525h-4.87095v-15.702749999999998h4.676699999999999v2.142h0.06824999999999999c0.6509999999999999 -1.23375 2.2412249999999996 -2.53575 4.6137 -2.53575 4.935 0 5.8422 3.2497499999999997 5.8422 7.47075v8.62575Z" />
    </svg>
  ),
  twitter: (props: React.ComponentProps<"svg">) => (
    <svg 
      viewBox="0 0 24 24" 
      fill="currentColor" 
      xmlns="http://www.w3.org/2000/svg" 
      {...props}
    >
      <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8 -7.584 -6.638 7.584H0.474l8.6 -9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z" />
    </svg>
  ),
}
{/* <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" id="X--Streamline-Simple-Icons" height="24" width="24">
  <desc>
    X Streamline Icon: https://streamlinehq.com
  </desc>
  <title>X</title>
</svg>
*/}
