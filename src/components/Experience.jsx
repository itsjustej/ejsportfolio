import React from 'react';
import { Briefcase, MapPin, Calendar } from 'lucide-react';

export const Experience = () => {
  const experiences = [
    {
      title: "Software Engineer",
      company: "GE Vernova",
      location: "Atlanta, GA",
      period: "May 2025",
      description: [
        "Placeholder - 12 weeks",
      ],
      current: false
    },
    {
      title: "Front End Developer",
      company: "Visa Hackathon - 1st Place",
      location: "Greensboro, NC",
      period: "April 2025",
      description: [
        "Applied machine learning to analyze spending data from 10,000+ mock users and recommend personalized rewards.",
        "Delivered a full-stack solution in under 24 hours, earning top honors for innovation, UX, and real-world impact."
      ],
      current: false
    },
    {
      title: "Computer Program Design Teaching Assistant",
      company: "North Carolina A&T State University",
      location: "Greensboro, NC",
      period: "August 2024 - Current",
      description: [
        "Served as the bridge between students and staff, led weekly review sessions, hosted extra office hours, and supported over 100 students in mastering foundational CS concepts in java.",
        "Developed supplemental materials and practice problems to improve student engagement and performance increasing average test scores by 8%.",
        "Built a pipeline from the classroom to my Rooted In Code SIG by mentoring high-potential students and connecting them to hands-on project opportunities.",
        "Selected for TA role after academic excellence and faculty recommendation; Excellence recognized with \"Outstanding Undergraduate TA\" award.",
      ],
      current: true
    },
    {
      title: "Fullstack Web Developer",
      company: "Freelance",
      location: "Charlotte, NC",
      period: "October 2024",
      description: [
        "Worked directly with clients to define requirements and deploy responsive websites for local clients and university initiatives using React, Tailwind, and modern design principles.",
        "Built a professional site for EverLoving Care, a local group home company, to improve client trust and streamline service inquiries.",
        "Developed a digital archive project highlighting the history and evolution of the Air Raid football offense, blending storytelling with interactive design for educational outreach."
      ],
      current: true
    },
    {
      title: "Product Design Intern",
      company: "PPG",
      location: "Pittsburgh, PA",
      period: "July 2024",
      description: [
        "Collaborated with a team of 5 across 12 weeks to design and execute a custom paint plan for a high-profile client's private jet, ensuring design consistency with their $300K luxury sports car.",
        "Spearheaded a social outreach campaign that reached over 10,000 people, boosting brand awareness by 20% through strategic sharing of the project's progress and outcome.",
        "Coordinated with 6 key stakeholders, including clients, designers, and marketing teams, to ensure the project met client expectations and upheld brand standards."
      ],
      current: false
    },
    {
      title: "Scholar",
      company: "Codehouse Scholars Initiative",
      location: "Atlanta, GA",
      period: "July 2023",
      description: [
        "Employed p5.js skills over 4 weeks to integrate various libraries, creating interactive web content.",
        "Utilized p5.js to design and draw original cartoon characters, video games, and audio storyboards."
      ],
      current: false
    }
  ];

  return (
    <section id="experience" className="py-20 bg-gradient-to-b from-slate-50 to-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            Experience
          </h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-blue-600 to-cyan-500 mx-auto rounded-full mb-6"></div>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            My professional journey in technology, design, and education
          </p>
        </div>

        <div className="relative">
          <div className="hidden md:block absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 via-cyan-500 to-blue-500"></div>

          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <div key={index} className="relative pl-0 md:pl-20">
                <div
                  className={`absolute left-6 top-8 w-5 h-5 rounded-full border-4 border-white shadow-lg hidden md:block ${
                    exp.current
                      ? 'bg-blue-600 ring-4 ring-blue-100'
                      : 'bg-slate-400'
                  }`}
                  style={{ transform: 'translateX(-10px)' }}
                ></div>

                <div
                  className={`group relative bg-white rounded-xl shadow-sm border border-slate-200 p-6 md:p-8 transition-all duration-300 hover:shadow-xl hover:border-slate-300 ${
                    exp.current ? 'ring-2 ring-blue-500 ring-opacity-50' : ''
                  }`}
                >
                  {exp.current && (
                    <div className="absolute -top-3 left-6 bg-blue-600 text-white text-xs font-semibold px-3 py-1 rounded-full shadow-md">
                      Current
                    </div>
                  )}

                  <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                    <div className="flex-1 mb-4 md:mb-0">
                      <h3 className="text-xl md:text-2xl font-bold text-slate-900 mb-2 group-hover:text-blue-600 transition-colors">
                        {exp.title}
                      </h3>
                      <div className="flex items-center text-slate-700 font-medium mb-2">
                        <Briefcase size={18} className="mr-2 text-cyan-600 flex-shrink-0" />
                        <span>{exp.company}</span>
                      </div>
                    </div>

                    <div className="flex flex-col items-start md:items-end space-y-2 text-sm md:text-base">
                      <div className="flex items-center text-slate-600">
                        <Calendar size={16} className="mr-2 text-slate-400 flex-shrink-0" />
                        <span className="font-medium">{exp.period}</span>
                      </div>
                      <div className="flex items-center text-slate-600">
                        <MapPin size={16} className="mr-2 text-slate-400 flex-shrink-0" />
                        <span>{exp.location}</span>
                      </div>
                    </div>
                  </div>

                  <div className="border-t border-slate-100 pt-4">
                    <ul className="space-y-3">
                      {exp.description.map((item, i) => (
                        <li key={i} className="flex items-start text-slate-700 leading-relaxed">
                          <span className="inline-block w-1.5 h-1.5 rounded-full bg-cyan-500 mt-2 mr-3 flex-shrink-0"></span>
                          <span className="text-sm md:text-base">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
