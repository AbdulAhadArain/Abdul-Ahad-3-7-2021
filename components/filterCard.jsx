const FilterCard = ({ filters, title }) => {
  return (
    <div className="bg-white border-2 border-gray-300 p-4 rounded-md tracking-wide shadow-lg">
      <div id="header" className="flex items-center">
        <div id="header-text" className="leading-5 sm">
          <h4 className="text-xl font-semibold">{title}</h4>
          {filters?.map((item, index) => (
            <div key={index}>
              <a href="#" className="text-black rounded-md text-sm font-small">
                {item.key}{" "}
                <span className="text-gray-400">{item.doc_count}</span>
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default FilterCard;
