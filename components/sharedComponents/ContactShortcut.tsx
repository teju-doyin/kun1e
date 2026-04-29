import Link from "next/link";
import React from "react";

const ContactShortcut = () => {
  return (
    <div className="flex items-center text-sm">
      <p className="bg-black text-white base-border px-4 py-2">
        Got a project?
      </p>
      <Link
        href="/contact"
        className="bg-white text-black base-border px-4 py-2"
      >
        <p>Let&apos;s talk.</p>
      </Link>
    </div>
  );
};

export default ContactShortcut;
