import React from "react";

const Contact = () => {
  return (
    <div
      name="contact"
      className="w-full h-screen flex justify-center items-center p-4"
    >
      <form
        action="https://getform.io/f/656fcb02-e20c-4933-8b74-d1fda5b0b471"
        method="POST"
        className="flex flex-col max-w-[600px] w-full"
      >
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-accent-focus">
            Contact
          </p>
          <p className="pt-4">
            // Submit the form below or shoot me an email -{" "}
            <a
              href="mailto:kartikpavan2@gmail.com"
              className="text-md text-accent"
            >
              kartikpavan2@gmail.com{" "}
            </a>
          </p>
        </div>
        <input
          type="text"
          placeholder="Name"
          name="name"
          className="p-2 input input-bordered input-secondary w-full text-xl"
        />
        <input
          type="email"
          placeholder="Email"
          name="email"
          className="my-4 p-2 input input-bordered input-secondary w-full  text-xl"
        />
        <textarea
          className="textarea textarea-secondary w-full  text-xl"
          name="message"
          rows="10"
          placeholder="Message"
        ></textarea>
        <button className="btn btn-xl btn-outline btn-accent text-xl my-8 mx-auto ">
          let's Collaborate
        </button>
      </form>
    </div>
  );
};

export default Contact;
