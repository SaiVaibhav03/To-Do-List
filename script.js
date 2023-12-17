const myinput = document.querySelector('.addBar_Input');
const addButton = document.querySelector('.addBar_Button');
const mylist = document.querySelector('.list');
const Categories_option = document.querySelector('#Categories');
let listNumber = 0;
let totalList = 0;

// ---xxx--- list add button function (starts here)---xxx---
const listfunc = function(e) {
    if(myinput.value){
        totalList = totalList + 1;    
        
        // list_Box_Outline -- created
        const list_outline_Div = document.createElement('div');
        list_outline_Div.className = 'list_Box_Outline';
        list_outline_Div.id = listNumber;
        list_outline_Div.classList.add('All');
        list_outline_Div.classList.add('Uncompleted');
        mylist.appendChild(list_outline_Div);
        

        // list_display -- created
        const list_display_Div = document.createElement('div');
        list_display_Div.className = 'list_display';
        list_outline_Div.appendChild(list_display_Div);
        const input_field = document.createElement('input');
        input_field.className = 'input_style';
        input_field.value = myinput.value;
        myinput.value = "";
        console.log(input_field.innerText);
        list_display_Div.appendChild(input_field);
        list_display_Div.addEventListener('dblclick',function(){
            input_field.style.pointerEvents = 'auto';
        });
        list_display_Div.addEventListener('click',function(){
            input_field.style.pointerEvents = 'none';
        });
        
        // list_markButton -- created 
        const list_markButton_Div = document.createElement('div');
        list_markButton_Div.classList.add('list_markButton');
        list_outline_Div.appendChild(list_markButton_Div);
        const span_tag = document.createElement('button');
        span_tag.className = 'span_style';
        list_markButton_Div.appendChild(span_tag);
        const i_tag = document.createElement('i');
        i_tag.className = 'fa-solid fa-check i_style';
        i_tag.style.color = '#e8eaed';
        span_tag.appendChild(i_tag);
        list_markButton_Div.addEventListener('click', function(){  // tickmark function
            console.log(list_outline_Div.id);
            input_field.style.textDecoration = 'line-through';
            input_field.style.textDecorationColor = 'black';
            list_markButton_Div.classList.remove('list_markButton');
            list_markButton_Div.classList.add('list_markButton2');
            list_outline_Div.classList.remove('Uncompleted');
            list_outline_Div.classList.add('Completed');
        }); 

        // list_deleteButton -- created
        const list_deleteButton_Div = document.createElement('div');
        list_deleteButton_Div.className = 'list_deleteButton';
        list_outline_Div.appendChild(list_deleteButton_Div);
        const span_tag2= document.createElement('button');
        span_tag2.className = 'span_style';
        list_deleteButton_Div.appendChild(span_tag2);
        const i_tag2 = document.createElement('i');
        i_tag2.className = 'fa-solid fa-trash i_style';
        i_tag2.style.color = '#ea331f';
        span_tag2.appendChild(i_tag2);
        list_deleteButton_Div.addEventListener('click', function(){  // remove function
            list_outline_Div.classList.add('delete-animation');

            // Set a timeout for the animation duration
            setTimeout(() => {
                list_outline_Div.remove();
            }, 1000);
        }); 

        listNumber = listNumber + 1;
        e.stopPropagation();
    }
}

addButton.addEventListener('click', listfunc);
// ---xxx--- list add button function (ends here)---xxx---

Categories_option.addEventListener('change', function(){
    const selectedCategory = Categories_option.value;

    // Hide all list items
    const allListItems = document.querySelectorAll('.list_Box_Outline');
    allListItems.forEach(item => {
        item.style.display = 'none';
    });

    // Show list items based on the selected category
    const filteredListItems = document.querySelectorAll(`.${selectedCategory}`);
    filteredListItems.forEach(item => {
        item.style.display = 'flex'; // Adjust the display property based on your styling
    });
});
