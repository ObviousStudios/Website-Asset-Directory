const themeInit = () => {
    const docbod = document.body;
    const themeButton = document.getElementById("ThemeButton");
    const themeIcon = document.getElementById("themeIco");
    const iconRepo = "https://raw.githubusercontent.com/ObviousStudios/Website-Asset-Directory/main/images/"
    const themeJSON = {
        Dark:{name:"darkTheme",next:"Aqua",icon:iconRepo+"dark.svg"},
        Light:{name:"lightTheme",next:"Pastel",icon:iconRepo+"light.svg"},
        Aqua:{name:"aquaTheme",next:"Light",icon:iconRepo+"aqua.svg"},
        Pastel:{name:"pastelTheme",next:"Dark",icon:iconRepo+"pastel.svg"},
    }
    
    let theme = localStorage.getItem("Theme") || "Dark";
    docbod.className = themeJSON[theme].name;
    themeIcon.src = themeJSON[theme].icon;

    themeButton.onclick = () => {
        theme = themeJSON[theme].next;
        docbod.className = themeJSON[theme].name;
        themeIcon.src = themeJSON[theme].icon;
        localStorage.setItem("Theme", theme);
    };
}

themeInit();
