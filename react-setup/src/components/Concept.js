const Concept = ({ concepts }) => {
  return (
    <ul id="concepts">
      {concepts.map((concept) => {
        return (
          <li className="concept">
            <img src={concept.image} alt="TODO: TITLE" />
            <h2>{concept.title}</h2>
            <p>{concept.description}</p>
          </li>
        );
      })}
    </ul>
  );
};

export default Concept;
