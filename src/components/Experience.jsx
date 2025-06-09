import React from 'react';
import { Briefcase, Calendar } from 'lucide-react';

export const Experience = () => {
  const experiences = [ // Holds all the various Timeline events
    {
      title: "Software Engineer",
      company: "GE Vernova",
      location: "Atlanta, GA",
      period: "May 2025",
      description: [
        "Placeholder - 12 weeks",
      ],
      current: true
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
        "Selected for TA role after academic excellence and faculty recommendation; Excellence recognized with “Outstanding Undergraduate TA” award.",
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
      title: "Team Leader - 4th Place",
      company: "AUC Game Jam",
      location: "Atlanta, GA",
      period: "April 2024",
      description: [
        "Oversaw a team for 24 hours to assemble a game based on a given prompt. Listened to team ideas, distributed tasks, and integrated contributions into a cohesive final project.",
        "Pitched the game to a panel of judges, emphasizing strengths while strategically downplaying weaknesses"
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
    <section id="experience" className="py-16 md:py-24 bg-white">
        {/* Section Header */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8"> 
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">Experience</h2>
          <div className="w-20 h-1 bg-indigo-600 mx-auto mb-6"></div>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto">
            My professional journey and practical experience in the tech and design industry.
          </p>
        </div>
        
        <div className="relative max-w-4xl mx-auto mt-16">
          {/* Timeline Line */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-slate-200"></div>
          
          {/* Experience Items */}
          {experiences.map((exp, index) => (
            <div 
              key={index} 
              className={`relative md:flex items-start mb-12 ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
            //   the above line is responsible for the events showing up on different halfs of the array
            >
              
              {/* Content */}
              <div className={`md:w-1/2 p-6 bg-white rounded-lg shadow-md border-l-4 transform transition-transform hover:scale-105 
                ${exp.current ? 'border-indigo-600' : 'border-teal-500'} ${index % 2 === 0 ? 'md:mr-8' : 'md:ml-8'}`}>
                    {/* Hoverable and the outer border for the timeline event */}
                <div className="flex items-center mb-4">
                    {/* Vertically centers the icon and the text in the same row */}

                  <Briefcase size={20} className={exp.current ? 'text-indigo-600' : 'text-teal-500'} />
                  <h3 className="ml-2 text-xl font-semibold text-slate-800">{exp.title}</h3>
                  </div>


                <h4 className="text-lg font-medium text-slate-700 mb-1">{exp.company}</h4>

                <div className="flex items-center mb-4 text-slate-500">
                  <Calendar size={16} className="mr-1" />
                  <span className="mr-2">{exp.period}</span> • <span className="ml-2">{exp.location}</span>
                </div>

                <ul className="space-y-2">
                  {exp.description.map((item, i) => (
                    <li key={i} className="flex">
                      <span className="mr-2 text-indigo-600">•</span>
                      <span className="text-slate-600">{item}</span>
                    </li>
                    // Creates a vertical list
                    // Iterates over the description array inside each exp object
                    // Each bullet is wrapped in a flex container so the bullet and text align horizontally


                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;