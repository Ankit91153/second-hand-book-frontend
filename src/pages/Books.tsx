import React, { useState } from "react";

// Sample data for classes and subjects
const classes = [
  { id: "class-1", name: "Class 1" },
  { id: "class-2", name: "Class 2" },
  { id: "class-3", name: "Class 3" },
  { id: "class-4", name: "Class 4" },
  // Add more classes as needed
];

const subjects = [
  { id: "math", name: "Math" },
  { id: "science", name: "Science" },
  { id: "english", name: "English" },
  { id: "history", name: "History" },
  // Add more subjects as needed
];

const Books = () => {
  const [selectedClass, setSelectedClass] = useState("");
  const [selectedSubject, setSelectedSubject] = useState("");

  const handleReset = () => {
    setSelectedClass("");
    setSelectedSubject("");
  };

  return (
    <div className="max-w-screen-xl mx-auto px-5 my-5">
      <div className="flex flex-col gap-10">
        {/* Filter Section */}
        <div className="flex justify-end items-center gap-4">
          {/* Class Select */}
          <select
            value={selectedClass}
            onChange={(e) => setSelectedClass(e.target.value)}
            className="px-3 py-2 border rounded-lg bg-white dark:bg-dark-card text-foreground dark:text-dark-foreground"
          >
            <option value="">Select Class</option>
            {classes.map((cls) => (
              <option key={cls.id} value={cls.id}>
                {cls.name}
              </option>
            ))}
          </select>

          {/* Subject Select */}
          <select
            value={selectedSubject}
            onChange={(e) => setSelectedSubject(e.target.value)}
            className="px-3 py-2 border rounded-lg bg-white dark:bg-dark-card text-foreground dark:text-dark-foreground"
          >
            <option value="">Select Subject</option>
            {subjects.map((sub) => (
              <option key={sub.id} value={sub.id}>
                {sub.name}
              </option>
            ))}
          </select>

          {/* Reset Button */}
          <button
            onClick={handleReset}
            className="px-4 py-2 text-white bg-red-500 rounded-lg hover:bg-red-600"
          >
            Reset
          </button>
        </div>

        {/* Books Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
          {Array.from({ length: 10 }, (_, index) => (
            <div key={index} className="rounded-2xl h-96 flex justify-center items-center bg-card dark:bg-dark-card">
              <span className="text-2xl font-semibold text-foreground dark:text-dark-foreground">
                Slide {index + 1}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Books;
