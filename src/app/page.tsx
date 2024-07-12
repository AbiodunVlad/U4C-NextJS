import Image from "next/image";
import Signup from "./signup/page";
import HomePage from "./homePage/page";
import Login from "./login/page";

export default function Home() {
  return (
    <main>
      {/* <HomePage /> */}
      <Login />
      {/* <Signup /> */}
    </main>
  );
}
// className="flex min-h-screen flex-col items-center justify-between p-24"
