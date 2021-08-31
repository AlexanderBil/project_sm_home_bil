class Video extends SuperBlock{
    constructor(name, classN, icon, id, rangeType, systemRooms){
      super(name, classN, icon);
      this.systemRooms = systemRooms;
      this.id = id;
      this.rangeType = rangeType;
  }
  // createBlock(){
  //   super.createBlock() 
  // }
  }
  
  const video = new Video('Video', 'system2', 'icons/11.png', '2', 'checkbox', [
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
    {name: 'Bedroom',
    state: 'OFF',
   },
    {name: 'Guest bedroom',
    state: 'OFF',
   },
    {name: 'Loft ',
    state: 'OFF',
   }
  ])
  video.createBlock();
  console.log(video);