import "./css/sidebar.css";

function SideBar(){
    const sideBar = document.createElement('aside');
    sideBar.className = "sidebar";
    sideBar.innerHTML = `
    <nav>
        <ul class="sidebar__menu">
            <li class="sidebar__menu--items"><a href="#/" class="sidebar__menu--link" title="home" >Home</a></li>
            <li class="sidebar__menu--items"><a href="#/signUp" class="sidebar__menu--link" title="sign up" >Sign Up</a></li>
            <li class="sidebar__menu--items"><a href="#/logIn" class="sidebar__menu--link" title="log in" >Log In</a></li>
        </ul>
    </nav>
    `;
    
    return sideBar;
}

export default SideBar;