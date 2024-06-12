import React, { useState } from 'react';
import { Piano, KeyboardShortcuts, MidiNumbers } from 'react-piano';
import 'react-piano/dist/styles.css';
import * as Tone from 'tone';
import { Box, Text } from '@chakra-ui/react';

const firstNote = MidiNumbers.fromNote('c3');
const lastNote = MidiNumbers.fromNote('f5');
const keyboardShortcuts = KeyboardShortcuts.create({
  firstNote: firstNote,
  lastNote: lastNote,
  keyboardConfig: KeyboardShortcuts.HOME_ROW,
});

const PianoComponent = () => {
  const [notes, setNotes] = useState([]);

  const playNote = (midiNumber) => {
    const synth = new Tone.Synth().toDestination();
    const note = MidiNumbers.getAttributes(midiNumber).note;
    synth.triggerAttackRelease(note, '8n');
    setNotes((prevNotes) => [...prevNotes, note]);
  };

  return (
    <Box>
      <Piano
        noteRange={{ first: firstNote, last: lastNote }}
        playNote={playNote}
        stopNote={() => {}}
        width={1000}
        keyboardShortcuts={keyboardShortcuts}
      />
      <Box mt={4}>
        <Text fontSize="xl">Notes Played:</Text>
        <Text>{notes.join(' ')}</Text>
      </Box>
    </Box>
  );
};

export default PianoComponent;