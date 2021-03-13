
const button = document.querySelector('button');

const input01 = document.querySelector('.input01')
const input02 = document.querySelector('.input02')

const table = document.querySelector('table tbody');

let counter = 1;

let massiv = JSON.parse(localStorage.getItem('text')) || [];

if(massiv.length){
    getTable(massiv);
}

button.addEventListener('click', function(e){
    e.preventDefault();
    const text = input01.value.trim();
    const text01 = input02.value.trim();
    
   if(input01.value.trim() === '' && input02.value.trim() === ''){  
      alert('Hech narsa yuq');
      } else if(input01.value.trim() === ''){
          alert('Kitob nomi kiritilmagan');
          input01.focus();
      } else if(input02.value.trim() === ''){
          alert('Muallif nomi kiritilmagan');
          input02.focus();
      } else{
          const tr = document.createElement('tr');
          const td0 = document.createElement('td');
          const td01 = document.createElement('td');
          const td02 = document.createElement('td');
          const span = document.createElement('span');
          span.innerHTML = '&times;';
          span.classList.add('close');
          const div = document.createElement('div');
          div.textContent = input02.value;
          div.appendChild(span);
          div.classList.add('box');
            
          td0.textContent = counter;
          counter++;
          tr.appendChild(td0);
          
          td01.textContent = input01.value;
          td02.appendChild(div);    
          
          tr.appendChild(td01);
          tr.appendChild(td02);
          table.appendChild(tr);
          
          span.addEventListener('click', function(){
           table.removeChild(tr);
       });
        
          // massiv.push(text11);
          // getTable(massiv);
          
          input01.value = '';
          input01.focus();

          input02.value = '';
          
      }

});

table.addEventListener('click', function(e){
    const target = e.target;
    
    if(target.nodeName.toLocaleLowerCase() === 'span'){
        const pos = parseInt(target.getAttribute('data-pos'));
        
        massiv = massiv.filter(function(_, index){
            return pos !== index;
        })
        getTable(massiv);
    }
    
})

function getTable(arr){
    localStorage.setItem('text', JSON.stringify(arr));
    table.innerHTML = '';
    
    arr.forEach(function(str, index){
        const td = document.createElement('li');
        td.textContent = (index + 1) + '. ' + str;
        
        const span = document.createElement('span');
        span.innerHTML = '&times;';
        span.setAttribute('data-pos', index);
        
        td.appendChild(span);
        
        tr.appendChild(td);
    })
}


