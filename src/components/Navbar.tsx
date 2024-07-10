"use client";
import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import Image from "next/image";

export default function Navbar() {
  return (
    <div className="flex flex-row px-20 py-4 items-center justify-between shadow-lg overflow-hidden">
      <Image src="/images/logo.svg" alt="logo" width={50} height={50} />

      <ul className="flex flex-row items-center">
        <li className="font-medium text-sm mr-10">Home</li>
        <li className="font-medium text-sm mr-10">About Us</li>
        <li className="font-medium text-sm mr-10">Resources</li>
        <li className="font-medium text-sm mr-10">Success Stories</li>
        <li className="font-medium text-sm mr-10">Blog</li>
        <button className="font-medium text-xs text-center px-5 py-1 mr-10 bg-black rounded-full text-white">
          JOIN OUR <br /> COMMUNITY
        </button>
        <button
          className="font-medium text-xs text-center px-6 py-3 mr-10 rounded-full text-white"
          style={{ backgroundColor: "#C54ED8" }}
        >
          COURSES
        </button>
        <button className="font-medium text-xs text-center px-6 py-3 border border-pink-400  rounded-full text-pink-400">
          Shop
        </button>
      </ul>
    </div>
  );
}
