function toggleNav() {
    var navbar = document.querySelector('.navbar');
    var classList = navbar.className.split(/\s+/);
    var index = classList.indexOf('collapsed');
    if (index == -1) {
        classList.push('collapsed');
    }
    else {
        classList.splice(index, 1);
    }
    navbar.className = classList.join(' ');
}

document.querySelector('.menu-toggle-button').onclick = toggleNav;
