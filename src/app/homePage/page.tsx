"use client";
import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import BookSeat from "@/components/BookSeat";
import BookSeatAgain from "@/components/BookSeatAgain";
import Partners from "@/components/Partners";
import Stats from "@/components/Stats";
import HeroSection from "@/components/HeroSection";
import CEOtips from "@/components/CEOtips";
import CompellingProducts from "@/components/CompellingProducts";
import Testimonials from "@/components/Testimonials";
import Blog from "@/components/Blog";
import FreeCourses from "@/components/FreeCourses";
import TVseries from "@/components/TVseries";
import Footer from "@/components/Footer";

export default function HomePage() {
  return (
    <div className="flex flex-col ">
      <BookSeat />
      <Navbar />
      <HeroSection />
      <Partners />
      <CEOtips />
      <Stats />
      <BookSeatAgain />
      <CompellingProducts />
      <Testimonials />
      <Blog />
      <FreeCourses />
      <TVseries />
      <Footer />
    </div>
  );
}
