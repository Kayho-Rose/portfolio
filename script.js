import { myProject } from "./datare.js"

document.addEventListener('click', function(e){
    if(e.target.classList === 'btn-lin'){
        addToOrder(e.target.dataset.add)
    }
    else if(e.target.id === 'complete-btn'){
        completeOrder()
    }else if (e.target.id === 'remove-btn'){
        removeOrder()
    }
    else if(e.target.id === 'pay-btn'){
        payOrder()
    }
})


function getWorkFeed(){
    let workFeed = ` `

    myProject.forEach(function(card){

        let tagFeed = ` `

        if(card.html){
            tagFeed += `<p class="html tag">HTML</p>`
        }

        if(card.css){
            tagFeed += `<p class="css tag">CSS</p>`
        }

        if(card.javascript){
            tagFeed += `<p class="jscript tag">JS</p>`
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
                <button class="btn-git text-pad" href="${card.githubUrl}"><i class="fa-brands fa-github"></i>Github</button>
            </div>
        </div>`

    })
    return workFeed
}

function render(){
    document.getElementById('work').innerHTML = getWorkFeed()
}

render()