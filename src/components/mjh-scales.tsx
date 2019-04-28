import * as React from "react";
import { Pitch } from "../types/pitch";
import styled from "styled-components";

const colors = {
  base03: "#002b36",
  base02: "#073642",
  base01: "#586e75",
  base00: "#657b83",
  base0: "#839496",
  base1: "#93a1a1",
  base2: "#eee8d5",
  base3: "#fdf6e3"
};

const ScrollRelative = styled.div`
  overflow: scroll;
  position: relative;
`;

const NoWidth = styled.div`
  width: 0px;
`;

const PianoWrapper = styled.div`
  display: inline-flex;
  margin: 2px;
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

const marginLeft = ({ keyType = "white", scale = 1 }) =>
  keyType === "white" ? "unset" : `-${(blackKeyWidth / 2) * scale}px`;

const width = ({ keyType = "white", scale = 1 }) =>
  (keyType === "white" ? whiteKeyWidth : blackKeyWidth) * scale;

const height = ({ keyType = "white", scale = 1, yScale = 1 }) =>
  (keyType === "white" ? whiteKeyHeight : blackKeyHeight) * scale * yScale;

const backgroundColor = ({ keyType = "white", highlight = false }) => {
  if (keyType === "white") {
    if (highlight) {
      return colors.base3;
    } else {
      return colors.base2;
    }
  } else {
    if (highlight) {
      return colors.base03;
    } else {
      return colors.base02;
    }
  }
};

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

const KeyInfo = styled.div`
  text-align: center;
  color: #657b83;
`;

const Fingering = styled.div`
  color: ${({ hand }) => (hand === "left" ? "#268bd2" : "#859900")};
`;

enum KeyType {
  WHITE = "white",
  BLACK = "black"
}

const pianoRange: Pitch[] = Array.apply(null, { length: 88 }).map(
  (_, idx: number) => idx
);

const Piano = ({
  keyChildren = {},
  scale,
  yScale,
  keyFilter = (pitch: Pitch) => true,
  highlight = (pitch: Pitch) => false
}) => (
  <PianoWrapper>
    {pianoRange.filter(keyFilter).map((pitch, _) => {
      let keyType: KeyType;
      const normalizedPitch: Pitch = pitch % 12;
      switch (normalizedPitch) {
        case Pitch.A0:
        case Pitch.B0:
        case Pitch.C0:
        case Pitch.D0:
        case Pitch.E0:
        case Pitch.F0:
        case Pitch.G0:
          keyType = KeyType.WHITE;
          break;
        default:
          keyType = KeyType.BLACK;
          break;
      }
      let key = (
        <Key
          key={pitch}
          className={pitch}
          keyType={keyType}
          scale={scale}
          yScale={yScale}
          highlight={highlight(pitch)}
        >
          {keyChildren[pitch] && keyChildren[pitch]}
        </Key>
      );
      if (keyType === "black") {
        key = <NoWidth key={pitch}>{key}</NoWidth>;
      }
      if (pitch === Pitch.E4) {
        key = <ScrollMe key={pitch}>{key}</ScrollMe>;
      }
      return key;
    })}
  </PianoWrapper>
);

const keyFilter = (pitches: Set<Pitch>) => (pitch) => pitches.has(pitch % 12);

const A_Major_Pitches = [
  Pitch.A0,
  Pitch.B0,
  Pitch["C#0"],
  Pitch.D0,
  Pitch.E0,
  Pitch["F#0"],
  Pitch["G#0"]
];

const A_Major = keyFilter(new Set(A_Major_Pitches));

const A_Major_Right_Hand = {
  [Pitch.A0]: 1,
  [Pitch.B0]: 2,
  [Pitch["C#0"]]: 3,
  [Pitch.D0]: 1,
  [Pitch.E0]: 2,
  [Pitch["F#0"]]: 3,
  [Pitch["G#0"]]: 4,
  [Pitch.A1]: 1,
  [Pitch.B1]: 2,
  [Pitch["C#1"]]: 3,
  [Pitch.D1]: 1,
  [Pitch.E1]: 2,
  [Pitch["F#1"]]: 3,
  [Pitch["G#1"]]: 4,
  [Pitch["A#2"]]: 5
};

const A_Major_Left_Hand = {
  [Pitch.A0]: 5,
  [Pitch.B0]: 4,
  [Pitch["C#0"]]: 3,
  [Pitch.D0]: 2,
  [Pitch.E0]: 1,
  [Pitch["F#0"]]: 3,
  [Pitch["G#0"]]: 2,
  [Pitch.A1]: 1,
  [Pitch.B1]: 4,
  [Pitch["C#1"]]: 3,
  [Pitch.D1]: 2,
  [Pitch.E1]: 1,
  [Pitch["F#1"]]: 3,
  [Pitch["G#1"]]: 2,
  [Pitch["A#2"]]: 1
};

export default () => (
  <ScrollRelative>
    {[[A_Major_Left_Hand, "L"], [A_Major_Right_Hand, "R"]].map(
      ([fingering, label]) => (
        <div style={{ display: "flex" }}>
          <div
            style={{
              alignSelf: "center",
              marginRight: "2px",
              minWidth: "10px"
            }}
          >
            {label}
          </div>
          <Piano
            keyFilter={(key: Pitch) => key <= Pitch.A4}
            yScale={0.5}
            highlight={A_Major}
            keyChildren={pianoRange.filter(A_Major).reduce(
              (acc, pitch) =>
                Object.assign(acc, {
                  [pitch]: (
                    <KeyInfo>
                      <Fingering hand="left">{fingering[pitch]}</Fingering>
                    </KeyInfo>
                  )
                }),
              {}
            )}
          />
        </div>
      )
    )}
  </ScrollRelative>
);
