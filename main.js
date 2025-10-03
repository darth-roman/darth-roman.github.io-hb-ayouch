const colors = ["#ff4d4d","#ffcc00","#60e760ff","#66ccff","#ff66ff"];
const confettiSound = new Audio("confetti-pop.mp3")
const img = document.querySelector("img")

    // Balloons
    // const numBalloons = 15;
    // for(let i = 0; i < numBalloons; i++){
    //   const balloon = document.createElement('div');
    //   balloon.classList.add('balloon');
    //   balloon.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
    //   balloon.style.left = Math.random() * 100 + 'vw';
    //   balloon.style.animationDuration = 5 + Math.random() * 5 + 's';
    //   balloon.style.animationDelay = Math.random() * 5 + 's';
      
    //   // Pop effect on click
    //   balloon.addEventListener("click", () => {
    //     balloon.style.transition = "transform 0.3s ease, opacity 0.3s ease";
    //     balloon.style.transform = "scale(1.5)";
    //     balloon.style.opacity = "0";
    //     setTimeout(() => balloon.remove(), 300);
    //   });
      
    //   document.body.appendChild(balloon);
    // }

    const numConfetti = 50;
    for(let i = 0; i < numConfetti; i++){
      const confetti = document.createElement('div');
      confetti.classList.add('confetti');
      confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
      confetti.style.left = Math.random() * 100 + 'vw';
      confetti.style.width = confetti.style.height = 5 + Math.random() * 8 + 'px';
      confetti.style.animationDuration = 3 + Math.random() * 5 + 's';
      confetti.style.animationDelay = Math.random() * 5 + 's';
      document.body.appendChild(confetti);
    }

    const flowers = ["🌻","🪻", "🧶"];
    for(let i = 0; i < 18; i++){
      const flower = document.createElement('div');
      flower.classList.add('flower');
      flower.innerText = flowers[Math.floor(Math.random() * flowers.length)];
      flower.style.left = i * 8 + 'vw';
      flower.style.fontSize = (2 + Math.random()*1.5) + "rem";
      document.body.appendChild(flower);
    }

    // Fairies
    for(let i = 0; i < 2; i++){
      const fairy = document.createElement('div');
      fairy.classList.add('fairy');
      fairy.innerText = "🧚";
      fairy.style.top = Math.random()*70 + "vh";
      fairy.style.animationDuration = (8 + Math.random()*5) + "s";
      fairy.style.animationDelay = (Math.random()*5) + "ms";
      document.body.appendChild(fairy);
    }

    document.addEventListener('click', (event) => {
        const burstCount = 30;
        
        for(let i = 0; i < burstCount; i++) {
        const confetti = document.createElement('div');
        confetti.classList.add('confetti', 'confetti-burst');
        confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
        
        // Position confetti at click coordinates
        confetti.style.left = (event.clientX) + 'px';
        confetti.style.top = (event.clientY) + 'px';
        
        // Random size
        confetti.style.width = confetti.style.height = 5 + Math.random() * 8 + 'px';
        
        // Random direction variables
        const angle = Math.random() * Math.PI * 2;
        const velocity = 30 + Math.random() * 100;
        confetti.style.setProperty('--angle', angle + 'rad');
        confetti.style.setProperty('--velocity', velocity + 'px');
        
        // Random rotation
        confetti.style.setProperty('--rotation', -720 + Math.random() * 1440 + 'deg');
        
        // Random animation duration
        confetti.style.animationDuration = 1 + Math.random() * 2 + 's';
        
        confetti.addEventListener('animationend', () => {
        confetti.remove();
        });

        if(!confettiSound.paused) confettiSound.currentTime = 0
        confettiSound.play()
        
        document.body.appendChild(confetti);
  }
});


img.addEventListener("click", function(){

    document.querySelector("span").innerText = "."
    document.querySelector(".bubble").innerHTML = `<p>This is more professional. It's not like YOU discovered a cure for cancer</p>`
    document.querySelector(".bubble").style.fontSize = "1.5rem"

})
