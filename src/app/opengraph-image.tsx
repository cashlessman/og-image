import { ImageResponse } from "next/og";

export const alt = "Farcaster";
export const size = {
  width: 1200 ,
  height: 630 ,
};

export const contentType = "image/png";
const tokenBannerImage="https://raw.githubusercontent.com/cashlessman/images/refs/heads/main/base-season.png";
const tokenImage="https://raw.githubusercontent.com/cashlessman/images/refs/heads/main/pfp.png";
const tokenChainsImage="https://raw.githubusercontent.com/base-org/brand-kit/refs/heads/main/logo/symbol/Base_Symbol_Blue.png";
const dexImage="https://raw.githubusercontent.com/cashlessman/images/refs/heads/main/dex-screener-logo.png";

export default async function Image() {
  return new ImageResponse(
    (
<div tw="flex flex-col w-full h-full bg-[#343434] text-white font-sans">

<div tw="relative flex flex-col w-full h-2/3 bg-white text-black">
  <img
    src={tokenBannerImage}
    alt="Profile"
    // tw="w-75 h-75 rounded-lg mr-4"
  />

</div>
<img
    src={tokenImage}
    alt="Overlay"
    tw="absolute top-80 left-18 w-40 h-40 rounded-full border-4 border-black"
  />
  <img
    src={dexImage}
    alt="Overlay"
    tw="absolute top-85 right-6 w-15 h-15 rounded-full"
  />
    <img
    src={tokenChainsImage}
    alt="Overlay"
    tw="absolute top-85 left-63 w-15 h-15 rounded-lg"
  />
<div tw="flex flex-row">
  <div tw="flex flex-1 flex-col text-center items-center mt-17">
    <div tw="font-bold text-3xl">ticker</div>
    <div tw="font-bold text-2xl">token</div>

  </div>

  <div tw="flex flex-1 flex-col text-center items-center mt-17">
    <div tw="flex flex row">
    <div tw="text-3xl uppercase text-gray-400">MCAP </div>
    <div tw="font-bold text-2xl font-bold text-green-500 ml-3">+8%</div>
    </div>
    <div tw="font-bold text-4xl font-bold">$71K</div>

  </div>

  <div tw="flex flex-1 flex-col text-center items-center mt-17">
    <div tw="font-bold text-3xl uppercase text-gray-400">24H VOL</div>
    <div tw="font-bold text-4xl">$917</div>

  </div>

  <div tw="flex flex-1 flex-col text-center items-center mt-17">
    <div tw="font-bold text-3xl uppercase text-gray-400">Liquidity</div>
    <div tw="font-bold text-4xl">$32K
      
    </div>

  </div>
</div>

</div>

    ),
    {
      ...size,
    }
  );
}