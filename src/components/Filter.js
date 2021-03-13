import FilterByBreed from "./FilterByBreed";
import FilterByCommunity from "./FilterByCommunity";
import "../stylesheets/filters/Filter.scss";

const Filter = (props) => {
  const handleReset = () => {
    props.handleReset();
  };
  return (
    <div className="filter-container">
      <FilterByBreed
        handleFilter={props.handleFilter}
        breed={props.breed}
        handleReset={props.handleReset}
      />
      <FilterByCommunity
        handleFilter={props.handleFilter}
        community={props.community}
        handleReset={props.handleReset}
      />
      <span onClick={handleReset} className="reset icon fas fa-times"></span>
    </div>
  );
};

export default Filter;
