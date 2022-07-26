divAll = document.querySelectorAll("div.session")

function changePage(e) {
    for (let x = 0; x < divAll.length; x++) {
        divAll[x].style.display = 'none';
    }
    console.log(e.target.classList[0])
    div = document.querySelector("#" + e.target.classList[0])
    console.log(div);
    div.style.display = "block";
}
// dviFunc = document.getElementById("btn")
// if(divFunc!=null){
//     div.addEventListener('click', changePage);
// }