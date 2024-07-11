"use client";
import React from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import Image from "next/image";

export default function CompellingProducts() {
  return (
    <div className="flex flex-col justify-center pt-20 pb-20 bg-slate-100 relative">
      <h1 className="text-center font-extrabold text-2xl mb-10">
        SHOWCASING OUR COMPELLING
        <br /> PRODUCTS
      </h1>

      <div className="flex flex-col items-center gap-5 mb-20">
        <div className="bg-white flex flex-row px-3 py-1 w-3/5 items-center justify-between shadow-lg">
          <div className="w-1/3">
            <Image
              src="/images/mediaFeature.svg"
              alt=""
              width={500}
              height={500}
            />
          </div>

          <div className="w-2/3">
            <p className="font-bold mb-3">Media Feature</p>

            <p className="mb-16 text-xs">
              At vero eos et accusamus et iusto odio dignissimos ducimus qui
              blanditiis praesentium voluptatum deleniti atque corrupti quos
              dolores et quas molestias excepturi sint occaecati.
            </p>

            <button
              className="py-2 px-5 rounded-full text-white text-xs font-bold"
              style={{ backgroundColor: "#9B05E2" }}
            >
              SCHEDULE A CALL
            </button>
          </div>
        </div>

        <div className="bg-white flex flex-row px-3 py-1 w-3/5 items-center justify-between shadow-lg">
          <div className="w-1/3">
            <Image src="/images/magazine.svg" alt="" width={500} height={500} />
          </div>

          <div className="w-2/3">
            <p className="font-bold mb-3">Magazine</p>

            <p className="mb-16 text-xs">
              At vero eos et accusamus et iusto odio dignissimos ducimus qui
              blanditiis praesentium voluptatum deleniti atque corrupti quos
              dolores et quas molestias excepturi sint occaecati.
            </p>

            <button
              className="py-2 px-5 rounded-full text-white text-xs font-bold"
              style={{ backgroundColor: "#9B05E2" }}
            >
              SUBSCRIBE NOW
            </button>
          </div>
        </div>

        <div className="bg-white flex flex-row px-3 py-1 w-3/5 items-center justify-between shadow-lg">
          <div className="w-1/3">
            <Image src="/images/events.svg" alt="" width={500} height={500} />
          </div>

          <div className="w-2/3">
            <p className="font-bold mb-3">Events</p>

            <p className="mb-16 text-xs">
              At vero eos et accusamus et iusto odio dignissimos ducimus qui
              blanditiis praesentium voluptatum deleniti atque corrupti quos
              dolores et quas molestias excepturi sint occaecati.
            </p>

            <button
              className="py-2 px-5 rounded-full text-white text-xs font-bold"
              style={{ backgroundColor: "#9B05E2" }}
            >
              BOOK YOUR SEAT
            </button>
          </div>
        </div>

        <div className="bg-white flex flex-row px-3 py-1 w-3/5 items-center justify-between shadow-lg">
          <div className="w-1/3">
            <Image
              src="/images/learningHub.svg"
              alt=""
              width={500}
              height={500}
            />
          </div>

          <div className="w-2/3">
            <p className="font-bold mb-3">Learning Hub</p>

            <p className="mb-16 text-xs">
              At vero eos et accusamus et iusto odio dignissimos ducimus qui
              blanditiis praesentium voluptatum deleniti atque corrupti quos
              dolores et quas molestias excepturi sint occaecati.
            </p>

            <button
              className="py-2 px-5 rounded-full text-white text-xs font-bold"
              style={{ backgroundColor: "#9B05E2" }}
            >
              ENROLL NOW
            </button>
          </div>
        </div>
      </div>

      <h1 className="text-center font-extrabold text-2xl mb-20">
        PLATINUM REVIEW
      </h1>

      <div className="flex flex-row items-center justify-center gap-10">
        <div className="w-1/6 flex flex-col items-center">
          <Image src="/images/omobola.svg" alt="" width={120} height={150} />

          <h6 className="font-extrabold text-base mb-1">PLATINUM NAME</h6>

          <p className="text-pink-400 text-xs font-semibold mb-3">
            DESIGNATION
          </p>

          <p className="text-xs text-start">
            At vero eos et accusamus et iusto odio dignissimos ducimus qui
            blanditiis praesentium voluptatum deleniti atque corrupti quos
            dolores et quas molestias excepturi sint occaecati.
          </p>
        </div>

        <div className="w-1/6 flex flex-col items-center">
          <Image src="/images/omobola.svg" alt="" width={120} height={150} />

          <h6 className="font-extrabold text-base mb-1">PLATINUM NAME</h6>

          <p className="text-pink-400 text-xs font-semibold mb-3">
            DESIGNATION
          </p>

          <p className="text-xs text-start">
            At vero eos et accusamus et iusto odio dignissimos ducimus qui
            blanditiis praesentium voluptatum deleniti atque corrupti quos
            dolores et quas molestias excepturi sint occaecati.
          </p>
        </div>

        <div className="w-1/6 flex flex-col items-center">
          <Image src="/images/omobola.svg" alt="" width={120} height={150} />

          <h6 className="font-extrabold text-base mb-1">PLATINUM NAME</h6>

          <p className="text-pink-400 text-xs font-semibold mb-3">
            DESIGNATION
          </p>

          <p className="text-xs text-start">
            At vero eos et accusamus et iusto odio dignissimos ducimus qui
            blanditiis praesentium voluptatum deleniti atque corrupti quos
            dolores et quas molestias excepturi sint occaecati.
          </p>
        </div>
      </div>
    </div>
  );
}
