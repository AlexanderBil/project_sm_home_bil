class Alarm extends SuperBlock{
    constructor(name, classN, icon, id, rangeType, systemRooms){
      super(name, classN, icon);
      this.systemRooms  = systemRooms;
      this.id = id;
      this.rangeType = rangeType;
    }
    createBlock(){
      super.createBlock() 
  }
  }
  
  const alarm = new Alarm('Alarm', 'system1', 'icons/10.png', '1', 'checkbox', [
    {name: 'Garage',
     state: 'OFF',
    },
    {name: 'Kitchen',
    state: 'OFF',
   },
    {name: 'Cabinet',
    state: 'OFF',
   },
    {name: 'Living room',
    state: 'OFF',
   },
    {name: 'Bedroom ',
    state: 'OFF',
   },
    {name: 'Guest bedroom',
    state: 'OFF',
   },
    {name: 'Loft',
    state: 'OFF',
   }
  ])
  
  alarm.createBlock()
  console.log(alarm);