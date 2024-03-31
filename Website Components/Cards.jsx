/* eslint-disable react/prop-types */
import { CharacterCard } from "../src/Building Components/CharecterCard";
import "../css/character-cards.css";

export function Cards({ data }) {
  return (
    <section id="character-cards">
      {data.map((character) => (
        <CharacterCard character={character} key={character.name} />
      ))}
    </section>
  );
}
