import React from "react";
import Carousel from "@/components/homePage/Carousel";
import ContactForm from "@/components/homePage/ContactForm";
import SwiperCards from "@/components/homePage/SwiperCards";

const Home = () => {
  return (
    <div className="flex flex-col gap-10">
      <div>
        <Carousel />
      </div>
      <div className="max-w-screen-xl  mx-auto">
        <h1 className="text-2xl font-bold text-foreground dark:text-dark-foreground">
          High to low
        </h1>
        <div className="relative">
          <SwiperCards />
        </div>
      </div>
      <div className="max-w-screen-xl mx-auto">
        <h1 className="text-2xl font-bold text-foreground dark:text-dark-foreground">
          Low to High
        </h1>
        <div className="relative">
          <SwiperCards />
        </div>
      </div>
      {/* Contact us */}

      <div className="max-w-screen-xl mx-auto">
        <div className="w-full mx-auto flex flex-col gap-6">
          <div>
            <h3 className="text-2xl font-bold text-foreground dark:text-dark-foreground">
              Contact Us
            </h3>
          </div>
          <ContactForm />
        </div>
      </div>
    </div>
  );
};

export default Home;
