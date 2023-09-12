import Hero from "./components/homeCMP/Hero.js";
import Trending from "./components/homeCMP/Trending.js"
export const metadata = {
  title: "🍧",
  description: "buy and sell NFT",
  // author: "@ilkinsufi",
};

export default async function Home() {
  const res = await fetch("https://fakestoreapi.com/products/2", {
    cache: "no-cache",
  });
  const data = await res.json();
  return (
    // <div className="[&.active]:text-red-950 activ text-center cursor-help text-[#fdf] mt-[25px] hover:text-green-950 cursor-help duration-300">
    //   oxo
    // </div>
    <>
      {" "}
      <Hero />
      <Trending/>{" "}
    </>
  );
}
