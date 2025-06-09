import React from 'react';

export const Skills = () => {
  const programmingSkills = [
    { name: 'Java', level: 100 },
    { name: 'C++', level: 95 },
    { name: 'JavaScript', level: 70 },
    { name: 'Python', level: 75 },
    { name: 'Machine Learning', level: 58}
  ];

  const frameWorks = [
    { name: 'Git', level: 80 },
    { name: 'React', level: 70 },
    { name: 'Tailwind', level: 70 },
    { name: 'IntelliJ', level: 95 },
    { name: 'VSCode', level: 60 },
  ];

  const softSkills = [
    { name: 'Leadership', level: 95 },
    { name: 'Problem Solving', level: 90 },
    { name: 'Communication', level: 100 },
    { name: 'Teamwork', level: 90 },
    { name: 'Time Management', level: 100 },
  ];

  return (
    <section id="skills" className="py-16 md:py-24 bg-slate-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">Technical Skills</h2>
          <div className="w-20 h-1 bg-indigo-600 mx-auto mb-6"></div>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto">
            My toolkit of programming languages, technical abilities, and skills that I've developed through coursework, 
            projects, and certifications.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mt-12">
          {/* Programming Languages */}
          <div className="bg-white rounded-lg shadow-md p-8 transform transition-transform hover:scale-105">
            <h3 className="text-2xl font-semibold text-slate-800 mb-6">Programming Languages</h3>
            <div className="space-y-6">
              {programmingSkills.map((skill) => (
                <div key={skill.name}>
                  <div className="flex justify-between mb-2">
                    <span className="font-medium text-slate-700">{skill.name}</span>
                    <span className="text-slate-500">{skill.level}%</span>
                  </div>
                  <div className="w-full bg-slate-200 rounded-full h-2.5">
                    <div
                      className="bg-gradient-to-r from-indigo-600 to-teal-500 h-2.5 rounded-full transition-all duration-1000 ease-out"
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Frameworks */}
          <div className="bg-white rounded-lg p-8 shadow-md transform transition-transform hover:scale-105">
            <h3 className="text-2xl font-semibold text-slate-800 mb-6">Frameworks</h3>
            <div className="space-y-6">
              {frameWorks.map((framework) => (
                <div key={framework.name}>
                  <div className="flex justify-between mb-2">
                    <span className="font-medium text-slate-700">{framework.name}</span>
                    <span className="text-slate-500">{framework.level}%</span>
                  </div>
                  <div className="w-full bg-slate-200 rounded-full h-2.5">
                    <div
                      className="bg-gradient-to-r from-purple-600 to-pink-300 h-2.5 rounded-full transition-all duration-1000 ease-out"
                      style={{ width: `${framework.level}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Soft Skills */}
          <div className="bg-white rounded-lg shadow-md p-8 transform transition-transform hover:scale-105">
            <h3 className="text-2xl font-semibold text-slate-800 mb-6">Soft Skills</h3>
            <div className="space-y-6">
              {softSkills.map((skill) => (
                <div key={skill.name}>
                  <div className="flex justify-between mb-2">
                    <span className="font-medium text-slate-700">{skill.name}</span>
                    <span className="text-slate-500">{skill.level}%</span>
                  </div>
                  <div className="w-full bg-slate-200 rounded-full h-2.5">
                    <div
                      className="bg-gradient-to-r from-rose-600 to-rose-300 h-2.5 rounded-full transition-all duration-1000 ease-out"
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Certifications */}
        <div className="mt-16 bg-white rounded-lg shadow-md p-8">
          <h3 className="text-2xl font-semibold text-slate-800 mb-6">Certifications</h3>
          <div className="flex flex-wrap gap-4">
            <div className="flex items-center border border-slate-200 rounded-lg p-4 hover:border-indigo-300 hover:border-2 transition-colors hover:scale-105">
              <div className="mr-4 bg-indigo-100 p-3 rounded-lg">
                <img
                  src="/fcc.png"
                  alt="FreeCodeCamp Logo"
                  className="h-8 w-8 object-contain"
                />
              </div>
              <div>
                <h4 className="font-semibold text-slate-800">Responsive Web Design</h4>
                <p className="text-slate-500 text-sm">FreeCodeCamp</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
