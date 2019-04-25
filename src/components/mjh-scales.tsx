import React from "react";
import styled from "styled-components";

const ScrollRelative = styled.div`
  overflow: scroll;
  position: relative;
`;

const NoWidth = styled.div`
  width: 0px;
`;

const PianoWrapper = styled.div`
  display: inline-flex;
`;

// black key standard size
// 10-11 mm wide
// 90 mm long
// White key standard size
// 23-24
// 150 mm long

const whiteKeyHeight = 150;
const whiteKeyWidth = 24;

const blackKeyHeight = 90;
const blackKeyWidth = 12;

const marginLeft = ({ keyType = "white" }) =>
  keyType === "white" ? "unset" : `-${blackKeyWidth / 2}px`;

const width = ({ keyType = "white" }) =>
  keyType === "white" ? whiteKeyWidth : blackKeyWidth;

const height = ({ keyType = "white" }) =>
  keyType === "white" ? whiteKeyHeight : blackKeyHeight;

const backgroundColor = ({ keyType = "white" }) =>
  keyType === "white" ? "#fdf6e3" : "#002b36";

const position = ({ keyType = "white" }) =>
  keyType === "white" ? "unset" : "absolute";

const zIndex = ({ keyType = "white" }) => (keyType === "white" ? "0" : "1");

const Key = styled.div`
  width: ${width}px;
  height: ${height}px;
  margin-left: ${marginLeft};
  background-color: ${backgroundColor};
  position: ${position};
  box-sizing: border-box;
  border: 1px solid black;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  z-index: ${zIndex};
`;

const Fingering = styled.div`
  text-align: center;
  margin-bottom: 20px;
  color: #657b83;
`;

const BlackKey = (props) => {
  return (
    <NoWidth>
      <Key {...props} keyType="black" />
    </NoWidth>
  );
};

// TODO add scrollIntoView for element 44
// temp1.scrollIntoView({behavior: 'smooth', inline: 'center'})

const Piano = () => (
  <PianoWrapper>
    {Array.apply(null, { length: 88 }).map((v, idx) => {
      // 0   1   2   3   4   5   6   7   8   9   10   11
      // A   A#  B   C   C#  D   D#  E   F   F#  G    G#
      const style = {};
      const fingeringStyle = {};
      let keyType;
      let fingering;
      switch (idx % 12) {
        // A
        case 0:
          style.backgroundColor = "#eee8d5";
          fingeringStyle.color = "#d33682";
          keyType = "white";
          fingering = 1;
          break;
        // A#
        case 1:
          keyType = "black";
          break;
        // B
        case 2:
          keyType = "white";
          fingering = 2;
          break;
        // C
        case 3:
          keyType = "white";
          break;
        // C#
        case 4:
          keyType = "black";
          fingering = 3;
          break;
        // D
        case 5:
          keyType = "white";
          fingering = 1;
          break;
        // D#
        case 6:
          keyType = "black";
          break;
        // E
        case 7:
          keyType = "white";
          fingering = 2;
          break;
        // F
        case 8:
          keyType = "white";
          break;
        // F#
        case 9:
          keyType = "black";
          fingering = 3;
          break;
        // G
        case 10:
          keyType = "white";
          break;
        // G#
        case 11:
          keyType = "black";
          fingering = 4;
          break;
      }
      if (fingering !== undefined) {
        if (keyType === "white") {
          style.backgroundColor = "#eee8d5";
          if (fingeringStyle.color === undefined) {
            console.log(idx);
            fingeringStyle.color = "#839496";
          }
        } else {
          style.backgroundColor = "#073642";
          fingeringStyle.color = "#839496";
        }
      }
      const key = (
        <Key key={idx} className={idx} style={style} keyType={keyType}>
          {fingering && (
            <Fingering style={fingeringStyle}>{fingering}</Fingering>
          )}
        </Key>
      );
      if (keyType === "black") {
        return <NoWidth key={idx}> {key} </NoWidth>;
      } else {
        return key;
      }
    })}
  </PianoWrapper>
);

export default () => (
  <ScrollRelative>
    <Piano />
  </ScrollRelative>
);
