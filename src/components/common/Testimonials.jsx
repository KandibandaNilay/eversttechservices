import React from 'react';
import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const Testimonials = ({ testimonials, title = 'What Our Clients Say', subtitle = 'Real feedback from real clients' }) => {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-darkBlue/5 to-royalBlue/5">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center max-w-3xl mx-auto mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-royalBlue/10 text-royalBlue text-xs font-semibold uppercase tracking-wider mb-4">
            Testimonials
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-darkBlue">{title}</h2>
          <p className="mt-4 text-lg text-gray-600">{subtitle}</p>
        </motion.div>

        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={30}
          slidesPerView={1}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          className="pb-12"
        >
          {testimonials.map((testimonial, index) => (
            <SwiperSlide key={index}>
              <motion.div 
                className="bg-white rounded-2xl p-6 shadow-lg shadow-darkBlue/5 border border-gray-100/50 h-full hover:shadow-xl transition-shadow duration-300"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-14 h-14 rounded-full bg-gradient-to-br from-royalBlue/20 to-cyan/20 flex items-center justify-center text-2xl font-bold text-royalBlue flex-shrink-0">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div>
                    <h4 className="font-bold text-darkBlue">{testimonial.name}</h4>
                    <p className="text-sm text-gray-500">{testimonial.role}</p>
                  </div>
                </div>
                <div className="flex text-amber-400 mb-3">
                  {'★'.repeat(Math.floor(testimonial.rating))}
                  {'☆'.repeat(5 - Math.floor(testimonial.rating))}
                </div>
                <p className="text-gray-600 leading-relaxed text-sm">"{testimonial.content}"</p>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Testimonials;