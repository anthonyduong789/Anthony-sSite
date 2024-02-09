
import React, { useState, useEffect } from "react";
import './HomePage.scss'
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
          }, 100) 
        }
      }, 1500);
      
    // }), 10000;
  }), [];


  return isLoading ? (
    <div class="loader">
      
        <svg
          class="car"
          width="102"
          height="40"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g
            transform="translate(2 1)"
            stroke="#002742"
            fill="none"
            fill-rule="evenodd"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path
              class="car__body"
              d="M47.293 2.375C52.927.792 54.017.805 54.017.805c2.613-.445 6.838-.337 9.42.237l8.381 1.863c2.59.576 6.164 2.606 7.98 4.531l6.348 6.732 6.245 1.877c3.098.508 5.609 3.431 5.609 6.507v4.206c0 .29-2.536 4.189-5.687 4.189H36.808c-2.655 0-4.34-2.1-3.688-4.67 0 0 3.71-19.944 14.173-23.902zM36.5 15.5h54.01"
              stroke-width="3"
            />
            <ellipse
              class="car__wheel--left"
              stroke-width="3.2"
              fill="#FFF"
              cx="83.493"
              cy="30.25"
              rx="6.922"
              ry="6.808"
            />
            <ellipse
              class="car__wheel--right"
              stroke-width="3.2"
              fill="#FFF"
              cx="46.511"
              cy="30.25"
              rx="6.922"
              ry="6.808"
            />
            <path
              class="car__line car__line--top"
              d="M22.5 16.5H2.475"
              stroke-width="3"
            />
            <path
              class="car__line car__line--middle"
              d="M20.5 23.5H.4755"
              stroke-width="3"
            />
            <path
              class="car__line car__line--bottom"
              d="M25.5 9.5h-19"
              stroke-width="3"
            />
          </g>
        </svg>
      

      
    </div>
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
