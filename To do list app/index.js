window.addEventListener("load", ()=>{
    const form = document.querySelector("#new-task-form");
    
    const input = document.querySelector("#new-task-input");

    const tasks = document.querySelector("#tasks");
    
    form.addEventListener('submit', (event)=>{
        event.preventDefault();
        // this will make the defaul page refreshing from happening so we can see the changes we are making.

        const task = input.value;
        if (task == "") {
            return 
        }
        const taskCont = document.createElement('div');
        taskCont.classList.add("task");

        const taskContent = document.createElement("div");
        taskContent.classList.add("content");

        

        const inputEl = document.createElement("input");
        inputEl.classList.add("text");
        inputEl.type = "text";
        inputEl.value = task;
        inputEl.setAttribute("readonly", "readonly");

        const actions = document.createElement("div");
        actions.classList.add("actions");

        const delete_btn = document.createElement('button');
        delete_btn.classList.add('delete');
        delete_btn.innerText = "Delete";

        const edit_btn = document.createElement('button');
        edit_btn.classList.add('edit');
        edit_btn.innerText = "Edit";

        actions.appendChild(edit_btn);
        actions.appendChild(delete_btn);
        
        taskContent.appendChild(inputEl);
        taskCont.appendChild(taskContent);
        taskCont.appendChild(actions);
        tasks.appendChild(taskCont);
        console.log(taskCont);
        input.value = "";

        edit_btn.addEventListener('click', ()=>{
            if (edit_btn.innerText.toLowerCase() == "edit") {
                inputEl.removeAttribute('readonly');
                inputEl.focus();
                edit_btn.innerText = "save";
            }
            else{
                inputEl.setAttribute("readonly", "readonly");
                edit_btn.innerText = "Edit"
            }
        })
        
        delete_btn.addEventListener('click', ()=>{
            tasks.removeChild(taskCont);
        })
    })
})
