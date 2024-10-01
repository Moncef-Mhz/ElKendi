import Link from "next/link";
import { Gutter } from "./Gutter";
import { navlinks } from "@/constant";

export default function Footer() {
  return (
    <footer className="mt-10  border-t border-[#cccccc30]">
      <Gutter className="py-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div className="space-y-4">
            <h2 className="text-xl xl:text-2xl font-bold">El Kendi Comite</h2>
            <p className="text-time">
              We are dedicated to providing the best service to our customers.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 flex flex-col">
              {navlinks.map((item) => (
                <Link
                  href={item.link}
                  key={item.name}
                  className="text-time hover:text-text duration-100"
                >
                  {item.name}
                </Link>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <address className="not-italic text-hover">
              <p>N°19 Zone d’activité el Boustane</p>
              <p>Alger, Algérie</p>
              <p>
                <strong className="text-text">Email:</strong>
                cp.kendi@elkendi.com
              </p>
              <p>
                <strong className="text-text">Phone:</strong> +213 770 53 13 92
              </p>
            </address>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t text-hover text-sm border-[#cccccc30] text-center">
          <p>
            &copy; {new Date().getFullYear()} El Kendi. All rights reserved.
          </p>
        </div>
      </Gutter>
    </footer>
  );
}
