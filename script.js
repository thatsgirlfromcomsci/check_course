// script.js

// Hardcoded course data
const courses = [
    { name: "01175165", description: "Weight Training for Health" },
    { name: "01387101", description: "The Art of Living with Others"},
    { name: "01131111", description: "Finance for Entrepreneurs"},
    { name: "01361101", description: "Introductory Thai Usage"},
    { name: "01355102", description: "English for University Life" },
    { name: "01355103", description: "English for Job Opportunity"},
    { name: "01355108", description: "English and Culture through Songs"},
    { name: "01371111", description: "Information Media for Learning"},
    { name: "01999111", description: "Knowledge of the Land"},
    { name: "02999144", description: "Life Skill for Undergraduate Student"},
    { name: "01387102", description: "Philosophy for New Life"},
    { name: "02032303", description: "Agriculture and Quality of Life"},
    { name: "03751111", description: "Man and Environment"},
    { name: "01417111", description: "Calculus I"},
    { name: "01417322", description: "Basic Linear Algebra"},
    { name: "01418131", description: "Statistical Programming"},
    { name: "01418132", description: "Fundamentals of Computing	"},
    { name: "01418141", description: "Intellectual Properties and Professional Ethics"},
    { name: "01418371", description: "Project Management and Digital Startup"},
    { name: "01418221", description: "Fundamentals of Database Systems"},
    { name: "01418261", description: "Fundamentals of Artificial Intelligence"},
    { name: "01418321", description: "System Analysis and Design"},
    { name: "01418390", description: "Co-operative Education Preparation"},
    { name: "01418490", description: "Co-operative Education"},
    { name: "01418497", description: "Seminar"},
    { name: "01418499", description: "Computer Science Project"},
    { name: "01418112", description: "Fundamental Programming Concepts"},
    { name: "01418113", description: "Computer Programming"},
    { name: "01418211", description: "Software Construction"},
    { name: "01418231", description: "Data Structures and Algorithms"},
    { name: "01418232", description: "Algorithm Design and Analysis"},
    { name: "01418111", description: "Introduction to Computer Science"},
    { name: "01418236", description: "Operating Systems"},
    { name: "01418331", description: "Theory of Computation"},
    { name: "01418332", description: "Information Systems Security"},
    { name: "01418351", description: "Computer Networks and Cloud Computing Principles"},
    { name: "01418233", description: "Computer Architecture"},
    { name: "01418212", description: "C Programming"},
    { name: "01418316", description: "Introduction to Computer Vision"},
    { name: "", description: ""},
    { name: "", description: ""},
    { name: "", description: ""},
    { name: "", description: ""},
    { name: "02714101", description: "Critical Thinking and Problem Solving"},
    { name: "", description: ""}
  ];
  
  // Handle form submission
  document.getElementById("course-check-form").addEventListener("submit", (e) => {
    e.preventDefault();
  
    const courseName = document.getElementById("course-name").value.trim().toLowerCase();
    const resultDiv = document.getElementById("course-result");
  
    // Check if the course exists
    const course = courses.find(c => c.name.toLowerCase() === courseName);
  
    if (course) {
      // Append the result instead of clearing previous ones
      const courseInfo = document.createElement("div");
      courseInfo.innerHTML = `
        <p><strong>${course.name}</strong></p>
        <p>${course.description}</p>
      `;
      resultDiv.appendChild(courseInfo);
    } else {
      const errorMessage = document.createElement("p");
      errorMessage.textContent = "No information found for this course.";
      errorMessage.style.color = "red"; // Optional: style error messages
      resultDiv.appendChild(errorMessage);
    }
  
    // Clear the input field for convenience
    document.getElementById("course-name").value = "";
  });
  