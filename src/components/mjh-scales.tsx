import * as React from "react";
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

class ScrollMe extends React.Component {
  private self: React.Ref<HTMLDivElement>;
  constructor(props) {
    super(props);
    this.self = React.createRef();
  }
  componentDidMount() {
    this.self.current.scrollIntoView({
      behavior: "smooth",
      inline: "center"
    });
  }
  render() {
    return <div ref={this.self}>{this.props.children}</div>;
  }
}

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

enum Pitch {
  A = 0,
  A_S = 1,
  B = 2,
  C = 3,
  C_S = 4,
  D = 5,
  D_s = 6,
  E = 7,
  F = 8,
  F_S = 9,
  G = 10,
  G_S = 11
}

enum KeyType {
  WHITE = "white",
  BLACK = "black"
}

const pianoRange: number[] = Array.apply(null, { length: 88 }).map(
  (_, idx: number) => idx
);

const Piano = ({ keyChildren = {} }) => (
  <PianoWrapper>
    {pianoRange.map((_, idx) => {
      let keyType: KeyType;
      const pitch: Pitch = idx % 12;
      switch (pitch) {
        case Pitch.A:
        case Pitch.B:
        case Pitch.C:
        case Pitch.D:
        case Pitch.E:
        case Pitch.F:
        case Pitch.G:
          keyType = KeyType.WHITE;
          break;
        default:
          keyType = KeyType.BLACK;
          break;
      }
      let key = (
        <Key key={idx} className={idx} keyType={keyType}>
          {keyChildren[idx] && keyChildren[idx]}
        </Key>
      );
      if (keyType === "black") {
        key = <NoWidth key={idx}>{key}</NoWidth>;
      }
      if (idx === 44) {
        key = <ScrollMe key={idx}>{key}</ScrollMe>;
      }
      return key;
    })}
  </PianoWrapper>
);

const keyFilter = (pitches: Set<Pitch>) => (pitch) => pitches.has(pitch % 12);

const A_Major = keyFilter(
  new Set([Pitch.A, Pitch.B, Pitch.C_S, Pitch.D, Pitch.E, Pitch.F_S, Pitch.G_S])
);

const A_Major_Fingering = {
  [Pitch.A]: 1,
  [Pitch.B]: 2,
  [Pitch.C_S]: 3,
  [Pitch.D]: 1,
  [Pitch.E]: 2,
  [Pitch.F_S]: 3,
  [Pitch.G_S]: 4
};

export default () => (
  <ScrollRelative>
    <Piano
      keyChildren={pianoRange.filter(A_Major).reduce(
        (acc, pitch) =>
          Object.assign(acc, {
            [pitch]: <Fingering>{A_Major_Fingering[pitch % 12]}</Fingering>
          }),
        {}
      )}
    />
  </ScrollRelative>
);
