import TimeLine from "../time-line";

const Experience = ({ title, description, data }) => {
  return (
    <div className="mt-10">
      <div className="flex laptop:justify-around laptop:pl-5 laptop:flex-row phone:flex-col">
        <div className="w-80">
          <h1 className="phone:text-lg font-bold laptop:text-2xl">{title}</h1>
          <p className="phone:text-sm laptop:text-base">{description}</p>
        </div>
        <TimeLine data={data} />
      </div>
    </div>
  );
};

export default Experience;
