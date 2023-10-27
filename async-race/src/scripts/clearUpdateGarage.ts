import {
  deleteShip,
  getShips,
  createShip,
  updateShip
} from "./serverRequest";

interface Ship {
  id: number;
  name: string;
  color: string;
}
let carList: Ship[];

function initiate() {
  getShips()
  carList.forEach((element) => {
    deleteShip(element.id)
  })
  createShip('Space Sheep', '#4d5d53')
}

async function initiatingData() {
  let counter = 0;
  await fetch('http://127.0.0.1:3000/garage')
    .then(data => data.json())
    .then(data => {
      carList = data
      carList.forEach((element) => {
        if (element.name === 'Tesla' || element.name === 'BMW' || element.name === 'Mersedes' || element.name === 'Ford') {
          counter++
        }
      })
      if (counter === 4) initiate()
      else console.log('garage is updated')
    })
    .catch(error => console.error(error))
}

initiatingData()
updateShip(1, 'Space Sheep', '#4d5d53')