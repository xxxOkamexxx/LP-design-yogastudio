const classlistEl = document.querySelector('#classlist_el')

const getListItem = () => {
    classlistEl.innerHTML = classlist.map(item => 
    `<hr><h4>${item.classname}</h4><p class='time'>${item.time}</p><p class='description'>${item.description}</p>`
    
).join("")}

getListItem()
