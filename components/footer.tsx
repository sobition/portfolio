import type React from "react";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Phone, Mail, MapPin } from "lucide-react";
import { AnimateOnScroll } from "@/components/animate-on-scroll";

import SocialIcon from "@/components/social-icon";

export const Footer = () => {
  return (
    <footer className="py-24 bg-[#0c1024]">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12">
          {/* Column 1 - About & Social */}
          <AnimateOnScroll
            animation="fade-up"
            delay={100}
            className="lg:col-span-2"
          >
            <div className="space-y-6">
              <Link href="/" className="inline-block text-3xl font-bold mb-4">
                <span className="text-[#4285f4]">Sobhan</span>
                <span className="text-[#a259ff]">.dev</span>
              </Link>

              <p className="text-gray-300 text-lg max-w-md">
                Senior Frontend Engineer specializing in building highly
                effective and user-friendly websites using JavaScript frameworks
                like React and Next.js.
              </p>

              <h3 className="text-xl font-bold pt-4">Follow me:</h3>
              <div className="flex flex-wrap gap-4">
                <a
                  href="#"
                  className="bg-[#0f1631] hover:bg-[#4285f4] p-4 rounded-md transition-colors duration-300"
                >
                  <SocialIcon name="facebook" size={24} />
                </a>
                <a
                  href="https://linkedin.com/in/sobhan-aminnejad/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#0f1631] hover:bg-[#4285f4] p-4 rounded-md transition-colors duration-300"
                >
                  <SocialIcon name="linkedin" size={24} />
                </a>
                <a
                  href="#"
                  className="bg-[#0f1631] hover:bg-[#4285f4] p-4 rounded-md transition-colors duration-300"
                >
                  <SocialIcon name="instagram" size={24} />
                </a>
                <a
                  href="#"
                  className="bg-[#0f1631] hover:bg-[#4285f4] p-4 rounded-md transition-colors duration-300"
                >
                  <SocialIcon name="github" size={24} />
                </a>
              </div>
            </div>
          </AnimateOnScroll>

          {/* Column 2 - Contact Info */}
          <AnimateOnScroll animation="fade-up" delay={200}>
            <div className="space-y-6">
              <h3 className="text-xl font-bold mb-6">Contact Info</h3>
              <ul className="space-y-6">
                <li>
                  <a href="tel:+31684093339" className="flex items-start group">
                    <div className="bg-[#0f1631] p-3 rounded-md mr-4 group-hover:bg-[#4285f4] transition-colors duration-300">
                      <Phone className="w-5 h-5 text-[#4285f4] group-hover:text-white transition-colors duration-300" />
                    </div>
                    <div>
                      <h4 className="text-white font-medium">Phone</h4>
                      <p className="text-gray-300">(+31) 684093339</p>
                    </div>
                  </a>
                </li>
                <li>
                  <a
                    href="mailto:sobition@gmail.com"
                    className="flex items-start group"
                  >
                    <div className="bg-[#0f1631] p-3 rounded-md mr-4 group-hover:bg-[#4285f4] transition-colors duration-300">
                      <Mail className="w-5 h-5 text-[#4285f4] group-hover:text-white transition-colors duration-300" />
                    </div>
                    <div>
                      <h4 className="text-white font-medium">Email</h4>
                      <p className="text-gray-300">sobition@gmail.com</p>
                    </div>
                  </a>
                </li>
                <li>
                  <div className="flex items-start group">
                    <div className="bg-[#0f1631] p-3 rounded-md mr-4 group-hover:bg-[#4285f4] transition-colors duration-300">
                      <MapPin className="w-5 h-5 text-[#4285f4] group-hover:text-white transition-colors duration-300" />
                    </div>
                    <div>
                      <h4 className="text-white font-medium">Location</h4>
                      <p className="text-gray-300">Haarlem, The Netherlands</p>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </AnimateOnScroll>

          {/* Column 3 - Useful Links */}
          <AnimateOnScroll animation="fade-up" delay={300}>
            <div className="space-y-6">
              <h3 className="text-xl font-bold mb-6">Useful Links</h3>
              <ul className="space-y-4">
                <li>
                  <a href="#" className="flex items-center group">
                    <span className="w-2 h-2 bg-[#4285f4] rounded-full mr-3 group-hover:w-3 transition-all duration-300"></span>
                    <span className="text-gray-300 group-hover:text-white transition-colors duration-300">
                      Articles
                    </span>
                  </a>
                </li>
                <li>
                  <a href="#" className="flex items-center group">
                    <span className="w-2 h-2 bg-[#a259ff] rounded-full mr-3 group-hover:w-3 transition-all duration-300"></span>
                    <span className="text-gray-300 group-hover:text-white transition-colors duration-300">
                      Courses
                    </span>
                  </a>
                </li>
                <li>
                  <a href="#" className="flex items-center group">
                    <span className="w-2 h-2 bg-[#25b6d2] rounded-full mr-3 group-hover:w-3 transition-all duration-300"></span>
                    <span className="text-gray-300 group-hover:text-white transition-colors duration-300">
                      Books
                    </span>
                  </a>
                </li>
                <li>
                  <a href="#" className="flex items-center group">
                    <span className="w-2 h-2 bg-[#4285f4] rounded-full mr-3 group-hover:w-3 transition-all duration-300"></span>
                    <span className="text-gray-300 group-hover:text-white transition-colors duration-300">
                      Portfolio
                    </span>
                  </a>
                </li>
                <li>
                  <a href="#" className="flex items-center group">
                    <span className="w-2 h-2 bg-[#a259ff] rounded-full mr-3 group-hover:w-3 transition-all duration-300"></span>
                    <span className="text-gray-300 group-hover:text-white transition-colors duration-300">
                      Mentorship
                    </span>
                  </a>
                </li>
                <li>
                  <a href="#" className="flex items-center group">
                    <span className="w-2 h-2 bg-[#25b6d2] rounded-full mr-3 group-hover:w-3 transition-all duration-300"></span>
                    <span className="text-gray-300 group-hover:text-white transition-colors duration-300">
                      Open Source
                    </span>
                  </a>
                </li>
              </ul>
            </div>
          </AnimateOnScroll>

          {/* Column 4 - Newsletter */}
          <AnimateOnScroll animation="fade-up" delay={400}>
            <div className="space-y-6">
              <h3 className="text-xl font-bold mb-6">Newsletter</h3>
              <p className="text-gray-300 mb-6">
                Subscribe to my newsletter to get updates on my latest projects,
                articles, and tech insights.
              </p>
              <div className="space-y-4">
                <input
                  type="email"
                  placeholder="Your email address"
                  className="w-full bg-[#0f1631] border border-gray-700 rounded-md p-4 text-white focus:outline-none focus:ring-2 focus:ring-[#4285f4]"
                />
                <Button className="w-full bg-[#4285f4] hover:bg-[#3b77db] text-white py-6">
                  Subscribe
                </Button>
              </div>
              <p className="text-gray-400 text-sm mt-4">
                I'll never share your email with anyone else.
              </p>
            </div>
          </AnimateOnScroll>
        </div>

        {/* Copyright Section */}
        <AnimateOnScroll animation="fade-up" delay={500}>
          <div className="mt-20 pt-10 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center gap-6">
            <p className="text-gray-400">
              © {new Date().getFullYear()} Sobhan Aminnejad. All rights
              reserved.
            </p>
            <div className="flex flex-wrap gap-6 text-gray-400">
              <a href="#" className="hover:text-white transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-white transition-colors">
                Terms of Service
              </a>
              <a href="#" className="hover:text-white transition-colors">
                Cookies Settings
              </a>
            </div>
          </div>
        </AnimateOnScroll>
      </div>
    </footer>
  );
};
