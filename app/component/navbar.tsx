import Link from "next/link";

export default function Navbar(){
    return(
        <div className="bg-customPurple p-2 shadow-md">
        <section className="bg-gray-900 text-white py-4">
          <nav className="flex items-center justify-between px-4 md:px-6">
            <Link
              href="/"
              className="text-2xl font-bold flex items-center hover:text-3xl hover:text-cyan-300
          cursor-pointer"
            >
              NAIMAL
            </Link>
            <div className="md:hidden"></div>
            <div
              className="hidden md:flex flex-col md:flex-row md:items-center"
              id="navLinks"
            >
              <ul className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-8">
                <li>
                  <Link href="/" className="hover:text-blue-300">
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="/info" className="hover:text-blue-300">
                    Info
                  </Link>
                </li>
                <li>
                  <Link href="/services" className="hover:text-blue-300">
                    Services
                  </Link>
                </li>
                <li>
                  <Link href="/work" className="hover:text-blue-300">
                    Work
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="hover:text-blue-300">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
          </nav>
        </section>
      </div>
    )
}