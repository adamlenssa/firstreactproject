/* eslint-disable react/prop-types */
import { Component } from "react";

export class DataTable extends Component {
  render() {
    const { character, isOdd } = this.props;
    return (
      <>
        <tr className={isOdd}>
          <td>{character.name}</td>
          <td>
            {character.skillset.map((skill) => {
              const result =
                character.skillset.indexOf(skill) == 0
                  ? `${skill},`
                  : ` ${skill}`;
              return result;
            })}
          </td>
          <td>{character.votes}</td>
        </tr>
      </>
    );
  }
}
