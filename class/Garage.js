class Garage extends SuperBlock{
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
  
  const garage = new Garage('Garage', 'system4', 'icons/16.png', '4', 'checkbox', [
    {name: 'Gate',
     state: 'OFF',
   }
  ])
  garage.createBlock();
  console.log(garage);