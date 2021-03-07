import jobs from "../../data/jobs";
import _ from "underscore";

const sortArray = (array, sortBy, sortOrder) => {
  array.forEach((element) => {
    if (sortOrder === "asc") {
      element.items = _.sortBy(element.items, sortBy);
    } else {
      element.items = _.sortBy(element.items, sortBy).reverse();
    }
  });
  return array;
};
export default async (req, res) => {
  res.statusCode = 200;
  const queryParams = req.body;
  let filteredJobs = jobs;

  if (queryParams?.search) {
    filteredJobs = filteredJobs.filter((item) =>
      item.name.toLowerCase().includes(queryParams?.search.toLowerCase())
    );
  }

  if (queryParams?.sortBy?.location) {
    filteredJobs = sortArray(
      filteredJobs,
      "location",
      queryParams?.sortBy?.location
    );
  }

  if (queryParams?.sortBy?.role) {
    filteredJobs = sortArray(
      filteredJobs,
      "required_credentials",
      queryParams?.sortBy?.role
    );
  }

  if (queryParams?.sortBy?.department) {
    filteredJobs = sortArray(
      filteredJobs,
      "department",
      queryParams?.sortBy?.department
    );
  }

  if (queryParams?.sortBy?.education) {
    filteredJobs = sortArray(
      filteredJobs,
      "required_skills",
      queryParams?.sortBy?.education
    );
  }

  if (queryParams?.sortBy?.experience) {
    filteredJobs = sortArray(
      filteredJobs,
      "experience",
      queryParams?.sortBy?.experience
    );
  }
  // @todo: implement filters and search
  // @todo: implement automated tests

  // this timeout emulates unstable network connection, do not remove this one
  // you need to figure out how to guarantee that client side will render
  // correct results even if server-side can't finish replies in the right order
  // await new Promise((resolve) => setTimeout(resolve, 1000 * Math.random()));

  res.json({ jobs: filteredJobs });
};
