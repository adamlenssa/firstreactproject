/* eslint-disable react/prop-types */
export function CharacterCard({ character }) {
  return (
    <div className="card">
      <div className="card-titles">
        <h3>{character.name}</h3>
        <h4>{character.nickName}</h4>
      </div>
      <img src={character.imageUrl} alt="" />
      <p>{character.background}</p>
    </div>
  );
}