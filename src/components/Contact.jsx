import { useState } from "react";

function Contact({ submitted }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");

  if (submitted) {
    console.log("Submitted");

    return (
      <div id="contactSection">
        <h1>{name}</h1>
        <p>{email}</p>
        <p>{phoneNumber}</p>
      </div>
    );
  }

  return (
    <div id="contactSection">
      <form>
        <legend>Contact Details</legend>

        <label htmlFor="name">Name: </label>
        <input
          type="text"
          id="name"
          name="name"
          value={name}
          onChange={(event) => setName(event.target.value)}
        />

        <label htmlFor="email">Email: </label>
        <input
          type="email"
          id="email"
          name="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />

        <label htmlFor="email">Phone Number: </label>
        <input
          type="tel"
          id="phone"
          name="phone"
          value={phoneNumber}
          onChange={(event) =>
            setPhoneNumber(event.target.value.replace(/[^0-9]/g, ""))
          }
        />
      </form>
    </div>
  );
}

export default Contact;
