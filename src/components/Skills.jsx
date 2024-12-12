
function Skills() {
  const skills = [
    { name: "React", level: 90 },
    { name: "JavaScript", level: 85 },
    { name: "Tailwind CSS", level: 80 },
    { name: "Node.js", level: 75 },
    { name: "Python", level: 70 }
  ]

  return (
    <div className="min-h-screen container mx-auto px-4 py-16">
      <h2 className="section-title">My Skills</h2>
      <div className="grid md:grid-cols-2 gap-8">
        {skills.map((skill, index) => (
          <div key={index} className="mb-4">
            <div className="flex justify-between mb-2">
              <span className="text-gray-700">{skill.name}</span>
              <span className="text-gray-700">{skill.level}%</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2.5">
              <div 
                className="bg-blue-600 h-2.5 rounded-full" 
                style={{ width: `${skill.level}%` }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Skills