import Link from "next/link";
import { Instagram, Linkedin, Facebook, Mail, Phone, MapPin } from "lucide-react";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="relative bg-black text-white pt-16 pb-8 border-t border-gray-900 overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center opacity-20 pointer-events-none"
        style={{ backgroundImage: "url('/Assets/MapImg/Step-1.webp')" }}
      />

      <div className="relative z-10 container mx-auto px-4 lg:px-8 w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8">

          <div className="col-span-1 lg:col-span-4 flex flex-col items-start">
            <div className="flex items-center gap-3 mb-6">
              <img src="/logo.png" alt="Logo" className="w-45 object-contain" />
            </div>

            <p className="text-gray-300 text-sm leading-relaxed mb-8 max-w-sm">
              Purchasers of Dead Stock based out of Dubai,UAE,with office in Germany and Pakistan.
            </p>

            <div className="flex items-center gap-4">
              <Link href="https://www.instagram.com/webuydeadstocks?utm_source=ig_web_button_share_sheet" target="_blank" className="text-white hover:text-gray-300 transition-colors">
                <Instagram className="w-9 h-9 pointer-events-none" strokeWidth={1.25} />
              </Link>
              <Link href="https://www.linkedin.com/company/chaudary-anwar-tr.-co-llc/posts/?feedView=all" target="_blank" className="text-white hover:text-gray-300 transition-colors">
                <Linkedin className="w-9 h-9 pointer-events-none" strokeWidth={1.25} />
              </Link>
              <Link href="https://www.facebook.com/webuydeadstocks/" target="_blank" className="text-white hover:text-gray-300 transition-colors">
                <Facebook className="w-9 h-9 pointer-events-none" strokeWidth={1.25} />
              </Link>
              <Link href="https://www.tiktok.com/@webuydeadstocks.com?is_from_webapp=1&sender_device=pc" target="_blank" className="text-white hover:text-gray-300 transition-colors">
                <Image src="/images/tiktok-outline.svg" alt="Tiktok" className="w-9 h-9 pointer-events-none invert" width={36} height={36} />
              </Link>
            </div>
          </div>

          <div className="col-span-1 lg:col-span-2">
            <h3 className="text-xl font-bold mb-6">Services</h3>
            <ul className="flex flex-col gap-4">
              <li>
                <Link href="/interest" className="text-gray-300 hover:text-white transition-colors text-sm">
                  What we buy
                </Link>
              </li>
              <li>
                <Link href="/blogs" className="text-gray-300 hover:text-white transition-colors text-sm">
                  Blog
                </Link>
              </li>
            </ul>
          </div>

          <div className="col-span-1 lg:col-span-4">
            <h3 className="text-xl font-bold mb-6">Contact Us</h3>
            <ul className="flex flex-col gap-4">
              <li className="flex items-start gap-4">
                <Mail className="w-5 h-5 text-gray-300 mt-0.5" strokeWidth={1.5} />
                <a href="mailto:info@webuydeadstocks.com" className="text-gray-300 hover:text-white transition-colors text-sm">
                  info@webuydeadstocks.com
                </a>
              </li>
              <li className="flex items-start gap-4">
                <Phone className="w-5 h-5 text-gray-300 mt-0.5" strokeWidth={1.5} />
                <a href="tel:+97165390377" className="text-gray-300 hover:text-white transition-colors text-sm">
                  (+971) 6 539 0377
                </a>
              </li>
              <li className="flex items-start gap-4">
                <MapPin className="w-5 h-5 text-gray-300 mt-0.5" strokeWidth={1.5} />
                <span className="text-gray-300 text-sm">
                  P. O. Box 31146, Sharjah, UAE
                </span>
              </li>
            </ul>
          </div>

          <div className="col-span-1 lg:col-span-2">
            <h3 className="text-xl font-bold mb-6">About Us</h3>
            <ul className="flex flex-col gap-4">
              <li>
                <Link href="/about" className="text-gray-300 hover:text-white transition-colors text-sm">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-300 hover:text-white transition-colors text-sm">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="text-gray-300 hover:text-white transition-colors text-sm">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-gray-300 hover:text-white transition-colors text-sm">
                  Terms & Condition
                </Link>
              </li>
            </ul>
          </div>

        </div>

        <div className="mt-16 pt-8 border-t border-gray-800 flex flex-col items-center justify-center">
          <p className="text-gray-400 text-xs text-center">
            © 2025 We Buy Dead Stocks Dubai,UAE. All Right Reserved by WeBuyDeadStock
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;