/* eslint-disable no-unused-vars */
import { useSelector } from "react-redux";
import Card from "./Card/Card";

const Favorites = () => {
  const myFavorites = useSelector((state) => state.myFavorites);

  return (
    <div>
      {myFavorites.map(
        ({ id, name, status, species, gender, image, origin, onClose }) => {
          return (
            <Card
              key={id}
              id={id}
              name={name}
              status={status}
              species={species}
              gender={gender}
              image={image}
              origin={origin}
              // onClose={onClose}
            />
          );
        }
      )}
    </div>
  );
};

export default Favorites;
