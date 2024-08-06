import Link from "next/link";
import { FaGithub } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
export default function Footer() {
  return (
    <section className="bg-black text-white py-4">
      <div className="flex flex-col items-center max-w-screen-lg mx-auto space-y-2">
        <div className="flex justify-center space-x-8 mt-8">
          <a
            href="//github.com/NaimalArain13"
            className="text-blue-300 hover:text-blue-100"
          >
            <FaGithub />
          </a>
          <a
            href="//www.linkedin.com/in/naimal-arain-/"
            className="text-blue-300 hover:text-blue-100"
          >
            <FaLinkedin />
          </a>
        </div>
        <div>
          <span className="text-sm">
            &copy; 2021{" "}
            <Link href="/" className="text-blue-500">
              Naimal
            </Link>
            . All Rights Reserved
          </span>
        </div>
      </div>
    </section>
  );
}
