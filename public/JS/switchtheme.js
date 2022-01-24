
if (localStorage.getItem('theme')) {
    document.documentElement.setAttribute('data-theme', localStorage.getItem('theme'));
}

function switchTheme(){
    currentTheme = localStorage.getItem('theme');
    if (currentTheme === "night") {
        document.documentElement.setAttribute('data-theme', 'sunset');
        localStorage.setItem('theme', 'sunset');
    } else if(currentTheme === "sunset"){
        document.documentElement.setAttribute('data-theme', 'light');
        localStorage.setItem('theme', 'light');
    } else {
        document.documentElement.setAttribute('data-theme', 'night');
        localStorage.setItem('theme', 'night');
    }
}
