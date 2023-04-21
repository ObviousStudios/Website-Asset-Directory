const generateQuote = () =>{
    const quoteList = [
        "The bottom of this site contains more goodies!",
        "Barely Functioning since 2017!",
        "Up and running!"
    ]

    Math.randomRange = (min, max) => {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min) + min);
      }

    const quoteElement = document.getElementById("Quote")

    quoteElement.textContent = quoteList[Math.randomRange(0,quoteList.length)]
}

generateQuote()