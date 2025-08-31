"use client";

import { useState } from "react";
import Header from "../components/header";
import Footer from "../components/footer";

export default function PeoplePage() {
  const [selectedEmployee, setSelectedEmployee] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = (employee) => {
    setSelectedEmployee(employee);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedEmployee(null);
  };

  const employees = [
    {
      id: 1,
      name: "Rizza Quinquileria",
      position: "Managing Director",
      image: "/images/people/rizza.jpg",
      description: "The Managing Director of RQUIN Integrated Solution Inc. leads the company with a clear vision for growth, innovation, and client success.",
      extendedDescription: "Responsible for overall strategy, operations, and partnerships, they ensure the organization delivers reliable and integrated business solutions. With a strong commitment to excellence and integrity, the Managing Director drives the team toward achieving long-term sustainability and industry leadership."
    },
    {
      id: 2,
      name: "Engr. Manuel Villafuerte",
      position: "Chief Operations Officer",
      image: "/images/people/manuela.jpg",
      description: "The Chief Operations Officer of RQUIN Integrated Solution Inc. oversees the company’s daily operations and ensures that all projects and services are delivered efficiently and effectively.",
      extendedDescription: "Focused on operational excellence and continuous improvement, the COO aligns processes with the company’s strategic goals. With strong leadership and problem-solving skills, the COO drives productivity, teamwork, and service quality to meet client expectations and sustain business growth."
    },
    {
      id: 3,
      name: "Charina Acunin",
      position: "Sales Director",
      image: "/images/team/dinah-barrete-morales.jpg",
      description: "The Sales Director of RQUIN Integrated Solution Inc. leads the company’s sales strategy and business development initiatives.",
      extendedDescription: "Focused on building strong client relationships and expanding market reach, the Sales Director drives revenue growth and ensures customer satisfaction. With expertise in sales leadership and market trends, they play a key role in positioning the company as a trusted provider of innovative and integrated solutions."
    },
    {
      id: 4,
      name: "John Arnie Quinquileria",
      position: "Director/Marketing Exectutives",
      image: "/images/people/john.jpg",
      description: "The Director and Marketing Executives of RQUIN Integrated Solution Inc. are responsible for promoting the company’s brand, services, and innovative solutions in the market.",  
      extendedDescription: "They design and implement effective marketing strategies that strengthen client engagement, expand market presence, and support business growth. With creativity and market insight, they ensure that the company’s vision and values are communicated clearly to clients and partners."
    },
    {
      id: 5,
      name: "Engr. Jhon Dennis Muldong",
      position: "Director/Project Enginner",
      image: "/images/people/dennis.jpg",
      description: "The Director / Project Engineer of RQUIN Integrated Solution Inc. oversees the planning, execution, and completion of projects to ensure they meet client requirements, timelines, and quality standards.",
      extendedDescription: "With strong technical expertise and leadership, they manage resources, coordinate teams, and provide innovative solutions to deliver successful results. Their role is vital in maintaining efficiency, safety, and excellence across all engineering and project operations."
    },
    {
      id: 6,
      name: "Wilfredo Balaguer",
      position: "Foreman - Fire Pro Department",
      image: "/images/team/edleen-ona.jpg",
      description: "The Foreman of the Fire Protection Department at RQUIN Integrated Solution Inc. is responsible for supervising on-site installations, maintenance, and safety compliance of fire protection systems.",
      extendedDescription: "They lead and coordinate the work of technicians and crews to ensure projects are completed on time, within standards, and in line with safety regulations. With hands-on expertise and leadership, the Foreman plays a key role in delivering reliable and high-quality fire protection solutions to clients."
    },
    {
      id: 7,
      name: "Noe Derit",
      position: "Pipe Fitter",
      image: "/images/team/alexander-cabrera.jpg",
      description: "The Pipe Fitter at RQUIN Integrated Solution Inc. is skilled in assembling, installing, and maintaining piping systems for various projects.",
      extendedDescription: "With technical expertise and attention to detail, they ensure that all pipework is fitted accurately, safely, and according to design specifications. Their role is essential in supporting efficient project completion and maintaining the company’s commitment to quality workmanship. ",
    },
    {
      id: 8,
      name: "Elmer Bautista",
      position: "Pipe Fitter",
      image: "/images/team/donabel-samson-garces.jpg",
      description: "The Pipe Fitter at RQUIN Integrated Solution Inc. is skilled in assembling, installing, and maintaining piping systems for various projects.",
      extendedDescription: "With technical expertise and attention to detail, they ensure that all pipework is fitted accurately, safely, and according to design specifications. Their role is essential in supporting efficient project completion and maintaining the company’s commitment to quality workmanship."
    },
    {
      id: 9,
      name: "Jayson Quimbao",
      position: "Foreman - FDAS Department",
      image: "/images/people/Jayson.jpg",
      description: "The Foreman of the FDAS Department at RQUIN Integrated Solution Inc. oversees the installation, testing, and maintenance of fire detection and alarm systems.",
      extendedDescription: "They lead and coordinate technicians on-site, ensuring that all systems are compliant with safety standards and project requirements. With strong technical knowledge and leadership, the Foreman ensures reliable, high-quality, and safe FDAS solutions for clients."
    },
    {
      id: 10,
      name: "Benjie De Villa",
      position: "FDAS Technician",
      image: "/images/people/Benjie.jpg",
      description: "The FDAS Technician at RQUIN Integrated Solution Inc. is responsible for installing, testing, and maintaining fire detection and alarm systems.",
      extendedDescription: "With technical skills and attention to detail, they ensure all devices and systems function accurately and comply with safety standards. Their work is essential in supporting reliable fire safety solutions and protecting clients’ facilities.",
    },
    {
      id: 11,
      name: "Paul De Leon",
      position: "FDAS Technician",
      image: "/images/team/hazel-marie-yadao.jpg",
      description: "The FDAS Technician at RQUIN Integrated Solution Inc. is responsible for installing, testing, and maintaining fire detection and alarm systems.",
      extendedDescription: "With technical skills and attention to detail, they ensure all devices and systems function accurately and comply with safety standards. Their work is essential in supporting reliable fire safety solutions and protecting clients’ facilities."
    },
    {
      id: 12,
      name: "Shiela Cordero",
      position: "Admin Assistant",
      image: "/images/team/christian-morales.jpg",
      description: "The Admin Assistant at RQUIN Integrated Solution Inc. provides essential administrative and clerical support to ensure smooth daily operations.",
      extendedDescription: "They handle documentation, scheduling, and coordination tasks that keep projects and teams organized. With strong attention to detail and efficiency, the Admin Assistant plays a key role in supporting both management and staff."
    },
   
  ];

  return (
    <>
      <Header />
      
      {/* Hero Section */}
      <div className="bg-[#043582] py-20">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-8 font-montserrat tracking-wide">
            OUR TEAM
          </h1>
          <p className="text-xl text-white/95 max-w-4xl mx-auto mb-16 font-montserrat leading-relaxed">
            RQUIN Integrated Solutions Inc. is a trusted provider of innovative and efficient business solutions, specializing in technology, systems integration, and process optimization to help organizations achieve smarter and sustainable growth.
          </p>
        </div>
      </div>

      {/* Team Content Section */}
      <div className="bg-white py-20">
        <div className="w-full max-w-none px-4 sm:px-6 lg:px-8">
          {/* Text Content */}
          <div className="mb-16 text-center">
            <p className="text-lg text-gray-800 mb-6 leading-relaxed">
              At RQUIN Integrated Solutions Inc., our employees are our greatest asset.
            </p>
            <p className="text-lg text-gray-800 leading-relaxed">
              We are a team of skilled professionals dedicated to innovation, collaboration, and delivering quality solutions that create value for our clients.
            </p>
          </div>

          {/* Team Members Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {employees.map((employee) => (
                             <div 
                 key={employee.id}
                 className="bg-white rounded-xl shadow-lg p-6 text-center hover:shadow-2xl transition-all duration-300 cursor-pointer transform hover:scale-105 border border-gray-100 overflow-hidden relative group"
                 onClick={() => openModal(employee)}
               >
                 {/* Top accent bar */}
                 <div className="absolute top-0 left-0 right-0 h-1 bg-[#003280]"></div>
                 
                 {/* Image container with border */}
                 <div className="w-full h-80 mb-6 overflow-hidden bg-gray-100 rounded-lg border-2 border-[#003280]/20 group-hover:border-[#003280]/40 transition-colors duration-300">
                   <img 
                     src={employee.image} 
                     alt={employee.name}
                     className="w-full h-full object-contain"
                     onError={(e) => {
                       e.target.style.display = 'none';
                       e.target.nextSibling.style.display = 'flex';
                     }}
                   />
                   <div className="w-full h-full flex items-center justify-center text-gray-500 text-base" style={{display: 'none'}}>
                     Photo Coming Soon
                   </div>
                 </div>
                 
                 {/* Name with accent color */}
                 <h3 className="font-bold text-[#003280] text-xl mb-2 group-hover:text-[#003280]/80 transition-colors duration-300">{employee.name}</h3>
                 
                                   {/* Position with subtle styling */}
                  <p className="text-gray-700 text-base mb-4 font-medium">{employee.position}</p>
                  
                  {/* Bottom accent line */}
                  <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-[#003280]/50 to-transparent"></div>
               </div>
            ))}
          </div>
        </div>
      </div>

            {/* Employee Modal */}
      {isModalOpen && selectedEmployee && (
        <div 
          className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4"
          onClick={closeModal}
        >
          <div 
            className="bg-gray-800/90 backdrop-blur-md rounded-lg max-w-4xl w-[90vw] border border-gray-600 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="p-8">
              {/* Modal Header */}
              <div className="mb-8">
                <h2 className="text-3xl font-bold text-white drop-shadow-lg text-center">{selectedEmployee.name}</h2>
              </div>

              {/* Employee Image */}
              <div className="w-64 h-64 mx-auto mb-8 overflow-hidden bg-gray-700 rounded-lg border border-gray-600">
                <img 
                  src={selectedEmployee.image} 
                  alt={selectedEmployee.name}
                  className="w-full h-full object-contain"
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.nextSibling.style.display = 'flex';
                  }}
                />
                <div className="w-full h-full flex items-center justify-center text-gray-300 text-lg" style={{display: 'none'}}>
                  Photo Coming Soon
                </div>
              </div>

              {/* Employee Details */}
              <div className="text-center mb-8">
                <h3 className="text-2xl font-semibold text-white mb-3 drop-shadow-lg">{selectedEmployee.position}</h3>
                <div className="w-32 h-1 bg-cyan-400 mx-auto drop-shadow-lg"></div>
              </div>

              {/* Extended Description */}
              <div className="text-gray-200 leading-relaxed text-lg">
                <p className="mb-6">{selectedEmployee.description}</p>
                <p>{selectedEmployee.extendedDescription}</p>
              </div>
            </div>
          </div>
        </div>
      )}
      
      <Footer />
    </>
  );
}
