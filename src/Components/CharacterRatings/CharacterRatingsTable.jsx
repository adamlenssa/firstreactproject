/* eslint-disable react/prop-types */
import { CharacterRatingsRow } from "./CharacterRatingsRow/CharacterRatingsRow";
import { comparator } from "../../Utilities/helpers";
import "./character-ratings.css";

function CharacterRatingsTable({ data }) {
  const filtered = data.sort(comparator).slice(0, 5);
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
          {filtered.map((character, index) => {
            const isOdd = index % 2 == 0 ? "dark" : "light";
            return (
              <CharacterRatingsRow
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

export default CharacterRatingsTable;
