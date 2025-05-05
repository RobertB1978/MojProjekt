'use client';

import { useState } from 'react';

export default function VoiceInput({ onResult }: { onResult: (text: string) => void }) {
  const [listening, setListening] = useState(false);

  const startListening = () => {
    const recognition = new (window as any).webkitSpeechRecognition();
    recognition.lang = 'pl-PL';
    recognition.onstart = () => setListening(true);
    recognition.onend = () => setListening(false);
    recognition.onresult = (event: any) => {
      const transcript = event.results[0][0].transcript;
      onResult(transcript);
    };
    recognition.start();
  };

  return (
    <button onClick={startListening} className="bg-green-600 text-white px-4 py-2 rounded">
      {listening ? 'Słucham...' : 'Mów'}
    </button>
  );
}


