import React, { useState } from "react";
import { Mail, MapPin } from "lucide-react";


const Footer = () => {

  return (
    <>
    <div className="border-t-[#ffffff] w-[90%] border-[1px] mt-10 "></div>
          <footer className="w-full flex flex-row justify-center items-center py-10">
            <div className="flex flex-row w-[90%] justify-evenly bp2:flex-col-reverse bp2:items-center bp2:gap-8">
              {/* Brand and Contact Info */}
              <div className="flex flex-col items-center gap-4">
                <h2 className="text-[#ffffff] bp3:text-5xl text-7xl font-light flex items-center">
              {    // <Image
                  //   src="/logo-white.png" 
                  //   alt="Mediatopea Logo"
                  //   width={132} 
                  //   height={132}
                  //   className="mr-2"
                  // />
              }
                  <span className="font-bold">MediaTopea</span>
                </h2>
                <div className="flex flex-row gap-3 items-end">
                  <Mail className="w-4 h-4 text-[#ffffff]" />
                  <a
                    href="mailto:hello@mediatopea.com"
                    className="font-light text-[#ffffff] hover:text-[#B0B0B0] transition-colors underline text-sm"
                  >
                    hello@mediatopea.com
                  </a>
                </div>
                <div className="flex flex-row gap-3 items-end">
                  <MapPin className="w-4 h-4 text-[#ffffff]" />
                  <p className="font-light text-[#ffffff] text-sm">
                    Casablanca, Maroc
                  </p>
                </div>
              </div>

              {/* Utilities and Socials Container */}
              <div className="flex flex-row gap-16 bp3:flex-col bp3:gap-8">
                {/* Utilities Section 
                <div>
                  <h3 className="text-[#B0B0B0] text-2xl font-bold mb-4">
                    Utilities
                  </h3>
                  <nav className="flex flex-col text-gray-400 gap-1 items-center">
                    <a
                      href="/"
                      className="hover:text-[#B0B0B0] transition-colors"
                    >
                      Home
                    </a>
                    <a
                      href="/product"
                      className="hover:text-[#B0B0B0] transition-colors"
                    >
                      Product
                    </a>
                    <a
                      href="/tools"
                      className="hover:text-[#B0B0B0] transition-colors"
                    >
                      Tools
                    </a>
                    <a
                      href="/contact"
                      className="hover:text-[#B0B0B0] transition-colors"
                    >
                      Contact Us
                    </a>
                  </nav>
                </div>
                */}

                <div>
                  <h3 className="text-[#ffffff] text-2xl font-bold mb-4">Pages</h3>
                  <nav className="flex flex-col text-[#ffffff] gap-1 items-center">
                    <a href="pricing" className="hover:text-[#ffffff] transition-colors">Pricing</a>
                    <a href="privacy-policy" className="hover:text-[#ffffff] transition-colors">Privacy Policy</a>
                    <a href="refund-policy" className="hover:text-[#ffffff] transition-colors">Refund Policy</a>
                    <a href="terms-of-service" className="hover:text-[#ffffff] transition-colors">Terms of Service</a>
                  </nav>
                </div>
              </div>
            </div>
            
          </footer>
      </>
  );
};

export default Footer;
