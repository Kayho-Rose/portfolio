import { myProject } from "./datare.js"

function getWorkFeed(){
    let workFeed = ` `

    myProject.forEach(function(card){

        let tagFeed = ` `

        if(card.html){
            tagFeed += `<p class="tag">HTML</p>`
        }

        if(card.css){
            tagFeed += `<p class="tag">CSS</p>`
        }

        if(card.javascript){
            tagFeed += `<p class="tag">JS</p>`
        }

        workFeed += `
        <div class="template container">
            <img class="temp-img" src='${card.img}' alt="${card.name}" >
            <div class="text-card cont-pad">
                <a href='${card.Url}' target="_blank" class="card_name"><p class="name">${card.name}<i class="fa-solid fa-arrow-up-right-from-square"></i></i></p></a>
                <div class="tag-feed">
                    ${tagFeed}
                </div>
                <p class="descryption">${card.descryption}</p>
                <a class="btn-git text-pad" href="${card.githubUrl}">Github</a>
            </div>
        </div>`

    })
    return workFeed
}

function render(){
    document.getElementById('work').innerHTML = getWorkFeed()
}

render()