import React, { useState, useEffect, useRef } from "react";
import { ReactTerminal } from "react-terminal";

import music from "../assets/music.mp3";

// Social Links
const socialLinks = [
  "https://x.com/ShubhamRaj69561",
  "https://www.linkedin.com/in/shubham-raj-13567a308/",
  "https://github.com/Shubham-1068",
];

// Music Placeholder
const musicCenter = `
 ===========================
 |    Music Center v1.0    |
 ===========================
`;

const radio = `
                       |    |~/ 
                       |   _|~ 
         .============.|  (_|   |~/ 
       .-;____________;|.      _|~ 
       | [_________I__] |     (_| 
       |  """"" (_) (_) | 
       | .=====..=====. | 
       | |:::::||:::::| | 
       | '=====''=====' | 
       '----------------'
`;

const FunTerminal = () => {
  const [output, setOutput] = useState("");
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);

  const playMusic = () => {
    if (audioRef.current) {
      audioRef.current.play();
      setIsPlaying(true);
    }
    return "🎵 Music is now playing...";
  };

  const pauseMusic = () => {
    if (audioRef.current) {
      audioRef.current.pause();
      setIsPlaying(false);
    }
    return "⏸️ Music has been paused.";
  };

  const commands = {
    help: () => (
      <pre>{`Available Commands:
  - help   : Displays available commands
  - joke   : Get a joke
  - music  : Display the music center
  - play   : Play the music
  - pause  : Pause the music
  - blog   : My blog post
  - whoami : About me
  - social : My social handles
  - clear  : Clear the console
  - exit   : Exit the app`}</pre>
    ),

    joke: async () => {
      try {
        const response = await fetch(
          "https://v2.jokeapi.dev/joke/Programming?type=single&blacklistFlags=sexist,racist,political,religious"
        );
        const data = await response.json();
        return data.joke;
      } catch (error) {
        return "Oops! Failed to fetch a joke.";
      }
    },

    music: () => (
      <pre>{`${musicCenter}\n${radio}\n\nEnter "play" to start or "pause" to stop the music.`}</pre>
    ),

    play: playMusic,
    pause: pauseMusic,

    blog: () => "You can find my blog at: https://medium.com/@shubham_0101",

    whoami: () => (
      <pre>{`
╔═══════════════════════════════════════════════════╗
║                  Hello World !!                   ║
║  I am Shubham Raj, a web developer                ║
║  with expertise in front-end.                     ║
║  I like identifying vulnerabilities and helping   ║
║  organizations reinforce their defenses.          ║
╚═══════════════════════════════════════════════════╝`}</pre>
    ),

    social: () => (
      <pre>{socialLinks.map((link) => `- ${link}`).join("\n")}</pre>
    ),

    clear: () => {
      setOutput("");
      return "";
    },

    exit: () => {
      window.location.href = "https://x.com/ShubhamRaj69561";
      return "Redirecting to my Twitter...";
    },
  };

  const welcomeMessage = `Type 'help' to see the list of available commands.`;

  //   window.onload = function() {
  //     document.getElementById("terminalEditor").style.backgroundColor = "black";
  //     document.getElementById("terminalEditor").style.color = "#66ff00";

  //     document.getElementsByClassName("index_terminal__teubZ")[0].style.backgroundColor = "#1a1a1a";
  //   };

  return (
    <div
      style={{
        color: "#fff",
        fontFamily: "'Courier New', Courier, monospace",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        style={{
          borderRadius: "10px",
          width: "80%",
          maxWidth: "800px",
          height: "70vh",
          overflowY: "auto",
        }}
      >
        <ReactTerminal
          welcomeMessage={welcomeMessage}
          commands={commands}
          onChange={setOutput}
          prompt={`\n ┌──(root㉿Raj)-[~]#`}
          output={output}
          themes={{
            "my-custom-theme": {
              themeBGColor: "#0D1017",
              themeToolbarColor: "#1E222A",
              themeColor: "#66ff00",
              themePromptColor: "#1f75fe",
            },
          }}
          theme="my-custom-theme"
          style={{
            backgroundColor: "#1a1a1a",
            color: "#fff",
            fontSize: "16px",
            fontFamily: "'Courier New', Courier, monospace",
          }}
        />
        {/* Hidden audio element for music playback */}
        <audio ref={audioRef} src={music} />
      </div>
    </div>
  );
};

export default FunTerminal;
