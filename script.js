const classlistEl = document.querySelector('#classlist_el')
const navMenuEl = document.querySelector('#nav_menu')
const newsEl = document.querySelector('#news_el')
const footerMenuEl = document.querySelector('#footer_menu')

// Nav menu
const getNavMenu = () => {
    navMenuEl.innerHTML = menuItems.map(item => 
        `<li><a href="#">${item}</a></li>`
        ).join("")
}

getNavMenu()


// Classes List
const getListItem = () => {
    classlistEl.innerHTML = classlist.map(item => 
        `<hr><h4>${item.classname}</h4><p class='time'>${item.time}</p><p class='description'>${item.description}</p>`
    
).join("")}

getListItem()


// News 
const getNews = () => {
    newsEl.innerHTML = posts.map(post => 
        `<div class='card'>
            
            <div class='card-header'>
                <div class='card-logo'>
                    <img src='assets/logo/icon-sm.png'>
                </div>
                
                <div class='card-text'>
                    <p class='contributor'>N Yoga</p>
                    <p><small class='post-data'>${post.date} ago</small></p>
                </div>
            </div>

            <img class='card-image' src='${post.image}'>
            
            <div class='card-articles'>
                ${post.post}
            </div>
           
            <div class='card-footer'>
                <span><a href='#'>View on Facebook</a></span>
                <span>·</span>
                <span><a href='#'>Share</a></span>
            </div>
        </div>`
    ).join("").concat(
        `<div class='card'>
            <div class='card-center'>
                <div class='card-center-logo'>
                    <img src='assets/logo/icon-sm.png'>
                </div>
                <h5 class='card-center-text'>Visit and shere <br>our Facebook</h5>
                <div class='card-center-logo-lg'>
                    <img src='assets/logo/icon-m.png'>
                </div>

            </div>
            <div class='card-footer'>
                <span><a href='#'>View on Facebook</a></span>
                <span>·</span>
                <span><a href='#'>Share</a></span>
            </div>
        </div>`
    )
    
    
}

getNews()


// Footer Menu
const getFooterMenu = () => {
    footerMenuEl.innerHTML = menuItems.map(item => 
        `<li class='footer-menu-item'><a href="#">${item}</a></li>`
    ).join("")
}

getFooterMenu()