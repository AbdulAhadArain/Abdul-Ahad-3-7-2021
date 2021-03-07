import Job from "./job";

const Company = ({ company, openDetails }) => {
  return (
    <div className="company w-full overflow-hidden ">
      <input
        className="absolute opacity-0 "
        id={`${company.name}`}
        type="checkbox"
        name="tabs"
      />{" "}
      <label
        className="block p-5 leading-normal cursor-pointer in-line flex-1"
        htmlFor={`${company.name}`}
      >
        <div
          data-initials={`${company.name
            .charAt(0)
            .toUpperCase()}${company.name.charAt(1).toUpperCase()}`}
        >
          {company.total_jobs_in_hospital} job for {company.name}
        </div>
      </label>
      <div className="company-jobs overflow-hidden leading-normal">
        {company.items?.map((job, index) => (
          <div key={index}>
            <Job job={job} index={index} openDetails={openDetails} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Company;
