const listaFacts = document.querySelector('.lista-item');
const btn = document.querySelector('.main__btn');
let k = 0;

async function fecthData(){
    const res = await fetch('https://cat-fact.herokuapp.com/facts/');
    const data = await res.json();
    return data;
}

async function exposeFact(){
    const data = await fecthData();
    console.log(data)
    listaFacts.innerHTML = data[k].text;
    ++k;
}
exposeFact();
btn.addEventListener('click',exposeFact);