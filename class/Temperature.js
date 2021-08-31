class Temperature extends SuperBlock{
    constructor(name, classN, icon, id, rangeType, systemRooms){
      super(name, classN, icon);
      this.systemRooms = systemRooms;
      this.id = id;
      this.rangeType = rangeType;
  }
  createBlock(){
    super.createBlock() 
  }
  
  }
  
  const temp = new Temperature('Temperature', 'system3', 'icons/12.png', '3', 'range', [
    {name: 'Garage',
     state: 5,
    },
    {name: 'Kitchen',
    state: 5,
   },
    {name: 'Cabinet',
    state: 5,
   },
    {name: 'Living room',
    state: 5,
   },
    {name: 'Bedroom',
    state: 5,
   },
    {name: 'Guest bedroom',
    state: 5,
   },
    {name: 'Loft',
    state: 5,
   }
  ])
  temp.createBlock();
  console.log(temp);