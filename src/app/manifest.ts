import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Candombe",
    short_name: "Candombe",
    description: "Toolkit for band management",
    theme_color: "#e71886",
    background_color: "#1e293b",
    display: "standalone",
    orientation: "any",
    scope: "/",
    start_url: "/",
    icons: [
      {
        src: "icons/icon_192.png",
        sizes: "192x192",
        type: "image/png",
        purpose: "any",
      },
      {
        src: "icons/icon_512.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "any",
      },
      {
        src: "icons/maskable_192.png",
        sizes: "192x192",
        type: "image/png",
        purpose: "maskable",
      },
      {
        src: "icons/maskable_512.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "maskable",
      },
    ],
  };
}
