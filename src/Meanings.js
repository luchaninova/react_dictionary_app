import React from "react";
import Synonyms from "./Synonyms";

export default function Meanings(props) {
  return (
    <div className="Meanings">
      <h3>{props.meanings.partOfSpeech}</h3>
      {props.meanings.definitions.map(function (definition, index) {
        return (
          <div key={index}>
            <p>
              <strong>Definition</strong>
              {definition.definition}
              <strong>Example</strong>
              <br />
              <em>{definition.example}</em>
              <br />
            </p>
            <Synonyms synonyms={definition.synonyms} />
          </div>
        );
      })}
    </div>
  );
}
