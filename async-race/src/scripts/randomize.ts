const spaceShip = ['Soyuz','Shenzhou','SpaceShipTwo','Crew','New','International','Shepard','Dragon','Space','Station','Tiangong','Vostok','Mercury','X-15','Voskhod','Gemini','Apollo','Shuttle','SpaceShipOne','Salyut','Almaz','Skylab','Mir','Starliner','Orion','Starship','Gaganyaan','Orel','Zeus','Era'];
const spaceModel = ['I','II','III','IV','V','VI','Moonrakers','Theseus','Galactica','Hyperion','Moya','Ishimura','Enterprise','Discovery','Voyager ','Klingon','Millennium','Star','Bioship ','Intergalactic ','Icarus','Spaceflight','Ranger','Interpid','Defiant','Protostar','Akira','Obena','Exelsior','Alies'];
const spliceName: Array<string> = [];


function randomName() {
  let constrPerm = true;
  while(constrPerm) {
    const firstIndex = Math.trunc(Math.random() * 100);
    const secondIndex = Math.trunc(Math.random() * 100);
    let permissSplice = false;
    if(firstIndex < 30 && secondIndex < 30) {
      permissSplice = true;
    }
    const extName = spaceShip[firstIndex] + ' ' + spaceModel[secondIndex];
    if(permissSplice && !spliceName.includes(extName)) {
      if(spaceShip[firstIndex] === undefined){
        console.log(firstIndex, '- firstIndex')
      }
      spliceName.push(extName)
      constrPerm = false;
    }
  }
}


function wrapRand() {
  let counter = 100;
  while(counter > 0) {
    randomName()
    counter--
  }
}
wrapRand()
wrapRand()


