import "../stylesheets/filters/FilterByCommunity.scss";
const FilterByCommunity = (props) => {
  const handleChange = (ev) => {
    props.handleFilter({ key: "community", value: ev.target.value });
  };
  return (
    <form className="community">
      <label className="community__name" htmlFor="name">
        Comunidad
      </label>
      <select
        className="community__select"
        type="text"
        name="community"
        value={props.community}
        id="community"
        onChange={handleChange}
      >
        <option value="all">Todas</option>
        <option value="Andalucia">Andalucía</option>
        <option value="Aragon">Aragón</option>
        <option value="Asturias">Asturias</option>
        <option value="Baleares">Baleares</option>
        <option value="Canarias">Canarias</option>
        <option value="Cantabria">Cantabria</option>
        <option value="Castilla y leon">Castilla y león</option>
        <option value="Castilla la mancha">Castilla la mancha</option>
        <option value="Cataluña">Cataluña</option>
        <option value="Valencia">Valencia</option>
        <option value="Extremadura">Extremadura</option>
        <option value="Galicia">Galicia</option>
        <option value="Madrid">Madrid</option>
        <option value="Murcia">Murcia</option>
        <option value="Navarra">Navarra</option>
        <option value="País Vasco">País Vasco</option>
        <option value="La rioja">La rioja</option>
        <option value="Ceuta">Ceuta</option>
        <option value="Melilla">Melilla</option>
      </select>
    </form>
  );
};

export default FilterByCommunity;
