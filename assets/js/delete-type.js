
  const words = [
    "aya..."
  ];

  let wordIndex = 0;
  let charIndex = 0;
  let isDeleting = false;

  const typedSpan = document.getElementById("typed");

  const typeSpeed = 110;
  const deleteSpeed = 60;
  const holdTime = 1400;

  function type() {
    const current = words[wordIndex];

    if (!isDeleting) {
      typedSpan.textContent = current.substring(0, charIndex + 1);
      charIndex++;

      if (charIndex === current.length) {
        setTimeout(() => { isDeleting = true; type(); }, holdTime);
        return;
      }

    } else {
      typedSpan.textContent = current.substring(0, charIndex - 1);
      charIndex--;

      if (charIndex === 0) {
        isDeleting = false;
        wordIndex = (wordIndex + 1) % words.length;
      }
    }

    setTimeout(type, isDeleting ? deleteSpeed : typeSpeed);
  }

  // Start after slight delay (mencegah muncul teks penuh)
  setTimeout(type, 500);

