var a=document.getElementById('remove');
a.addEventListener('click',removel);

var b=document.getElementById('add');
b.addEventListener('click',addl);

document.addEventListener("DOMContentLoaded",getTodo);


function addl(){
	var i=document.getElementById('input').value;
    var ul=document.querySelector('#list');
    var t=document.createTextNode(i);

    if(i===''){
    	return false;
    }
    else{
		saveTodo(i);
    	var li=document.createElement('li');
        li.setAttribute('class','mycheck');

    	var checkbox=document.createElement('input');
    	checkbox.type='checkbox';
    	checkbox.setAttribute('id','check');

    	var label= document.createElement('label');
        label.appendChild(t);

        li.appendChild(checkbox);
        li.appendChild(label);

        ul.insertBefore(li,ul.childNodes[0]);
        document.getElementById('input').value='';

    }

}

function removel(){
	var li = document.getElementById("list").children
	for (var i = 0; i < li.length; i++) {
		while(li[i] && li[i].children[0].checked){
			removeTodo(li[i].textContent);
			document.getElementById("list").removeChild(li[i]);
        }
	}
}


//set added items to local storage
function saveTodo(todo){
	//check if anything is saved
	let todos;
	if(localStorage.getItem("todos")===null){
		todos=[];
	}
	else{
		todos= JSON.parse(localStorage.getItem("todos"));
	}
	todos.push(todo);
	localStorage.setItem("todos",JSON.stringify(todos));
}

//to append the added todo in the list on screen
function getTodo(){
	//check if anything is saved
	let todos;
	if(localStorage.getItem("todos")===null){
		todos=[];
	}
	else{
		todos= JSON.parse(localStorage.getItem("todos"));
	}

	todos.forEach(function(todo) {
		var ul=document.querySelector('#list');
		var t1=document.createTextNode(todo);

		var li=document.createElement('li');
        li.setAttribute('class','mycheck');

    	var checkbox=document.createElement('input');
    	checkbox.type='checkbox';
    	checkbox.setAttribute('id','check');

    	var label= document.createElement('label');
        label.appendChild(t1);

        li.appendChild(checkbox);
        li.appendChild(label);

        ul.insertBefore(li,ul.childNodes[0]);
	});
}


function removeTodo(todo){
	//check if anything is saved
	let todos;
	if(localStorage.getItem("todos")===null){
		todos=[];
	}
	else{
		todos= JSON.parse(localStorage.getItem("todos"));
	}
	todos.splice(todos.indexOf(todo),1);
	localStorage.setItem("todos",JSON.stringify(todos));

}

