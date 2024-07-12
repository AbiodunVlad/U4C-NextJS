"use client";
import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import Entrepreneurs from "@/components/Entrepreneurs";
import WhoWeAre from "@/components/WhoWeAre";

export default function CEOtips() {
  return (
    <div className="flex flex-col justify-center pt-20 pb-0 bg-slate-100 relative">
      <h1 className="text-center text-black font-bold text-2xl mb-5">
        <span className="font-extralight text-pink-400">FREE</span> PRACTICAL
        TIPS FROM CEOs <br /> MAKING MARKS
      </h1>

      <Entrepreneurs />

      <div className="relative z-10">
        <WhoWeAre />
      </div>
    </div>
  );
}
