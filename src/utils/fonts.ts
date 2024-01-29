import { Poppins, Quattrocento } from "next/font/google";

export const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "700"],
  display: "swap",
  variable: "--font-poppins",
});

export const quattrocento = Quattrocento({
    subsets: ["latin"],
    weight: ["400", "700"],
    display: "swap",
    variable: "--font-quattrocento",
});

