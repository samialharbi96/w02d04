console.log("todo list");


const body = document.querySelector("body")
const listtitel = document.createElement("h1")
listtitel.innerHTML = "Todo list";

body.append(listtitel);

const ullist = document.createElement("ul")
ullist.id = "mylist";
body.append(ullist);

const toDos = ["wake up","eat breakfast","code"];
toDos.id = "mytext1"
const renderList = () => {
    ullist.innerHTML = ""
for (let i = 0; i < toDos.length; i++) {
const p = document.querySelector("#mylist")
 const pp = document.createElement("li")
 const BtnD = document.createElement('button')
 const Btnup = document.createElement('button')
 Btnup.id = i 
 Btnup.innerText = 'update';
 BtnD.class = i 
 BtnD.innerText = 'removefromlist';
 pp.innerHTML = toDos [i]  

    p.append(pp)
    pp.append(BtnD)
    pp.append(Btnup)
    BtnD.addEventListener('click',()=>{ remove(i)} );
Btnup.addEventListener('click', updateListItem );
}


}

renderList();

const txt = document.createElement("input");
txt.id="txt"
body.append(txt);

const Btn = document.createElement('button');
Btn.id = 'btn';
Btn.innerText = 'addTolist';
body.append(Btn);


function addToList () {
  const inputValue=  txt.value;
    toDos.push(inputValue);
    renderList()
}
function remove(i) {

    toDos.splice(i,1);
    renderList();
}
function updateListItem (e) {
    console.log(e.target);
    console.log(e.target.id);
        let update = prompt(`update`);
        let up = target.i;
        up.innerHTML= toDos[i];
        toDos[up] = value;
        renderList();
      };

Btn.addEventListener('click', addToList );



