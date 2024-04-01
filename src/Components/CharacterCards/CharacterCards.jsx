/* eslint-disable react/prop-types */
import { CharacterCard } from "./CharacterCard/CharacterCard";
import "./character-cards.css";

export function CharacterCards({ data }) {
  return (
    <section id="character-cards">
      {data.map((character) => (
        <CharacterCard person={character} key={character.name} />
      ))}
    </section>
  );
}
