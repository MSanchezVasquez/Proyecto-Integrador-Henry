/* eslint-disable react/prop-types */
import Card from "../Card/Card";

const Cards = ({ characters, onClose }) => {
  return (
    <div>
      {characters.map(
        ({ id, name, status, species, gender, origin, image }) => {
          return (
            <Card
              key={id}
              id={id}
              name={name}
              status={status}
              species={species}
              gender={gender}
              image={image}
              origin={origin.name}
              onClose={onClose}
            />
          );
        }
      )}
    </div>
  );
};

export default Cards;
