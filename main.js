
const toDoContainer = document.getElementById('toDoList')

const toDoList = [
    {
        id: 'a',
        toDo: 'Lawn Care',
        description: 'Mowing Lawn After Removing All the Snow From the Yard'
    },
    {
        id: 'b',
        toDo: 'Family Room',
        description: 'Vacuum and dust'
    },
    {
        id: 'e',
        toDo: 'Shop',
        description: 'Go Grocery Shopping'
    },
    {
        id: 'f',
        toDo: 'Dog',
        description: 'Walk the Dog on the Treadmill While Making a "To Do Appplication"'
    },
    {
        id: 'g',
        toDo: 'Food',
        description: 'Make Dinner'
    },
    {
        id: 'h',
        toDo: 'Homework',
        description: 'Finish "To Do Application" in JavaScript/HTML'
    }
]


for (const toDos of toDoList){
    toDoContainer.innerHTML += `
        <div class="box" id="${toDos.id}">
            <h2 class="todos-title">${toDos.toDo}</h2>
            <p class="description-text">${toDos.description}</p>
        </div>
        `
}


boxLeft = 0
for (const toDos of toDoList){
    const toDosL = document.getElementById(toDos.id)
    toDosL.addEventListener('click', function(){
        if (toDosL.style.textDecorationLine === ''){
            toDosL.style.position = 'relative'
            toDosL.style.left = '55rem'
            
            toDosL.style.textDecorationLine = 'line-through'
        }else{
            toDosL.style.textDecorationLine = ''
            toDosL.style.position = 'static'
        }
        })
}

