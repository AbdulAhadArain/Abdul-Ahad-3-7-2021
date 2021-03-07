const Job = ({ job, index, openDetails }) => {
  return (
    <div className="job w-full overflow-hidden border-t">
      <input
        className="absolute opacity-0 "
        id={`${job.job_title}${index}`}
        type="checkbox"
        name="tabs"
      />{" "}
      <label
        className="block pt-5 pl-5 leading-normal cursor-pointer in-line flex-1 text-sm font-medium"
        htmlFor={`${job.job_title}${index}`}
      >
        {job.job_title}
      </label>
      <div className="block pl-5 pb-5 leading-normal cursor-pointer in-line flex-1 text-sm font-medium">
        {job.work_schedule} | ${job.salary_range[0]} - ${job.salary_range[1]} an
        hour | {job.city}
      </div>
      <div className="block pl-5 job-details overflow-hidden leading-normal">
        <div className="grid grid-cols-3 pb-5">
          <div className="text-md font-medium">Department:</div>
          <div>
            {job.department?.map((department, index) => (
              <span key={index}> {department},</span>
            ))}
          </div>
          <div>
            <button
              className="bg-white p-1 rounded-md text-blue-500 hover:text-gray-800 border-solid border-2 border-blue-500  inset-y-0"
              onClick={() => {
                openDetails();
              }}
            >
              Job details
            </button>
          </div>
          <div className="text-md font-medium">Hours / shifts:</div>
          <div>
            {job.hours} / {job.work_schedule}
          </div>
          <div>
            {" "}
            <button className="bg-white p-1 rounded-md text-blue-500 hover:text-gray-800 border-solid border-2 border-blue-500">
              Save job
            </button>
          </div>
          <div className="text-md font-medium">Summary</div>
          <div>{job.description}</div>
          <div></div>
        </div>
      </div>
    </div>
  );
};
export default Job;
