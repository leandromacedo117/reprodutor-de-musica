var musicas = {
    1: ["Skyfall", "Adele"],
    2: ["Empty Bed", "Adele"],
    3: ["Por Supuesto", "Adele"],
    4: ["Cachimbo da paz", "Marina Sena"],
    5: ["Me deixa", "Marina Sena"]
};

function search(searched) {  
    document.getElementById("search_result").innerHTML = "";
    for (let i = 1; i <= Object.keys(musicas).length; i++) {
        console.log(musicas[i][0], searched);
        if(musicas[i][0] === searched) {
            cardBuilder(i);
        } else if(musicas[i][1] === searched) {
            cardBuilder(i);
        }
    }
}

function cardBuilder(value) {

    // Criando elementos: 
    var a_result = document.createElement('a');
    var div_result = document.createElement('div');
    var div_result_content = document.createElement('div');
    var img =document.createElement('img');
    var p_name = document.createElement('p');
    var p_author = document.createElement('p');

    // Colocando conteúdo:
    p_name.innerHTML = musicas[value][0];
    p_author.innerHTML = musicas[value][1];
    img.setAttribute('src', '../img/square.png');
    a_result.setAttribute('href', "../pages/music.html");
    a_result.setAttribute('data-internalid', value);
    a_result.setAttribute('onClick', 'changePage(this)');

    // Setando classes:
    img.setAttribute('class', 'result_img');
    p_name.setAttribute('class', 'result_name');
    p_author.setAttribute('class', 'result_author');
    div_result_content.setAttribute('class', 'result_content');
    div_result.setAttribute('class', 'result');
    a_result.setAttribute('class', 'result_link')
    
    // Encadeando:
    a_result.appendChild(div_result);
    div_result.appendChild(img);
    div_result.appendChild(div_result_content);
    div_result_content.appendChild(p_name);
    div_result_content.appendChild(p_author);
    
    // Executando:
    document.getElementById("search_result").appendChild(a_result);
}

function changePage(element) {
    localStorage.setItem('music_value', element.getAttribute("data-internalid"));
}

function musicPage() {
    var value = localStorage.getItem('music_value');
    document.getElementById("music-name").innerHTML = musicas[value][0];
    document.getElementById("music-author").innerHTML = musicas[value][1];
}