"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import Image from "next/image";
import SideImage from "@/components/SideImage";

import { auth, googleProvider } from "../../config/firebase";
import { signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [user, setUser] = useState({
    // email: "",
    // password: "",
    keepSignedIn: false,
  });

  const [isClient, setIsClient] = useState(false);

  const router = useRouter();

  useEffect(() => {
    setIsClient(true);
  }, []);

  const login = async () => {
    if (isClient) {
      try {
        await signInWithEmailAndPassword(auth, email, password);
        router.push("/homePage");
      } catch (err) {
        alert("Failed to login");
      }
    }
  };

  const loginWithGoogle = async () => {
    if (isClient) {
      try {
        await signInWithPopup(auth, googleProvider);
        router.push("/homePage");
      } catch (err) {
        alert("Google login error");
      }
    }
  };

  if (!isClient) {
    return null;
  }

  return (
    <div className="flex flex-col-reverse md:flex-row items-center justify-around min-h-screen">
      <div className="bg-slate-100 w-full md:w-1/2 flex flex-col items-center justify-center min-h-screen py-2 px-4">
        <Image
          className="mb-5"
          src="/images/logo.svg"
          alt="logo"
          width={100}
          height={100}
        />

        <h2 className="font-bold text-black text-3xl mb-5">Login</h2>

        <input
          className="text-black w-full md:w-3/4 p-2 border border-red-300 rounded-lg mb-5 focus:outline-none focus:border-red-800"
          placeholder="Email"
          id="email"
          type="email"
          // value={user.email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          className="text-black w-full md:w-3/4 p-2 border border-red-300 rounded-lg mb-5 focus:outline-none focus:border-red-800"
          placeholder="Password"
          type="password"
          // value={user.password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button
          onClick={login}
          className="w-full md:w-3/4 p-2 border bg-purple-700 rounded-full mb-5 text-white font-bold"
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
          <label htmlFor="keep-signed-in" className="text-black text-xs">
            Keep me signed in
          </label>
        </div>

        <p className="mb-5 text-black">Or</p>

        <button
          onClick={loginWithGoogle}
          className="text-black w-full md:w-3/4 p-2 border bg-white rounded-xl mb-10"
        >
          Login with Google
        </button>

        <p className="text-black">
          Need an account? {""}
          <Link href="/signup" className="text-blue-600 font-bold">
            Create one
          </Link>
        </p>
      </div>

      <div
        className="w-full md:w-1/2 flex flex-col items-center justify-center min-h-screen py-1"
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
