import React from "react";
import { Link } from "gatsby";
const Footer = () => {
  return (
    <footer className="footer footer-center p-10 bg-neutral text-base-content rounded mt-10">
      <div className="grid grid-flow-col gap-4">
        <Link to="/about" className="link link-hover">
          About us
        </Link>
        <Link to="/contact" className="link link-hover">
          Contact
        </Link>
        <Link to="/reviews" className="link link-hover">
          Reviews
        </Link>
      </div>
      <div>
        <div className="grid grid-flow-col gap-4">
          <a>
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M12 7C9.23858 7 7 9.23858 7 12C7 14.7614 9.23858 17 12 17C14.7614 17 17 14.7614 17 12C17 9.23858 14.7614 7 12 7ZM9 12C9 13.6569 10.3431 15 12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12Z"
                fill="currentColor"
              />
              <path
                d="M18 5C17.4477 5 17 5.44772 17 6C17 6.55228 17.4477 7 18 7C18.5523 7 19 6.55228 19 6C19 5.44772 18.5523 5 18 5Z"
                fill="currentColor"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M5 1C2.79086 1 1 2.79086 1 5V19C1 21.2091 2.79086 23 5 23H19C21.2091 23 23 21.2091 23 19V5C23 2.79086 21.2091 1 19 1H5ZM19 3H5C3.89543 3 3 3.89543 3 5V19C3 20.1046 3.89543 21 5 21H19C20.1046 21 21 20.1046 21 19V5C21 3.89543 20.1046 3 19 3Z"
                fill="currentColor"
              />
            </svg>
          </a>
          <a href="https://www.tripadvisor.com/UserReviewEdit-g57097-d10403313-Escape_Room_Park_City-Park_City_Utah.html">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 2304 1408"
            >
              <path
                fill="currentColor"
                d="M651 805q0 39-27.5 66.5T558 899q-39 0-66.5-27.5T464 805q0-38 27.5-65.5T558 712q38 0 65.5 27.5T651 805zm1154-1q0 39-27.5 66.5T1711 898t-66.5-27.5T1617 804t27.5-66t66.5-27t66.5 27t27.5 66zm-1040 1q0-79-56.5-136T572 612t-136.5 56.5T379 805t56.5 136.5T572 998t136.5-56.5T765 805zm1153-1q0-80-56.5-136.5T1725 611q-79 0-136 56.5T1532 804t56.5 136.5T1725 997t136.5-56.5T1918 804zm-1068 1q0 116-81.5 197.5T572 1084q-116 0-197.5-82T293 805t82-196.5T572 527t196.5 81.5T850 805zm1154-1q0 115-81.5 196.5T1725 1082q-115 0-196.5-81.5T1447 804t81.5-196.5T1725 526q116 0 197.5 81.5T2004 804zm-964 3q0-191-135.5-326.5T578 345q-125 0-231 62T179 575.5T117 807t62 231.5T347 1207t231 62q191 0 326.5-135.5T1040 807zm668-573q-254-111-556-111q-319 0-573 110q117 0 223 45.5T984.5 401t122 183t45.5 223q0-115 43.5-219.5t118-180.5T1491 284t217-50zm479 573q0-191-135-326.5T1726 345t-326.5 135.5T1264 807t135.5 326.5T1726 1269t326-135.5T2187 807zm-266-566h383q-44 51-75 114.5T2189 470q110 151 110 337q0 156-77 288t-209 208.5t-287 76.5q-133 0-249-56t-196-155q-47 56-129 179q-11-22-53.5-82.5T1024 1168q-80 99-196.5 155.5T578 1380q-155 0-287-76.5T82 1095T5 807q0-186 110-337q-9-51-40-114.5T0 241h365Q514 141 720 84.5T1152 28q224 0 421 56t348 157z"
              />
            </svg>
          </a>
          <a href="https://www.google.com/search?q=Escape+Room+Park+City&biw=955&bih=821&sxsrf=APwXEddbYJ7lfFA6cTpBXxX6mD6MEcTk1Q%3A1681146076889&ei=3EA0ZKj0NbTH0PEP1tyk0Ao&ved=0ahUKEwio0umV5Z_-AhW0IzQIHVYuCaoQ4dUDCBA&uact=5&oq=Escape+Room+Park+City&gs_lcp=Cgxnd3Mtd2l6LXNlcnAQAzIECCMQJzIECCMQJzIECCMQJzINCC4QrwEQxwEQigUQQzIFCAAQgAQyBggAEBYQHjIGCAAQFhAeMgYIABAWEB4yBggAEBYQHjICCCY6DQgAEEcQ1gQQyQMQsAM6CggAEEcQ1gQQsAM6CwgAEIoFEJIDELADSgQIQRgAUM4GWLsQYMEWaANwAXgAgAGFAYgBgQKSAQMwLjKYAQCgAQHIAQrAAQE&sclient=gws-wiz-serp">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <path
                fill="currentColor"
                d="M21.35 11.1h-9.17v2.73h6.51c-.33 3.81-3.5 5.44-6.5 5.44C8.36 19.27 5 16.25 5 12c0-4.1 3.2-7.27 7.2-7.27c3.09 0 4.9 1.97 4.9 1.97L19 4.72S16.56 2 12.1 2C6.42 2 2.03 6.8 2.03 12c0 5.05 4.13 10 10.22 10c5.35 0 9.25-3.67 9.25-9.09c0-1.15-.15-1.81-.15-1.81Z"
              />
            </svg>
          </a>

          <a href="https://www.facebook.com/escaperoomparkcity">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <path
                fill="currentColor"
                d="M14 13.5h2.5l1-4H14v-2c0-1.03 0-2 2-2h1.5V2.14c-.326-.043-1.557-.14-2.857-.14C11.928 2 10 3.657 10 6.7v2.8H7v4h3V22h4v-8.5Z"
              />
            </svg>
          </a>
        </div>
      </div>
      <div>
        <span>136 Heber Ave #207</span>
        <span>Park City, UT 84068</span>
        <p>Copyright © 2023 - All right reserved by Escape Room Park City</p>
      </div>
    </footer>
  );
};

export default Footer;
