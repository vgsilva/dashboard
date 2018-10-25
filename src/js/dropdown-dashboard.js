var dashboard = document.querySelector("#dashboard-menu")
var dashboardSubmenu = document.querySelector("#dashboard-submenu")
var icoExpandLess = document.querySelector(".expand-less")
var icoExpandMore = document.querySelector(".expand-more")

function showSubmenuDashboard() {
    if(dashboardSubmenu.classList.contains("show")){
        dashboardSubmenu.style.display = "none";
        dashboardSubmenu.classList.remove("show");
        icoExpandLess.style.display = "none";
        icoExpandMore.style.display = "inline"; 
        
    } else{
        dashboardSubmenu.style.display = "block";
        dashboardSubmenu.classList.add("show");   
        icoExpandLess.style.display = "inline";
        icoExpandMore.style.display = "none";
    }
}

dashboard.addEventListener("click", showSubmenuDashboard)