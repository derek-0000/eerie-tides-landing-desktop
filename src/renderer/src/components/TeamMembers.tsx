import { teamMembers } from '@renderer/constants/members'

export default function TeamMembers() { 
  return (
    <div className="w-[100%]">
      <div className="flex gap-2 team-member-row">
        {teamMembers.map((member, index) => (
            <div key={index} className="teammember-card w-48 shrink-0">
            <img src={member.image} className="" alt={member.name}/>
            <div className="flex flex-col text-black bg-white ">
              <div className="text-4xl">{member.name}</div>
              <div className="text-3xl">{member.position}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
