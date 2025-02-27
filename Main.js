const users = [
    { name: "Kiss Éva", age: 28, email: "eva@example.com", avatar: "https://i.pravatar.cc/250?img=1" },
    { name: "Nagy Anna", age: 34, email: "anna@example.com", avatar: "https://i.pravatar.cc/250?img=2" },
    { name: "Szabó Gábor", age: 41, email: "gabor@example.com", avatar: "https://i.pravatar.cc/250?img=3" },
    { name: "Tóth Péter", age: 25, email: "peter@example.com", avatar: "https://i.pravatar.cc/250?img=4" },
    { name: "Varga László", age: 39, email: "laszlo@example.com", avatar: "https://i.pravatar.cc/250?img=6" },
    { name: "Molnár Júlia", age: 31, email: "julia@example.com", avatar: "https://i.pravatar.cc/250?img=5" },
    { name: "Balogh István", age: 45, email: "istvan@example.com", avatar: "https://i.pravatar.cc/250?img=7" },
    { name: "Kovács Zsolt", age: 29, email: "zsolt@example.com", avatar: "https://i.pravatar.cc/250?img=8" },
    { name: "Horváth Bea", age: 36, email: "bea@example.com", avatar: "https://i.pravatar.cc/250?img=9" }
    ];
    

function loadUsers(arr){
    document.querySelector("main").innerHTML = ""
    arr.forEach(({name, age, email, avatar}, index)=>{

        document.querySelector("main").innerHTML += `
        
        
        <div class="card" >
        <div class="hatter">
        <img class="imggg" src="${avatar}">
        </div>
        <h2>${name}</h2>
        <p>${age}</p> 
        <p>${email}</p>
        <button class="gomb" popovertarget="mypopover-${name}">Profil szerkesztése</button>
        
        
        </div>
        
        <div class="popover_container" id="mypopover-${name}" popover>
        <div class="popo">
        <div class="imgcontainer">
        <img class="popover_img" src="${avatar}">
        </div>
        <div class="buttoncontainer">
        <button class="g2" onclick="changePicture()">Change picture</button>
        <button class="g2" onclick="deletePicture">Delete picture</button>   
        </div>
                    
        </div>
        
        <label for="name">Your name</label>
        <input type="text" value="${name}" class="name" id="urlapelem">
        <label for="email">Your email</label>
        <input type="text" value="${email}" class="email" id="urlapelem">
        <label for="age">Your age</label>
        <input type="number" value="${age}" class="age" id="urlapelem">
        <label for="bio">Your BIO</label>
        <input type="text" value="" class="bio" id="urlapelem">
        <button class="save" onclick="saveChange(${avatar})" value="i${index}">Save</button>
        </div>
        
        `
        
    })

}

loadUsers(users)

