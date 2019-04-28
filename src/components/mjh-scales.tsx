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

const filterFirst = ['major', 'minor', 'harmonic minor', 'melodic minor'];
const filterFirstS = new Set(filterFirst);
const scaleNames = filterFirst.concat(
  Scale.names().filter((a) => !filterFirstS.has(a))
);

const noteNames = [
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
];

const majorScales = [
  {pitch: 'D', scale: 'major'},
  {pitch: 'Eb', scale: 'major'},
  {pitch: 'C', scale: 'major'},
  {pitch: 'Bb', scale: 'major'},
  {pitch: 'F', scale: 'major'},
  {pitch: 'B', scale: 'major'},
  {pitch: 'E', scale: 'major'},
  {pitch: 'G', scale: 'major'},
  {pitch: 'Gb', scale: 'major'},
  {pitch: 'Ab', scale: 'major'},
  {pitch: 'A', scale: 'major'},
  {pitch: 'F#', scale: 'major'},
  {pitch: 'Db', scale: 'major'},
  {pitch: 'Cb', scale: 'major'},
  {pitch: 'C#', scale: 'major'},
];

const harmonicMinorScales = [
  {pitch: 'Eb', scale: 'harmonic minor'},
  {pitch: 'B', scale: 'harmonic minor'},
  {pitch: 'D#', scale: 'harmonic minor'},
  {pitch: 'Bb', scale: 'harmonic minor'},
  {pitch: 'G', scale: 'harmonic minor'},
  {pitch: 'F', scale: 'harmonic minor'},
  {pitch: 'F#', scale: 'harmonic minor'},
  {pitch: 'G#', scale: 'harmonic minor'},
  {pitch: 'Ab', scale: 'harmonic minor'},
  {pitch: 'C#', scale: 'harmonic minor'},
  {pitch: 'E', scale: 'harmonic minor'},
  {pitch: 'D', scale: 'harmonic minor'},
  {pitch: 'A#', scale: 'harmonic minor'},
  {pitch: 'A', scale: 'harmonic minor'},
  {pitch: 'C', scale: 'harmonic minor'},
];
const initialScaleLists = [
  {
    name: 'All Major',
    completed: majorScales.map((a) => Object.assign({}, a)),
    scales: majorScales,
    current: undefined,
  },
  {
    name: 'Harmonic Minor',
    completed: harmonicMinorScales.map((a) => Object.assign({}, a)),
    scales: harmonicMinorScales,
    current: undefined,
  },
];

function shuffle(a) {
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

export default () => {
  const [state, setState] = useState({
    enabled: true,
    selectedList: 0,
    scaleLists: initialScaleLists,
  });
  const pickList = ({target: {value}}) =>
    setState((oldState) => Object.assign({}, oldState, {selectedList: value}));
  const go = () => {
    setState((oldState) => {
      const currentList = oldState.scaleLists[oldState.selectedList];
      shuffle(currentList.completed);
      const next = currentList.completed.pop();
      if (next === undefined) {
        currentList.completed = currentList.scales.map((a) =>
          Object.assign({}, a)
        );
      }
      currentList.current = next;
      return Object.assign({}, oldState);
    });
  };
  const {name, current: {pitch, scale} = {}} = state.scaleLists[
    state.selectedList
  ];
  return (
    <div>
      {/* <select
            value={state.pitch}
            onChange={pickPitch}
            disabled={!state.enabled}
            >
            {noteNames.map((name) => (
                <option key={name} value={name}>
                    {name}
                </option>
            ))}
            </select>
            <select
            value={state.scale}
            onChange={pickScale}
            disabled={!state.enabled}
            >
            {scaleNames.map((name) => (
                <option key={name} value={name}>
                    {name}
                </option>
            ))}
          </select> */}
      <h1>{pitch ? `${pitch} ${scale}` : 'Choose a scale'}</h1>
      <ScrollRelative>
        <Piano
          yScale={0.5}
          keyChildren={pitch ? keysFor(`${pitch} ${scale}`) : {}}
          highlight={(p) => keysFor(`${pitch} ${scale}`)[p]}
        />
      </ScrollRelative>
      <select
        size={state.scaleLists.length}
        value={state.selectedList}
        onChange={pickList}
      >
        {state.scaleLists.map(({name, completed, scales}, idx) => (
          <option key={name} value={idx}>
            {name}
          </option>
        ))}
      </select>
      <div>
        {state.scaleLists[state.selectedList].scales.length -
          state.scaleLists[state.selectedList].completed.length}{' '}
        of {state.scaleLists[state.selectedList].scales.length}
      </div>
      <button onClick={go}>Go!</button>
    </div>
  );
};
