const Footer = () => {
  return (
    <footer className="mt-12 bg-gray-900 text-white rounded-2xl">
      <div className="max-w-7xl mx-auto px-6 py-12">

        {/* Grid Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-6 gap-10">

          {/* About */}
          <div>
            <h3 className="text-gray-400 font-semibold mb-4">About</h3>
            <ul className="space-y-2 text-sm">
              <li className="hover:text-gray-300 cursor-pointer">Contact Us</li>
              <li className="hover:text-gray-300 cursor-pointer">About Us</li>
              <li className="hover:text-gray-300 cursor-pointer">Career</li>
              <li className="hover:text-gray-300 cursor-pointer">Press</li>
              <li className="hover:text-gray-300 cursor-pointer">Corporate Information</li>
            </ul>
          </div>

          {/* Group Companies */}
          <div>
            <h3 className="text-gray-400 font-semibold mb-4">Group Companies</h3>
            <ul className="space-y-2 text-sm">
              <li className="hover:text-gray-300 cursor-pointer">Flipkart</li>
              <li className="hover:text-gray-300 cursor-pointer">Meesho</li>
              <li className="hover:text-gray-300 cursor-pointer">Purplle</li>
              <li className="hover:text-gray-300 cursor-pointer">Nykaa</li>
            </ul>
          </div>

          {/* Help */}
          <div>
            <h3 className="text-gray-400 font-semibold mb-4">Help</h3>
            <ul className="space-y-2 text-sm">
              <li className="hover:text-gray-300 cursor-pointer">Payments</li>
              <li className="hover:text-gray-300 cursor-pointer">Shipping</li>
              <li className="hover:text-gray-300 cursor-pointer">Cancellation</li>
              <li className="hover:text-gray-300 cursor-pointer">FAQ</li>
            </ul>
          </div>

          {/* Consumer Policy */}
          <div>
            <h3 className="text-gray-400 font-semibold mb-4">Consumer Policy</h3>
            <ul className="space-y-2 text-sm">
              <li className="hover:text-gray-300 cursor-pointer">Cancellation & Return</li>
              <li className="hover:text-gray-300 cursor-pointer">Terms Of Use</li>
              <li className="hover:text-gray-300 cursor-pointer">Security</li>
              <li className="hover:text-gray-300 cursor-pointer">Privacy</li>
              <li className="hover:text-gray-300 cursor-pointer">Sitemap</li>
            </ul>
          </div>

          {/* Mail Us */}
          <div>
            <h3 className="text-gray-400 font-semibold mb-4">Mail Us</h3>
            <ul className="space-y-2 text-sm">
              <li>mcart@gmail.com</li>
              <li>customercare@gmail.com</li>
              <li>mailus@gmail.com</li>
              <li>help@gmail.com</li>
            </ul>
          </div>

          {/* Address */}
          <div>
            <h3 className="text-gray-400 font-semibold mb-4">Registered Office</h3>
            <p className="text-sm">
              Bommanahalli, Bangalore <br />
              Karnataka, India
            </p>
          </div>

        </div>

        {/* Divider */}
        <div className="border-t border-gray-700 my-8"></div>

        {/* Bottom */}
        <div className="text-center text-sm text-gray-400">
          © {new Date().getFullYear()} M-Cart. All rights reserved.
        </div>

      </div>
    </footer>
  );
};

export default Footer;