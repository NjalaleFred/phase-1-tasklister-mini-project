document.addEventListener("DOMContentLoaded", () => {
  const changeId = document.getElementById("new-task-description");
  changeId.id = "task"

  function handleTask(tasks){
    let p = document.createElement('p')
    let btn = document.createElement('button')
    btn.addEventListener('click', handleDelete)
    btn.textContent = 'x'
    p.textContent = `${tasks} `
    p.appendChild(btn)
    console.log(p);
    document.querySelector('#list').appendChild(p)
  }
  
  function handleDelete(event){
    event.target.parentNode.remove()
  }

   let form = document.querySelector('form')
  form.addEventListener('submit', (event) => {
    event.preventDefault()
    handleTask(event.target.task.value);
    form.reset()
  })

});

