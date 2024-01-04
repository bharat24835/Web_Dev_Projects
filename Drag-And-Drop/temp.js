let lists = document.getElementsByClassName('list');
let rightBox = document.getElementById('right');
let leftBox = document.getElementById('left');

// Q1 - Why we use for Loop here 
//  Ans :-  Because there the multiple option that can be dragabble , insteed to declaring Drag and Drop function , we use function 
for(list of lists){
    list.addEventListener("dragstart" ,  function(e){
        let selected = e.target;
        // now we need to prevent the default behavior of Browser of dragover Event
        rightBox.addEventListener("dragover" , function(e){
            e.preventDefault();
        });
        rightBox.addEventListener("drop", function(e){
            rightBox.appendChild(selected);
            selected = null;
        })
        leftBox.addEventListener("dragover" , function(e){
            e.preventDefault();
        });
        leftBox.addEventListener("drop", function(e){
            leftBox.appendChild(selected);
            selected = null;
        })


    })
}