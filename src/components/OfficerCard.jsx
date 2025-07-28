import React from 'react'

export default function OfficerCard({name, position, year, majors, linkedinUrl, photo}) {
  return (
    <div className="bg-gray-300 border-5 border-yellow-400 p-10 relative w-auto flex items-center mb-5">
      {/* Profile Image */}
      <div className="w-24 h-24 sm:w-24 sm:h-24 lg:w-28 lg:h-28 rounded-full bg-yellow-400 overflow-hidden flex-shrink-0">
        <img 
          src={photo} 
          className="w-full h-full object-cover"
        />
      </div>

      <div className="ml-4 sm:ml-4 md:ml-6 lg:ml-6">

        {/* Position Title */}
      <p className="text-s text-gray-600 mb-1 uppercase tracking-wide">
        {position}
      </p>
      
      {/* Name */}
      <h2 className="text-xl sm:text-xl lg:text-2xl font-bold text-black mb-2 leading-tight">
        {name}
      </h2>
      
      {/* Description/Details */}
      <p className="text-sm text-gray-600 mb-6">
        Year: {year}
        <br />
        Majors: {majors.join(", ")}
      </p>
      </div>
      
      
      {/* LinkedIn Icon */}
<div className="absolute bottom-4 right-4">
  <a 
    href={linkedinUrl} 
  >
    <img 
      src="/linkedin.png" 
      alt="LinkedIn icon" 
      className="w-10 h-10 object-cover"
    />
  </a>
</div>
    </div>
  )
}