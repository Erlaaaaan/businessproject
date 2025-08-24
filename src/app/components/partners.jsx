import Image from "next/image";

export default function Partners() {
  const partners = [
    {
      id: 1,
      name: "ASTCASH Corporation",
      logo: "/next.svg", // Placeholder - replace with actual logo
      description: "Financial Services"
    },
    {
      id: 2,
      name: "INSPIRE NEXT GLOBAL INC.",
      logo: "/vercel.svg", // Placeholder - replace with actual logo
      description: "Global Innovation"
    },
    {
      id: 3,
      name: "iProsperity Realty and Development Corporation",
      logo: "/file.svg", // Placeholder - replace with actual logo
      description: "Real Estate Development"
    },
    {
      id: 4,
      name: "MEGAWORLD INTERNATIONAL",
      logo: "/window.svg", // Placeholder - replace with actual logo
      description: "International Development"
    },
    {
      id: 5,
      name: "ROBINSONS LAND CORPORATION",
      logo: "/globe.svg", // Placeholder - replace with actual logo
      description: "Land Development"
    },
    {
      id: 6,
      name: "SHANG PROPERTIES",
      logo: "/next.svg", // Placeholder - replace with actual logo
      description: "Property Management"
    },
    {
      id: 7,
      name: "SMDC",
      logo: "/vercel.svg", // Placeholder - replace with actual logo
      description: "Real Estate"
    },
    {
      id: 8,
      name: "UnionNetBank Financial Advisory Service",
      logo: "/file.svg", // Placeholder - replace with actual logo
      description: "Financial Advisory"
    },
    {
      id: 9,
      name: "VISTA & LIFES",
      logo: "/window.svg", // Placeholder - replace with actual logo
      description: "Lifestyle Solutions"
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Trusted Partners</h2>
                     <div className="w-24 h-1 bg-green-400 mx-auto"></div>
        </div>

        {/* Partners Grid */}
        <div className="grid grid-cols-3 md:grid-cols-5 lg:grid-cols-9 gap-8 items-center">
          {partners.map((partner) => (
            <div key={partner.id} className="flex flex-col items-center group">
              {/* Logo Container */}
              <div className="w-20 h-20 md:w-24 md:h-24 lg:w-28 lg:h-28 bg-white rounded-lg shadow-md border border-gray-200 flex items-center justify-center p-4 mb-4 group-hover:shadow-lg transition-all duration-300 transform group-hover:scale-105">
                <div className="w-full h-full bg-gradient-to-br from-gray-100 to-gray-200 rounded flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-xs md:text-sm font-bold text-gray-700 mb-1">
                      {partner.name.split(' ')[0]}
                    </div>
                    <div className="text-xs text-gray-500">
                      {partner.name.split(' ').slice(1).join(' ')}
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Partner Name */}
              <div className="text-center">
                <h3 className="text-xs md:text-sm font-semibold text-gray-800 mb-1 leading-tight">
                  {partner.name}
                </h3>
                <p className="text-xs text-gray-500 hidden lg:block">
                  {partner.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Partner Info */}
        <div className="mt-16 text-center">
          <p className="text-lg text-gray-600 mb-8 max-w-3xl mx-auto">
            We're proud to collaborate with industry leaders and innovative companies that share our commitment to excellence and growth.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-200">
              Become a Partner
            </button>
            <button className="border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-600 hover:text-white transition-colors duration-200">
              View All Partners
            </button>
          </div>
        </div>

        {/* Partner Categories */}
        <div className="mt-20">
          <h3 className="text-2xl font-bold text-gray-900 text-center mb-12">Partnership Categories</h3>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6 bg-gray-50 rounded-lg">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h4 className="text-lg font-semibold text-gray-900 mb-2">Real Estate</h4>
              <p className="text-gray-600">Leading property developers and real estate companies</p>
            </div>
            
            <div className="text-center p-6 bg-gray-50 rounded-lg">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                </svg>
              </div>
              <h4 className="text-lg font-semibold text-gray-900 mb-2">Financial Services</h4>
              <p className="text-gray-600">Trusted financial institutions and advisory services</p>
            </div>
            
            <div className="text-center p-6 bg-gray-50 rounded-lg">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h4 className="text-lg font-semibold text-gray-900 mb-2">Innovation</h4>
              <p className="text-gray-600">Cutting-edge technology and global innovation leaders</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
