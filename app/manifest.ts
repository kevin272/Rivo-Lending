import { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Rivo Lending | Mortgage Broker Sydney",
    short_name: "Rivo Lending",
    description: "Expert mortgage broking and property finance in Sydney & Australia-wide.",
    start_url: "/",
    display: "standalone",
    background_color: "#0a2540",
    theme_color: "#0a2540",
    icons: [
      {
        src: "/favicon.png",
        sizes: "any",
        type: "image/png",
      },
    ],
  };
}
