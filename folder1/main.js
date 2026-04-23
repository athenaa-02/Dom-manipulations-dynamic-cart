const listElements = document.querySelectorAll(".todo_list");
const parentEle = document.querySelector(".parent");
const doneBtn = document.querySelector(".done_btn");

const dropdown = document.querySelector('.dropdown')
const optionsBtn = document.querySelector('.options_btn')
const options = document.querySelector('.options')

// console.log(doneBtn)
// console.log(parentEle)
// console.log(listElements);
// console.log(listElements)

// listElements.forEach((element) => {
// //   console.log(element.textContent);

//   element.textContent += " please!";
// });

// textContent

// innerHTML

// const div = document.createElement('div')

// div.textContent = 'i have done all list'

// parentEle.append(div)

// let isClicked = false


// doneBtn.addEventListener("click", () => {
//     if(!isClicked){
//     const message = document.createElement("span");
//     message.textContent = "i have done all listed activities ";
//     parentEle.append(message); 
// }
//     isClicked = true
// });




// let clicked = false


// optionsBtn.addEventListener('click', () => {

//     if(!clicked){
//         const option = document.createElement('div')

//         option.textContent = 'option'
        
//         dropdown.append(option)
     
//     }


// clicked = true
// })

// console.log(parentEle.children)



// options.classList.remove('display_none')
// options.classList.add('some_class')


optionsBtn.addEventListener('click', () =>{
    // options.classList.toggle('display_none')
})



optionsBtn.addEventListener('click', () =>{
    document.body.classList.toggle('dark_mode')
})

