'use strict'
const switcher = document.querySelector('.btn');
switcher.addEventListener('click', function() {
    document.body.classList.toggle('dark-theme')

    var className = document.body.className;
    if(className == "light-theme") {
        this.textContent = "Dark";
    }
    else {
        this.textContent = "Light";
    }
    console.log('current class name: ' + className);
});
function addNewTask(){
    var list= document.getElementById("list");
    var text= document.getElementById("task_name").value;
    var listItem= document.createElement("li");
    listItem.className = "li";
    if(text.length === 0){
        alert('Tarefa precisa ter mais de um caracter')
        return;
    }

    const textElement = document.createTextNode(text);
    listItem.appendChild(textElement)
    list.appendChild(listItem)
}

