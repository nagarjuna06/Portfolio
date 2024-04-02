import { navList } from "@/utils";

const baseUrl = "https://nagarjuna.vercel.app";
export default function sitemap() {
  return navList.map((each) => ({
    url: `${baseUrl}${each.route}`,
    lastModified: new Date(),
    changeFrequently: "daily",
    priority: 1,
  }));
}
