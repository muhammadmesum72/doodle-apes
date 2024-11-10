// components/SectionTeam.js

import GradientHeading from "./GradientHeading";

const team = [
  { role: "Founder", name: "Miles", image: "/images/1.jpg" },
  { role: "Dev", name: "Meguel", image: "/images/2.jpg" },
  { role: "Marketing", name: "Frank", image: "/images/3.jpg" },
  { role: "Developer", name: "Carter", image: "/images/4.jpg" },
];

export default function SectionTeam() {
  return (
    <section id="team" className="text-white py-[80px] sm:py-[100px] md:py-[150px]">
      <div className="text-center mb-8">
        <GradientHeading>Team</GradientHeading>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 mt-6">
        {team.map((member, index) => (
          <div
            key={index}
            className="relative z-50 overflow-hidden bg-gradient-to-r bg-blend-darken from-[#1E58FC]/20 via-[#A427EB]/20 via-[#D914E4]/20 via-[#E10FA3]/20 to-[#F10419]/20 rounded-[50px]"
          >
            <img
              src={member.image}
              width={80}
              height={80}
              className="rounded-[50px] w-full z-40"
              alt={member.name}
            />
            <div className="bg-[#2D1039]/20 h-full w-full absolute top-0 -z-10"></div>
            <div className="text-center py-[20px] z-0">
              <p className="text-[20px] sm:text-[24px] md:text-[32px] font-bold">{member.name}</p>
              <h3 className="text-[14px] sm:text-[16px] md:text-[18px] font-semibold">{member.role}</h3>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
