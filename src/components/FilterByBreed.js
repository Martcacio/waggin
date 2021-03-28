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
        <option value="American Staffordshire">American Staffordshire</option>
        <option value="Border Collie"> Border Collie</option>
        <option value="Cocker Spaniel"> Cocker Spaniel</option>
        <option value="Fox Terrier"> Fox Terrier</option>
        <option value="Husky"> Husky</option>
        <option value="Mastín"> Mastín </option>
        <option value="Mix">Mix</option>
        <option value="Pastor Alemán">Pastor Alemán </option>
        <option value="Pitbull"> Pitbull </option>
        <option value="Rotweiller"> Rotweiller</option>
      </select>
    </form>
  );
};

export default FilterByBreed;
