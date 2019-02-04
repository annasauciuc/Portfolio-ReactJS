import React from "react";


const ExternalLink = ({ title, href,children }) => (
  <a title={title} href={href} target="_blank" rel="noopener noreferrer">
  {children}
  </a>
);
export default ExternalLink;