/* eslint-disable react/prop-types */
import { DataTable } from "../src/Building Components/datatable";

import "../css/character-ratings.css";

function Table({ data }) {
  function comparator(a, b) {
    if (a.votes > b.votes) return -1;
    if (a.votes < b.votes) return 1;
    return 0;
  }
  const filtered = data.filter((character) => character.votes > 89);
  filtered.sort(comparator);
  return (
    <section id="character-ratings">
      <h4>Character Ratings</h4>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Skill Set</th>
            <th>Votes</th>
          </tr>
        </thead>
        <tbody>
          {filtered.map((character, i) => {
            const realIndex = i + 1;
            const isOdd = realIndex % 2 == 0 ? "light" : "dark";
            return (
              <DataTable
                character={character}
                key={character.name}
                isOdd={isOdd}
              />
            );
          })}
        </tbody>
      </table>
    </section>
  );
}

export default Table;
