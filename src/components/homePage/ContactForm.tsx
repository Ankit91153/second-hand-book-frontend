import React from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

const ContactForm = () => {
  return (
    <div className="flex flex-col gap-5">
      <div className="flex flex-col gap-5">
        <div className="flex justify-between md:flex-row flex-col md:gap-10 gap-5">
          <div className="w-full">
            <Input
              type="text"
              placeholder="Enter Your Name"
              className="text-input-text placeholder-input-placeholder dark:text-dark-input-text dark:placeholder-dark-input-placeholder"
            />
          </div>
          <div className="w-full">
            <Input
              type="number"
              placeholder="Enter Your Phone Number"
              className="text-input-text placeholder-input-placeholder dark:text-dark-input-text dark:placeholder-dark-input-placeholder"
            />
          </div>
        </div>
        <div className="w-full">
          <Input
            type="email"
            placeholder="Enter Your Email"
            className="text-input-text placeholder-input-placeholder dark:text-dark-input-text dark:placeholder-dark-input-placeholder"
          />
        </div>
        <div className="w-full">
          <Textarea
            placeholder="Type your message here."
            className="text-input-text placeholder-input-placeholder dark:text-dark-input-text dark:placeholder-dark-input-placeholder"
          />
        </div>
      </div>
      <div className="flex items-center justify-center">
      <Button className="bg-button text-button-text hover:bg-button-hover dark:bg-dark-button dark:text-dark-button-text dark:hover:bg-dark-button-hover">
          Submit
        </Button>
      </div>
    </div>
  );
};

export default ContactForm;
