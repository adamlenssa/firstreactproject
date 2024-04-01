/* eslint-disable react/prop-types */
export function CharacterCard({ person }) {
  return (
    <div className="card">
      <div className="card-titles">
        <h3>{person.name}</h3>
        {person.nickName && <h4>{person.nickName}</h4>}
      </div>
      <img src={person.imageUrl} alt="" />
      <p>{person.background}</p>
    </div>
  );
}
