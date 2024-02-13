let inputTask = document.querySelector(".input__task");
let inputBtn = document.querySelector(".input__btn")

let resetBtn = document.querySelector(".reset__btn")

let todoError = document.querySelector(".todo__error")

let bazarArray = []
let mainList = document.querySelector(".main")

let mindIndex


inputBtn.addEventListener("click", ()=>{
  if (inputTask.value !=="" && inputBtn.innerHTML == "Add Task" ) {
        todoError.innerHTML = ""
        bazarArray.push(inputTask.value)
        todo()
        
  
  
  }else if(inputTask.value !=="" && inputBtn.innerHTML == "Update" ){
      bazarArray[mindIndex] = inputTask.value
      todo()
  }
  
  else{
    todoError.innerHTML = "Please write your Task"
  }

  

})



function todo() {
  mainList.innerHTML = ""
  bazarArray.map((item, index)=>{
    mainList.innerHTML += `<li>${item} <button class = "delete__btn">del</button> <button class = "edit__btn">Edit</button>`
  })
  let editBtn = document.querySelectorAll(".edit__btn")
  let editBtnArray = Array.from(editBtn)
  editBtnArray.map((editItem, editIndex)=>{
    editItem.addEventListener("click", function(){
      inputBtn.innerHTML ="Update";
      inputTask.value = bazarArray[editIndex];
      mindIndex = editIndex;
    })
  })
    deleteBtn = document.querySelectorAll(".delete__btn")
    let DeleteBtnArray = Array.from(deleteBtn)
    DeleteBtnArray.map((delItem, delIndex)=>{
      delItem.addEventListener("click", function(){
        bazarArray.splice(delIndex, 1)
        todo()
      })
    })
}
