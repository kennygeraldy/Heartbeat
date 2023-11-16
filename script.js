const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) || window.innerWidth < 800;

const settings = {
    particleGap: isMobile ? 7 : 5,
    particleSize: isMobile ? 4 : 2,
    mouseForce: 20,
    noise: 30,
    layerCount: isMobile ? 1 : 4,
    layerDistance: 5,
    heartBeat: true,
    beatStrength: 250,
  };
  
const heart = new NextParticle({
    renderer: 'webgl',
    image: document.querySelector('#heart'),
    width: window.innerWidth,
    height: window.innerHeight,
    maxWidth: window.innerWidth * 0.25,
    particleGap: settings.particleGap,
    particleSize: settings.particleSize,
    mouseForce: settings.mouseForce,
    noise: settings.noise,
    layerCount: settings.layerCount,
    layerDistance: settings.layerDistance,
});
  
function redraw() {
    heart.particleGap = settings.particleGap;
    heart.particleSize = settings.particleSize;
    heart.mouseForce = settings.mouseForce;
    heart.noise = settings.noise;
    heart.layerCount = settings.layerCount;
    heart.layerDistance = settings.layerDistance;
    heart.width = window.innerWidth;
    heart.height = window.innerHeight;
    
    heart.start({
      initPosition: 'none',
      initDirection: 'none',
    });
};
  
setInterval(() => {
    if (settings.heartBeat) {
        const strength = settings.beatStrength;
        heart.origins.map(o => o.z -= strength);
        setTimeout(() => {
        heart.origins.map(o => o.z += strength);
        }, isMobile ? 200 : 100);
    }
}, isMobile ? 2500 : 1500)

function secretCode() {
    let name = prompt("Please enter your name", "Sayang");
    if (name != null) {
        alert("Hello " + name + " semangat decodenya yaa.")
    }
    let q2 = prompt("Whats my full name?", "");
    if (q2 === "Kenny Geraldy Chandra") {
        let q3 = prompt("When's my birthday?", "");
        if (q3 === "26 November 2001") {
            let q4 = prompt("When's our anniversary?", "kapan kapan dah");
            if (q4 != null) {
                let code = prompt("Please enter the secret code", "");
                if (code === "ILoveYou3000") {
                    document.getElementById("secretButton").style.display = "none";
                    document.getElementById("content").style.display = "block";
                }
            } else {
                alert("Yahhh salah " + name +" gak papaa, jangan nyerah coba lagi yaa! :)")
            }
        } else {
            alert("Yahhh salah " + name +" gak papaa, jangan nyerah coba lagi yaa! :)")
        }
    } else {
        alert("Yahhh salah " + name +" gak papaa, jangan nyerah coba lagi yaa! :)")
    }
    
  }