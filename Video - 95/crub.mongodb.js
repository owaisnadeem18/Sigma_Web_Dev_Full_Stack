use("crudDB");
console.log(db);

// db.createCollection("skills");

// db.skills.insertOne({
//   name: "Owais",
//   first_skill: "Front End Web Development",
//   second_skill: "Back End Web Development",
//   third_skill: "Full Stack Web Development",
//   fourth_skill: "Artificial Intelligence",
//   fifth_skill: "Data Science",
// });

// db.skills.insertMany([
//   {
//     name: "Owais",
//     first_skill: "Front End Web Development",
//     second_skill: "Back End Web Development",
//     third_skill: "Full Stack Web Development",
//     fourth_skill: "Artificial Intelligence",
//     fifth_skill: "Data Science",
//   },
//   {
//     name: "Alice",
//     first_skill: "Graphic Design",
//     second_skill: "Digital Marketing",
//     third_skill: "Content Writing",
//     fourth_skill: "SEO Optimization",
//     fifth_skill: "Social Media Management",
//   },
//   {
//     name: "Bob",
//     first_skill: "Mobile App Development",
//     second_skill: "Cloud Computing",
//     third_skill: "Cybersecurity",
//     fourth_skill: "Blockchain",
//     fifth_skill: "Machine Learning",
//   },
//   {
//     name: "Charlie",
//     first_skill: "UI/UX Design",
//     second_skill: "Game Development",
//     third_skill: "DevOps",
//     fourth_skill: "Big Data Analytics",
//     fifth_skill: "IoT",
//   },
//   {
//     name: "David",
//     first_skill: "Network Administration",
//     second_skill: "Database Management",
//     third_skill: "Quality Assurance",
//     fourth_skill: "Virtual Reality",
//     fifth_skill: "Natural Language Processing",
//   },
//   {
//     name: "Eva",
//     first_skill: "E-commerce",
//     second_skill: "Business Analysis",
//     third_skill: "Project Management",
//     fourth_skill: "Quantum Computing",
//     fifth_skill: "Augmented Reality",
//   },
//   {
//     name: "Frank",
//     first_skill: "User Support",
//     second_skill: "Technical Writing",
//     third_skill: "Bioinformatics",
//     fourth_skill: "Geographic Information Systems",
//     fifth_skill: "Robotics",
//   },
//   {
//     name: "Grace",
//     first_skill: "Embedded Systems",
//     second_skill: "Data Visualization",
//     third_skill: "Cryptography",
//     fourth_skill: "Chatbot Development",
//     fifth_skill: "Genetic Algorithms",
//   },
//   {
//     name: "Hank",
//     first_skill: "Cloud Architecture",
//     second_skill: "Human-Computer Interaction",
//     third_skill: "Speech Recognition",
//     fourth_skill: "Automation",
//     fifth_skill: "Neural Networks",
//   },
//   {
//     name: "Ivy",
//     first_skill: "Augmented Virtuality",
//     second_skill: "Renewable Energy",
//     third_skill: "Digital Forensics",
//     fourth_skill: "Biohacking",
//     fifth_skill: "Quantified Self",
//   },
// ]);

// a = db.skills.find({ name: "Ivy" });
// console.log(a);
// console.log("The count of these data values are: ", a.count());

// console.log(a.toArray());

// Read the document.
// let b = db.skills.findOne({ name: "Ivy" });
// console.log(b);

// Update the document.
// db.skills.updateOne({ name: "Ivy" }, { $set: { name: "Ivyy" } });
db.skills.updateMany(
  {
    first_skill: "Front End Web Development",
  },
  {
    $set: {
      first_skill: "HTML, CSS & JavaScript",
    },
  }
);

// Delete The Document:
// db.skills.deleteOne({ fifth_skill: "Data Science" });

db.skills.deleteMany({ fifth_skill: "Data Science" });
