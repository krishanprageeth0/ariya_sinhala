"use client";

import React, { useState, useEffect, useRef } from "react";
import { Volume2, VolumeX } from "lucide-react";

interface AudioPlayerProps {
  autoPlayTrigger?: boolean;
}

export function AudioPlayer({ autoPlayTrigger }: AudioPlayerProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const audioContextRef = useRef<AudioContext | null>(null);
  const synthTimerRef = useRef<NodeJS.Timeout | null>(null);

  // Sri Lankan pentatonic soothing flute frequencies (in Hz)
  const notes = [293.66, 329.63, 392.0, 440.0, 523.25, 587.33, 659.25];

  const playSyntheticMelody = () => {
    try {
      if (!audioContextRef.current) {
        const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
        audioContextRef.current = new AudioCtx();
      }

      const ctx = audioContextRef.current;
      if (ctx.state === "suspended") {
        ctx.resume();
      }

      let step = 0;
      const melodySequence = [0, 2, 3, 5, 4, 3, 2, 0, 1, 3, 2, 0];

      const playNote = () => {
        if (!audioContextRef.current || audioContextRef.current.state !== "running") return;
        const now = ctx.currentTime;
        const noteIndex = melodySequence[step % melodySequence.length];
        const freq = notes[noteIndex];

        // Soft Flute Oscillator
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();

        osc.type = "sine";
        osc.frequency.setValueAtTime(freq, now);

        // Gentle envelope
        gain.gain.setValueAtTime(0.001, now);
        gain.gain.linearRampToValueAtTime(0.035, now + 0.4);
        gain.gain.exponentialRampToValueAtTime(0.0001, now + 1.8);

        osc.connect(gain);
        gain.connect(ctx.destination);

        osc.start(now);
        osc.stop(now + 1.9);

        step++;
      };

      synthTimerRef.current = setInterval(playNote, 1600);
      playNote();
    } catch {
      // AudioContext not permitted or supported
    }
  };

  const stopSyntheticMelody = () => {
    if (synthTimerRef.current) {
      clearInterval(synthTimerRef.current);
      synthTimerRef.current = null;
    }
    if (audioContextRef.current && audioContextRef.current.state === "running") {
      audioContextRef.current.suspend();
    }
  };

  const toggleAudio = () => {
    if (isPlaying) {
      if (audioRef.current) {
        audioRef.current.pause();
      }
      stopSyntheticMelody();
      setIsPlaying(false);
    } else {
      let started = false;
      if (audioRef.current) {
        audioRef.current
          .play()
          .then(() => {
            started = true;
            setIsPlaying(true);
          })
          .catch(() => {
            playSyntheticMelody();
            setIsPlaying(true);
          });
      }
      if (!started) {
        playSyntheticMelody();
        setIsPlaying(true);
      }
    }
  };

  useEffect(() => {
    if (autoPlayTrigger && !isPlaying) {
      toggleAudio();
    }
  }, [autoPlayTrigger]);

  useEffect(() => {
    return () => {
      stopSyntheticMelody();
    };
  }, []);

  return (
    <>
      <audio ref={audioRef} src="/music.mp3" loop preload="none" />
      <button
        type="button"
        onClick={toggleAudio}
        aria-label={isPlaying ? "Turn music off" : "Turn music on"}
        title={isPlaying ? "Mute traditional wedding music" : "Play traditional wedding music"}
        className="fixed right-4 top-4 z-50 grid h-11 w-11 place-items-center rounded-full border border-[#B49A55]/60 bg-[#FCF9F0]/90 text-[#1F3E2F] shadow-lg shadow-[#8C7134]/20 backdrop-blur-md transition-all duration-300 hover:scale-105 active:scale-95 sm:right-6 sm:top-6 sm:h-12 sm:w-12"
      >
        {isPlaying ? (
          <Volume2 className="h-5 w-5 text-[#2F5A45] animate-pulse" />
        ) : (
          <VolumeX className="h-5 w-5 text-[#8C7134]" />
        )}
      </button>
    </>
  );
}
