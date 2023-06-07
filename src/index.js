import { createPage } from "./page-load"
// createPage empty Page with header footer background
createPage()

// tab switching logic
const tabs =document.querySelectorAll("nav button")
tabs.forEach((tab)=>{
    tab.addEventListener("click",(e)=>{
        setActive(e.target)
        chooseContent(e.target)
    })
})
function setActive(clickedButton){
    clickedButton.classList.add("active")
    
    tabs.forEach((tab)=>{
        if(tab!==clickedButton){
            tab.classList=""
        }
    })
}
function chooseContent(choice){
    console.log(choice)
}