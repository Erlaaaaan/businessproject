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
      name: "zxczxc",
      position: "CEO and President",
      image: "/images/team/fred-kumetz.jpg",
      description: "Leads the company's strategic direction and oversees all operations. Responsible for business development, stakeholder relations, and ensuring organizational success and growth.",
      extendedDescription: "As the Chief Executive Officer and President, this role encompasses comprehensive leadership responsibilities including strategic planning, corporate governance, stakeholder management, and driving organizational excellence. The position requires deep industry knowledge, strong leadership skills, and the ability to navigate complex business challenges while maintaining the company's vision and mission."
    },
    {
      id: 2,
      name: "SSSS",
      position: "Vice-Chairman",
      image: "/images/team/maurice-silberstein.jpg",
      description: "Provides strategic guidance and oversight to the board. Supports the CEO in key decision-making and represents the company in high-level business relationships.",
      extendedDescription: "The Vice-Chairman serves as a key strategic advisor to the board and executive team, providing oversight and guidance on major business decisions. This role involves representing the company in high-level negotiations, maintaining relationships with key stakeholders, and ensuring corporate governance standards are upheld. The position requires extensive business experience and strong analytical capabilities."
    },
    {
      id: 3,
      name: "zxczxc",
      position: "COO and Executive Vice-President",
      image: "/images/team/dinah-barrete-morales.jpg",
      description: "Manages day-to-day operations and ensures efficient business processes. Coordinates between departments and implements strategic initiatives to achieve operational excellence.",
      extendedDescription: "As Chief Operating Officer and Executive Vice-President, this role is responsible for the overall operational efficiency of the organization. This includes overseeing daily operations, implementing strategic initiatives, managing cross-departmental coordination, and ensuring that all business processes align with organizational goals. The position requires strong operational expertise and the ability to drive continuous improvement."
    },
    {
      id: 4,
      name: "zxczxc",
      position: "Chief Financial Officer",
      image: "/images/team/jonathan-venus.jpg",
      description: "Oversees financial planning, budgeting, and reporting. Manages financial risks and ensures compliance with financial regulations and standards.",
      extendedDescription: "The Chief Financial Officer is responsible for all financial aspects of the organization, including financial planning and analysis, risk management, compliance, and investor relations. This role requires deep financial expertise, strong analytical skills, and the ability to provide strategic financial guidance to support business growth and sustainability."
    },
    {
      id: 5,
      name: "zxczxc",
      position: "Director, Human Resources and Administrative Services",
      image: "/images/team/mayflor-jimenez.jpg",
      description: "Manages HR policies, recruitment, and employee development. Ensures workplace compliance and fosters a positive organizational culture.",
      extendedDescription: "This role encompasses comprehensive HR leadership including talent acquisition, employee development, performance management, and organizational culture. The position requires strong people management skills, knowledge of employment law, and the ability to create an inclusive and productive work environment that supports business objectives."
    },
    {
      id: 6,
      name: "zxczxc",
      position: "Chief Production Officer",
      image: "/images/team/edleen-ona.jpg",
      description: "Oversees production processes and quality control. Optimizes operational efficiency and ensures timely delivery of products and services.",
      extendedDescription: "The Chief Production Officer leads all aspects of production operations, including process optimization, quality assurance, supply chain management, and operational efficiency. This role requires strong operational expertise, quality management skills, and the ability to drive continuous improvement in production processes."
    },
    {
      id: 7,
      name: "zxczxc",
      position: "Advisor",
      image: "/images/team/alexander-cabrera.jpg",
      description: "Provides strategic counsel and industry expertise. Offers guidance on business decisions and helps navigate complex challenges.",
      extendedDescription: "As a strategic advisor, this role provides expert counsel on business strategy, industry trends, and complex business challenges. The position requires extensive industry experience, strong analytical capabilities, and the ability to provide actionable insights that support strategic decision-making and business growth."
    },
    {
      id: 8,
      name: "zxczxc",
      position: "Manager: Customer Service and Data Entry Department",
      image: "/images/team/donabel-samson-garces.jpg",
      description: "Leads customer service operations and data management. Ensures high-quality customer support and accurate data processing and maintenance.",
      extendedDescription: "This role manages both customer service excellence and data integrity, ensuring that customer interactions are handled professionally while maintaining accurate and reliable data systems. The position requires strong leadership skills, customer service expertise, and the ability to balance operational efficiency with quality standards."
    },
    {
      id: 9,
      name: "zxczxc",
      position: "Manager: Review of Records Department",
      image: "/images/team/anthony-capati.jpg",
      description: "Manages document review processes and quality assurance. Ensures accuracy and compliance in record management and verification procedures.",
      extendedDescription: "This role oversees critical document review processes, ensuring accuracy, compliance, and quality in all record management activities. The position requires strong attention to detail, knowledge of compliance requirements, and the ability to implement effective quality control measures."
    },
    {
      id: 10,
      name: "zxczxc",
      position: "Manager: Transcription Department",
      image: "/images/team/jonahlyn-eleazar-trinidad.jpg",
      description: "Oversees audio and video transcription services. Ensures high-quality, accurate transcriptions and manages transcription workflow and quality control.",
      extendedDescription: "This role manages comprehensive transcription services, ensuring high accuracy and quality in all transcription deliverables. The position requires strong quality management skills, knowledge of transcription standards, and the ability to optimize workflow processes for maximum efficiency and accuracy."
    },
    {
      id: 11,
      name: "zxczxc",
      position: "Assistant Manager: Review of Records Department",
      image: "/images/team/hazel-marie-yadao.jpg",
      description: "Supports record review operations and quality control. Assists in managing review processes and ensuring accuracy in document verification.",
      extendedDescription: "This role provides essential support to record review operations, assisting in quality control and process management. The position requires strong organizational skills, attention to detail, and the ability to support efficient review processes while maintaining quality standards."
    },
    {
      id: 12,
      name: "zxczxc",
      position: "Assistant Manager: Virtual Assistant Department",
      image: "/images/team/christian-morales.jpg",
      description: "Supports virtual assistant operations and client services. Assists in managing virtual support teams and ensuring high-quality client assistance.",
      extendedDescription: "This role supports virtual assistant operations, ensuring high-quality client service delivery. The position requires strong communication skills, client service expertise, and the ability to support efficient virtual operations while maintaining service quality standards."
    },
    {
      id: 13,
      name: "zxczxc",
      position: "Assistant Manager: Virtual Assistant Department",
      image: "/images/team/marie-joyce-reyes.jpg",
      description: "Manages virtual assistant services and client relations. Ensures efficient virtual support operations and maintains high client satisfaction standards.",
      extendedDescription: "This role manages virtual assistant services, ensuring efficient operations and high client satisfaction. The position requires strong leadership skills, client relationship management expertise, and the ability to optimize virtual support processes for maximum effectiveness."
    },
    {
      id: 14,
      name: "zxczxc",
      position: "Manager: Bookkeeping Department",
      image: "/images/team/haidee-tan-virador.jpg",
      description: "Oversees financial record keeping and accounting processes. Ensures accurate financial reporting and compliance with accounting standards and regulations.",
      extendedDescription: "This role manages comprehensive bookkeeping operations, ensuring accurate financial records and compliance with accounting standards. The position requires strong accounting expertise, attention to detail, and the ability to maintain organized and reliable financial information systems."
    },
    {
      id: 15,
      name: "zxczxc",
      position: "Manager: Helpdesk and Network Infrastructure",
      image: "/images/team/dennis-de-leon.jpg",
      description: "Manages IT support services and network systems. Ensures reliable technology infrastructure and provides technical support to staff and clients.",
      extendedDescription: "This role manages IT infrastructure and support services, ensuring reliable technology systems and efficient technical support. The position requires strong technical expertise, problem-solving skills, and the ability to maintain robust technology infrastructure that supports business operations."
    },
    {
      id: 16,
      name: "zxczxc",
      position: "Manager: Platform and Security",
      image: "/images/team/carlos-baylon.jpg",
      description: "Oversees platform development and cybersecurity measures. Ensures system security and maintains robust technology platforms for business operations.",
      extendedDescription: "This role manages platform development and cybersecurity, ensuring secure and robust technology systems. The position requires strong technical expertise, security knowledge, and the ability to maintain secure technology platforms that protect business operations and data."
    },
    {
      id: 17,
      name: "zxczxc",
      position: "Manager: Accounting and Logistics",
      image: "/images/team/ruby-uy.jpg",
      description: "Manages accounting operations and logistics coordination. Ensures efficient financial management and smooth supply chain operations.",
      extendedDescription: "This role manages both accounting operations and logistics coordination, ensuring efficient financial management and smooth supply chain operations. The position requires strong accounting expertise, logistics knowledge, and the ability to coordinate complex operational processes."
    },
    {
      id: 18,
      name: "zxczxc",
      position: "Manager: Billing and Financial Information Management",
      image: "/images/team/gliselda-villaruel.jpg",
      description: "Oversees billing processes and financial data management. Ensures accurate billing and maintains organized financial information systems.",
      extendedDescription: "This role manages billing processes and financial data management, ensuring accurate billing and organized financial information systems. The position requires strong financial expertise, attention to detail, and the ability to maintain efficient billing and data management processes."
    },
    {
      id: 19,
      name: "zxczxc",
      position: "Assistant Manager: Billing and Collections Department",
      image: "/images/team/jimmy-fernando.jpg",
      description: "Supports billing operations and payment collection. Assists in managing billing processes and ensuring timely payment collection from clients.",
      extendedDescription: "This role supports billing operations and payment collection, ensuring efficient billing processes and timely payment collection. The position requires strong organizational skills, attention to detail, and the ability to support efficient billing and collection operations."
    },
    {
      id: 20,
      name: "zxczxc",
      position: "Assistant Manager: Human Resource Department",
      image: "/images/team/mary-joy-villamin.jpg",
      description: "Supports HR operations and employee relations. Assists in recruitment, training, and maintaining positive workplace culture and compliance.",
      extendedDescription: "This role supports comprehensive HR operations, assisting in recruitment, training, and maintaining positive workplace culture. The position requires strong people skills, knowledge of HR processes, and the ability to support positive employee relations and compliance."
    },
    {
      id: 21,
      name: "zxczxc",
      position: "Assistant Manager: Training Department",
      image: "/images/team/carmelle-balanza.jpg",
      description: "Manages employee training programs and development. Ensures staff skills enhancement and maintains high training standards and effectiveness.",
      extendedDescription: "This role manages employee training and development programs, ensuring effective skill enhancement and high training standards. The position requires strong training expertise, communication skills, and the ability to design and implement effective learning programs that support organizational goals."
    },
    {
      id: 22,
      name: "zxczxc",
      position: "Manager: Virtual Scribe Department",
      image: "/images/team/john-de-vera.jpg",
      description: "Oversees virtual scribe services and documentation. Ensures accurate medical documentation and efficient virtual scribe operations.",
      extendedDescription: "This role manages virtual scribe services, ensuring accurate medical documentation and efficient operations. The position requires strong medical knowledge, quality management skills, and the ability to maintain high standards in medical documentation services."
    },
    {
      id: 23,
      name: "zxczxc",
      position: "Assistant Manager: Accounting and Logistics",
      image: "/images/team/nereus-figuracion.jpg",
      description: "Supports accounting operations and logistics coordination. Assists in financial management and ensures smooth operational workflows.",
      extendedDescription: "This role supports both accounting operations and logistics coordination, ensuring efficient financial management and smooth operational workflows. The position requires strong organizational skills, attention to detail, and the ability to support complex operational processes."
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
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
            {employees.map((employee) => (
              <div 
                key={employee.id}
                className="bg-white rounded-lg shadow-md p-4 text-center hover:shadow-lg transition-shadow cursor-pointer transform hover:scale-105 transition-transform"
                onClick={() => openModal(employee)}
              >
                <div className="w-full aspect-square mb-4 overflow-hidden bg-gray-200 rounded-lg">
                  <img 
                    src={employee.image} 
                    alt={employee.name}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.target.style.display = 'none';
                      e.target.nextSibling.style.display = 'flex';
                    }}
                  />
                  <div className="w-full h-full flex items-center justify-center text-gray-500 text-sm" style={{display: 'none'}}>
                    Photo Coming Soon
                  </div>
                </div>
                <h3 className="font-bold text-gray-800 text-base mb-1">{employee.name}</h3>
                <p className="text-gray-600 text-sm mb-3">{employee.position}</p>
                <div className="text-left text-xs text-gray-500 bg-gray-50 p-3 rounded">
                  <p className="leading-relaxed">
                    {employee.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Employee Modal */}
      {isModalOpen && selectedEmployee && (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4">
          <div className="bg-gray-800/90 backdrop-blur-md rounded-lg max-w-4xl w-[90vw] max-h-[90vh] overflow-y-auto border border-gray-600 shadow-2xl">
            <div className="p-8">
              {/* Modal Header */}
              <div className="flex justify-between items-start mb-8">
                <h2 className="text-3xl font-bold text-white drop-shadow-lg">{selectedEmployee.name}</h2>
                <button 
                  onClick={closeModal}
                  className="text-white hover:text-gray-300 text-3xl font-bold drop-shadow-lg"
                >
                  ×
                </button>
              </div>

              {/* Employee Image */}
              <div className="w-64 h-64 mx-auto mb-8 overflow-hidden bg-gray-700 rounded-lg border border-gray-600">
                <img 
                  src={selectedEmployee.image} 
                  alt={selectedEmployee.name}
                  className="w-full h-full object-cover"
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

              {/* Close Button */}
              <div className="mt-10 text-center">
                <button 
                  onClick={closeModal}
                  className="bg-gray-700 hover:bg-gray-600 text-white px-8 py-3 rounded-lg transition-colors text-lg font-semibold border border-gray-600"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
      
      <Footer />
    </>
  );
}
