import  { useState, useEffect } from 'react';

const messages = [
  " واقعی در معامله  و معامله پر سود ",
  " امنیت در معامله  و بهینه ترین قیمت  ",
  "بازار معاملاتی B2B"
];

const TypingEffect = () => {
  const [displayedText, setDisplayedText] = useState('');
  const [messageIndex, setMessageIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const currentMessage = messages[messageIndex];
    const typeSpeed = 100; 
    const deleteSpeed = 50; 
    const pauseTime = 1000; 

    if (deleting) {
      if (charIndex > 0) {
        setTimeout(() => {
          setDisplayedText(currentMessage.substring(0, charIndex - 1));
          setCharIndex(charIndex - 1);
        }, deleteSpeed);
      } else {
        setDeleting(false);
        setMessageIndex((messageIndex + 1) % messages.length);
      }
    } else {
      if (charIndex < currentMessage.length) {
        setTimeout(() => {
          setDisplayedText(currentMessage.substring(0, charIndex + 1));
          setCharIndex(charIndex + 1);
        }, typeSpeed);
      } else {
        setTimeout(() => {
          setDeleting(true);
        }, pauseTime);
      }
    }
  }, [charIndex, deleting, messageIndex]);

  return (
    <p className="flex flex-col items-center justify-center gap-2 font-semibold text-text2 space-y-2">
      <span className="text-3xl">{displayedText}</span>
    </p>
  );
};

export default TypingEffect;
