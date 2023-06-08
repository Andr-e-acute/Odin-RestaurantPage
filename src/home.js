function createHome(){
    const home=document.createElement("div")
    home.id=("home")

    home.appendChild(createElement('p',"The perfect pasta every time."))
    home.appendChild(createElement('p',"Welcome to Al Dente,"))
    home.appendChild(createElement('p',"the best place to enjoy authentic Italian pasta."))
    const img =document.createElement("img");
    img.src="images/chef.jpg"
    img.alt="Ai generate picture of italian cook"
    home.appendChild(img)
    home.appendChild(createElement('p',"Order online or visit us!"))
    return home
}

function createElement(type,textContent){
    const p =document.createElement(type)
    p.textContent=textContent
    return p
}
export{createHome, createElement}
{/* <p>
Welcome to Al Dente,<br />
the best place to enjoy authentic Italian pasta
</p>
<img src="images/chef.jpg" alt="Ai generate pic of italina cook" />
<p>Order online or visit us!</p> */}