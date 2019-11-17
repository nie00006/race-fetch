let datafile1 = fetch("https://gist.githubusercontent.com/prof3ssorSt3v3/22eb7745efdee9e130ed13cc19d85b75/raw/9dd9becedcf05e4392323645f7d8618ff26b1c38/box_7ebd8cb0b8fb187873ef.json");
let datafile2 = fetch("https://gist.githubusercontent.com/prof3ssorSt3v3/9fcda9dc6d5e94e5689de33b0d9d45f8/raw/f1a89ab08aff538c1a7d4b85d0d7ba76ea92b88e/box_82b5a4aa7a4a71abaa80.json");



Promise.race([datafile1, datafile2])
.then( file => {
    return file.json();
})
.then( res => {
    const currentType = res.type
    console.log(currentType)
    if (currentType == "The Big Lebowski"){

        document.querySelector("body").className="a"
        
        document.querySelector(".type").textContent = res.type
        
        res.data.forEach(item => {
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
        
        document.querySelector(".type").textContent = res.type

        res.data.forEach(item => {
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


