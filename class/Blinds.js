class Blinds extends SuperBlock{
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
  
  const blinds = new Blinds('Blinds', 'system6', 'icons/17.png', '6', 'checkbox', [
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
  
  blinds.createBlock()
  console.log(blinds);