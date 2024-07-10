"use client";
import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import BookSeat from "@/components/BookSeat";
import BookSeatAgain from "@/components/BookSeatAgain";
import Partners from "@/components/Partners";
import Entrepreneurs from "@/components/Entrepreneurs";
import WhoWeAre from "@/components/WhoWeAre";
import Stats from "@/components/Stats";

export default function HomePage() {
  return (
    <div className="flex flex-col ">
      <BookSeat />
      <Navbar />

      <div className="flex flex-row px-20 py-20 items-center justify-between">
        <div className="flex flex-col">
          <h1 className="font-extrabold text-4xl mb-5">
            Penetrate the African <br />
            market, Leverage the <br />
            <span className="bg-gradient-to-r from-red-500 to-violet-600 bg-clip-text text-transparent">
              Community of African
            </span>{" "}
            <br />
            Business Founders.
          </h1>

          <p className="text-sm mb-10">
            Build a <span className="text-red-400 font-bold">STRONG</span>{" "}
            business by leveraging insights from Africa’s <br />
            most successful business founders
          </p>

          <button
            className="p-2 rounded-lg mb-10 w-60 text-white font-bold "
            style={{ backgroundColor: "#C54ED8" }}
          >
            LEARN MORE
          </button>

          <div>
            <p className="text-xs">Featured more than 500 African CEOs</p>
          </div>
        </div>

        <div className="-mt-36">
          <Image
            src="/images/heroArrow.svg"
            alt="arrow"
            width={300}
            height={300}
          />
        </div>

        <div>
          <Image
            src="/images/heroImg.svg"
            alt="heroImg"
            width={400}
            height={400}
          />
        </div>

        <div className="flex flex-row items-center w-1/10 gap-2 fixed z-50 bottom-1 right-20 ">
          <Image
            src="/images/homeRight.svg"
            alt="right"
            width={100}
            height={100}
          />
        </div>
      </div>

      <Partners />

      <div className="flex flex-col justify-center pt-20 bg-slate-100 relative">
        <h1 className="text-center font-bold text-2xl mb-5">
          <span className="font-extralight text-pink-400">FREE</span> PRACTICAL
          TIPS FROM CEOs <br /> MAKING MARKS
        </h1>

        <Entrepreneurs />

        <WhoWeAre />
      </div>

      <Stats />

      <BookSeatAgain />
    </div>
  );
}
