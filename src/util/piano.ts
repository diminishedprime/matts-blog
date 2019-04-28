import {chord, Chord, Note, scale, Scale, transpose} from 'tonal';
import * as Range from 'tonal-range';
import {Pitch} from '../types/pitch';

export enum KeyType {
  WHITE = 'white',
  BLACK = 'black',
}

export const fourOctaveScale = (scaleName: string, start = 2) => {
  const scaleLetter = scaleName.split(' ')[0];
  return Range.scale(Scale.notes(scaleName), [
    `${scaleLetter}${start}`,
    `${scaleLetter}${start + 3}`,
  ]).map(pitchToPianoIdx);
};

export const piandoIdxToNoteName = (pianoIdx: Pitch, scaleName) => {
  const normalized = (pianoIdx + 9) % 12;
  const thing = Scale.notes(scaleName).find((scaleNote) => {
    return Note.chroma(scaleNote) === normalized;
  });
  return thing
    .replace(/##/g, '𝄪')
    .replace(/#/g, '♯')
    .replace(/b/g, '♭');
};

const pitchToPianoIdx = (note: string): Pitch => {
  return Note.midi(note) - 21;
};
// console.log(Range.scale(Scale.notes("A major"), ["A2", "A5"]));
// console.log(
//   Range.scale(Scale.notes("A major"), ["A2", "A5"]).map(pitchToPianoIdx)
// );
// console.log(fourOctaveScale("A major"));

export const keyType = (pitch: Pitch) => {
  const normalizedPitch: Pitch = pitch % 12;
  switch (normalizedPitch) {
    case Pitch.A0:
    case Pitch.B0:
    case Pitch.C0:
    case Pitch.D0:
    case Pitch.E0:
    case Pitch.F0:
    case Pitch.G0:
      return KeyType.WHITE;
    default:
      return KeyType.BLACK;
  }
};

// console.log(chord("o7"));
// console.log(chord("o7").map(transpose("A1")));
// console.log(Chord.names());

// const amajor = chord("o7")
//   .map(transpose("A1"))
//   .map(Note.midi)
//   .map((a) => a - 21)
//   .reduce((acc, a) => {
//     return acc.add(a);
//   }, new Set());

// const keyFilter = (pitches: Set<Pitch>) => (pitch) => pitches.has(pitch % 12);

// const A_Major_Pitches = [
//   Pitch.A0,
//   Pitch.B0,
//   Pitch["C#0"],
//   Pitch.D0,
//   Pitch.E0,
//   Pitch["F#0"],
//   Pitch["G#0"]
// ];

// const A_Major = keyFilter(new Set(A_Major_Pitches));

// const A_Major_Right_Hand = {
//   [Pitch.A0]: 1,
//   [Pitch.B0]: 2,
//   [Pitch["C#0"]]: 3,
//   [Pitch.D0]: 1,
//   [Pitch.E0]: 2,
//   [Pitch["F#0"]]: 3,
//   [Pitch["G#0"]]: 4,
//   [Pitch.A1]: 1,
//   [Pitch.B1]: 2,
//   [Pitch["C#1"]]: 3,
//   [Pitch.D1]: 1,
//   [Pitch.E1]: 2,
//   [Pitch["F#1"]]: 3,
//   [Pitch["G#1"]]: 4,
//   [Pitch["A#2"]]: 5
// };

// const A_Major_Left_Hand = {
//   [Pitch.A0]: 5,
//   [Pitch.B0]: 4,
//   [Pitch["C#0"]]: 3,
//   [Pitch.D0]: 2,
//   [Pitch.E0]: 1,
//   [Pitch["F#0"]]: 3,
//   [Pitch["G#0"]]: 2,
//   [Pitch.A1]: 1,
//   [Pitch.B1]: 4,
//   [Pitch["C#1"]]: 3,
//   [Pitch.D1]: 2,
//   [Pitch.E1]: 1,
//   [Pitch["F#1"]]: 3,
//   [Pitch["G#1"]]: 2,
//   [Pitch["A#2"]]: 1
// };
