let subMenu = document.getElementById('nav_links');
let body = document.body;

function menu_toggle() {

        if (subMenu.classList.contains('show')) {
                subMenu.classList.remove('show');
                document.body.style.overflowY = 'auto';
        }

        else {
                subMenu.classList.add('show');
                document.body.style.overflowY = 'hidden';
        }

}