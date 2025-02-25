import { useState, useEffect } from "react";

function TypeOnce() {
  const text = "I am a Full Stack Developer comfortable with Frontend development, Backend development, API development, and the full Software Development Life Cycle.\n\n Some of the languages and technologies I use the most include Javascript, TypeScript, Python, Node.js, React.js, Express, SQL, PostgreSQL, and more. \n\n I am passionate about building  Websites, Software Solutions,. and exploring new languages, frameworks, and technologies. \n \nWhenever possible, I also apply my passion for developing products with Node.js and Modern Javascript Libraries and Frameworks  like React.js and Next.js"; //  Updated name
  const [displayedText, setDisplayedText] = useState(""); //  What’s currently typed
  const [charIndex, setCharIndex] = useState(0); //  Keeps track of typed characters

  useEffect(() => {
    if (charIndex < text.length) {
      const timeout = setTimeout(() => {
        setDisplayedText((prev) => prev + text[charIndex]); //  Adds one letter at a time
        setCharIndex((prev) => prev + 1);
      }, 50); //  Slower typing speed (200ms per letter, adjust as needed)
      return () => clearTimeout(timeout); //  Cleanup timeout
    }
  }, [charIndex, text]);

  return (
    <p>
      <p className="home-about-body">{displayedText}</p> {/*  No instant appearance, smooth typing */}
      <span className="cursor">|</span> {/*  Optional blinking cursor */}
    </p>
  );
}

export default TypeOnce;
