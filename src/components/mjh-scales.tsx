import * as React from 'react';
import {useRef, useEffect, useState} from 'react';
import styled from 'styled-components';
import {chord, Chord, Note, scale, Scale, transpose} from 'tonal';
import {Pitch} from '../types/pitch';
import * as piano from '../util/piano';

const colors = {
  base03: '#002b36',
  base02: '#073642',
  base01: '#586e75',
  base00: '#657b83',
  base0: '#839496',
  base1: '#93a1a1',
  base2: '#eee8d5',
  base3: '#fdf6e3',
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

const marginLeft = ({keyType = 'white', scale = 1}) =>
  keyType === 'white' ? 'unset' : `-${(blackKeyWidth / 2) * scale}px`;

const width = ({keyType = 'white', scale = 1, xScale = 1}) =>
  (keyType === 'white' ? whiteKeyWidth : blackKeyWidth) * scale * xScale;

const height = ({keyType = 'white', scale = 1, yScale = 1}) =>
  (keyType === 'white' ? whiteKeyHeight : blackKeyHeight) * scale * yScale;

const backgroundColor = ({keyType = 'white', highlight = false}) => {
  if (keyType === 'white') {
    if (highlight) {
      return colors.base1;
    }
    return colors.base3;
  }
  if (highlight) {
    return colors.base01;
  }
  return colors.base03;
};

const color = ({keyType = 'white', highlight = false}) => {
  if (highlight) {
    return colors.base3;
  }
  if (keyType === 'white') {
    return colors.base00;
  }
  return colors.base0;
};

const position = ({keyType = 'white'}) =>
  keyType === 'white' ? 'unset' : 'absolute';

const zIndex = ({keyType = 'white'}) => (keyType === 'white' ? '0' : '1');

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
  color: ${color};
  position: ${position};
  box-sizing: border-box;
  border: 1px solid black;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  z-index: ${zIndex};
`;

const KeyInfo = styled.div`
  word-wrap: break-word;
  text-align: center;
  line-height: 1;
  margin-bottom: 3px;
  font-family: 'PT Sans', 'Bravura';
`;

const Fingering = styled.div`
  color: ${({hand}) => (hand === 'left' ? '#268bd2' : '#859900')};
`;

const ScrollMe = ({children}) => {
  const self = useRef(null);
  useEffect(() => {
    self.current.scrollIntoView({
      behavior: 'smooth',
      inline: 'center',
    });
  });
  return <div ref={self}>{children}</div>;
};

const pianoRange: Pitch[] = Array.apply(null, {length: 88}).map(
  (_, idx: number) => idx
);

const makeKey = (props) => (pitch: Pitch) => {
  const {
    keyChildren = {},
    scale,
    yScale,
    xScale,
    scrollToPitch,
    highlight = (pitch: Pitch) => false,
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
  if (keyType === 'black') {
    key = <NoWidth key={pitch}>{key}</NoWidth>;
  }
  if (scrollToPitch === pitch) {
    key = <ScrollMe key={pitch}>{key}</ScrollMe>;
  }
  return key;
};

const Piano = (props) => {
  const {keyFilter = (pitch: Pitch) => true} = props;
  const keys = pianoRange.filter(keyFilter).map(makeKey(props));
  return <PianoWrapper>{keys}</PianoWrapper>;
};

const keysFor = (scaleName) => {
  const pitches = piano.fourOctaveScale(scaleName, 0);
  return pitches.reduce(
    (acc, p) =>
      Object.assign(acc, {
        [p]: <KeyInfo>{piano.piandoIdxToNoteName(p, scaleName)}</KeyInfo>,
      }),
    {}
  );
};

export default () => {
  const [state, setState] = useState({
    scale: 'major',
    pitch: 'B#',
  });
  const pickPitch = ({target: {value}}) =>
    setState((oldState) => Object.assign({}, oldState, {pitch: value}));
  const pickScale = ({target: {value}}) =>
    setState((oldState) => Object.assign({}, oldState, {scale: value}));
  return (
    <div>
      <select value={state.pitch} onChange={pickPitch}>
        {[
          'C',
          'D',
          'E',
          'F',
          'G',
          'A',
          'B',
          'C#',
          'D#',
          'E#',
          'F#',
          'G#',
          'A#',
          'B#',
          'Cb',
          'Db',
          'Eb',
          'Fb',
          'Gb',
          'Ab',
          'Bb',
        ].map((name) => (
          <option key={name} value={name}>
            {name}
          </option>
        ))}
      </select>
      <select value={state.scale} onChange={pickScale}>
        {Scale.names().map((name) => (
          <option key={name} value={name}>
            {name}
          </option>
        ))}
      </select>
      <ScrollRelative>
        <Piano
          yScale={0.5}
          keyFilter={(key: Pitch) => key <= Pitch.A4}
          keyChildren={keysFor(`${state.pitch} ${state.scale}`)}
          highlight={(pitch) => keysFor(`${state.pitch} ${state.scale}`)[pitch]}
        />
      </ScrollRelative>
    </div>
  );
};
