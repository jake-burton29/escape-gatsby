import React from "react";

const MapButton = ({ address }) => {
  const handleMapButtonClick = () => {
    const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent);
    const isAndroid = /Android/.test(navigator.userAgent);
    const url = isIOS
      ? `maps://maps.apple.com/?address=${encodeURI(address)}`
      : isAndroid
      ? `https://maps.google.com/maps?q=${encodeURI(address)}`
      : `https://www.google.com/maps/search/?api=1&query=${encodeURI(address)}`;
    window.open(url);
  };

  return (
    <button
      className="btn btn-circle border border-orange-300 text-orange-400"
      onClick={handleMapButtonClick}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        className="w-8 h-8"
      >
        <path
          fill="currentColor"
          d="M18.27 6c1.01 2.17.78 4.73-.33 6.81c-.94 1.69-2.29 3.12-3.44 4.69c-.5.7-1 1.45-1.37 2.26c-.13.27-.22.55-.32.83c-.1.28-.19.56-.28.84c-.09.26-.2.57-.53.57c-.39 0-.5-.44-.58-.74c-.24-.73-.48-1.43-.85-2.1c-.42-.79-.95-1.52-1.49-2.23L18.27 6M9.12 8.42l-3.3 3.92c.61 1.29 1.52 2.39 2.39 3.49c.21.25.42.51.62.78L13 11.67l-.04.01c-1.46.5-3.08-.24-3.66-1.68c-.08-.17-.14-.37-.18-.57a3.05 3.05 0 0 1 0-1v-.01m-2.54-3.8l-.01.01c-1.62 2.05-1.9 4.9-.93 7.31L9.63 7.2l-.05-.05l-3-2.53m7.64-2.26L11 6.17l.04-.01c1.34-.46 2.84.12 3.52 1.34c.15.28.27.58.31.88c.06.38.08.65.01 1.02v.01l3.2-3.8a6.988 6.988 0 0 0-3.85-3.24l-.01-.01M9.89 6.89l3.91-4.65l-.04-.01C13.18 2.08 12.59 2 12 2c-1.97 0-3.83.85-5.15 2.31l-.02.01l3.06 2.57Z"
        />
      </svg>
    </button>
  );
};

export default MapButton;
