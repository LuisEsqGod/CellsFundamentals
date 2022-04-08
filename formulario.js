(() => {
document.addEventListener('DOMContentLoaded', () => {
    const addTodoButton = document.querySelector('#add-todo')
    const todoList = document.querySelector('#active-todos')
    const todoToAdd = document.querySelector('#todo-to-add')
    const nom = document.querySelector('#nom')
    const apePat = document.querySelector('#apePat')
    const apeMat  = document.querySelector('#apeMat')
    const tel = document.querySelector('#tel')
    const cp = document.querySelector('#cp')
    var tel_lenght = 10
    var cp_lenght = 5

const nomPromise = new Promise ((resolve, reject) => {
    if (nom = "") {
      resolve ('dato obligatorio sin informar')
    }
    
})

const apePatPromise = new Promise ((resolve, reject) => {
  if (apePat = "") {
    resolve ('dato obligatorio sin informar')
  }
})

const apeMatPromise = new Promise ((resolve, reject) => {
  if (apeMat) {
    resolve ('dato obligatorio sin informar')
  }
})

const telPromise = new Promise ((resolve, reject) => {
  if (tel = "") {
    resolve ('dato obligatorio sin informar')
  }
  if (tel != tel_lenght) {
    resolve ('El teléfono debe ser un número de 8 a 10 dígitos')
  }
})

const cpPromise = new Promise ((resolve, reject) => {
  if (cp = "") {
    resolve ('dato obligatorio sin informar')
  }
  if (tel != cp_lenght) {
    resolve ('El código postal debe ser un número de 5 dígitos')
  }

  axios
  .post('http://demo7460034.mockable.io/todos')
    .then(response => {
      response.data.todos.forEach(todo => {
        todoList.insertAdjacentHTML(
          'afterend',
          `<li>${todo.entry}</li>`
        )
      })        
  })

  addTodoButton.addEventListener('click', (e) => {
        todoList.insertAdjacentHTML(
      'afterend',
      `<li class='todo'>${todoToAdd.value}</li>`
    )

    todoToAdd.value = ''

  })
})

})()