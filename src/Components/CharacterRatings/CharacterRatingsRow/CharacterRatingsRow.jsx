/* eslint-disable react/prop-types */
import { Component } from "react";

export class CharacterRatingsRow extends Component {
  render() {
    const { character, isOdd } = this.props;
    return (
      <>
        <tr className={isOdd}>
          <td>{character.name}</td>
          <td>{character.skillset.join(", ")}</td>
          <td>{character.votes}</td>
        </tr>
      </>
    );
  }
}
