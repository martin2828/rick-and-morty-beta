const $container = document.querySelector(".container");
const $btn = document.querySelector(".btn");

const getApi = async () => {
    try {
        
    let api = await fetch(`https://rickandmortyapi.com/api/character/`);
    let json = await api.json();



    let apiFirstSeen = await fetch(json.results[19].episode[0])
    let jsonFirstSeen = await apiFirstSeen.json();

    count = -1;
    json.results.forEach(() => {
        count++;
            let html = `
            <div class="card" style="width: 18rem;">
                <img src="${json.results[count].image}" loading="lazy" class="img-fluid">
                <br>
                <br>
                <div class="card-body">
                    <b class="card-title" style="padding: 4px;">${json.results[count].name}</b>
                    <br>
                    <span style="padding: 15px;"><span class="icon"></span>${json.results[count].status} - ${json.results[count].species}</span>
                    <br>
                    <br>
                    <div class="last" style="color: #9E9E9E; padding: 15px;">Last known location: <br><span style="color: #f5f5f5; padding: 15px;">${json.results[count].location.name}</span></div>
                    <br>
                    <br>
                    <div class="first" style="color: #9E9E9E; padding: 15px;">First seen in: <br><span style="color: #f5f5f5; padding: 15px;">${jsonFirstSeen.name}</span></div>
                    <br>
                    <span>ㅤㅤ</span>
                </div>
            </div>
            `

        $container.insertAdjacentHTML("beforebegin", html)
    })
    }

    catch (error) {
        console.log(error)
        alert("Ocurrio un error, lo siento")
    }
}

getApi();

countPage = 2;

$btn.addEventListener("click", async () => {
    try {
        let api = await fetch(`https://rickandmortyapi.com/api/character/?page=${countPage}`);
        let json = await api.json();
    
        countPage++;
    
        let apiFirstSeen = await fetch(json.results[19].episode[0])
        let jsonFirstSeen = await apiFirstSeen.json();
        
        count = -1;
        json.results.forEach(() => {
            count++;
                let html = `
                <div class="card" style="width: 18rem;">
                    <img src="${json.results[count].image}" loading="lazy" class="img-fluid">
                    <br>
                    <br>
                    <div class="card-body">
                        <b class="card-title" style="padding: 4px;">${json.results[count].name}</b>
                        <br>
                        <span style="padding: 15px;"><span class="icon"></span>${json.results[count].status} - ${json.results[count].species}</span>
                        <br>
                        <br>
                        <div class="last" style="color: #9E9E9E; padding: 15px;">Last known location: <br><span style="color: #f5f5f5; padding: 15px;">${json.results[count].location.name}</span></div>
                        <br>
                        <br>
                        <div class="first" style="color: #9E9E9E; padding: 15px;">First seen in: <br><span style="color: #f5f5f5; padding: 15px;">${jsonFirstSeen.name}</span></div>
                        <br>
                        <span>ㅤㅤ</span>
                    </div>
                </div>
                `
        
            $container.insertAdjacentHTML("beforebegin", html)
        })
    }

    catch (error) {
        console.log(error)
        alert("Ocurrio un error, lo siento")
    }
});

