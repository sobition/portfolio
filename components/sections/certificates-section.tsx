import React from "react";
import { AnimateOnScroll } from "@/components/animate-on-scroll";
import { Button } from "@/components/ui/button";
import { certificates } from "@/data/certificates";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination } from "swiper/modules";

import "./certificates-section.css";

const CertificatesSection = React.forwardRef<HTMLElement>((_, ref) => {
  return (
    <section ref={ref} id="certificates" className="py-20 bg-[#0a0d1d]">
      <div className="container mx-auto px-4">
        <AnimateOnScroll animation="fade-up">
          <h2 className="text-5xl font-bold mb-6">Certificates</h2>
          <p className="text-gray-300 mb-16 max-w-2xl">
            Check out some of my Certificates, ranging from Web Development
            Professional to Machine Learning.
          </p>
        </AnimateOnScroll>

        <div className="relative">
          <Swiper
            modules={[Pagination, Autoplay]}
            spaceBetween={30}
            slidesPerView={1}
            loop={true}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            pagination={{ clickable: true }}
            breakpoints={{
              768: {
                slidesPerView: 3,
                navigation: true,
              },
            }}
          >
            {certificates.map((certificate, index) => (
              <SwiperSlide key={index}>
                <AnimateOnScroll animation="fade-up" delay={100 * index}>
                  <div className="bg-[#0f1631] rounded-lg p-6 shadow-lg transform transition-transform hover:scale-105 z-10">
                    <div className="flex justify-between items-start mb-4">
                      <div className=" w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center overflow-hidden">
                        <img
                          src={certificate.provider_logo}
                          alt={certificate.title}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="text-sm text-gray-400">
                        {new Date(certificate.issued).toLocaleDateString(
                          "en-US",
                          { year: "numeric", month: "long" }
                        )}
                      </div>
                    </div>
                    <h3 className="text-l font-bold mb-2">
                      {certificate.title}
                    </h3>
                    <p className="text-gray-300 mb-4 text-sm">
                      {certificate.description ||
                        "Certificate description not available."}
                    </p>
                    <div className="flex justify-end">
                      <Button
                        variant="outline"
                        size="sm"
                        className="border-[#4285f4] text-[#4285f4] hover:bg-[#4285f4]/10 hover:text-[#4285f4] transition-colors"
                      >
                        View
                      </Button>
                    </div>
                  </div>
                </AnimateOnScroll>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
});

CertificatesSection.displayName = "CertificatesSection";

export default CertificatesSection;
