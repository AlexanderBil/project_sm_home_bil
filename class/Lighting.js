class Lighting extends SuperBlock{
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
  
  const light = new Lighting('Lighting', 'system5', 'icons/13.png', '5', 'checkbox', [
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
  
  light.createBlock()
  console.log(light);