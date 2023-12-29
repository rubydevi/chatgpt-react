import React from 'react';
import {
  FaTwitter,
  FaFacebook,
  FaGooglePlus,
  FaPinterest,
  FaVimeo,
} from 'react-icons/fa';

const NavFooter = () => (
  <div className="mt-auto">
    <div className="footer-icons d-flex justify-content-around mt-auto">
      <FaTwitter className="mx-2 text-color" />
      <FaFacebook className="mx-2 text-color " />
      <FaGooglePlus className="mx-2 text-color " />
      <FaPinterest className="mx-2 text-color " />
      <FaVimeo className="mx-2 text-color " />
    </div>
    <p className="text-muted small text-center py-2">@2023 ChatGPT</p>
  </div>
);

export default NavFooter;
