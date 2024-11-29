import React, { useState } from "react";
import { ContactDetail } from "./components/ContactDetail";
import Footer from "./components/footer";
import Header from "./components/header";
import Mail from "./Assets/Mail.png"
import Phone from "./Assets/Phone.png"
import Map_Pin from "./Assets/Map_Pin.png"
const contactDetails = [
  {
    icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/d5ebb62ddf8d3ffa28938aceb447d21362765f7ca7fe30f4c19e410452cbea0e",
    title: "Contact Details",
    content: "+91 9980336484"
  },
  {
    icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/61e5bd143baba1d3f7e10f46e1c8ed72997ff77195d1c5adca21c04c4f937465",
    title: "Email Us",
    content: "office@optimumsync.com"
  }
];

const countryCodes = [
  { code: "+93", name: "Afghanistan" },
  { code: "+355", name: "Albania" },
  { code: "+213", name: "Algeria" },
  { code: "+1684", name: "American Samoa" },
  { code: "+376", name: "Andorra" },
  { code: "+244", name: "Angola" },
  { code: "+1264", name: "Anguilla" },
  { code: "+672", name: "Antarctica" },
  { code: "+54", name: "Argentina" },
  { code: "+374", name: "Armenia" },
  { code: "+297", name: "Aruba" },
  { code: "+61", name: "Australia" },
  { code: "+43", name: "Austria" },
  { code: "+994", name: "Azerbaijan" },
  { code: "+1242", name: "Bahamas" },
  { code: "+973", name: "Bahrain" },
  { code: "+880", name: "Bangladesh" },
  { code: "+1246", name: "Barbados" },
  { code: "+375", name: "Belarus" },
  { code: "+32", name: "Belgium" },
  { code: "+501", name: "Belize" },
  { code: "+229", name: "Benin" },
  { code: "+975", name: "Bhutan" },
  { code: "+591", name: "Bolivia" },
  { code: "+387", name: "Bosnia and Herzegovina" },
  { code: "+267", name: "Botswana" },
  { code: "+55", name: "Brazil" },
  { code: "+1284", name: "British Virgin Islands" },
  { code: "+673", name: "Brunei" },
  { code: "+359", name: "Bulgaria" },
  { code: "+226", name: "Burkina Faso" },
  { code: "+257", name: "Burundi" },
  { code: "+855", name: "Cambodia" },
  { code: "+237", name: "Cameroon" },
  { code: "+1", name: "Canada" },
  { code: "+238", name: "Cape Verde" },
  { code: "+1345", name: "Cayman Islands" },
  { code: "+236", name: "Central African Republic" },
  { code: "+56", name: "Chile" },
  { code: "+86", name: "China" },
  { code: "+61", name: "Christmas Island" },
  { code: "+57", name: "Colombia" },
  { code: "+269", name: "Comoros" },
  { code: "+242", name: "Congo (Congo-Brazzaville)" },
  { code: "+243", name: "Congo (Congo-Kinshasa)" },
  { code: "+682", name: "Cook Islands" },
  { code: "+506", name: "Costa Rica" },
  { code: "+225", name: "Cote d'Ivoire" },
  { code: "+385", name: "Croatia" },
  { code: "+53", name: "Cuba" },
  { code: "+357", name: "Cyprus" },
  { code: "+420", name: "Czech Republic" },
  { code: "+45", name: "Denmark" },
  { code: "+253", name: "Djibouti" },
  { code: "+1", name: "Dominica" },
  { code: "+809", name: "Dominican Republic" },
  { code: "+670", name: "East Timor" },
  { code: "+593", name: "Ecuador" },
  { code: "+20", name: "Egypt" },
  { code: "+503", name: "El Salvador" },
  { code: "+240", name: "Equatorial Guinea" },
  { code: "+291", name: "Eritrea" },
  { code: "+372", name: "Estonia" },
  { code: "+251", name: "Ethiopia" },
  { code: "+500", name: "Falkland Islands" },
  { code: "+298", name: "Faroe Islands" },
  { code: "+33", name: "France" },
  { code: "+594", name: "French Guiana" },
  { code: "+689", name: "French Polynesia" },
  { code: "+241", name: "Gabon" },
  { code: "+220", name: "Gambia" },
  { code: "+995", name: "Georgia" },
  { code: "+49", name: "Germany" },
  { code: "+233", name: "Ghana" },
  { code: "+350", name: "Gibraltar" },
  { code: "+30", name: "Greece" },
  { code: "+299", name: "Greenland" },
  { code: "+1", name: "Grenada" },
  { code: "+590", name: "Guadeloupe" },
  { code: "+502", name: "Guatemala" },
  { code: "+224", name: "Guinea" },
  { code: "+245", name: "Guinea-Bissau" },
  { code: "+595", name: "Paraguay" },
  { code: "+509", name: "Haiti" },
  { code: "+504", name: "Honduras" },
  { code: "+852", name: "Hong Kong" },
  { code: "+36", name: "Hungary" },
  { code: "+354", name: "Iceland" },
  { code: "+91", name: "India" }, // Default
  { code: "+62", name: "Indonesia" },
  { code: "+98", name: "Iran" },
  { code: "+964", name: "Iraq" },
  { code: "+353", name: "Ireland" },
  { code: "+972", name: "Israel" },
  { code: "+39", name: "Italy" },
  { code: "+1", name: "Jamaica" },
  { code: "+81", name: "Japan" },
  { code: "+962", name: "Jordan" },
  { code: "+7", name: "Kazakhstan" },
  { code: "+254", name: "Kenya" },
  { code: "+686", name: "Kiribati" },
  { code: "+965", name: "Kuwait" },
  { code: "+996", name: "Kyrgyzstan" },
  { code: "+856", name: "Laos" },
  { code: "+371", name: "Latvia" },
  { code: "+961", name: "Lebanon" },
  { code: "+266", name: "Lesotho" },
  { code: "+231", name: "Liberia" },
  { code: "+218", name: "Libya" },
  { code: "+423", name: "Liechtenstein" },
  { code: "+370", name: "Lithuania" },
  { code: "+352", name: "Luxembourg" },
  { code: "+853", name: "Macau" },
  { code: "+389", name: "North Macedonia" },
  { code: "+261", name: "Madagascar" },
  { code: "+265", name: "Malawi" },
  { code: "+60", name: "Malaysia" },
  { code: "+960", name: "Maldives" },
  { code: "+223", name: "Mali" },
  { code: "+356", name: "Malta" },
  { code: "+692", name: "Marshall Islands" },
  { code: "+596", name: "Martinique" },
  { code: "+222", name: "Mauritania" },
  { code: "+230", name: "Mauritius" },
  { code: "+52", name: "Mexico" },
  { code: "+377", name: "Monaco" },
  { code: "+976", name: "Mongolia" },
  { code: "+382", name: "Montenegro" },
  { code: "+1", name: "Montserrat" },
  { code: "+212", name: "Morocco" },
  { code: "+258", name: "Mozambique" },
  { code: "+95", name: "Myanmar (Burma)" },
  { code: "+264", name: "Namibia" },
  { code: "+674", name: "Nauru" },
  { code: "+977", name: "Nepal" },
  { code: "+31", name: "Netherlands" },
  { code: "+64", name: "New Zealand" },
  { code: "+505", name: "Nicaragua" },
  { code: "+227", name: "Niger" },
  { code: "+234", name: "Nigeria" },
  { code: "+683", name: "Niue" },
  { code: "+850", name: "North Korea" },
  { code: "+47", name: "Norway" },
  { code: "+968", name: "Oman" },
  { code: "+92", name: "Pakistan" },
  { code: "+680", name: "Palau" },
  { code: "+507", name: "Panama" },
  { code: "+675", name: "Papua New Guinea" },
  { code: "+595", name: "Paraguay" },
  { code: "+51", name: "Peru" },
  { code: "+63", name: "Philippines" },
  { code: "+48", name: "Poland" },
  { code: "+351", name: "Portugal" },
  { code: "+1", name: "Puerto Rico" },
  { code: "+974", name: "Qatar" },
  { code: "+262", name: "Reunion" },
  { code: "+40", name: "Romania" },
  { code: "+7", name: "Russia" },
  { code: "+250", name: "Rwanda" },
  { code: "+590", name: "Saint Barthelemy" },
  { code: "+1", name: "Saint Kitts and Nevis" },
  { code: "+1758", name: "Saint Lucia" },
  { code: "+590", name: "Saint Martin" },
  { code: "+1", name: "Saint Pierre and Miquelon" },
  { code: "+685", name: "Samoa" },
  { code: "+378", name: "San Marino" },
  { code: "+239", name: "Sao Tome and Principe" },
  { code: "+221", name: "Senegal" },
  { code: "+248", name: "Seychelles" },
  { code: "+232", name: "Sierra Leone" },
  { code: "+65", name: "Singapore" },
  { code: "+421", name: "Slovakia" },
  { code: "+386", name: "Slovenia" },
  { code: "+677", name: "Solomon Islands" },
  { code: "+252", name: "Somalia" },
  { code: "+27", name: "South Africa" },
  { code: "+82", name: "South Korea" },
  { code: "+34", name: "Spain" },
  { code: "+94", name: "Sri Lanka" },
  { code: "+249", name: "Sudan" },
  { code: "+597", name: "Suriname" },
  { code: "+268", name: "Swaziland" },
  { code: "+46", name: "Sweden" },
  { code: "+41", name: "Switzerland" },
  { code: "+963", name: "Syria" },
  { code: "+886", name: "Taiwan" },
  { code: "+992", name: "Tajikistan" },
  { code: "+255", name: "Tanzania" },
  { code: "+66", name: "Thailand" },
  { code: "+228", name: "Togo" },
  { code: "+690", name: "Tokelau" },
  { code: "+676", name: "Tonga" },
  { code: "+1", name: "Trinidad and Tobago" },
  { code: "+216", name: "Tunisia" },
  { code: "+90", name: "Turkey" },
  { code: "+993", name: "Turkmenistan" },
  { code: "+1", name: "Turks and Caicos Islands" },
  { code: "+688", name: "Tuvalu" },
  { code: "+256", name: "Uganda" },
  { code: "+380", name: "Ukraine" },
  { code: "+971", name: "United Arab Emirates" },
  { code: "+44", name: "United Kingdom" },
  { code: "+1", name: "United States" },
  { code: "+598", name: "Uruguay" },
  { code: "+998", name: "Uzbekistan" },
  { code: "+678", name: "Vanuatu" },
  { code: "+379", name: "Vatican City" },
  { code: "+58", name: "Venezuela" },
  { code: "+84", name: "Vietnam" },
  { code: "+1", name: "Virgin Islands" },
  { code: "+681", name: "Wallis and Futuna" },
  { code: "+967", name: "Yemen" },
  { code: "+260", name: "Zambia" },
  { code: "+263", name: "Zimbabwe" },
];


function ContactPage() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    countryCode: "+91",
    phone: "",
    message: ""
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { fullName, email, phone, countryCode } = formData;

    // Validate email
    const emailRegex = /^[a-zA-Z0-9._%+-]+@gmail\.com$/;
    if (!emailRegex.test(email)) {
      alert("Please enter a valid Gmail address (e.g., user@gmail.com).");
      return;
    }

    // Validate phone number
    const phoneRegex = /^\d{10}$/;
    if (!phoneRegex.test(phone)) {
      alert("Please enter a valid 10-digit phone number.");
      return;
    }

    if (!fullName.trim()) {
      alert("Full Name is required.");
      return;
    }

    alert(`Message sent! sucessfully`);
    setFormData({
      fullName: "",
      email: "",
      countryCode: "+91",
      phone: "",
      message: ""
    });
  };

  return (
    <div className="flex overflow-hidden flex-col bg-white">
      <Header />

      <main>
        {/* Header Section */}
        <section className="flex flex-col mt-1 w-full text-black max-md:max-w-full">
          <div className="flex relative flex-col justify-center items-center px-20 py-48 w-full min-h-[612px] max-md:px-5 max-md:py-24 max-md:max-w-full">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/7b5951351f3d5121a1e0a8af5b447e8e482acf096e7b11ca87b829fee4125001"
              alt="Contact background"
              className="object-cover absolute inset-0 size-full"
            />
            <div className="flex relative flex-col mb-0 ml-4 max-w-full w-[850px] max-md:mb-2.5">
              <h1 className="self-center text-6xl font-semibold max-md:text-4xl">
                Get in Touch
              </h1>
              <p className="mt-10 text-5xl max-md:max-w-full max-md:text-4xl">
                Reach out to us. We are here to assist you and answer your queries.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Form */}
        <section className="flex flex-col justify-center mt-1 w-full text-base bg-white h-[807px] max-md:max-w-full">
          <div className="flex flex-col justify-center items-center px-4 py-24 w-full bg-white max-md:max-w-full">
            <div className="flex flex-col p-10 max-w-full bg-sky-50 rounded-2xl w-[1120px] max-md:px-5">
              <h2 className="text-5xl font-medium tracking-tighter leading-none text-stone-950 max-md:text-4xl">
                Contact Form
              </h2>
              <form
                className="flex flex-col mt-10 w-full max-w-[1040px] text-neutral-400 max-md:max-w-full"
                onSubmit={handleSubmit}
              >
                <div className="mb-6">
                  <label htmlFor="fullName" className="sr-only">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="fullName"
                    className="px-5 py-3 w-full border border-solid border-neutral-400"
                    placeholder="Full Name*"
                    value={formData.fullName}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="flex flex-wrap gap-6 items-start mb-6">
                  <div className="flex-1 min-w-[240px]">
                    <label htmlFor="email" className="sr-only">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      className="px-5 py-3 w-full border border-solid border-neutral-400"
                      placeholder="Email Address*"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="countryCode" className="sr-only">
                      Country Code
                    </label>
                    <select
                      id="countryCode"
                      className="px-5 py-3 w-full border border-solid border-neutral-400"
                      value={formData.countryCode}
                      onChange={handleChange}
                      required
                    >
                      {countryCodes.map(({ code, name }) => (
                        <option key={code} value={code}>
                          {code} ({name})
                        </option>
                      ))}
                    </select>
                  </div>
                  <div className="flex-1 min-w-[240px]">
                    <label htmlFor="phone" className="sr-only">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      className="px-5 py-3 w-full border border-solid border-neutral-400"
                      placeholder="Phone Number*"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>

                <div className="mb-6">
                  <label htmlFor="message" className="sr-only">
                    Message
                  </label>
                  <textarea
                    id="message"
                    className="px-5 pt-3 pb-28 w-full border border-solid border-neutral-400 min-h-[144px]"
                    placeholder="Message"
                    value={formData.message}
                    onChange={handleChange}
                  />
                </div>

                <button
                  type="submit"
                  className="overflow-hidden gap-1.5 self-start px-4 py-2.5 font-semibold bg-indigo-700 rounded-lg border border-indigo-700 border-solid shadow-sm text-zinc-50"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </section>
        <section className="flex flex-col justify-center mt-1 w-full min-h-[658px] max-md:max-w-full">
          <div className="flex flex-wrap justify-between items-center w-full bg-white min-h-[651px] max-md:max-w-full">
            <div className="ml-auto flex flex-col items-start max-w-[612px] min-h-[460px] w-[612px] max-md:max-w-full max-md:min-h-[350px]">
              <h2 className="text-5xl font-medium tracking-tighter leading-[60px] text-stone-950 w-[480px] max-md:max-w-full max-md:text-4xl">
                Reach Our Customer Service Team
              </h2>
              <div className="flex flex-col self-stretch mt-4 w-full max-w-max-md:max-w-full">
                <address className="flex flex-wrap gap-3.5 items-start py-6 w-full border-t border-b border-solid border-y-zinc-300">
                  <img
                    loading="lazy"
                    src= {Map_Pin}
                    alt="Address icon"
                    className="object-contain shrink-0 aspect-square w-[30px]"
                  />
                  <div className="flex flex-col grow shrink min-w-[240px] w-[488px] max-md:max-w-full">
                    <div className="text-xl font-medium text-stone-950">
                      Address
                    </div>
                    <div className="mt-2.5 text-base leading-6 text-zinc-500 max-md:max-w-full">
                      #01, 2nd Floor, NIE StartUp and Incubation Center, <br />
                      NIE College South Campus, Mananthavadi Road, Mysuru 570008
                    </div>
                  </div>
                </address>

                <div className="flex flex-wrap gap-6 items-start py-6 w-full border-b border-solid border-b-zinc-300">
                  {contactDetails.map((detail, index) => (
                   <ContactDetail key={index} {...detail} />
                  ))}
                </div>
              </div>
            </div>
            <div className="w-[800px] ml-auto mr-auto max-md:w-full">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3898.4741452092753!2d76.63889987453662!3d12.283823629585!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3baf65561e102919%3A0xf947b18cc5ad3d88!2sThe%20National%20Institute%20of%20Engineering%20South%20Campus%20(NIE%20South)!5e0!3m2!1sen!2sin!4v1732705880753!5m2!1sen!2sin"
                width="100%"
                height="450"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </section>

        <Footer />
      </main>
    </div>
  );
}

export default ContactPage;
