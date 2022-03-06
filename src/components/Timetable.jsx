import { useState } from "react";

const Timetable = () => {
  const [timetable, setTimetable] = useState([
    { id: 1, text: "PNOM", start: 1, end: 2 },
    { id: 2, text: "SiP", start: 3, end: 4 },
  ]);

  return (
    <>
      {timetable.map((lesson) => (
        <h3 key={lesson.id}>{lesson.text}</h3>
      ))}
    </>
  );
};

export default Timetable;
