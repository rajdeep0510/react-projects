const buttons = Array.from(document.querySelectorAll('.buttons'));
const body = document.querySelector('body');

console.log(buttons);


buttons.forEach(function (button){
    console.log(button);
    button.addEventListener('click', (b) => {
        idButton = b.target.id
        if (idButton) {
            body.style.backgroundColor = idButton
            console.log(idButton)
            if (idButton === "black") {
                body.style.color = 'white'
            } else {
                body.style.color = 'black'
            }
        } else {
            body.style.backgroundColor = idButton
        }
    })
    
})

document.getElementById('cookies').addEventListener('dblclick', (e) => {
    alert("cookies clicked")
    console.log(e);
})

document.getElementById('city').onclick = function(){
        alert('city was clicked');
    } 
// This method is also not good because not all attribtes of event can be used 