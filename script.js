const inputBox=document.getElementById("inputbox");
const ListContainer=document.getElementById("list-container");

function addTask(){

    if(inputBox.value ===''){

        alert("Empty task cannot be added!");
    }

    else{

        let li=document.createElement("li");
        li.innerHTML=inputBox.value;
        ListContainer.appendChild(li);
        let span=document.createElement("span");
        span.innerHTML="\u00d7";
        li.appendChild(span);
    }
 
    inputBox.value="";
    save();

}

ListContainer.addEventListener("click",function(e){

    if(e.target.tagName === "LI"){

        e.target.classList.toggle("checked");
        save();
    }

    else if(e.target.tagName ==="SPAN"){

        e.target.parentElement.remove();
        save();
    }

},false);

function save(){

    localStorage.setItem("data",ListContainer.innerHTML);
}

function show(){
    ListContainer.innerHTML=localStorage.getItem("data");
}
show();