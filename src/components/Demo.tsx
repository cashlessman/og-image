
"use client";

import React from "react";

export default function Demo(
  { }: { title?: string } = { title: "Frames v2 Demo" }
) {

  const transactions = [
    { time: "5m ago", type: "Sell", amount: "66,016.88", eth: "<0.001", usd: "$1.26", tx: "0x854..." },
    { time: "32m ago", type: "Sell", amount: "28,166.58", eth: "<0.001", usd: "$0.538", tx: "0x854..." },
    { time: "39m ago", type: "Buy", amount: "1.17M", eth: "0.007", usd: "$22.87", tx: "0x0cf..." },
    { time: "40m ago", type: "Sell", amount: "4.20M", eth: "0.025", usd: "$80.18", tx: "0x790..." },
    { time: "41m ago", type: "Buy", amount: "71,114.56", eth: "<0.001", usd: "$1.38", tx: "0x6e6..." },
    { time: "43m ago", type: "Buy", amount: "997,738.41", eth: "0.006", usd: "$19.40", tx: "0x6e6..." },
    { time: "44m ago", type: "Sell", amount: "110,330.64", eth: "<0.001", usd: "$2.10", tx: "0x5cf..." },
    { time: "51m ago", type: "Buy", amount: "39.61M", eth: "0.236", usd: "$769.88", tx: "0xe9f..." },
  ];
  
    return (
      <div className="bg-[#181414] h-screen">
      <div className="p-5 text-white font-bold text-2xl">
      Transaction
      </div>
      <div className={`bg-[#201c1c] overflow-hidden rounded-2xl bg-black m-5 border-2 border-gray-800`}>
        <table className=" w-full text-left text-white">
          <thead>
            <tr className="border-b border-gray-700 text-gray-400">
              <th className="px-4 py-2">&#8595; Time</th>
              <th className="px-4 py-2">&#8661; Type</th>
              <th className="px-4 py-2">$CLANKFUN</th>
              <th className="px-4 py-2">For</th>
              <th className="px-4 py-2">USD</th>
              <th className="px-4 py-2">Wallet</th>
            </tr>
          </thead>
          <tbody>
            {transactions.map((tx, index) => (
              <tr key={index} className=" bg-[#181414] border-b border-gray-800">
                <td className="px-4 py-2 text-gray-400">{tx.time}</td>
                <td className={`px-4 py-2 font-bold ${tx.type === "Buy" ? "text-green-500" : "text-red-500"}`}>{tx.type}</td>
                <td className="px-4 py-2">{tx.amount}</td>
                <td className="px-4 py-2">{tx.eth} <span className="text-blue-400">ETH</span></td>
                <td className="px-4 py-2">{tx.usd}</td>
                <td className="px-4 py-2 text-blue-500 cursor-pointer">{tx.tx}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      </div>
    );}










