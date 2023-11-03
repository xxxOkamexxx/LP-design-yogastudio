const classlistEl = document.querySelector('#classlist_el')
const newsEl = document.querySelector('#news_el')


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

        </div>`
).join("")}

getNews()