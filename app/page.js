export const metadata = {
  title: "ArtByteVault",
  description: "buy and sell NFT",
  author: "@ilkinsufi",
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
    <>testt</>
  );
}
