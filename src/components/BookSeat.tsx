"use client";
import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function BookSeat() {
  return (
    <div className="flex flex-row items-center px-20 py-1 justify-between bg-gradient-to-r from-red-500 to-violet-600">
      <p className="font-thin text-slate-50 text-xs">
        Et harum quidem rerum facilis est et expedita distinctio. <br /> Nam
        libero tempore.
      </p>

      <button className="p-1 bg-black rounded-lg w-60 text-white text-sm font-semibold">
        BOOK YOUR SEAT NOW
      </button>
    </div>
  );
}
