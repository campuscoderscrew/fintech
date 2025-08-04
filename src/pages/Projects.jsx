import { useState } from 'react';

export default function Projects() {
  const [currentProject, setCurrentProject] = useState(0);
  const [projectType, setProjectType] = useState('current'); // 'current' or 'past'
  
  const currentProjects = [
    {
      title: "Stock Predictor",
      description: "This is a Python-based app that predicts S&P 500 performances. It uses a variety of ML technologies, including PyTorch and scikit-learn, to be as accurate as possible.",
      visualization: "Chart Visualization",
      technologies: [
        { name: "Python", color: "bg-blue-500" },
        { name: "PyTorch", color: "bg-orange-500" },
        { name: "MongoDB", color: "bg-green-500" },
        { name: "React", color: "bg-blue-400" },
        { name: "Core ML", color: "bg-purple-500" },
        { name: "JS", color: "bg-yellow-500" }
      ],
      contributors: ["Jane", "Joe", "Tommy", "Maria"]
    },
    {
      title: "DeFi Dashboard",
      description: "A comprehensive dashboard for tracking cryptocurrency assets and decentralized finance protocols. Features real-time price tracking, portfolio management, and yield farming analytics.",
      visualization: "Portfolio Analytics",
      technologies: [
        { name: "React", color: "bg-blue-400" },
        { name: "Web3.js", color: "bg-orange-400" },
        { name: "Node.js", color: "bg-green-600" },
        { name: "Solidity", color: "bg-gray-700" },
        { name: "GraphQL", color: "bg-pink-500" },
        { name: "TypeScript", color: "bg-blue-600" }
      ],
      contributors: ["Alex", "Sarah", "Mike", "Lisa"]
    },
    {
      title: "Trading Bot",
      description: "An automated cryptocurrency trading bot that uses machine learning algorithms to analyze market trends and execute trades. Supports multiple exchanges and implements risk management strategies.",
      visualization: "Trading Metrics",
      technologies: [
        { name: "Python", color: "bg-blue-500" },
        { name: "TensorFlow", color: "bg-orange-600" },
        { name: "Redis", color: "bg-red-500" },
        { name: "Docker", color: "bg-blue-600" },
        { name: "PostgreSQL", color: "bg-blue-700" },
        { name: "FastAPI", color: "bg-green-500" }
      ],
      contributors: ["David", "Emma", "Ryan", "Sophie"]
    },
    {
      title: "Blockchain Wallet",
      description: "A secure multi-currency blockchain wallet with advanced security features including multi-signature support, hardware wallet integration, and decentralized identity management.",
      visualization: "Security Dashboard",
      technologies: [
        { name: "React Native", color: "bg-blue-400" },
        { name: "Ethereum", color: "bg-gray-600" },
        { name: "Rust", color: "bg-orange-700" },
        { name: "IPFS", color: "bg-teal-500" },
        { name: "Web3", color: "bg-purple-600" },
        { name: "Swift", color: "bg-orange-500" }
      ],
      contributors: ["Chris", "Anna", "Kevin", "Maya"]
    }
  ];
  
  const pastProjects = [
    {
      title: "Payment Gateway",
      description: "A secure payment processing system that handled cryptocurrency and traditional payments. Successfully processed over $100K in transactions before being acquired by a larger fintech company.",
      visualization: "Transaction Analytics",
      technologies: [
        { name: "Node.js", color: "bg-green-600" },
        { name: "Stripe API", color: "bg-blue-500" },
        { name: "MongoDB", color: "bg-green-500" },
        { name: "Vue.js", color: "bg-green-400" },
        { name: "Docker", color: "bg-blue-600" },
        { name: "AWS", color: "bg-orange-500" }
      ],
      contributors: ["Marcus", "Elena", "James", "Sophia"]
    },
    {
      title: "Robo Advisor",
      description: "An automated investment advisory platform that provided personalized portfolio recommendations based on risk tolerance and financial goals. Managed over $50K in student investments.",
      visualization: "Portfolio Allocation",
      technologies: [
        { name: "Python", color: "bg-blue-500" },
        { name: "Django", color: "bg-green-700" },
        { name: "Pandas", color: "bg-blue-600" },
        { name: "Chart.js", color: "bg-pink-400" },
        { name: "PostgreSQL", color: "bg-blue-700" },
        { name: "Heroku", color: "bg-purple-600" }
      ],
      contributors: ["Rachel", "Daniel", "Amy", "Lucas"]
    },
    {
      title: "Expense Tracker",
      description: "A comprehensive personal finance management app that helped students track expenses, set budgets, and achieve financial goals. Featured AI-powered spending insights and category recommendations.",
      visualization: "Spending Insights",
      technologies: [
        { name: "React Native", color: "bg-blue-400" },
        { name: "Firebase", color: "bg-yellow-500" },
        { name: "TensorFlow", color: "bg-orange-600" },
        { name: "Plaid API", color: "bg-blue-700" },
        { name: "Redux", color: "bg-purple-500" },
        { name: "Expo", color: "bg-gray-700" }
      ],
      contributors: ["Oliver", "Grace", "Nathan", "Zoe"]
    }
  ];
  
  const projects = projectType === 'current' ? currentProjects : pastProjects;
  
  const nextProject = () => {
    setCurrentProject((prev) => (prev + 1) % projects.length);
  };
  
  const prevProject = () => {
    setCurrentProject((prev) => (prev - 1 + projects.length) % projects.length);
  };
  
  const toggleProjectType = (type) => {
    setProjectType(type);
    setCurrentProject(0); // Reset to first project when switching types
  };
  
  const currentProjectData = projects[currentProject];
  
  return (
    <div className="min-h-screen bg-blue-900 -m-6 p-6">
      <div className="bg-white mx-auto max-w-7xl min-h-[calc(100vh-4rem)] p-12 relative">
        <h1 className="text-4xl font-bold text-gray-800 text-left mb-8">Projects</h1>
        
        {/* Left Navigation Arrow */}
        <button 
          onClick={prevProject}
          className="absolute left-8 top-1/2 transform -translate-y-1/2 bg-yellow-500 hover:bg-yellow-600 text-white p-3 rounded-full shadow-lg transition-colors z-10"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        
        {/* Right Navigation Arrow */}
        <button 
          onClick={nextProject}
          className="absolute right-8 top-1/2 transform -translate-y-1/2 bg-yellow-500 hover:bg-yellow-600 text-white p-3 rounded-full shadow-lg transition-colors z-10"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M9 5l7 7-7 7" />
          </svg>
        </button>
        
        <div className="bg-gray-200 rounded-lg p-8 mx-auto max-w-4xl shadow-2xl transition-all duration-300">
          {/* Project Title - Center */}
          <h2 className="text-2xl font-semibold text-gray-800 text-center mb-8">{currentProjectData.title}</h2>
          
          {/* Main Content Grid - Description Left, Stack Right */}
          <div className="grid grid-cols-2 gap-8 mb-8">
            {/* Left Side - Project Description */}
            <div>
              <h3 className="text-xl font-semibold text-gray-700 mb-4">Project Description</h3>
              <p className="text-gray-600 leading-relaxed">
                {currentProjectData.description}
              </p>
            </div>
            
            {/* Right Side - Project Visualization/Stack */}
            <div>
              <h3 className="text-xl font-semibold text-gray-700 mb-4">Project Visualization/Stack</h3>
              <div className="bg-white rounded-lg p-4 mb-4">
                <div className="w-full h-32 bg-gray-100 rounded border-2 border-gray-300 flex items-center justify-center">
                  <span className="text-gray-400">{currentProjectData.visualization}</span>
                </div>
              </div>
              <div className="grid grid-cols-3 gap-2">
                {currentProjectData.technologies.map((tech, index) => (
                  <div key={index} className={`${tech.color} text-white text-xs px-2 py-1 rounded text-center`}>
                    {tech.name}
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          {/* Bottom - Contributors */}
          <div className="text-center">
            <h3 className="text-xl font-semibold text-gray-700 mb-6">Contributors</h3>
            <div className="flex justify-center space-x-8">
              {currentProjectData.contributors.map((contributor, index) => {
                // Generate different gradient backgrounds for variety
                const gradients = [
                  'bg-gradient-to-br from-blue-400 to-blue-600',
                  'bg-gradient-to-br from-purple-400 to-purple-600', 
                  'bg-gradient-to-br from-green-400 to-green-600',
                  'bg-gradient-to-br from-pink-400 to-pink-600',
                  'bg-gradient-to-br from-indigo-400 to-indigo-600',
                  'bg-gradient-to-br from-red-400 to-red-600',
                  'bg-gradient-to-br from-yellow-400 to-orange-500',
                  'bg-gradient-to-br from-teal-400 to-teal-600'
                ];
                const gradientClass = gradients[index % gradients.length];
                const initials = contributor.split(' ').map(name => name[0]).join('').toUpperCase();
                
                return (
                  <div key={index} className="text-center">
                    <div className={`w-16 h-16 ${gradientClass} rounded-full mx-auto mb-2 flex items-center justify-center text-white font-bold text-lg shadow-lg`}>
                      {initials}
                    </div>
                    <p className="text-sm font-medium text-gray-700">{contributor}</p>
                  <div className="flex justify-center space-x-2 mt-1">
                    {/* LinkedIn */}
                    <a href="#" className="text-blue-600 hover:text-blue-800 transition-colors">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                      </svg>
                    </a>
                    {/* Instagram */}
                    <a href="#" className="text-pink-500 hover:text-pink-700 transition-colors">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                      </svg>
                    </a>
                    {/* GitHub */}
                    <a href="#" className="text-gray-800 hover:text-gray-600 transition-colors">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                      </svg>
                    </a>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          
          {/* Project Indicator Dots */}
          <div className="flex justify-center space-x-2 mt-8">
            {projects.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentProject(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === currentProject ? 'bg-yellow-500' : 'bg-gray-400'
                }`}
              />
            ))}
          </div>
        </div>
        
        {/* Project Type Toggle */}
        <div className="flex justify-center mt-8">
          <div className="bg-gray-100 rounded-lg p-1 flex">
            <button
              onClick={() => toggleProjectType('current')}
              className={`px-6 py-2 rounded-md font-medium transition-all duration-200 ${
                projectType === 'current'
                  ? 'bg-yellow-500 text-white shadow-md'
                  : 'text-gray-600 hover:text-gray-800'
              }`}
            >
              Current Projects
            </button>
            <button
              onClick={() => toggleProjectType('past')}
              className={`px-6 py-2 rounded-md font-medium transition-all duration-200 ${
                projectType === 'past'
                  ? 'bg-yellow-500 text-white shadow-md'
                  : 'text-gray-600 hover:text-gray-800'
              }`}
            >
              Past Projects
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
