import React, { useState } from "react";

function Contact() {
  const [contactMessage, setContactMessage] = useState({
    name: "John Doe",
    email: "johndoe@mail.com",
    message: "Enter your message here.",
  });

  const handleSendMessage = () => {
    console.log(contactMessage);
  };

  return (
    <div className="p-6 h-auto bg-neutral">
      <h1 className="text-4xl mb-3 text-white font-bold">Contact</h1>
      <p>
        If you would like to get in contact with me fill in the form below with
        your details.
      </p>

      <form
        className="form-control w-full mt-6 flex flex-col gap-3"
        onSubmit={handleSendMessage}
      >
        <div>
          <label className="label">
            <span className="label-text">Name:</span>
          </label>
          <input
            type="text"
            placeholder={contactMessage.name}
            className="input input-bordered input-accent w-full"
            onChange={(e) =>
              setContactMessage({ ...contactMessage, name: e.target.value })
            }
          />
        </div>

        <div>
          <label className="label">
            <span className="label-text">Email:</span>
          </label>
          <input
            type="email"
            placeholder={contactMessage.email}
            className="input input-bordered input-accent w-full"
            onChange={(e) =>
              setContactMessage({ ...contactMessage, email: e.target.value })
            }
          />
        </div>

        <div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Message:</span>
            </label>
            <textarea
              className="textarea textarea-md textarea-bordered textarea-accent h-36"
              placeholder={contactMessage.message}
              onChange={(e) =>
                setContactMessage({
                  ...contactMessage,
                  message: e.target.value,
                })
              }
            ></textarea>
          </div>
        </div>

        <div className="mt-3">
          <button className="btn btn-secondary w-full">Send Message</button>
        </div>
      </form>
    </div>
  );
}

export default Contact;
