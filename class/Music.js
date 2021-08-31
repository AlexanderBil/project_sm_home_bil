class Music extends SuperBlock{
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
  
  const music = new Music('Music', 'system7', 'icons/14.png', '7', 'audio', [
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
  
  music.createBlock()
  console.log(music);