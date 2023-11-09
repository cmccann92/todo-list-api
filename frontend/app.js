const API_URL = 'http://localhost:8000/api/tasks/'

const taskForm = document.getElementById('task-form')
const taskItem = document.getElementById('task-item')
const taskList = document.querySelector('.tasks')

taskForm.addEventListener('submit', async e => {
    e.preventDefault()

    if (taskItem.value.trim() == "") {
        return
    }

    // Send to API
    const {data} = await axios.post(API_URL, {
        task_item: taskItem.value,
    })

    const li = document.createElement('li')
    li.innerText = data.task_item
    taskList.append(li)
    taskForm.reset()

})

document.addEventListener("DOMContentLoaded", async (event) => {
    const {data} = await axios.get(API_URL)

    data.forEach(task => {
        const li = document.createElement('li')
        li.innerText = task.task_item
        taskList.append(li)
        taskForm.reset()
    })
})