import { BuyMeACoffee } from "../shared/icons";

import Image from "next/image";

export default function Footer() {
  return (
    <div className="fixed bottom-0 absolute w-full py-5 text-center">
      <p className="text-gray-500">
        Built by {" "}
        <a
          className="font-semibold text-gray-600 underline-offset-4 transition-colors hover:underline"
          href="https://github.com/jtfirek"
          target="_blank"
          rel="noopener noreferrer"
        >
          Jacob Firek 
        </a>
        Powered by {" "}
        <Image 
          src="/../app/mintbase-logo.avif"
          alt="Mintbase Logo" 
          width={100}
          height={100}
          className="ml-2" 
        />

      </p>
    </div>
  );
}
