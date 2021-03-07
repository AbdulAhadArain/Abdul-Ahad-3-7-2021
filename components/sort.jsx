const Sort = ({ sortName, queryParams, setQueryParams }) => {
  return (
    <a
      href="#"
      className="text-black px-3 py-2 rounded-md text-sm font-medium"
      onClick={() => {
        queryParams.sortBy[sortName.toLowerCase()] = queryParams.sortBy[
          sortName.toLowerCase()
        ]
          ? queryParams.sortBy[sortName.toLowerCase()] === "asc"
            ? "desc"
            : ""
          : "asc";
        setQueryParams({ ...queryParams });
      }}
    >
      {sortName}
    </a>
  );
};
export default Sort;
