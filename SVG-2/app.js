const moonPath = "M10.7207 25.0396C10.7207 39.952 28.6731 55 27.9119 55C12.4966 55 0 42.9111 0 27.9987C0 13.0863 12.4966 0.997427 27.9119 0.997427C29.4344 -3.91189 10.7207 10.1272 10.7207 25.0396Z" ;

const sunPath = "M55 27.5C55 42.6878 42.6878 55 27.5 55C12.3122 55 0 42.6878 0 27.5C0 12.3122 12.3122 0 27.5 0C42.6878 0 55 12.3122 55 27.5Z";

const darkMode = document.querySelector("#darkMode");

let toggle = false;

/// we need to click on the sun

darkMode.addEventListener('click',() => {
    //we need to use anime.js
    //here we set up the TIMELINE
    const timeline = anime.timeline({
      duration : 750,
      easing : "easeOutExpo"
    });
    //Add different animations to the TIMELINE
    timeline.add({
        targets:".sun",
        d:[{value: toggle ? sunPath : moonPath}]
    })
    .add({
      targets:"#darkMode",
      rotate:320
    },"-= 350"
    )
    .add({
        targets:"section",
        backgroundColor: toggle ? "rgb(255,255,255)" : "rgb(22,22,22)",
        color: toggle ? "rgb(22,22,22)" : "rgb(255,255,255)"
    },"-= 700"
    );
    //everytime we click on the sun i want that toggle to switch
    if(!toggle){
      toggle = true;
    }else{
      toggle = false;
    }
});