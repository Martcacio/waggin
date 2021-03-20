import FilterByBreed from "./FilterByBreed";
import FilterByCommunity from "./FilterByCommunity";
import "../stylesheets/filters/Filter.scss";

const Filter = (props) => {
  const handleReset = () => {
    props.handleReset();
  };
  const handleChange = () => {
    props.handleChange();
  };

  return (
    <div className="filter-container">
      <FilterByBreed
        handleFilter={props.handleFilter}
        breed={props.breed}
        handleReset={props.handleReset}
        handleChange
      />
      <FilterByCommunity
        handleFilter={props.handleFilter}
        community={props.community}
        handleReset={props.handleReset}
      />
      <span onClick={handleReset} className="reset">
        <i class="fa fa-repeat" aria-hidden="true"></i>
      </span>
    </div>
  );
};

export default Filter;
