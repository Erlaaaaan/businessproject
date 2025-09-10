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
      description: "With an impressive 30-year career in finance, Rizza Quinquileria has built a reputation for financial leadership, strategic decision-making, and organizational growth. Her extensive background covers corporate finance, budgeting, and compliance—skills that have consistently driven stability and profitability in every organization she has served.",
      extendedDescription: "In the past 5 years, Rizza has taken the helm of RQUIN Integrated Solutions Inc. as managing director, where she has successfully merged her financial expertise with hands-on operational leadership. Under her direction, RQUIN has expanded its capabilities in fire and safety, engineering, and integrated solutions, establishing itself as a trusted partner for clients in both the public and private sectors. Rizza’s leadership style combines strategic vision, financial discipline, and operational excellence, ensuring that RQUIN remains true to its mission: “Your Safety, Our Mission.”"
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
      position: "Marketing Executive ",
      image: "/images/people/john.jpg",
      description: "The Marketing Executive of RQUIN Integrated Solution Inc. are responsible for promoting the company’s brand, services, and innovative solutions in the market.",  
      extendedDescription: "As Director and Marketing at RQUIN Integrated Solutions Inc., John Arnie Quinquileria leads the company’s efforts in brand building, client acquisition, and market expansion. With a strong background in real estate consulting in Dubai and years of entrepreneurial experience across multiple ventures, John brings a strategic and innovative approach to positioning RQUIN as a trusted leader in fire safety and integrated engineering solutions."
    },
    {
      id: 5,
      name: "Engr. Jhon Dennis Muldong",
      position: "Director/Project Enginner",
      image: "/images/people/dennis.jpg",
      description: "Dennis Muldong is a Licensed Mechanical Engineer with extensive experience in both local and international projects. Based in Dubai and actively involved in RQUIN’s operations in the Philippines, Dennis bridges global exposure with hands-on project execution.",
      extendedDescription: "With a strong technical foundation, Dennis specializes in IT infrastructure and security systems integration, ensuring that RQUIN delivers cutting-edge solutions that meet the evolving demands of safety and engineering projects. His dual expertise in mechanical systems and advanced security technologies makes him a vital asset in delivering end-to-end solutions for clients."
    },
    {
      id: 6,
      name: "Wilfredo Balaguer",
      position: "Foreman - Fire Pro Department",
      image: "/images/people/wolf.jpg",
      description: "The Foreman of the Fire Protection Department at RQUIN Integrated Solution Inc. is responsible for supervising on-site installations, maintenance, and safety compliance of fire protection systems.",
      position: "Foreman",
      image: "/images/team/edleen-ona.jpg",
      description: "The Foreman is responsible for supervising and coordinating the daily activities of workers at the project site. He ensures that all tasks are carried out according to plans, safety regulations, and company standards, while meeting deadlines and maintaining quality workmanship.",
      extendedDescription: "They lead and coordinate the work of technicians and crews to ensure projects are completed on time, within standards, and in line with safety regulations. With hands-on expertise and leadership, the Foreman plays a key role in delivering reliable and high-quality fire protection solutions to clients."
    },
    {
      id: 7,
      name: "Noe Derit",
      position: "Welder",
      image: "/images/team/alexander-cabrera.jpg",
      description: "The Pipe Fitter at RQUIN Integrated Solution Inc. is skilled in assembling, installing, and maintaining piping systems for various projects.",
      extendedDescription: "The Welder is responsible for performing welding and fabrication work at the project site. This includes joining, repairing, and assembling metal components according to specifications, ensuring safety, quality, and accuracy in every task. ",
    },
    {
      id: 8,
      name: "Elmer Bautista",
      position: "Pipe Fitter",
      image: "/images/team/donabel-samson-garces.jpg",
      description: "The Pipe Fitter at RQUIN Integrated Solution Inc. is skilled in assembling, installing, and maintaining piping systems for various projects.",
      extendedDescription: "The Pipe Fitter is responsible for installing, assembling, fabricating, maintaining, and repairing piping systems at the project site. The role ensures that all pipes and fittings are aligned, secured, and tested according to specifications, safety standards, and project requirements."
    },
    {
      id: 9,
      name: "Jayson Quimbao",
      position: "Pipe Fitter",
      image: "/images/people/Jayson.jpg",
      description: "Read and interpret blueprints, drawings, and project specifications for pipe system layouts. ",
      extendedDescription: "Measure, cut, thread, bend, and fit pipes using appropriate tools and techniques. Install pipes, fittings, valves, and supports securely according to plans. Test piping systems for leaks, pressure, and safety compliance."
    },
    {
      id: 10,
      name: "Benjie Dadivas",
      position: "Technician",
      image: "/images/people/Benjie.jpg",
      description: "The FDAS Technician at RQUIN Integrated Solution Inc. is responsible for installing, testing, and maintaining fire detection and alarm systems.",
      extendedDescription: "The Onsite Technician is responsible for installing, maintaining, and troubleshooting equipment, systems, or devices at the project location. The role ensures that all technical work is completed efficiently, safely, and in compliance with company and client standards.",
    },
    {
      id: 11,
      name: "Paul De Leon",
      position: "Helper",
      image: "/images/team/hazel-marie-yadao.jpg",
      description: "Assist lead technicians/installers in onsite installation work (e.g., electrical, cabling, equipment, fixtures, or appliances).",
      extendedDescription: "Carry and prepare materials, tools, and equipment required for the job. Support in setting up work areas and ensuring cleanliness and orderlines."
    },
    {
      id: 12,
      name: "Shiela Cordero",
      position: "Admin Assistant",
      image: "/images/team/christian-morales.jpg",
      description: "The Admin Assistant at RQUIN Integrated Solution Inc. provides essential administrative and clerical support to ensure smooth daily operations.",
      extendedDescription: "They handle documentation, scheduling, and coordination tasks that keep projects and teams organized. With strong attention to detail and efficiency, the Admin Assistant plays a key role in supporting both management and staff."
    },
    {
      id: 13,
      name: "Ruel Magnaye ",
      position: "Welder",
      image: "/images/team/christian-morales.jpg",
      description: "Perform welding and cutting tasks required for onsite installation of structures, equipment, or fittings.",
      extendedDescription: "Assist in assembling and installing metal components according to project specifications. Read and interpret technical drawings, blueprints, and work instructions."
    },
    {
      id: 14,
      name: "Bryan De Leon",
      position: "Helper",
      image: "/images/team/christian-morales.jpg",
      description: "Perform welding and cutting tasks required for onsite installation of structures, equipment, or fittings.",
      extendedDescription: "Perform basic manual labor such as lifting, holding, or positioning materials.Ensure cleanliness and orderliness of the work area.Follow safety protocols and company policies at all times.Support the team in any other task assigned by the supervisor or foreman."
    }
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
          className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-2 sm:p-4"
          onClick={closeModal}
        >
          <div 
            className="bg-gray-800/90 backdrop-blur-md rounded-lg w-full max-w-4xl max-h-[90vh] overflow-y-auto border border-gray-600 shadow-2xl mx-4"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="p-4 sm:p-6 lg:p-8">
              {/* Modal Header */}
              <div className="mb-4 sm:mb-6 lg:mb-8">
                <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white drop-shadow-lg text-center leading-tight">{selectedEmployee.name}</h2>
              </div>

              {/* Employee Image */}
              <div className="w-48 h-48 sm:w-56 sm:h-56 lg:w-64 lg:h-64 mx-auto mb-4 sm:mb-6 lg:mb-8 overflow-hidden bg-gray-700 rounded-lg border border-gray-600">
                <img 
                  src={selectedEmployee.image} 
                  alt={selectedEmployee.name}
                  className="w-full h-full object-contain"
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.nextSibling.style.display = 'flex';
                  }}
                />
                <div className="w-full h-full flex items-center justify-center text-gray-300 text-sm sm:text-base lg:text-lg" style={{display: 'none'}}>
                  Photo Coming Soon
                </div>
              </div>

              {/* Employee Details */}
              <div className="text-center mb-4 sm:mb-6 lg:mb-8">
                <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold text-white mb-2 sm:mb-3 drop-shadow-lg">{selectedEmployee.position}</h3>
                <div className="w-24 sm:w-28 lg:w-32 h-1 bg-cyan-400 mx-auto drop-shadow-lg"></div>
              </div>

              {/* Extended Description */}
              <div className="text-gray-200 leading-relaxed text-sm sm:text-base lg:text-lg">
                <p className="mb-4 sm:mb-6">{selectedEmployee.description}</p>
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
