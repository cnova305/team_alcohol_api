const getPatrons = "SELECT * FROM patrons";
const getPatronById = "SELECT * FROM patrons WHERE id = $1";
const addPatron = "INSERT INTO patrons (name, weight, id) VALUES ($1, $2, $3)";
const deletePatron = "DELETE FROM patrons WHERE id = $1";

module.exports = {
  getPatrons,
  getPatronById,
  addPatron,
  deletePatron,
};
