import member_image from '../assets/member_image.png'

export default function TeamMembers() {
  return (
    <div className="w-[100%]">
      <div className="flex gap-2 team-member-row">
        {Array.from({ length: 16 }).map((_, index) => (
          <div key={index} className="teammember-card w-48 shrink-0">
            <img src={member_image} className="" />
            <div className="flex flex-col text-black bg-white ">
              <div className="text-4xl">Team Member</div>
              <div className="text-3xl">Team Role</div>
            </div>
          </div>
        ))}
      </div>
      <div className="flex gap-2 team-member-row">
        {Array.from({ length: 16 }).map((_, index) => (
          <div key={index} className="teammember-card w-48 shrink-0">
            <img src={member_image} className="" />
            <div className="flex flex-col text-black bg-white ">
              <div className="text-4xl">Team Member</div>
              <div className="text-3xl">Team Role</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
