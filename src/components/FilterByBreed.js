import "../stylesheets/filters/FilterByBreed.scss";
const FilterByBreed = (props) => {
  const handleChange = (ev) => {
    props.handleFilter({ key: "breed", value: ev.target.value });
  };
  return (
    <form className="">
      <label className="breed__name" htmlFor="name">
        Filtrar por raza
      </label>
      <select
        className="breed__select"
        type="text"
        name="breed"
        value={props.breed}
        id="breed"
        onChange={handleChange}
      >
        <option value="all"> Cualquiera </option>
        <option value="Mix">Mix</option>
        <option value="Pitbull"> Pitbull </option>
        <option value="Pastor Alemán">Pastor Alemán </option>
        <option value="Mastín"> Mastín </option>
      </select>
    </form>
  );
};

export default FilterByBreed;
