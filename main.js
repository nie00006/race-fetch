let datafile1 = fetch("https://jsonbox.io/box_82b5a4aa7a4a71abaa80");
let datafile2 = fetch("https://jsonbox.io/box_7ebd8cb0b8fb187873ef");



Promise.race([datafile1, datafile2])
.then( file => {
    return file.json();
})
.then( data => {
    const currentType = data[0].type
    console.log(currentType)
    if (currentType == "The Big Lebowski"){
        document.querySelector("body").className="a"
        document.querySelector(".code").textContent = data[0]._id
        document.querySelector(".type").textContent = data[0].type
        document.querySelector(".createdOn").textContent = data[0]._createdOn

        data[0].data.forEach(item => {
            let id = document.createElement("p")
            let char = document.createElement("p")
            let actor = document.createElement("p")
            
            id.textContent = item.id
            char.textContent = item.character
            actor.textContent = item.actor

            let itemCard = document.createElement("div")
            itemCard.appendChild(id)
            itemCard.appendChild(char)
            itemCard.appendChild(actor)
            document.querySelector("div").appendChild(itemCard)

        });



    } else {
        document.querySelector("body").className="b"
        document.querySelector(".code").textContent = data[0]._id
        document.querySelector(".type").textContent = data[0].type
        document.querySelector(".createdOn").textContent = data[0]._createdOn

        data[0].data.forEach(item => {
            let id = document.createElement("p")
            let fName = document.createElement("p")
            let lName = document.createElement("p")
            
            id.textContent = item.id
            fName.textContent = item.first_name
            lName.textContent = item.last_name

            let itemCard = document.createElement("div")
            itemCard.appendChild(id)
            itemCard.appendChild(fName)
            itemCard.appendChild(lName)
            document.querySelector("div").appendChild(itemCard)

        });
        
    }
})


