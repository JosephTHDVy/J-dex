function typewriterEffect(element, text, delay) {
  let index = 0;
  const type = () => {
    element.textContent += text.charAt(index);
    index++;
    if (index < text.length) {
      setTimeout(type, delay);
    }
  };
  type();
}


window.typewriterEffect = typewriterEffect;
