const Dog = (props) => {
  return (
    <>
      <img className="" src="" alt={"photo" + props.dogs.name} />
      <h4>{props.dogs.name}</h4>
      <p>{props.dogs.description}</p>
    </>
  );
};

export default Dog;
