import { useState } from "react";

function Contact({ submitted }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");

  if (submitted) {
    console.log("Submitted");

    return (
      <h1>Test</h1>
    );
  }

  return (
    <>
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
          onChange={(event) => setPhoneNumber(event.target.value.replace(/[^0-9]/g, ""))}
        />
      </form>
    </>
  );
}

export default Contact;
