const axios = require("axios");

const getCharById = async (req, res) => {
  try {
    const { id } = req.params;
    const { data } = await axios.get(
      `https://rym2.up.railway.app/api/character/${id}?key=pi-hx-mantunez`
    );

    // if (!data.name) throw new Error('Not found!')

    const character = {
      id,
      name: data.name,
      species: data.species,
      origin: data.origin,
      image: data.image,
      gender: data.gender,
      status: data.status,
    };
    return character.name
      ? res.json(character)
      : res.status(404).send("Not found!");
  } catch (error) {
    res.status(500).send(error.message);
  }
};

module.exports = { getCharById };
