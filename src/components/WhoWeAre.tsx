"use client";
import Image from "next/image";

export default function WhoWeAre() {
  return (
    <div className="-mb-14">
      <div className="flex flex-row justify-end -top-10 relative">
        <Image src="/images/entres.svg" alt="" width={600} height={300} />
      </div>

      <div className="flex flex-col justify-center text-center w-1/2 pt-10 pb-24 px-10 shadow-lg bg-white absolute left-64 top-3/4 transform -translate-y-1/2">
        <p className="text-pink-400 text-xs font-semibold mb-10">WHO WE ARE</p>

        <h6 className="font-extrabold text-lg mb-5">UNDER 40 CEOs</h6>

        <p className="text-justify">
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
          dolore eu fugiat nulla pariatur. At vero eos et accusamus et iusto
          odio dignissimos ducimus qui blanditiis praesentium voluptatum
          deleniti atque corrupti quos dolores et quas molestias excepturi sint
          occaecati. Duis aute irure dolor in reprehenderit in voluptate velit
          esse cillum dolore eu fugiat nulla pariatur. At vero eos et accusamus
          et iusto odio dignissimos ducimus quos dolores et quas Duis aute irure
          dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat
          nulla pariatur. At vero eos et accusamus et iusto odio dignissimos
          ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti
          quos dolores et quas molestias excepturi sint voluptatum deleniti
          atque corrupti quos dolores et quas molestias excepturi sint
          voluptatum deleniti atqueDuis aute irure dolor in reprehenderit in
          voluptate velit esse cillum dolore eu fugiat nulla pariatur. At vero
          eos et accusamus et iusto odio dignissimos ducimus qui blanditiis
          praesentium voluptatum deleniti atque corrupti quos dolores et quas
          molestias excepturi sint occaecati. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur.
        </p>
      </div>
    </div>
  );
}
