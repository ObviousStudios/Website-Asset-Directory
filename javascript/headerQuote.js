const generateQuote = () =>{
    const quoteList = [
        "The bottom of this site contains more goodies!",
        "Barely Functioning since 2017!",
        "Up and running!",
        "Check out D7",
        "Wishlist and Buy SCROOMAGE on steam",
        "Programmed by one guy *Mostly*"
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
