import React from "react";
import { useState } from "react";
import { Switch } from "@headlessui/react";
import { Link, navigate } from "gatsby";
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function ContactForm() {
  const [agreed, setAgreed] = useState(false);
  const schema = Yup.object().shape({
    firstName: Yup.string().required("Required"),
    lastName: Yup.string().required("Required"),
    company: Yup.string().optional(),
    email: Yup.string().email("Invalid email").required("Required"),
    phoneNumber: Yup.string().matches("[0-9]{7}", { excludeEmptyString: true }),
    message: Yup.string().required("Required"),
  });
  const {
    register,
    reset,
    formState: { errors, isSubmitting },
  } = useForm({ resolver: yupResolver(schema) });

  const handleSubmit = (event) => {
    event.preventDefault();

    const myForm = event.target;
    const formData = new FormData(myForm);

    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams(formData).toString(),
    })
      .then(
        () => console.log(event.body),
        alert(
          "Thank you for your message. We will get back to you shortly!",
          reset()
          // navigate("/")   cant decide which one to dol
        )
      )
      .catch((error) => alert(error));
  };

  return (
    <div className="primary py-8 px-6 md:py-10 lg:px-8">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-4xl font-bold tracking-tight sm:text-4xl text-transparent bg-clip-text bg-gradient-to-br from-yellow-300 via-orange-400 to-red-500">
          Contact Us!
        </h2>
        <p className="mt-2 text-lg leading-8">
          Call&nbsp;
          <a
            href="tel:4356040556"
            className="font-semibold text-transparent bg-clip-text bg-gradient-to-br from-yellow-300 via-orange-400 to-red-500 underline underline-offset-2"
          >
            435-604-0556
          </a>
          &nbsp;with questions.
        </p>
      </div>
      <form
        name="contact"
        method="POST"
        data-netlify="true"
        action="/success"
        className="mx-auto mt-8 max-w-xl md:mt-14"
        onSubmit={handleSubmit}
      >
        <input type="hidden" name="bot-field" />
        <input type="hidden" name="form-name" value="contact" />
        <div className="grid grid-cols-1 md:gap-y-6 gap-y-4 gap-x-8 sm:grid-cols-2">
          <div>
            <label
              htmlFor="firstName"
              className="block text-sm font-semibold leading-6"
            >
              First name
            </label>
            <div className="mt-2.5">
              <input
                {...register("firstName")}
                type="text"
                id="firstName"
                autoComplete="given-name"
                className="block w-full rounded-md border-0 py-2 px-3.5 text-sm leading-6  shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-orange-400"
              />
              {errors.firstName && <p>{errors.firstName.message}</p>}
            </div>
          </div>
          <div>
            <label
              htmlFor="lastName"
              className="block text-sm font-semibold leading-6 "
            >
              Last name
            </label>
            <div className="mt-2.5">
              <input
                {...register("lastName")}
                type="text"
                id="lastName"
                autoComplete="family-name"
                className="block w-full rounded-md border-0 py-2 px-3.5 text-sm leading-6 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-orange-400"
              />
              {errors.lastName && (
                <div className="text-red-500 p-1">
                  {errors.lastName.message}
                </div>
              )}
            </div>
          </div>
          <div className="sm:col-span-2">
            <label
              htmlFor="company"
              className="block text-sm font-semibold leading-6 "
            >
              Company
            </label>
            <div className="mt-2.5">
              <input
                {...register("company")}
                type="text"
                id="company"
                autoComplete="organization"
                className="block w-full rounded-md border-0 py-2 px-3.5 text-sm leading-6  shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-orange-400"
              />
            </div>
          </div>
          <div className="sm:col-span-2">
            <label
              htmlFor="email"
              className="block text-sm font-semibold leading-6"
            >
              Email
            </label>
            <div className="mt-2.5">
              <input
                {...register("email")}
                type="email"
                id="email"
                autoComplete="email"
                className="block w-full rounded-md border-0 py-2 px-3.5 text-sm leading-6 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-orange-400"
              />
              {errors.email && <p>{errors.email.message}</p>}
            </div>
          </div>
          <div className="sm:col-span-2">
            <label
              htmlFor="phoneNumber"
              className="block text-sm font-semibold leading-6"
            >
              Phone number
            </label>
            <div className="relative mt-2.5">
              <div className="absolute inset-y-0 left-0 flex items-center">
                {/* <label htmlFor="country" className="sr-only">
                  Country
                </label>
                <select
                  id="country"
                  name="country"
                  className="h-full rounded-md border-0 bg-transparent bg-none py-0 pl-4 pr-9 text-sm focus:outline-none focus:ring-2 focus:ring-inset focus:ring-orange-400"
                >
                  <option>US</option>
                  <option>CA</option>
                  <option>EU</option>
                </select>
                <ChevronDownIcon
                  className="pointer-events-none absolute top-0 right-3 h-full w-5"
                  aria-hidden="true"
                /> */}
              </div>
              <input
                {...register("phoneNumber")}
                type="tel"
                id="phoneNumber"
                autoComplete="tel"
                className="block w-full rounded-md border-0 py-2 px-3.5 pl-20 text-sm leading-6  shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-orange-400"
              />
              {errors.phoneNumber && <p>{errors.phoneNumber.message}</p>}
            </div>
          </div>
          <div className="sm:col-span-2">
            <label
              htmlFor="message"
              className="block text-sm font-semibold leading-6 "
            >
              Message
            </label>
            <div className="mt-2.5">
              <textarea
                {...register("message")}
                id="message"
                rows={4}
                className="block w-full rounded-md border-0 py-2 px-3.5 text-sm leading-6  shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-orange-400"
              />
              {errors.firstName && <p>{errors.firstName.message}</p>}
            </div>
          </div>
          <Switch.Group as="div" className="flex gap-x-4 sm:col-span-2">
            <div className="flex h-6 items-center">
              <Switch
                checked={agreed}
                onChange={setAgreed}
                className={classNames(
                  agreed
                    ? "bg-gradient-to-br from-yellow-300 via-orange-400 to-red-500"
                    : "bg-gray-200",
                  "flex w-8 flex-none cursor-pointer rounded-full p-px ring-1 ring-inset ring-gray-900/5 transition-colors duration-200 ease-in-out focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-400"
                )}
              >
                <span className="sr-only">Agree to policies</span>
                <span
                  aria-hidden="true"
                  className={classNames(
                    agreed ? "translate-x-3.5" : "translate-x-0",
                    "h-4 w-4 transform rounded-full bg-white shadow-sm ring-1 ring-gray-900/5 transition duration-200 ease-in-out"
                  )}
                />
              </Switch>
            </div>
            <Switch.Label className="text-sm leading-6 ">
              By selecting this, you agree to our&nbsp;
              <Link
                to="#"
                className="font-semibold text-transparent bg-clip-text bg-gradient-to-br from-yellow-300 via-orange-400 to-red-500"
              >
                privacy&nbsp;policy
              </Link>
              .
            </Switch.Label>
          </Switch.Group>
        </div>
        <div className="mt-10">
          <button
            type="submit"
            disabled={isSubmitting}
            className="block w-full rounded-md bg-gradient-to-br from-yellow-300 via-orange-400 to-red-500 text-black px-3.5 py-2.5 text-center text-sm font-semibold "
          >
            {isSubmitting ? "Sending..." : "Lets Talk"}
          </button>
        </div>
      </form>
    </div>
  );
}
