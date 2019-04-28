import * as React from "react";
import { Pitch } from "../types/pitch";
import styled from "styled-components";
import { transpose, scale, Scale, Note, chord, Chord } from "tonal";
import * as piano from "../util/piano";

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

const width = ({ keyType = "white", scale = 1, xScale = 1 }) =>
  (keyType === "white" ? whiteKeyWidth : blackKeyWidth) * scale * xScale;

const height = ({ keyType = "white", scale = 1, yScale = 1 }) =>
  (keyType === "white" ? whiteKeyHeight : blackKeyHeight) * scale * yScale;

const backgroundColor = ({ keyType = "white", highlight = false }) => {
  if (highlight) {
    return colors.base1;
  }
  if (keyType === "white") {
    return colors.base3;
  }
  return colors.base03;
};

const position = ({ keyType = "white" }) =>
  keyType === "white" ? "unset" : "absolute";

const zIndex = ({ keyType = "white" }) => (keyType === "white" ? "0" : "1");

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

const KeyInfo = styled.div`
  text-align: center;
  color: #657b83;
`;

const Fingering = styled.div`
  color: ${({ hand }) => (hand === "left" ? "#268bd2" : "#859900")};
`;

// TODO(me) - change to stateless component using useRef hook.
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

const pianoRange: Pitch[] = Array.apply(null, { length: 88 }).map(
  (_, idx: number) => idx
);

const makeKey = (props) => (pitch: Pitch) => {
  const {
    keyChildren = {},
    scale,
    yScale,
    xScale,
    scrollToPitch = undefined,
    highlight = (pitch: Pitch) => false
  } = props;
  const keyType = piano.keyType(pitch);
  let key = (
    <Key
      key={pitch}
      keyType={keyType}
      scale={scale}
      yScale={yScale}
      xScale={xScale}
      highlight={highlight(pitch)}
    >
      {keyChildren[pitch] && keyChildren[pitch]}
    </Key>
  );
  if (keyType === "black") {
    key = <NoWidth key={pitch}>{key}</NoWidth>;
  }
  if (scrollToPitch === pitch) {
    key = <ScrollMe key={pitch}>{key}</ScrollMe>;
  }
  return key;
};

const Piano = (props) => {
  const { keyFilter = (pitch: Pitch) => true } = props;
  const keys = pianoRange.filter(keyFilter).map(makeKey(props));
  return <PianoWrapper>{keys}</PianoWrapper>;
};

const keysFor = (scaleName) => {
  const pitches = piano.fourOctaveScale(scaleName, 1);
  return pitches.reduce(
    (acc, p) =>
      Object.assign(acc, {
        [p]: <KeyInfo>{piano.piandoIdxToNoteName(p, scaleName)}</KeyInfo>
      }),
    {}
  );
};

export default () => (
  <ScrollRelative>
    <Piano
      scrollToPitch={40}
      yScale={0.5}
      keyFilter={(key: Pitch) => key <= Pitch.A4}
      keyChildren={keysFor("C# harmonic minor")}
    />
  </ScrollRelative>
);
