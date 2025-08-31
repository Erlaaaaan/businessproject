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
      image: "/images/people/rizz.jpg",
      description: "Leads the company's strategic direction and oversees all operations. Responsible for business development, stakeholder relations, and ensuring organizational success and growth.",
      extendedDescription: "As the Chief Executive Officer and President, this role encompasses comprehensive leadership responsibilities including strategic planning, corporate governance, stakeholder management, and driving organizational excellence. The position requires deep industry knowledge, strong leadership skills, and the ability to navigate complex business challenges while maintaining the company's vision and mission."
    },
    {
      id: 2,
      name: "Engr. Manuel Villafuerte",
      position: "Chief Operations Officer",
      image: "/images/people/manuel.jpg",
      description: "Provides strategic guidance and oversight to the board. Supports the CEO in key decision-making and represents the company in high-level business relationships.",
      extendedDescription: "The Vice-Chairman serves as a key strategic advisor to the board and executive team, providing oversight and guidance on major business decisions. This role involves representing the company in high-level negotiations, maintaining relationships with key stakeholders, and ensuring corporate governance standards are upheld. The position requires extensive business experience and strong analytical capabilities."
    },
    {
      id: 3,
      name: "Charina Acunin",
      position: "Sales Director",
      image: "/images/team/dinah-barrete-morales.jpg",
      description: "Manages day-to-day operations and ensures efficient business processes. Coordinates between departments and implements strategic initiatives to achieve operational excellence.",
      extendedDescription: "As Chief Operating Officer and Executive Vice-President, this role is responsible for the overall operational efficiency of the organization. This includes overseeing daily operations, implementing strategic initiatives, managing cross-departmental coordination, and ensuring that all business processes align with organizational goals. The position requires strong operational expertise and the ability to drive continuous improvement."
    },
    {
      id: 4,
      name: "John Arnie Quinquileria",
      position: "Director/Marketing Exectutives",
      image: "/images/people/john.jpg",
      description: "Oversees financial planning, budgeting, and reporting. Manages financial risks and ensures compliance with financial regulations and standards.",
      extendedDescription: "The Chief Financial Officer is responsible for all financial aspects of the organization, including financial planning and analysis, risk management, compliance, and investor relations. This role requires deep financial expertise, strong analytical skills, and the ability to provide strategic financial guidance to support business growth and sustainability."
    },
    {
      id: 5,
      name: "Engr. Jhon Dennis Muldong",
      position: "Director/Project Enginner",
      image: "/images/people/denis.jpg",
      description: "Manages HR policies, recruitment, and employee development. Ensures workplace compliance and fosters a positive organizational culture.",
      extendedDescription: "This role encompasses comprehensive HR leadership including talent acquisition, employee development, performance management, and organizational culture. The position requires strong people management skills, knowledge of employment law, and the ability to create an inclusive and productive work environment that supports business objectives."
    },
    {
      id: 6,
      name: "Wilfredo Balaguer",
      position: "Foreman - Fire Pro Department",
      image: "/images/team/edleen-ona.jpg",
      description: "Oversees production processes and quality control. Optimizes operational efficiency and ensures timely delivery of products and services.",
      extendedDescription: "The Chief Production Officer leads all aspects of production operations, including process optimization, quality assurance, supply chain management, and operational efficiency. This role requires strong operational expertise, quality management skills, and the ability to drive continuous improvement in production processes."
    },
    {
      id: 7,
      name: "Noe Derit",
      position: "Pipe Fitter",
      image: "/images/team/alexander-cabrera.jpg",
      description: "Provides strategic counsel and industry expertise. Offers guidance on business decisions and helps navigate complex challenges.",
      extendedDescription: "As a strategic advisor, this role provides expert counsel on business strategy, industry trends, and complex business challenges. The position requires extensive industry experience, strong analytical capabilities, and the ability to provide actionable insights that support strategic decision-making and business growth."
    },
    {
      id: 8,
      name: "Elmer Bautista",
      position: "Pipe Fitter",
      image: "/images/team/donabel-samson-garces.jpg",
      description: "Leads customer service operations and data management. Ensures high-quality customer support and accurate data processing and maintenance.",
      extendedDescription: "This role manages both customer service excellence and data integrity, ensuring that customer interactions are handled professionally while maintaining accurate and reliable data systems. The position requires strong leadership skills, customer service expertise, and the ability to balance operational efficiency with quality standards."
    },
    {
      id: 9,
      name: "Jayson Quimbao",
      position: "Foreman - FDAS Department",
      image: "/images/people/jayson.jpg",
      description: "Manages document review processes and quality assurance. Ensures accuracy and compliance in record management and verification procedures.",
      extendedDescription: "This role oversees critical document review processes, ensuring accuracy, compliance, and quality in all record management activities. The position requires strong attention to detail, knowledge of compliance requirements, and the ability to implement effective quality control measures."
    },
    {
      id: 10,
      name: "Benjie De Villa",
      position: "FDAS Technician",
      image: "/images/people/benjie.jpg",
      description: "Oversees audio and video transcription services. Ensures high-quality, accurate transcriptions and manages transcription workflow and quality control.",
      extendedDescription: "This role manages comprehensive transcription services, ensuring high accuracy and quality in all transcription deliverables. The position requires strong quality management skills, knowledge of transcription standards, and the ability to optimize workflow processes for maximum efficiency and accuracy."
    },
    {
      id: 11,
      name: "Paul De Leon",
      position: "FDAS Technician",
      image: "/images/team/hazel-marie-yadao.jpg",
      description: "Supports record review operations and quality control. Assists in managing review processes and ensuring accuracy in document verification.",
      extendedDescription: "This role provides essential support to record review operations, assisting in quality control and process management. The position requires strong organizational skills, attention to detail, and the ability to support efficient review processes while maintaining quality standards."
    },
    {
      id: 12,
      name: "Shiela Cordero",
      position: "Admin Assistant",
      image: "/images/team/christian-morales.jpg",
      description: "Supports virtual assistant operations and client services. Assists in managing virtual support teams and ensuring high-quality client assistance.",
      extendedDescription: "This role supports virtual assistant operations, ensuring high-quality client service delivery. The position requires strong communication skills, client service expertise, and the ability to support efficient virtual operations while maintaining service quality standards."
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
