import "./styles/Education.css";

const educationData = [
  {
    degree: "Bachelor of Engineering — Information Technology",
    institution: "A. P. Shah Institute of Technology",
    affiliation: "University of Mumbai",
    year: "2022-2026",
    detail:
      "College has been a fast-paced blur of data pipelines, late-night machine learning code sprints, and intense football sessions. Between developing full-scale market analytics dashboards and managing the university football squad strategy, these years have been the ultimate balancing act. It’s here that I truly evolved from a student who loves technology into an aspiring analyst ready to turn massive, messy datasets into smart, real-world solutions—all while learning that a perfectly optimized ETL data flow is just as satisfying as a perfectly placed cross on the pitch. ",
  },
  {
    degree: "Higher Secondary Certificate (HSC)",
    institution: "M. H. Highschool",
    affiliation: "Thane",
    year: "2020-2022",
    detail: "During my higher secondary years, my curiosity for how things work kicked into overdrive. This was the era of balancing intense academic prep with my first real deep dives into logic and problem-solving—often fueled by early tinkering with electronics and a healthy obsession with football. It was here that the foundation for my engineering journey was laid, teaching me the discipline to tackle complex challenges while never losing that sense of play and exploration on and off the field.",
  },
  {
    degree: "Secondary School Certificate (SSC)",
    institution: "New English School",
    affiliation: "Thane",
    year: "2020",
    detail: "My school days were where the initial sparks of curiosity were lit. From asking entirely too many questions in science class to organizing squad formations on the playground, these early years were all about discovery. It was a time of building lifelong friendships, learning the value of teamwork, and figuring out that whether you're cracking a math puzzle or chasing a football, the real joy is in the process of learning something new every single day.",
  },
];

const Education = () => {
  return (
    <div className="education-section section-container">
      <div className="education-container">
        <h2>
          My <span>Education</span>
        </h2>
        <div className="education-grid">
          {educationData.map((edu, index) => (
            <div className="education-card" key={index}>
              <div className="education-card-top">
                <h3>{edu.year}</h3>
              </div>
              <h4>{edu.degree}</h4>
              <h5>
                {edu.institution}
                {edu.affiliation ? ` · ${edu.affiliation}` : ""}
              </h5>
              {edu.detail && <p>{edu.detail}</p>}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Education;
