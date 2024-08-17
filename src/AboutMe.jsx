export default function AboutMe() {
  return (
    <section className="flex justify-center" id="about">
      <div style={{ maxWidth: "1000px" }} className="bg-gray-100 font-sans">
        <div className="container mx-auto py-8 px-4">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <div>
              <h1 className="text-3xl font-semibold">Anthony Duong</h1>
              <hr className="my-4" />
            </div>

            <div>
              <h2 className="text-xl font-semibold mb-2">Summary</h2>
              <p className="text-gray-700">
                I'm a full-stack developer specializing in building robust and
                with a passion for both front-end and back-end development, I
                deliver comprehensive solutions from concept to deployment. Open
                to job opportunities and freelance work—feel free to reach out!
              </p>
            </div>

            <div className="lg:flex justify-start items-start">
              <div>
                <h2 className="text-xl font-semibold mt-4 mb-2">Languages</h2>
                <ul className="list-disc list-inside text-gray-700">
                  <li>HTML/CSS</li>
                  <li>JavaScript</li>
                  <li>Python</li>
                  <li>TypeScript</li>
                  <li>c/ c++</li>
                </ul>
              </div>
              <div className="lg:ml-6">
                <h2 className="text-xl font-semibold mt-4 mb-2">Frameworks</h2>
                <ul className="list-disc list-inside text-gray-700">
                  <li>React / React Native</li>
                  <li>Tailwind</li>
                  <li>NodeJS</li>
                  <li>Express</li>
                  <li>JQuery</li>
                </ul>
              </div>
              <div className="lg:ml-6">
                <h2 className="text-xl font-semibold mt-4 mb-2">DataBases</h2>
                <ul className="list-disc list-inside text-gray-700">
                  <li> MySQL</li>
                  <li>PostSQL</li>
                </ul>
              </div>
              <div className="lg:ml-6">
                <h2 className="text-xl font-semibold mt-4 mb-2">
                  Familiar Tools
                </h2>
                <ul className="list-disc list-inside text-gray-700">
                  <li>digitalOcean</li>
                  <li>Netlify</li>
                  <li>React</li>
                  <li>Git</li>
                  <li>Google Cloud Services</li>
                </ul>
              </div>
            </div>

            <div className="mb-4">
              <h2 className="text-2xl font-semibold mt-4 mb-2">
                Work Experience
              </h2>

              <h4 className="text-lg font-semibold">
                Software Development Engineer Co-op
              </h4>

              <div className="text-gray-700 space-y-3 mb-3">
                <p>
                  Solutions Unified is a startup focused on medical device
                  manufacturing solutions in North America through the
                  development of a manufacturing execution platform. Here are
                  some things I developed at my time there.
                </p>
                <p>
                  -Admin Controls: Built and refined admin controls for managing
                  memberships and products of a organization, incorporating
                  features for role assignments and data versioning.
                </p>

                <p>
                  -Product Management: Enhanced product tracking by developing
                  features to manage the Device Master Record (DMR), which
                  included version control for better traceability and quality
                  analysis vital for Medical devices.
                </p>
                <p>
                  -Data Handling: Implemented and optimized data models using a
                  DAO pattern, ensuring efficient data access and consistency.
                </p>
                <p>
                  -UI Development: Designed user-friendly interface components
                  to improve usability and interaction across the platform.
                </p>
                <p>
                  -This internship not only allowed me to apply my technical
                  skills but also gave me a deep insight into the challenges and
                  innovations in the medical device manufacturing industry.
                </p>
              </div>

              <h4 className="text-lg font-semibold">
                Five Guys Training Manager (2021-2023)
              </h4>
              <p className="text-gray-700">
                In addition to my technical skills, I have a diverse set of soft
                skills that I have developed through my experiences in the
                workforce. I have worked in the food industry for over 5 years
                and have been a training manager at Five Guys for over 2 years.
                Working at Five Guys during college sharpened my communication.
                skills. I learned to lead diverse age groups, consistently
                conveying ideas with respect and clarity.
              </p>
              <p className="text-gray-600">January 2020 - Present</p>
            </div>

            <div className="mb-4">
              <h2 className="text-2xl font-semibold mt-4 mb-2">Education</h2>
              <h3 className="text-lg font-semibold">
                Bachelor of Science in Computer Science
              </h3>
              <p className="text-gray-700">University of Santa Cruz</p>
              <p className="text-gray-600">Expected Graduation in 2024</p>
            </div>
            <div className="mb-4">
              <h3 className="text-lg font-semibold">Relevant coursework</h3>
              <p className="text-gray-700">
                Data Structures and Algorithms, Computer Science/C Programming,
                Principles of Computer System Design, and Computer Architecture,
                Algorithmic Foundations of Cryptography
              </p>
            </div>
            <div>
              <h2 className="text-xl font-semibold mt-4 mb-2">Contact</h2>
              <ul className="list-disc list-inside text-gray-700">
                <li>
                  Email:{" "}
                  <a
                    className="text-blue-500 hover:underline"
                    href="mailto:anthonyduong789@gmail.com"
                  >
                    anthonyduong789@gmail.com
                  </a>
                </li>
                <li>
                  Number:{" "}
                  <a
                    href="tel: 760-575-1079"
                    className="text-blue-500 hover:underline"
                  >
                    760-575-1079
                  </a>
                </li>
                <li>
                  LinkedIn:{" "}
                  <a
                    href="https://www.linkedin.com/in/anthonyduong789"
                    className="text-blue-500 hover:underline"
                  >
                    linkedin.com/in/anthonyduong789
                  </a>
                </li>
                <li>
                  Github:{" "}
                  <a
                    href="https://github.com/anthonyduong789"
                    className="text-blue-500 hover:underline"
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
