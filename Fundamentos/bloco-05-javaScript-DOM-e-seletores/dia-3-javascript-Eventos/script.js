function createDaysOfTheWeek() {
    const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
    const weekDaysList = document.querySelector('.week-days');
  
    for (let index = 0; index < weekDays.length; index += 1) {
      const days = weekDays[index];
      const dayListItem = document.createElement('li');
      dayListItem.innerHTML = days;
  
      weekDaysList.appendChild(dayListItem);
    };
  };
  
  createDaysOfTheWeek();
  
  

  function creatDays(){
  const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];
  let dias = document.querySelector('#days'); //selecionei a ul e guardei na variavel dias.
  for (let index = 0; index < dezDaysList.length; index+=1){
      let daysOfMonth = dezDaysList[index]
      let listDays = document.createElement('li')
      listDays.className = "day"
      listDays.innerHTML = daysOfMonth

      dias.appendChild(listDays)
  }
  document.querySelector('#days > li:nth-child(26)').classList.add('day','holiday')
  document.querySelector('#days > li:nth-child(27)').classList.add('day', 'holiday', 'friday')
  document.querySelector('#days > li:nth-child(33)').classList.add('day', 'holiday')

  document.querySelector('#days > li:nth-child(6)').classList.add('day', 'friday')
  document.querySelector('#days > li:nth-child(13)').classList.add('day', 'friday')
  document.querySelector('#days > li:nth-child(20)').classList.add('day', 'friday')


  }

  creatDays()

  function createHoliday(){
    let divSelect = document.querySelector('.buttons-container')
    let button = document.createElement('button')
    button.innerHTML = "Feriados"
    button.id = "btn-holiday"

    divSelect.appendChild(button)
  }

  createHoliday()

  function changeCollorHoliday(){
   let daysHoliday = document.querySelectorAll(".holiday")
   let button = document.querySelector('#btn-holiday')
   let colorInitial = 'rgb(238,238,238)'
   let colorChange = 'blue'

   button.addEventListener("click", function(){
   for (let index = 0; index < daysHoliday.length; index +=1){
       if (daysHoliday[index].style.backgroundColor === colorChange){
         daysHoliday[index].style.backgroundColor = colorInitial
       }else{
         daysHoliday[index].style.backgroundColor = colorChange
       }
   }
  })
}
   
changeCollorHoliday()


function buttonFriday (){
  let divSelect = document.querySelector('.buttons-container');
  let button = document.createElement('button')
  button.id = "btn-friday"
  button.innerHTML = 'Sexta-Feira'
  divSelect.appendChild(button)
}

buttonFriday()

function changeColorFriday(){
let daysSelect = document.querySelectorAll('.friday')
let button = document.querySelector('#btn-friday')
let colorInitial = 'rgb(238,238,238)'
let colorChange = 'red'

button.addEventListener("click", function(){
for (let index = 0; index < daysSelect.length; index+=1){
  if (daysSelect[index].style.backgroundColor === colorChange){
    daysSelect[index].style.backgroundColor = colorInitial
  }else{
    daysSelect[index].style.backgroundColor = colorChange
  }
}
})
}

changeColorFriday()


function zoomDays(){
  let daysSelect = document.querySelector('#days')

  daysSelect.addEventListener('mouseover', function(event){
    event.target.style.fontSize = '30px'
    event.target.style.fontWeight = '600'
  })
}

function zoomOutDays(){
  let days = document.querySelector('#days')

  days.addEventListener('mouseout', function(event){
    event.target.style.fontSize = '20px'
    event.target.style.fontWeight = '200'
  })

}

zoomOutDays()
zoomDays()


function newTaskSpan(task) {

  let tasksContainer = document.querySelector('.my-tasks');
  let taskName = document.createElement('span');

  taskName.innerHTML = task;
  tasksContainer.appendChild(taskName);
};

newTaskSpan('Projeto:');