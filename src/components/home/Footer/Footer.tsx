import { FaTwitter, FaFacebook, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 md:grid-cols-5 gap-8 w-[80%] mx-auto">
        {/* Logo and Description Section */}
        <div className="col-span-2">
          <div className="mb-4">
            <h1 className="text-[#4BA5BD] text-3xl font-bold">LOGO</h1>
          </div>
          <p className="text-gray-600 text-sm">
            Experience The Convenience Of Recovery Delivered. Your Trusted
            Source For Online Medication Delivery. We Bring The Pharmacy To Your
            Doorstep, Ensuring Fast, Discreet, And Reliable Service. Whether
            You're Managing A Chronic Condition Or Need A One-Time Prescription
            Filled, We Make The Process Simple And Hassle-Free.
          </p>
        </div>

        {/* Quick Links Section */}
        <div className="col-span-1 md:justify-self-end">
          <h3 className="text-[#4BA5BD] font-medium mb-4">Quick as</h3>
          <ul className="space-y-2">
            <li>
              <a href="/" className="text-gray-600 hover:text-[#4BA5BD]">
                Home
              </a>
            </li>
            <li>
              <a
                href="/about-us"
                className="text-gray-600 hover:text-[#4BA5BD]"
              >
                About Us
              </a>
            </li>
            <li>
              <a href="/owners" className="text-gray-600 hover:text-[#4BA5BD]">
                Owners
              </a>
            </li>
            <li>
              <a href="/tenants" className="text-gray-600 hover:text-[#4BA5BD]">
                Tenants
              </a>
            </li>
            <li>
              <a
                href="/properties"
                className="text-gray-600 hover:text-[#4BA5BD]"
              >
                Properties
              </a>
            </li>
          </ul>
        </div>

        {/* Other Links Section */}
        <div className="col-span-1 md:justify-self-end">
          <h3 className="text-[#4BA5BD] font-medium mb-4">Other Links</h3>
          <ul className="space-y-2">
            <li>
              <a
                href="/online-medication"
                className="text-gray-600 hover:text-[#4BA5BD]"
              >
                Online Medication
              </a>
            </li>
            <li>
              <a
                href="/download-app"
                className="text-gray-600 hover:text-[#4BA5BD]"
              >
                Download App
              </a>
            </li>
            <li>
              <a
                href="/start-treatment"
                className="text-gray-600 hover:text-[#4BA5BD]"
              >
                Start Treatment
              </a>
            </li>
            <li>
              <a
                href="/online-urgent-care"
                className="text-gray-600 hover:text-[#4BA5BD]"
              >
                Online Urgent Care
              </a>
            </li>
            <li>
              <a href="/faq" className="text-gray-600 hover:text-[#4BA5BD]">
                FAQ
              </a>
            </li>
          </ul>
        </div>

        {/* Contact & Social Media Section */}
        <div className="col-span-1 md:justify-self-end">
          <h3 className="text-[#4BA5BD] font-medium mb-4">Contact</h3>
          <p className="text-gray-600 mb-4">1-800-757-0668</p>

          <h3 className="text-[#4BA5BD] font-medium mb-4">Social Media</h3>
          <div className="flex space-x-4">
            <a href="#" className="text-gray-600 hover:text-[#4BA5BD]">
              <FaTwitter size={20} />
            </a>
            <a href="#" className="text-gray-600 hover:text-[#4BA5BD]">
              <FaFacebook size={20} />
            </a>
            <a href="#" className="text-gray-600 hover:text-[#4BA5BD]">
              <FaInstagram size={20} />
            </a>
          </div>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="border-t mt-8 pt-8 w-[80%] mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-600 text-sm">
            © 2024 - Recovery Delivered | All Right Reserved
          </p>
          <p className="text-gray-600 text-sm">
            Designed And Developed By Repitem
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
