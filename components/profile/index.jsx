import { profileData } from "@/utils";
import Image from "next/image";
import CustomLink from "../customLink";

const Profile = () => {
  return (
    <div className="flex w-full phone:flex-col laptop:flex-row gap-5 p-3 items-center mt-5">
      <div className="flex laptop:flex-col items-center gap-10 phone:flex-row  text-gray-500 w-full">
        <div className="flex flex-col items-center gap-3">
          <h1 className="phone:text-sm font-bold laptop:text-xl profile-name">
            {profileData.name}
          </h1>
          <Image
            className="rounded-full phone:w-28 laptop:w-52 shadow"
            src={profileData.avatar}
            alt="avatar"
            width={200}
            height={200}
            draggable={false}
          />
        </div>
        <div className="flex flex-col gap-y-5">
          {profileData.profiles.map((each, index) => (
            <CustomLink key={index} {...each} />
          ))}
        </div>
      </div>
      <div>
        <div className="w-full">
          {profileData.profileDescriptions.map((each, index) => (
            <div key={index} className="mb-10">
              <h1 className="phone:text-base font-bold laptop:text-xl">
                {each.title}
              </h1>
              <p
                className="phone:text-sm laptop:text-base"
                dangerouslySetInnerHTML={{ __html: each.description }}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Profile;
