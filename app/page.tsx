import Balancer from "react-wrap-balancer";
import  Twitter from "@/components/layout/twitter";

export default async function Login() {
  return (
    <>
    <div className="fixed top-0 left-0  w-screen h-screen flex items-center justify-center">
    <div className="w-full max-w-xl px-5 xl:px-0">
    <h1
          className="animate-fade-up bg-gradient-to-br from-black to-stone-500 bg-clip-text text-center font-display text-4xl font-bold tracking-[-0.02em] text-transparent opacity-0 drop-shadow-sm md:text-7xl md:leading-[5rem]"
          style={{ animationDelay: "0.15s", animationFillMode: "forwards" }}
        >
          <Balancer> You are NEARly there </Balancer>
        </h1>
        <p
          className="mt-4 mb-4 animate-fade-up text-center text-gray-500 opacity-0 md:text-xl"
          style={{ animationDelay: "0.25s", animationFillMode: "forwards" }}
        >
          <Balancer>
            Use this PWA template to build your own NEAR dApp. Built with <a href="https://nextjs.org/docs" className="text-blue-500 hover:underline">Next.js</a> and
        <a href="https://docs.mintbase.xyz/dev/getting-started" className="text-red-500 hover:underline"> MintbaseJS</a>
          </Balancer>
        </p>
        <a
          href="https://twitter.com/jacob_firek"
          target="_blank"
          rel="noreferrer"
          className="mx-auto flex max-w-fit animate-fade-up space-x-2 rounded-full bg-blue-100 px-7 py-2 transition-colors opacity-0 hover:bg-blue-200"
          style={{ animationDelay: "0.35s", animationFillMode: "forwards" }}
        >
        <Twitter className="h-5 w-5 text-[#1d9bf0]" />
          <p className="text-sm font-semibold text-[#1d9bf0]">
            Your projects Twitter
          </p>
        </a>
      </div>
    </div>

    </>
  );
}
