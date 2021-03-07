import { useState, useEffect } from "react";
import FilterCard from "../../components/filterCard";
import axios from "axios";
import SearchBar from "../../components/searchBar";
import Company from "../../components/company";
import Modal from "../../components/modal";
import Sort from "../../components/sort";
const initQueryParams = {
  search: "",
  sortBy: {
    location: "",
    role: "",
    department: "",
    education: "",
    experience: "",
  },
};
const Home = () => {
  const [filters, setFilters] = useState();
  const [jobs, setJobs] = useState([]);
  const [queryParams, setQueryParams] = useState(initQueryParams);
  const [showJobDetailsDialoge, setShowJobDetailsDialoge] = useState(false);
  useEffect(() => {
    axios.get("/api/filters").then((response) => {
      setFilters(response.data);
    });
    axios.post("/api/jobs", queryParams).then((response) => {
      setJobs([...response.data.jobs]);
    });
  }, []);

  useEffect(() => {
    axios.post("/api/jobs", queryParams).then((response) => {
      setJobs([...response.data.jobs]);
    });
  }, [queryParams]);

  console.log(jobs);
  return (
    <>
      <div className="grid grid-cols-12 gap-4 bg-gray-200 px-5 py-5">
        <div className="col-span-12">
          <SearchBar
            queryParams={queryParams}
            setQueryParams={setQueryParams}
          />
        </div>
        <div className="lg:col-span-2 md:col-span-2 col-span-12 rounded-md hidden sm:block">
          <div className="grid grid-cols-1 gap-4">
            <FilterCard filters={filters?.job_type} title={"JOB TYPE"} />
            <FilterCard filters={filters?.department} title={"DEPARTMENT"} />
            <FilterCard
              filters={filters?.work_schedule}
              title={"WORK SCHEDULE"}
            />
            <FilterCard filters={filters?.experience} title={"EXPERIENCE"} />
          </div>
        </div>
        <div className="lg:col-span-10 md:col-span-10 col-span-12 rounded-md bg-white">
          <div className="grid grid-cols-2">
            <div className="col-span-1 pl-5 pt-5 hidden sm:block">
              <b>
                {jobs?.reduce(function (a, b) {
                  return a + b["total_jobs_in_hospital"];
                }, 0)}
              </b>{" "}
              job postings
            </div>
            <div className="col-span-1 pt-5 flex space-x-4 justify-center hidden sm:block">
              <a
                href="#"
                className="text-gray-300 px-3 py-2 rounded-md text-sm font-medium"
              >
                Sort By
              </a>
              <Sort
                sortName={"Location"}
                queryParams={queryParams}
                setQueryParams={setQueryParams}
              />
              <Sort
                sortName={"Role"}
                queryParams={queryParams}
                setQueryParams={setQueryParams}
              />
              <Sort
                sortName={"Department"}
                queryParams={queryParams}
                setQueryParams={setQueryParams}
              />
              <Sort
                sortName={"Education"}
                queryParams={queryParams}
                setQueryParams={setQueryParams}
              />
              <Sort
                sortName={"Experience"}
                queryParams={queryParams}
                setQueryParams={setQueryParams}
              />
            </div>
            {jobs?.map((company, index) => (
              <div className="col-span-2" key={index}>
                <Company
                  company={company}
                  openDetails={() => {
                    setShowJobDetailsDialoge(true);
                  }}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
      {showJobDetailsDialoge && (
        <Modal
          onHide={() => {
            setShowJobDetailsDialoge(false);
          }}
          departments={filters?.department}
        />
      )}
    </>
  );
};
export default Home;
