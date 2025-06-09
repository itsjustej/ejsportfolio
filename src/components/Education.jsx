import React from 'react';
import { GraduationCap, Calendar, MapPin, Award } from 'lucide-react';

export const Education = () => {
  return (
    <section id="education" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">Education</h2>
          <div className="w-20 h-1 bg-indigo-600 mx-auto mb-6"></div>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto">
            My academic background and educational achievements.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto bg-white rounded-lg overflow-hidden shadow-md">
          <div className="p-6 md:p-8 border-b border-slate-100">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between">
              <div className="mb-4 md:mb-0">
                <div className="flex items-center">
                  <GraduationCap size={24} className="text-indigo-600 mr-2" />
                  <h3 className="text-2xl font-bold text-slate-800">North Carolina A&T State University</h3>
                </div>
                <p className="text-lg font-medium text-slate-700 mt-1">B.S. Computer Science</p>
              </div>
              <div>
                <div className="flex items-center text-slate-600 mb-1">
                  <Calendar size={18} className="mr-2" />
                  <span>Expected May 2027</span>
                </div>
                <div className="flex items-center text-slate-600">
                  <MapPin size={18} className="mr-2" />
                  <span>Greensboro, NC</span>
                </div>
              </div>
            </div>
            
            <div className="mt-6">
              <div className="bg-indigo-50 rounded-lg p-4 inline-block">
                <span className="font-medium text-indigo-700">GPA: 3.4</span>
              </div>
            </div>
            
            <div className="mt-6">
              <h4 className="text-lg font-semibold text-slate-800 mb-2">Relevant Coursework</h4>
              <div className="flex flex-wrap gap-2">
                {[
                  "Calculus 1", 
                  "Calculus 2", 
                  "Intro to Programming", 
                  "Computer Program Design", 
                  "Data Structures",
                  "Discrete Structures", 
                  "Technical Writing"
                ].map((course, index) => (
                  <span 
                    key={index} 
                    className="bg-slate-100 text-slate-700 px-3 py-1 rounded-full text-sm"
                  >
                    {course}
                  </span>
                ))}
              </div>
            </div>
            
            <div className="mt-6">
              <h4 className="text-lg font-semibold text-slate-800 mb-2">Organizations</h4>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <span className="text-indigo-600 mr-2">•</span>
                  <span className="text-slate-700">
                    <span className="font-medium">Vice President</span> of Rooted in Code
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-indigo-600 mr-2">•</span>
                  <span className="text-slate-700">
                    National Society of Black Engineers (NSBE)
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-indigo-600 mr-2">•</span>
                  <span className="text-slate-700">
                    Association for Computing Machinery (ACM)
                  </span>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="p-6 md:p-8">
            <h4 className="flex items-center text-lg font-semibold text-slate-800 mb-4">
              <Award size={20} className="text-indigo-600 mr-2" />
              Scholarships & Awards
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                {
                  name: "Cisco Scholarship",
                  icon: "🏆"
                },
                {
                  name: "Road2Hire Scholarship",
                  icon: "🏆"
                },
                {
                  name: "Codehouse Scholarship",
                  icon: "🏆"
                },
                {
                  name: "Texas Instrument Scholarship",
                  icon: "🏆"
                }
              ].map((award, index) => (
                <div 
                  key={index} 
                  className="bg-slate-50 p-4 rounded-lg border border-slate-100 flex items-center"
                >
                  <span className="text-2xl mr-3">{award.icon}</span>
                  <span className="font-medium text-slate-700">{award.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};


export default Education;