const generateQuote = () =>{
    const quoteList = [
        "The bottom of this site contains more goodies!",
        "Barely Functioning since 2017!",
        "Up and running!",
        "Check out D7",
        "Wishlist and Buy SCROOMAGE on steam",
        "Programmed by one guy *Mostly*",
        "What is a Gatorfan308?",
        "What is a Gatorfan309?",
        "Did you know very little people look at this?",
        "I'm sentient...",
        "Our twitter feed is ruined!",
        "Our twitter is ran by an awesome dude!",
        "Check out our almost existant tik-tok",
        "Join our discord(Link at the bottom!)",
        "We had to make a privacy policy(Thanks Epic)",
        "Perfection : In Development",
        "Please remind me what coffee making simulator+ is?",
        "Snakes can predict earthquakes.",
        "Something similar happens in the compound",
        "mini-figures have the largest population on Earth!",
        "Astronauts grow taller in space!",
        "We spend a year on the toilet in our lifetime. (Eww)",
        "obviousstudios.dev",
        "AAAAAAAAAAAAAAAAAAAAAAAA",
        "Don't school do drugs.",
        "#1 victory royale",
        "We have a new privacy policy! AI-Free",
        "ObviousAlexC.ObviousStudios.dev exists but doesn't have DNS yet",
        "Try Penguinmod!",
        "We like godot!",
        "The tools page is a lie.",
        "Too cool to do ",
        "Christmas all the time?",
        "This is open source",
        "Check out our branding!",
        "We embrace modders!",
        "We have 5 colours.",
        "Dave isn't british.",
        "Made in the US of A"
    ]

    Math.randomRange = (min, max) => {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min) + min);
      }

    const quoteElement = document.getElementById("Quote");

    quoteElement.textContent = quoteList[Math.randomRange(0,quoteList.length)];

    const footer = document.getElementById("pageFooter");

    if (footer) {
        fetch("https://raw.githubusercontent.com/ObviousStudios/Website-Asset-Directory/main/SitesParts/PageFooter.html").then(text => {
            text.text().then(fix => {
                footer.innerHTML = fix;
            });
        })
    }
}

generateQuote()
