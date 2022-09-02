let output = document.getElementById('output');
let currentPerson = null;
let inputs = document.querySelectorAll('input');
let newWeekDiv = document.querySelector('.newWeek');

let newWeekCard = `
<div class="card">
            <h2 style="text-align:center">Текущая неделя</h2>
        <div id="outputInfo">
            <div>
                <span>Кол-во приёмов пищи:</span><span id="timelyMeals"></span>
            </div>
            <div>
                <span>Стул:</span><span id="defecation"></span>
            </div>
            <div>
                <span>Вздутие живота:</span><span id="bloating"></span>
            </div>
            <div>
                <span>Отёчность:</span><span id="puffiness"></span>
            </div>
            <div>
                <span>Менструация:</span><span id="menstruation"></span>
            </div>
            <div>
                <span>Физическая активность:</span><span id="physicalActivity"></span>
            </div>
            <div>
                <span>Сон:</span><span id="sleep"></span>
            </div>
            
        </div>

        

        <div class="containeer">
            <label>Сколько сегодня приёмов пищи? <input type="text" class="timelyMeals" /></label>
            <label>Как дела со стулом? <input type="text" class="defecation" /></label>
            <label>Вздутие живота?<input type="text" class="bloating" /></label>
            <label>Есть ли отёки?<input type="text" class="puffiness" /></label>
            <label>Циклы? <input type="text" class="menstruation" /></label>
            <label>Физическая активность <input type="text" class="physicalActivity" /></label>
            <label>Сколько часов спите? <input type="text" class="sleep" ></label>
            <button onClick="Put()">Старт</button>
        </div>
    </div>
`;
fetch('https://localhost:7148/api/Conditions/', {
    method: 'get',
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Methods': 'PUT, POST, GET, DELETE, OPTIONS',
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Headers": "Origin, X-Requested-With, Content-Type, Accept"
    }

    })
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    console.log(data[document.getElementById('selectPerson').selectedIndex].timelyMeals )
    

      inputs[0].value = data[data.length - 1].timelyMeals ;
      inputs[1].value = data[data.length - 1].defecation ;
      inputs[2].value = data[data.length - 1].bloating ;
      inputs[3].value = data[data.length - 1].puffiness ;
      inputs[4].value = data[data.length - 1].menstruation ;
      inputs[5].value = data[data.length - 1].physicalActivity ;
      inputs[6].value = data[data.length - 1].sleep ;
      
      for (let i = 0; i < data.length; i++) {
        if (document.getElementById('selectPerson').selectedIndex + 1  === data[i].id) {
          
  
          timelyMeals.innerText = " " + data[i].timelyMeals;
          defecation.innerText = " " +  data[i].defecation;
          bloating.innerText = " " + data[i].bloating;
          puffiness.innerText = " " + data[i].puffiness;
          menstruation.innerText = " " + data[i].menstruation;
          physicalActivity.innerText = " " + data[i].physicalActivity;
          sleep.innerText = " " + data[i].sleep;
        }
      }
      
  });


function person(){
  let select = document.getElementById('selectPerson').selectedIndex;

  let timelyMeals = document.getElementById('timelyMeals');
  let defecation = document.getElementById('defecation');
  let bloating = document.getElementById('bloating');
  let puffiness = document.getElementById('puffiness');
  let menstruation = document.getElementById('menstruation');
  let physicalActivity = document.getElementById('physicalActivity');
  let sleep = document.getElementById('sleep');


 

  fetch('https://localhost:7148/api/People', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    }})
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    for (let i = 0; i < data.length; i++) {
      if (select + 1 === data[i].id) {
        output.innerText = data[i].name + " " + data[i].lastName + " With ID: " + data[i].id;
        currentPerson = data[i].id;
      }
    }
  });

  fetch('https://localhost:7148/api/Conditions/', {
    method: 'get',
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Methods': 'PUT, POST, GET, DELETE, OPTIONS',
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Headers": "Origin, X-Requested-With, Content-Type, Accept"
    }

    })
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    for (let i = 0; i < data.length; i++) {
      if (select + 1 === data[i].id) {
        
        timelyMeals.innerText = " " + data[i].timelyMeals;
        defecation.innerText = " " +  data[i].defecation;
        bloating.innerText = " " + data[i].bloating;
        puffiness.innerText = " " + data[i].puffiness;
        menstruation.innerText = " " + data[i].menstruation;
        physicalActivity.innerText = " " + data[i].physicalActivity;
        sleep.innerText = " " + data[i].sleep;

      inputs[0].value = data[i].timelyMeals ;
      inputs[1].value = data[i].defecation ;
      inputs[2].value = data[i].bloating ;
      inputs[3].value = data[i].puffiness ;
      inputs[4].value = data[i].menstruation ;
      inputs[5].value = data[i].physicalActivity ;
      inputs[6].value = data[i].sleep ;
      }
    }
  });
  

  
}

function eba() {
  
}

function Put() {
  let timelyMeals = document.getElementById('timelyMeals');
  let defecation = document.getElementById('defecation');
  let bloating = document.getElementById('bloating');
  let puffiness = document.getElementById('puffiness');
  let menstruation = document.getElementById('menstruation');
  let physicalActivity = document.getElementById('physicalActivity');
  let sleep = document.getElementById('sleep');

  let select = document.getElementById('selectPerson').selectedIndex;

  let timelyMealsTXT = document.querySelector('.timelyMeals');
  

  let defecationTXT = document.querySelector('.defecation');
  let bloatingTXT = document.querySelector('.bloating');
  let puffinessTXT = document.querySelector('.puffiness');
  let menstruationTXT = document.querySelector('.menstruation');
  let physicalActivityTXT = document.querySelector('.physicalActivity');
  let sleepTXT = document.querySelector('.sleep');




  
  fetch('https://localhost:7148/api/Conditions/' + (select + 1), {
    method: 'put',
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Methods': 'PUT, POST, GET, DELETE, OPTIONS',
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Headers": "Origin, X-Requested-With, Content-Type, Accept"
    },
      body: JSON.stringify({
        "id":(select + 1),
        "personId":(select + 1),
        "trait":"FrontEnd",
        "timelyMeals": timelyMealsTXT.value ,
        "defecation":defecationTXT.value,
        "bloating":bloatingTXT.value,
        "puffiness":puffinessTXT.value,
        "menstruation":menstruationTXT.value,
        "physicalActivity":physicalActivityTXT.value,
        "sleep":sleepTXT.value,
        "courseStart":"0001-01-01T00:00:00",
        "weekNumber":1,
        "weeklyStartWeight":1,
        "weeklyEndWeight":1,
        "weighResult":1,
        "recommendatios":"ЫЫЫЫЫЫЫЫЫ"
        
      })

    }).then(()=>{
      fetch('https://localhost:7148/api/Conditions/', {
    method: 'get',
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Methods': 'PUT, POST, GET, DELETE, OPTIONS',
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Headers": "Origin, X-Requested-With, Content-Type, Accept"
    }

    })
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    console.log('final rendeging...')
    for (let i = 0; i < data.length; i++) {
      if (select + 1 === data[i].id) {
        

        timelyMeals.innerText = " " + data[i].timelyMeals;
        defecation.innerText = " " +  data[i].defecation;
        bloating.innerText = " " + data[i].bloating;
        puffiness.innerText = " " + data[i].puffiness;
        menstruation.innerText = " " + data[i].menstruation;
        physicalActivity.innerText = " " + data[i].physicalActivity;
        sleep.innerText = " " + data[i].sleep;
      }
    }
  });
    })

    
}

/* New Card Week */

function newWeekAdd(){
  newWeekDiv.innerHTML = newWeekCard;
}