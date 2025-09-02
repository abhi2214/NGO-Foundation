import React from "react";

function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-200 py-8 px-6">
      <div className="text-center max-w-3xl mx-auto">
        <h2 className="text-2xl font-semibold mb-4">
          Suvidha Foundation (Suvidha Mahila Mandal)
        </h2>
        <div className="space-y-1 text-sm">
          <p>
            Suvidha Mahila Mandal, Walni Ward No. 1, Jai Bhole Nagar, Walni,
            Saoner
          </p>
          <p>Nagpur, Maharashtra 441102</p>
        </div>
      </div>
      <div className="mt-6 text-center text-xs text-gray-500">
        © {new Date().getFullYear()} Suvidha Foundation. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
