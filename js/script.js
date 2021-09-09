//Registration form validation 
$("#loginform").validate({
  rules: {
    login: {
        required: true,
        minlength: 4,
        maxlength: 16
    },
    pswd: {
        required: true,
        minlength: 6,
        maxlength: 16
    }
},
          messages: {
              login: {
              required: "",
              minlength: "Login must be at least 4 characters",
              maxlength: "The maximum number of characters is 16",
              },
              pswd: {
            required: "",
            minlength: "Password must be at least 6 characters",
            maxlength: "Password must be 16 characters maximum",
              }
          }
})


//Popup initialization (materialize css)
document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.modal');
    var instances = M.Modal.init(elems);
  });

  document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('select');
    var instances = M.FormSelect.init(elems);
  });


  //Set in Local Storage login and password--------------------------------
document.querySelector('.registration').onclick = () => {
  let login = document.getElementById('last_name').value;
  let password = document.getElementById('password').value;
  if(login.length > 3 && password.length > 5){
    localStorage.setItem('login', login);
    localStorage.setItem('password', password);
    document.querySelector('.registration').classList.add('modal-close');
    document.querySelector('.s12').reset();
  } else{
    return false
  }
}


// Get in Local Storage login and password----------------------------------
document.querySelector('.agree').onclick = () => {
  let login = document.getElementById('last_name').value;
  let password = document.getElementById('password').value;
  if(localStorage.getItem('login') === login && localStorage.getItem('password') === password){
    document.querySelector('.content_login').classList.add('login_open');
    localStorage.setItem('class', 'login_open');
  }
}
//Clearing the registration form by clicking on Cancel
document.querySelector('.cancel').onclick = () => {
  document.querySelector('.s12').reset();
}


//Check if Local Storage has class login_open if wee already enter(no ask password again)
$(document).ready(function(){
  if(localStorage.getItem('class')){
    $('.content_login').addClass('login_open')
  }
})
// $(window).unload(function(){
//   localStorage.setItem('class', $('.content_login').hasClass('login_open'))
// })


//To click for item (Tv Control, Alarms System...) show info block

document.querySelector('.allSystemInfoIcon').onclick = () => {
document.querySelector('.content_info_block').style.display = "flex";
document.querySelector('.content_system').style.display = "none";

//Fill block content info from Local Storage data
  let res_block = document.querySelectorAll('.res');
  let info = ''
   for(let i = 0; i < localStorage.length; i++) {
     for( let k = 0; k < res_block.length; k++){
      let key = localStorage.key(i);
      if (key == "TV"){
        `${JSON.parse(localStorage.getItem(key)).map(item => info += `<div style="border-bottom: 1px solid #fff;"><span>${item.name}: ${item.state}</span>
              <span>channel: ${item.channel}</span>
              <span>brightness: ${item.brightness}</span>
              <span>volume: ${item.volume}</span>
              <span>recording: ${item.recording}</span>
              <span>sound: ${item.sound}</span></div>`)}`
        res_block[i].innerHTML = `<div class="info_data_1">${key}:</div> 
                                  <div class="info_data_2">${info}
                                  </div>`
       }
       if (key == res_block[k].id){
       `${JSON.parse(localStorage.getItem(key)).map(item => info += `<div>${item.name}: ${item.state}</div>`)}`
       res_block[i].innerHTML = `<div class="info_data_1">${key}:</div> 
                                 <div class="info_data_2">${info}
                                 </div>`
      }

      info='';
     }
   }
}
document.querySelector('#back_general').onclick = () => {
  document.querySelector('.content_info_block').style.display = "none";
  document.querySelector('.content_system').style.display = "flex";
  }


//Function wich create checkbox
function paintCheckBox(array){
  let res = '';
   array.map((item, index) => { 
    if(item.state == 'ON'){
      res += `<div class='list_states_item'>
                <div class='list_states_item_rooms'>
                  <div class='text_style_number'>${++index}</div>
                  <div class='text_style_room'>${item.name}</div>
                </div>
                <div class="switch">
                  <label>
                    OFF
                    <input id='' class='videoSwitch' name = '${item.name}' type='checkbox' checked="checked">
                    <span class="lever"></span>
                    ON
                  </label>
                </div>
              </div>`
    }else{
      res += `<div class='list_states_item'>
                <div class='list_states_item_rooms'>
                  <div class='text_style_number'>${++index}</div>
                  <div class='text_style_room'>${item.name}</div>
                </div>
                <div class="switch">
                  <label>
                    OFF
                    <input id='' class='videoSwitch' name = '${item.name}' type='checkbox'>
                    <span class="lever"></span>
                    ON
                  </label>
                </div>
              </div>`
    }
   })
   return res;
}

//Function wich create range
function paintRange(array){ 
  let res = '';
  array.map(item => { 
  res += `<div class='text_style_room'>${item.name}</div>
          <div class="range-field">
              <input  type="range" class="temp" min="0" max="30"  name = '${item.name}' value='${item.state}'/>
        </div>`
  })
  return res;
}

//Function wich create audio
function paintAudio(array){ 
  let res = '';
  array.map(item => { 
  res += `<div class='text_style_room'>${item.name}</div>
  <audio src="audio/Who Let the Dogs Out.mp3" controls></audio>`
  })
  return res;
}


//Function wich create icon weather
function paintWeather(){
  let weather = '';
  weather = `<div class="weather">
                <img src="icons/weather.png" alt="">
             </div>`
             return weather;
}


// Function to create rooms block
function paintBlock (array, icon, name, id, rangeType){
  let input = '';
  let weatherBlock = '';
  if (rangeType == "checkbox"){
    input = paintCheckBox(array);
  }else if(rangeType == "range" && id == '3'){
    input = paintRange(array);
    weatherBlock = paintWeather(array);
  }else if(rangeType == "audio"){
    input = paintAudio(array);
  }
  else if (rangeType == "range"){
    input = paintRange(array)
  }else{
    return false;
  } 
  
  return `<div class='block' id='${name}'>
              <div class='block_system_title'>
                <div class='block_system_title_info'>   
                  <div class='block_system_title_logo'><img src=${icon} alt=""></div>
                  <div class='block_system_title_text'>${name}</div>
                </div>
                ${weatherBlock}
              </div>
              <div class='list_states_title'>
                <div class='list_states_title_info'>
                  <div class='list_states_title_number'>#</div>
                  <div class='list_states_title_room'>Zone</div>
                </div>
                <div class='list_states_title_text'>State</div>
              </div>
              <div class='system_items'>
                ${input}
              </div>
              <div class='btn_block'>
                <div class='btn_block_all'>
                  <button class="waves-effect waves-light btn" id="all">Enable all</button>
                </div>
     
                <div class='btn_block_save'>
                  <button class="waves-effect waves-light btn" id=${id}>Back</button>
                </div>
              </div>
          </div>` 
}


// Function to create block TV
function paintBlockTV (array, icon, name, id, rangeType){
  return `<div class='tv'>

  <select name = ${name} id="select" class="browser-default">
  <option value="" disabled selected>Select channel</option>
  <option value="1">1</option>
  <option value="2">2</option>
  <option value="3">3</option>
  <option value="4">4</option>
  <option value="5">5</option>
  <option value="6">6</option>
  <option value="7">7</option>
  <option value="8">8</option>
  <option value="9">9</option>
  <option value="10">10</option>
</select>


<p>
  <label id="brightness">Brightness </label>
     <input type = "range" id = "br" name = ${name} min = "0" max = "50" value=${array.brightness}/>
</p>

  <label id="volume">Volume </label>
     <input type = "range" id = "vol" name = ${name} min = "0" max = "50" value=${array.volume} />



<div class="sound_chek">
<span class="sound_mode">Sound mode</span>
<label>
  <input class="with-gap" name=${name} type="radio" value="Сinema" checked  />
  <span>Сinema</span>
</label>
<label>
  <input class="with-gap" name=${name} type="radio" value="Сlear speech"  />
  <span>Сlear speech</span>
</label>
<label>
  <input class="with-gap" name=${name} type="radio" value="Amplification"  />
  <span>Amplification</span>
</label>
</div>


<div class="switch" id="switch_tv">
<div id="recordSwitch">Recording mode</div>
<label>
  OFF
  <input id="recording" class='videoSwitch' name = ${name} type='checkbox'>
  <span class="lever"></span>
  ON
</label>
</div>


  <div class='btn_block_save'>
  <button class="waves-effect waves-light btn" id="btn_tv_back">Back</button>
  </div>

  </div>`
}

// API weather
 function weatherReport(data) {
   console.log(data);
    document.querySelector('.block').style.display = "none"
    document.querySelector('#weather_block').style.display = "flex"


    $.get(`https://api.openweathermap.org/data/2.5/weather?q=${data.city},${data.country}&appid=28abf519f98a58991105627229cde652`, function (response) { 
          //console.log('weather',response); 
          //get date
          let months = ['January','February','March','April','May','June','July','August','September','October','November','Desember'];
          let date = (date)=>{return `${new Date(date*1000).getDate()} - ${months[new Date(date*1000).getMonth()]} - ${new Date(date*1000).getFullYear()}`};
          //get time
          let time = (date)=>{return `${new Date(date*1000).getHours()}:${new Date(date*1000).getMinutes()}:${new Date(date*1000).getSeconds()}`};
          $('#weather_block').html(`<h5>Weather in ${response.name} <div>${date(response.dt)}</div></h5>
                              <div class="weatherDetails">
                                  <div class="weatherInfo">
                                      <p>Sunrise: <i>${time(response.sys.sunrise)}</i></p>
                                      <p>Sunset: <i>${time(response.sys.sunset)}</i></p>
                                      <p>Temp. <b>${(response.main.temp_min-273.15).toFixed(0)} °C</b></p>
                                      <p>Feels like <b>${(response.main.feels_like-273.15).toFixed(0)}  °C </b></p>
                                      <p>Wind <b>${response.wind.speed}м/с</b></p>
                                      <p>Humidity  <b>${response.main.humidity}%</b></p>   
                                  </div>
                                  <div class="weatherImg">
                                      <img src="http://openweathermap.org/img/w/${response.weather[0].icon}.png" alt="img"/>
                                  </div>
                                  <div class='weather_item'>
                                  <button class="waves-effect waves-light btn" id="weather_btn" onClick="weatherBlock()">Back</button>
                                  </div>
                              </div>`)

      });      
  }
  
  function weatherBlock(){
    document.querySelector('.block').style.display = "flex";
    document.querySelector('#weather_block').style.display = "none"
  }
 



