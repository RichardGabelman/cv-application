import { useState } from "react";

function Education({ submitted }) {
  const [school, setSchool] = useState("");
  const [study, setStudy] = useState("");
  const [date, setDate] = useState("");

  if (submitted) {
    return (
      <div id="educationSection">
        <h2>{school}</h2>
        <p>{study}</p>
        <p>{date}</p>
      </div>
    );
  }

  return (
    <div id="educationSection">
      <form>
        <legend>Education Details</legend>

        <label htmlFor="school">School: </label>
        <input
          type="text"
          id="school"
          name="school"
          value={school}
          onChange={(event) => setSchool(event.target.value)}
        />

        <label htmlFor="study">Study: </label>
        <input
          type="text"
          id="study"
          name="study"
          value={study}
          onChange={(event) => setStudy(event.target.value)}
        />

        <label htmlFor="date">Date: </label>
        <input
          type="text"
          id="date"
          name="date"
          value={date}
          onChange={(event) => setDate(event.target.value)}
        />
      </form>
    </div>
  );
}

export default Education;
