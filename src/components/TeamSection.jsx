// components/SectionTeam.js

const team = [
  { role: "Founder", name: "Miles", image: "/images/1.jpg" },
  { role: "Dev", name: "Meguel", image: "/images/2.jpg" },
  { role: "Marketing", name: "Frank", image: "/images/3.jpg" },
  { role: "Developer", name: "Carter", image: "/images/4.jpg" },
];

export default function SectionTeam() {
  return (
    <section id="team" className="text-white py-20">
      <h2 className="text-7xl text-center font-bold">Our Team</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-6">
        {team.map((member, index) => (
          <div key={index} className="text-center border space-y-4 p-4 rounded">
            <p className="text-2xl">{member.name}</p>
            <img
              src={member.image}
              width={80}
              height={80}
              className="rounded-full w-full"
              alt={member.name}
            />
            <h3 className="mt-2 font-semibold">{member.role}</h3>
          </div>
        ))}
      </div>
    </section>
  );
}
