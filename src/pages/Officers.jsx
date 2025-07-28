import React from 'react'
import OfficerCard from '../components/OfficerCard'

export default function Officers() {

  const officerData = [
  {
    "name": "Gourav",
    "position": "Founder",
    "year": "Sophomore",
    "majors": ["Computer Science", "OMBA"],
    "linkedinUrl": null,
    "photo": null
  },
  {
    "name": "Greg",
    "position": "Finance",
    "year": "Sophomore",
    "majors": ["Computer Science"],
    "linkedinUrl": null,
    "photo": null
  },
  {
    "name": "Brennen",
    "position": "Marketing",
    "year": "Sophomore",
    "majors": ["Computer Science", "Math", "Computational Finance"],
    "linkedinUrl": null,
    "photo": null
  },
  {
    "name": "Daniel",
    "position": "Tech",
    "year": "Junior",
    "majors": ["Computer Science", "Math"],
    "linkedinUrl": null,
    "photo": null
  },
  {
    "name": "Sara",
    "position": "Executive Vice President",
    "year": null,
    "majors": [],
    "linkedinUrl": null,
    "photo": null
  },
  {
    "name": "Srivarshini",
    "position": "Chief Executive Officer",
    "year": null,
    "majors": [],
    "linkedinUrl": null,
    "photo": null
  }
]

return (
<div
  style={{ backgroundColor: "#00204D" }}
  className="min-h-screen flex items-center justify-center py-6 sm:py-8 md:py-10"
>
  <div className="bg-white container mx-auto px-4 sm:px-8 md:px-12 lg:px-20 py-6 sm:py-8 md:py-10 lg:py-14 relative">

        <img
          src="src/assets/gold-curve.svg"
          alt="Gold curve background"
          className="absolute top-0 left-0 w-full h-auto pointer-events-none"
          aria-hidden="true"
    />

    {/* Title */}
      <div className=" text-center mb-12 relative">
        <h1 className="text-4xl md:text-5xl font-bold text-black mb-4">
          MEET THE TEAM
        </h1>
      </div>

    <img
          src="src/assets/gold-curve.svg"
          alt="Gold curve background"
          className="absolute bottom-0 left-0 w-full h-auto pointer-events-none"
          aria-hidden="true"
    />

    {/* Cards */}
    <div className="grid sm:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
      {officerData.map((officer) => (
        <OfficerCard key={officer.name} name={officer.name} position={officer.position} year={officer.year} majors={officer.majors} linkedinUrl={officer.linkedinUrl} photo={officer.photo} />
      ))}
    </div>

  </div>
</div>

)
}
