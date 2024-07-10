"use client";
import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import Image from "next/image";
import SideImage from "@/components/SideImage";

export default function Login() {
  const [user, setUser] = useState({
    email: "",
    password: "",
    keepSignedIn: false,
  });

  const onLogin = async () => {
    alert("Logged in");
  };

  return (
    <div className="flex flex-rox items-center justify-around">
      <div className="bg-slate-100 w-1/2 flex flex-col items-center justify-center min-h-screen py-2">
        <Image
          className="mb-5"
          src="/images/logo.svg"
          alt="logo"
          width={100}
          height={100}
        />

        <h2 className="font-bold text-3xl mb-5">Login</h2>

        <input
          className="p-2 border border-red-300 rounded-lg mb-5 focus:outline-none focus:border-red-800"
          placeholder="Email"
          id="email"
          type="email"
          value={user.email}
          onChange={(e) => setUser({ ...user, email: e.target.value })}
        />

        <input
          className="p-2 border border-red-300 rounded-lg mb-5 focus:outline-none focus:border-red-800"
          placeholder="Password"
          type="password"
          value={user.password}
          onChange={(e) => setUser({ ...user, password: e.target.value })}
        />

        <button
          onClick={onLogin}
          className="p-2 border bg-purple-700 rounded-full mb-5 w-60 text-white font-bold"
        >
          Login
        </button>

        <div className="flex items-center mb-5">
          <input
            id="keep-signed-in"
            type="checkbox"
            className="mr-2 "
            checked={user.keepSignedIn}
            onChange={(e) =>
              setUser({ ...user, keepSignedIn: e.target.checked })
            }
          />
          <label htmlFor="keep-signed-in" className="text-xs">
            Keep me signed in
          </label>
        </div>

        <p className="mb-5">Or</p>

        <button className="p-2 border bg-white rounded-xl mb-10 w-60">
          {" "}
          Login with Google
        </button>

        <p>
          Need an account? {""}
          <Link href="/signup" className="text-blue-600 font-bold">
            Create one
          </Link>
        </p>
      </div>

      <div
        className="w-1/2 flex flex-col items-center justify-center min-h-screen py-1"
        style={{
          background:
            "linear-gradient(to left, #7F7FFF 0%, #E6E6FA 50%, #CDB1DB 50%, #E6E6FA 100%)",
          backgroundSize: "100% 100%",
          backgroundRepeat: "no-repeat",
        }}
      >
        <SideImage />
      </div>
    </div>
  );
}
