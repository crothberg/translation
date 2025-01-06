window.addEventListener('scroll', () => {
    if (window.scrollY < 300) {
        document.getElementById('name').style.lineHeight = (70 - (window.scrollY/10)) + "px";
    }
    if (window.scrollY < 200) {
        document.querySelector('#banner').style.paddingTop = (30 - (window.scrollY/10)) + "px"; 
        document.querySelector('#banner').style.paddingBottom = (30 - (window.scrollY/10)) + "px"; 
    }
    if (window.scrollY > 0) {
        document.querySelectorAll('#banner > br').forEach(element => {
            element.style.display = "None";
        });
        document.querySelectorAll('.category').forEach(element => {
            element.style.marginRight = "20px";
            element.style.marginLeft = "20px";
            element.style.fontSize = "12px";
        });
    }
    if (window.scrollY < 0) {
        document.querySelectorAll('#banner > br').forEach(element => {
            element.style.display = "block";
        });
        document.querySelectorAll('.category').forEach(element => {
            element.style.marginRight = "30px";
            element.style.marginLeft = "30px";
            element.style.fontSize = "16px";
        });
    }
});