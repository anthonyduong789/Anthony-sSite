
import React, { useState, useEffect } from "react";
import './HomePage.css'
import {Mosaic} from "react-loading-indicators";

export default function HomePage({src}) {
  const [isLoading, setIsLoading] = useState(true);
  const [imageReady, setImageReady] = useState(false);
  

    const scrollTo = (id) => {
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: "smooth", block: "start"});
        }
      };
 

  useEffect(() => {
    const img = new Image();
    img.src = src;
    img.onload = () => setImageReady(true);
    // setInterval(() => {
      setTimeout(() => {
        if (imageReady) {
          setIsLoading(false);
        }
        else{
          setInterval(() => {
            if (imageReady) {
              setIsLoading(false);
            }
          }, 500) 
        }
      }, 1500);
      
    // }), 10000;
  }), [];


  return isLoading ? (
    <section className="min-h-screen w-full flex justify-center items-center">
      <div>
        <Mosaic color="#1e85d5" size="large" text="" textColor="" />
      </div>
    </section>
  ) : (
    <section
      className="min-h-screen w-full flex justify-center lg:items-center"
      id="home"
    >
      <div class="color-black">
        <div
          style={{ maxWidth: "1200px" }}
          class="container mx-auto flex md:px-20 md:py-10 lg:flex-row flex-col items-center "
        >
          <div class="lg:flex-grow mt-5 md:mt-0   md: w-1.5/2 lg: md:pr-4 flex flex-col md:items-start md:text-left mb-16 lg:mb-0 items-center text-center lg:w-1/2">
            <h1
              class="text-3xl font-extrabold leading-9 tracking-tight mb-3 text-gray-900 sm:text-4xl sm:leading-10 md:text-5xl md:leading-normal"
              data-aos="zoom-in-up"
              data-aos-delay="200"
            >
              Anthony Duong
            </h1>
            <p
              class="mb-8 md:pl-0  pl-2 pr-2 leading-relaxed text-lg md:text-base text-gray-700 dark:text-gray-400 lg:text-xl"
              data-aos="fade-up"
              data-aos-delay="350"
            >
              "Hello there! I'm a full-stack developer passionate about crafting
              software that solves real-world problems. Skilled in front-end and
              back-end technologies, I focus on creating efficient, user-centric
              applications. Explore my journey of blending technology with
              creativity for impactful solutions."
            </p>
            <div class="flex justify-center">
              <div
                class="inline-flex text-white bg-emerald-600 border-0 py-2 px-4 lg:px-6 focus:outline-none hover:bg-emerald-600 rounded text-lg cursor-pointer"
                data-aos="flip-up"
                data-aos-delay="500"
                onClick={() => scrollTo("about")}
              >
                About Me
              </div>
              <div
                class="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg  cursor-pointer"
                data-aos="flip-down"
                data-aos-delay="650"
                onClick={() => scrollTo("projects")}
              >
                Projects
              </div>
              <div
                class="ml-4 inline-flex text-black border-0 py-2 px-6 focus:outline-none bg-blue-500 hover:bg-blue-400 focus:ring-blue-300 rounded text-lg cursor-pointer"
                data-aos="flip-down"
                data-aos-delay="800"
                onClick={() => scrollTo("ContactForm")}
              >
                Contact
              </div>
            </div>
          </div>
          <div class="lg:max-w-md lg:w-full mb-5 md:mb-0 md:w-1/2 w-4/6">
            <img
              class="object-cover object-center rounded"
              alt="hero"
              src={src}
              data-aos="zoom-in"
              data-aos-delay="400"
              // loading="lazy"
              // onLoad={handleImageLoad}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
