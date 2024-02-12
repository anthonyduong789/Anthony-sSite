import React from "react";

export default function AboutMe() {
  return (
    <section className="flex justify-center" id="about">
      <div style={{ maxWidth: "1000px" }} class="bg-gray-100 font-sans">
        <div class="container mx-auto py-8 px-4">
          <div class="bg-white p-6 rounded-lg shadow-lg">
            <div data-aos="fade-up" data-aos-delay="200">
              <h1 class="text-3xl font-semibold">Anthony Duong</h1>
              <hr class="my-4" />
            </div>

            <div data-aos="fade-up" data-aos-delay="300">
              <h2 class="text-xl font-semibold mb-2">Summary</h2>
              <p class="text-gray-700">
                I'm a Computer Science undergraduate from UC Santa Cruz. Eager
                to dive into web development and software engineering, I'm on
                the lookout for dynamic opportunities to learn and contribute to
                these fields.
              </p>
            </div>

            <div className="lg:flex justify-start items-start">
              <div data-aos="fade-up" data-aos-delay="300">
                <h2 class="text-xl font-semibold mt-4 mb-2">Languages</h2>
                <ul class="list-disc list-inside text-gray-700">
                  <li>HTML/CSS</li>
                  <li>JavaScript</li>
                  <li>Python</li>
                  <li>TypeScript</li>
                  <li>c/ c++</li>
                </ul>
              </div>
              <div className="lg:ml-6" data-aos="fade-up" data-aos-delay="400">
                <h2 class="text-xl font-semibold mt-4 mb-2">Frameworks</h2>
                <ul class="list-disc list-inside text-gray-700">
                  <li>React / React Native</li>
                  <li>Tailwind</li>
                  <li>NodeJS</li>
                  <li>Express</li>
                  <li>JQuery</li>
                </ul>
              </div>
              <div className="lg:ml-6" data-aos="fade-up" data-aos-delay="500">
                <h2 class="text-xl font-semibold mt-4 mb-2">DataBases</h2>
                <ul class="list-disc list-inside text-gray-700">
                  <li> MySQL</li>
                  <li>PostSQL</li>
                </ul>
              </div>
              <div className="lg:ml-6" data-aos="fade-up" data-aos-delay="600">
                <h2 class="text-xl font-semibold mt-4 mb-2">Familiar Tools</h2>
                <ul class="list-disc list-inside text-gray-700">
                  <li>digitalOcean</li>
                  <li>Netlify</li>
                  <li>React</li>
                  <li>Git</li>
                  <li>Google Cloud Services</li>
                </ul>
              </div>
            </div>

            <div class="mb-4" data-aos="fade-up" data-aos-delay="500">
              <h2 class="text-2xl font-semibold mt-4 mb-2">Work Experience</h2>

              <h4 class="text-lg font-semibold">
                Five Guys Training Manager (2021-2023)
              </h4>
              <p class="text-gray-700">
                In addition to my technical skills, I have a diverse set of soft
                skills that I have developed through my experiences in the
                workforce. I have worked in the food industry for over 5 years
                and have been a training manager at Five Guys for over 2 years.
                Working at Five Guys during college sharpened my communication.
                skills. I learned to lead diverse age groups, consistently
                conveying ideas with respect and clarity.
              </p>
              <p class="text-gray-600">January 2020 - Present</p>
            </div>

            <div class="mb-4" data-aos="fade-up" data-aos-delay="500">
              <h2 class="text-2xl font-semibold mt-4 mb-2">Education</h2>
              <h3 class="text-lg font-semibold">
                Bachelor of Science in Computer Science
              </h3>
              <p class="text-gray-700">University of Santa Cruz</p>
              <p class="text-gray-600">Expected Graduation in 2024</p>
            </div>
            <div class="mb-4" data-aos="fade-up" data-aos-delay="500">
              <h3 class="text-lg font-semibold">Relevant coursework</h3>
              <p class="text-gray-700">
                Data Structures and Algorithms, Computer Science/C Programming,
                Principles of Computer System Design, and Computer Architecture,
                Algorithmic Foundations of Cryptography
              </p>
            </div>
            <div data-aos="fade-up" data-aos-delay="500">
              <h2 class="text-xl font-semibold mt-4 mb-2">Contact</h2>
              <ul class="list-disc list-inside text-gray-700">
                <li>
                  Email:{" "}
                  <a
                    class="text-blue-500 hover:underline"
                    target="_blank"
                    href="mailto:anthonyduong789@gmail.com"
                  >
                    anthonyduong789@gmail.com
                  </a>
                </li>
                <li>
                  Number:{" "}
                  <a
                    href="tel: 760-575-1079"
                    class="text-blue-500 hover:underline"
                  >
                    760-575-1079
                  </a>
                </li>
                <li>
                  LinkedIn:{" "}
                  <a
                    href="https://www.linkedin.com/in/anthonyduong789"
                    target="_blank"
                    class="text-blue-500 hover:underline"
                  >
                    linkedin.com/in/anthonyduong789
                  </a>
                </li>
                <li>
                  Github:{" "}
                  <a
                    href="https://github.com/anthonyduong789"
                    target="_blank"
                    class="text-blue-500 hover:underline"
                  >
                    github.com/anthonyduong789
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
