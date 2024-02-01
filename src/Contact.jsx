

import { useState } from "react";

// import "./Contact.scss";

function ContactPage() {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const [honeypot, setHoneypot] = useState(""); // Honeypot field
   const [formSubmitted, setFormSubmitted] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();

    // needs to be filled out before submission
    if (!fullName || !email || !message) {
      alert("Please fill in all fields.");
      return;
    }

    // Check if honeypot field is filled (it should not be)
    if (honeypot) {
      console.log("Spam detected.");
      return;
    }

    // Perform form validation or other logic here
    const formData = {
      access_key: "74ca02bb-c4aa-4580-9a77-c97338f8ad60",
      fullName,
      email,
      message,
    };

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      }).then((res) => {setEmail(""); setFullName(""); setMessage("");});

      const result = await response.json();

      // Handle the response
      console.log(result);
      setFormSubmitted(true); // Set flag for form submission
    } catch (error) {
      console.error("Error submitting form:", error);
    }

      if (formSubmitted) {
        return <div>Thank you for your submission!</div>;
      }
  };

  return (
    <>
      <section
        class="sectionSize justify-content flex items-center bg-Contact"
        style={{ backgroundColor: "#F2F2F2" }}
      >
        <div class="container mx-auto px-6 py-12" id="ContactForm">
          <div class="justify-center lg:-mx-6 lg:flex lg:items-center">
            <div
              // id="ContactPage"
              class="mt-8 w-full lg:w-4/12 2xl:w-1/2"
            >
              <div
                class=" shadow-gray-300/50 dark:shadow-black/50 mx-auto w-full overflow-hidden rounded-lg bg-white px-8 py-10 shadow-2xl lg:max-w-xl"
                data-aos="fade-up"
                data-aos-delay="150"
                // data-aos-anchor-placement="bottom-top"
              >
                <h1 class="text-gray-700 text-lg font-medium">Contact Me</h1>

                <form class="mt-6" onSubmit={handleSubmit}>
                  <div class="flex-1">
                    <label class="text-gray-600 mb-2 block text-sm">
                      Full Name
                    </label>
                    <input
                      type="text"
                      placeholder="James Bond"
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      class="text-gray-700 placeholder-gray-400 border-black focus:ring-blue-400 mt-2 block w-full rounded-md border bg-white px-5 py-3 focus:outline-none focus:ring focus:ring-opacity-40 "
                    />
                  </div>

                  <div class="mt-6 flex-1">
                    <label class="text-gray-600 mb-2 block text-sm">
                      Email
                    </label>
                    <input
                      type="email"
                      placeholder="Introduce your email address"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      class="text-gray-700 placeholder-gray-400 border-black focus:ring-blue-400 mt-2 block w-full rounded-md border bg-white px-5 py-3 focus:outline-none focus:ring focus:ring-opacity-40"
                    />
                  </div>

                  <div class="mt-6 w-full">
                    <label class="text-gray-600  mb-2 block text-sm">
                      Message
                    </label>
                    <textarea
                      class="text-gray-700 placeholder-gray-400 border-black  mt-2 block h-32 w-full rounded-md border bg-white px-5 py-3 focus:outline-none focus:ring focus:ring-opacity-40 md:h-48"
                      placeholder="Feel free to drop a message!"
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                    ></textarea>
                  </div>

                  <button
                    class="bg-blue-500 hover:bg-blue-400 focus:ring-blue-300 text- mt-6 w-full transform rounded-md px-6 py-3 text-sm font-medium capitalize tracking-wide transition-colors duration-300 focus:outline-none focus:ring focus:ring-opacity-50"
                    onClick={handleSubmit}
                  >
                    get in touch
                  </button>
                </form>
              </div>
            </div>
            <div
              class="h-full lg:mx-6 lg:mt-0 lg:w-1/4"
              id="ContactInfo"
              data-aos="zoom-in-up"
              data-aos-delay="100"
              data-aos-anchor-placement="top-bottom"
            >
              {/* <img src=} alt="" /> */}

              <div class="mt-8 space-y-8 md:mt-8">
                {/* <p class="-mx-2 flex items-start">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="text-blue-500 dark:text-blue-400 mx-2 h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  stroke-width="2"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>

                <span class="text-gray-700 dark:text-gray-400 mx-2 w-72 truncate">
                  Cecilia Chapman 711-2880 Nulla St. Mankato Mississippi 96522
                </span>
              </p> */}

                <p class="flex">
                  <a href="tel:760-575-1079">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="text-blue-500 dark:text-blue-400 mx-2 h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      stroke-width="2"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                      />
                    </svg>
                  </a>

                  <span class="text-gray-700 mx-2  truncate">
                    (760) 575-1079
                  </span>
                </p>

                <p class="flex items-start">
                  <a href="mailto:anthonyduong789@gmail.com">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="text-blue-500 dark:text-blue-400 mx-2 h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      stroke-width="2"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                  </a>

                  <span class="text-gray-700 mx-2 truncate">
                    anthonyduong789@gmail.com
                  </span>
                </p>
              </div>

              <div class="mt-6 md:mt-8">
                <h3 class="text-gray-600">Follow Me</h3>

                <div class="mt-4 flex ">
                  <a href="https://github.com/anthonyduong789">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 50 50"
                      width="50px"
                      height="50px"
                    >
                      {" "}
                      <path d="M17.791,46.836C18.502,46.53,19,45.823,19,45v-5.4c0-0.197,0.016-0.402,0.041-0.61C19.027,38.994,19.014,38.997,19,39 c0,0-3,0-3.6,0c-1.5,0-2.8-0.6-3.4-1.8c-0.7-1.3-1-3.5-2.8-4.7C8.9,32.3,9.1,32,9.7,32c0.6,0.1,1.9,0.9,2.7,2c0.9,1.1,1.8,2,3.4,2 c2.487,0,3.82-0.125,4.622-0.555C21.356,34.056,22.649,33,24,33v-0.025c-5.668-0.182-9.289-2.066-10.975-4.975 c-3.665,0.042-6.856,0.405-8.677,0.707c-0.058-0.327-0.108-0.656-0.151-0.987c1.797-0.296,4.843-0.647,8.345-0.714 c-0.112-0.276-0.209-0.559-0.291-0.849c-3.511-0.178-6.541-0.039-8.187,0.097c-0.02-0.332-0.047-0.663-0.051-0.999 c1.649-0.135,4.597-0.27,8.018-0.111c-0.079-0.5-0.13-1.011-0.13-1.543c0-1.7,0.6-3.5,1.7-5c-0.5-1.7-1.2-5.3,0.2-6.6 c2.7,0,4.6,1.3,5.5,2.1C21,13.4,22.9,13,25,13s4,0.4,5.6,1.1c0.9-0.8,2.8-2.1,5.5-2.1c1.5,1.4,0.7,5,0.2,6.6c1.1,1.5,1.7,3.2,1.6,5 c0,0.484-0.045,0.951-0.11,1.409c3.499-0.172,6.527-0.034,8.204,0.102c-0.002,0.337-0.033,0.666-0.051,0.999 c-1.671-0.138-4.775-0.28-8.359-0.089c-0.089,0.336-0.197,0.663-0.325,0.98c3.546,0.046,6.665,0.389,8.548,0.689 c-0.043,0.332-0.093,0.661-0.151,0.987c-1.912-0.306-5.171-0.664-8.879-0.682C35.112,30.873,31.557,32.75,26,32.969V33 c2.6,0,5,3.9,5,6.6V45c0,0.823,0.498,1.53,1.209,1.836C41.37,43.804,48,35.164,48,25C48,12.318,37.683,2,25,2S2,12.318,2,25 C2,35.164,8.63,43.804,17.791,46.836z" />
                    </svg>
                  </a>

                  <a
                    class="dark:hover:text-blue-400 text-gray-400 hover:text-blue-500 mx-1.5 transform transition-colors duration-300"
                    href="https:/www.linkedin.com/in/AnthonyDuong789"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 50 50"
                      width="50px"
                      height="50px"
                    >
                      {" "}
                      <path d="M41,4H9C6.24,4,4,6.24,4,9v32c0,2.76,2.24,5,5,5h32c2.76,0,5-2.24,5-5V9C46,6.24,43.76,4,41,4z M17,20v19h-6V20H17z M11,14.47c0-1.4,1.2-2.47,3-2.47s2.93,1.07,3,2.47c0,1.4-1.12,2.53-3,2.53C12.2,17,11,15.87,11,14.47z M39,39h-6c0,0,0-9.26,0-10 c0-2-1-4-3.5-4.04h-0.08C27,24.96,26,27.02,26,29c0,0.91,0,10,0,10h-6V20h6v2.56c0,0,1.93-2.56,5.81-2.56 c3.97,0,7.19,2.73,7.19,8.26V39z" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div style={{ display: "none" }}>
          <input
            type="text"
            value={honeypot}
            onChange={(e) => setHoneypot(e.target.value)}
          />
        </div>
      </section>
      <div style={{ height: "100px", backgroundColor: "#F2F2F2" }}></div>
    </>
  );
}
export default ContactPage;
