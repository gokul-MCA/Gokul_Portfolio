import React, { useState } from 'react';
import './CopyButton.css'
import { MdCopyAll } from "react-icons/md";

const CopyButton = ({ textToCopy }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(textToCopy)
      .then(() => {
        setCopied(true);
        setTimeout(() => setCopied(false), 1000);
        // alert("Copied!");                        // Reset the copied state after 2 seconds
      })
      .catch((err) => {
        console.error('Failed to copy text: ', err);
      });
  };

  return (
    <>
      {/* <FontAwesomeIcon icon={copied ? faCheck : faCopy} /> */}
      <MdCopyAll onClick={handleCopy} className="copy-button"/>
      <span className='copy-text'>{copied ? 'Copied ❤️' : ''}</span>
    </>

  );
};

export default CopyButton;
