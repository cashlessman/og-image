"use client";

import React, { useState } from "react";

export default function Demo(
  { title }: { title?: string } = { title: "Frames v2 Demo" }
) {

  return (
<div className="flex flex-col items-center justify-center h-screen bg-gradient-to-br from-blue-100 to-purple-100 text-black">
  <div className="hidden">{title}</div>
  <div className="w-96 p-8 bg-white rounded-xl shadow-xl">
    <h2 className="text-2xl font-bold text-center text-black mb-4">
      Open Garph By <a href="https://warpcast.com/cashlessman.eth" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">cashlessman.eth</a>
    </h2>
    <div className="space-y-4">

      <button
        onClick={() =>    window.open(`https://google.com`, "_blank")
        }
        className="w-full px-4 py-2 bg-blue-500 text-white font-semibold rounded-md shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-300"
      >
        View Image
      </button>
    </div>
  </div>
</div>


    

  );
}














