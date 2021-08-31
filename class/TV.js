class Tv extends SuperBlock{
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
  

  const tv = new Tv ('TV', 'system8', 'icons/15.png', '8', 'checkbox', [
    {name: 'Garage',
     state: 'OFF',
     channel: '0',
     brightness:20,
     volume: 10,
     recording: 'OFF',
     sound: ''
    },
    {name: 'Kitchen',
    state: 'OFF',
    channel: '0',
    brightness:20,
    volume: 10,
    recording: 'OFF',
    sound: ''
   },
    {name: 'Cabinet',
    state: 'OFF',
    channel: '0',
    brightness:20,
    volume: 10,
    recording: 'OFF',
    sound: ''
   },
    {name: 'Living room',
    state: 'OFF',
    channel: '0',
    brightness:20,
    volume: 10,
    recording: 'OFF',
    sound: ''
   },
    {name: 'Bedroom ',
    state: 'OFF',
    channel: '0',
    brightness:20,
    volume: 10,
    recording: 'OFF',
    sound: ''
   },
    {name: 'Guest bedroom',
    state: 'OFF',
    channel: '0',
    brightness:20,
    volume: 10,
    recording: 'OFF',
    sound: ''
   },
    {name: 'Loft',
    state: 'OFF',
    channel: '0',
    brightness:20,
    volume: 10,
    recording: 'OFF',
    sound: ''
   }
  ])
  
  tv.createBlock()
  console.log(tv);