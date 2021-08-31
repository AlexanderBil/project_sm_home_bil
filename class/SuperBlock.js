class SuperBlock {
    constructor(name, classN, icon, id, rangeType, systemRooms){
        this.name = name;
        this.classN = classN;
        this.icon = icon;
        this.systemRooms = systemRooms;
        this.id = id;
        this.rangeType = rangeType;
    }
    createBlock(){
      // To click on the system item, hide block content and show block settings management 
      document.querySelector(`.${this.classN}`).onclick = () => {
      document.querySelector('.content_system').style.display = 'none';  
      document.querySelector('.contant_block_info_system').style.display = 'block';
      document.querySelector('.allSystemInfo').style.display = 'none';
  
      // Get data from Local Storage and Set to arrRooms
      let checked = localStorage.getItem(`${this.name}`);
      let arrRooms = JSON.parse(checked)
  
      // create result rooms block
      let infoBlock = "";
  
      //If Local Storage empty ---> start function with default array this.systemRooms
      if(arrRooms == null){
      infoBlock = paintBlock (this.systemRooms, this.icon, this.name, this.id, this.rangeType);
      }
  
      //If Local Storage not empty ---> start function with new arrRooms 
      else{
      infoBlock = paintBlock (arrRooms, this.icon, this.name, this.id, this.rangeType);
     }
  
  document.querySelector('.contant_block_info_system').innerHTML = infoBlock;


  //Button Back and Seter to Local Storage data
  document.getElementById(this.id).onclick = () => {
      localStorage.setItem(`${this.name}`, JSON.stringify(this.systemRooms));
      document.querySelector('.contant_block_info_system').style.display = 'none';
      document.querySelector('.content_system').style.display = 'flex';
      document.querySelector('.allSystemInfo').style.display = 'flex';
  }


  //Button anable all checkboxs
  let checkboxes = document.getElementsByClassName('videoSwitch');
  document.getElementById('all').onclick = () => {
    for(let i = 0; i < checkboxes.length; i++) {           
     checkboxes[i].checked = true;
     this.systemRooms[i].state = 'ON';
    }
  }
  
  //Switch test on/of and popap
    if(this.rangeType == 'checkbox'){
        for(let i = 0; i < checkboxes.length; i++) {           
          checkboxes[i].onclick = () =>{             
            this.systemRooms.map(item => {
              if(checkboxes[i].name === item.name && item.state === 'OFF'){
                item.state = 'ON'
              }
              else if(checkboxes[i].name === item.name && item.state === 'ON'){
                item.state = 'OFF'
              }           
            })
          let popap = document.querySelector('.popap');
          popap.style.display = 'block';
          popap.innerHTML = `<div class="popap_title">${checkboxes[i].name} switched to mode ${this.systemRooms[i].state}<div>`;
          setTimeout(()=> popap.style.display = 'none', 1200);       
        }
      }  
    }

     //Switch test on/of to TV block and popap
     if(this.rangeType == 'checkbox' && this.name == 'TV'){
      let infoTvBlock = ''
      for(let i = 0; i < checkboxes.length; i++) {           
        checkboxes[i].onclick = () =>{ 
          
      if(checkboxes[i].checked){
        document.querySelector('.contant_block_info_system').style.display = 'none';  
        document.querySelector('.popapForTv').style.display = 'block'; 


      //If Local Storage empty ---> start function with systemRooms
      if(arrRooms == null){
        
        infoTvBlock = paintBlockTV (this.systemRooms, this.icon, checkboxes[i].name, this.id, this.rangeType);
        }

      //If Local Storage not empty ---> start function with new arrRooms 
      else{
        infoTvBlock = paintBlockTV (arrRooms, this.icon, checkboxes[i].name, this.id, this.rangeType);
      }
      

      this.systemRooms.map(item => {

        if(checkboxes[i].name === item.name && item.state === 'OFF'){
          item.state = 'ON'
        }else if(checkboxes[i].name === item.name && item.state === 'ON'){
          item.state = 'OFF'

        }else{
          return false;
        }                 
      })

      let popap = document.querySelector('.popapForTv');
      popap.innerHTML = `TV in ${checkboxes[i].name} switched to mode ${this.systemRooms[i].state} ${infoTvBlock}`;    

        //checkbox recording 
      let recording = document.getElementById("recording");
      this.systemRooms.map(item => { 
        if(recording.name === item.name && item.recording === 'OFF'){         
          item.recording = 'ON'  
        }else if(recording.name === item.name && item.recording === 'ON'){
          item.recording = 'OFF'
        }else{
          return false;
        } 
        //work with select TV
        let select = document.getElementById("select");
        select.addEventListener("change", e => {
        let channel = select.options[select.selectedIndex].text;
           if(select.name === item.name){
             item.channel = channel
           }
        })

        //work with  radio buttons TV
        let radios = document.querySelectorAll(".with-gap");

        for (let i = 0, length = radios.length; i < length; i++) {
              radios[i].addEventListener("change", e => {
              if (radios[i].name == item.name) {
                item.sound = radios[i].value
              }
            })
        }
        
      })

       //write to the object the change in the values of sound and brightness 
        document.getElementById("btn_tv_back").onclick = () => {
          let volume = document.getElementById("vol");
          let br = document.getElementById("br");

          this.systemRooms.map(item => {

            if(volume.name === item.name ){  
              item.volume = volume.value; 
            }
            if(br.name === item.name ){
              item.brightness = br.value; 
            }
          })

          localStorage.setItem(`${this.name}`, JSON.stringify(this.systemRooms));
          document.querySelector('.contant_block_info_system').style.display = 'block';  
          document.querySelector('.popapForTv').style.display = 'none';          
      }
    }else{
      console.log('check',checkboxes[i].checked);
    }
      }
    }  
  }

     //Switch test input type range and popap---------------
    if(this.rangeType == 'range'){
      let range = document.getElementsByClassName('temp');
      
      for(let i = 0; i < range.length; i++) {  
        range[i].onchange = () =>{ 
          this.systemRooms.map(item => {
            if(range[i].name === item.name){
              item.state = range[i].value;
            }
          })
          let popap = document.querySelector('.popap');
          popap.style.display = 'block';
          popap.innerHTML = `<div class="popap_title">${range[i].name} has a temperature ${this.systemRooms[i].state}°C</div>`;
          setTimeout(()=> popap.style.display = 'none', 1200);   
        }
      }
    }


      //Weather today
      if(document.querySelector('.weather')){
        document.querySelector('.weather').onclick = () => {
              
          //  get location of customer
              $.get("https://ipinfo.io", function (response) { 
                  weatherReport(response)
              }, "jsonp");
      
        }
      }

          }
        }  
      }
    