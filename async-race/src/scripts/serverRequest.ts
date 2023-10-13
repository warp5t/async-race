export async function resetCount() {
  await fetch('http://127.0.0.1:3000/garage')
    .then(data => data.json())
    .then(async (data) => {
      for (const key of data) {
        if (key.id !== 1) {
          await fetch(`http://127.0.0.1:3000/garage/${key.id}`, {
              method: 'DELETE',
            })
            .then((response) => {
              if (response.ok) {
                console.log('Sheep deleted succesfully')
              } else {
                console.error('Failed to delete sheep')
              }
            })
            .catch((error) => {
              console.error('An error occurred:', error)
            })
        }
      }
    })
    .catch(error => console.error(error))
}

export async function getShips() {
  await fetch('http://127.0.0.1:3000/garage')
    .then(data => data.json())
    .then(data => {
      console.log(data, ' - spaceShips')
    })
    .catch(error => console.error(error))
}
import {
  spliceName
} from './randomize';
export async function shipSpliceNameManipulate(term ? : string, id ? : number) {
  await fetch('http://127.0.0.1:3000/garage')
    .then(data => data.json())
    .then(data => {
      console.log(data, ' - spaceShips')
      if (term === 'length') {
        console.log(data.length)
        return data.length
      }
      if (id) {
        const index = spliceName.indexOf(data[id - 1].name)
        spliceName.splice(index, 1)
      }
    })
    .catch(error => console.error(error))
}

export async function getShip(id: number) {
  await fetch('http://127.0.0.1:3000/garage/' + id)
    .then(data => data.json())
    .then(data => console.log(data, typeof (data)))
    .catch(error => console.error(error))
}

export async function createShip(name: string, color: string) {

  const newShip = {
    name: name,
    color: color,
  };

  await fetch(`http://127.0.0.1:3000/garage`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newShip),
    })
    .then(response => {
      if (response.ok) {
        console.log('Sheep created successfully');
      } else {
        console.error('Failed to create sheep');
      }
    })
    .catch(error => {
      console.error('An error occurred:', error);
    });
}

export async function updateShip(id: number, name: string, color: string) {

  const newShip = {
    name: name,
    color: color,
  };

  await fetch(`http://127.0.0.1:3000/garage/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newShip),
    })
    .then((response) => {
      if (response.ok) {
        console.log('Sheep updated successfully')
      } else {
        console.error('Failed to update sheep')
      }
    })
    .catch(error => {
      console.error('An error occurred:', error)
    })
}

export async function deleteShip(id: number) {
  await fetch(`http://127.0.0.1:3000/garage/${id}`, {
      method: 'DELETE',
    })
    .then((response) => {
      if (response.ok) {
        console.log('Sheep deleted succesfully')
      } else {
        console.error('Failed to delete sheep')
      }
    })
    .catch((error) => {
      console.error('An error occurred:', error)
    })
}

// import { arrShipAnim } from './startStopShip';
// export async function stpStrtDriveEngine(
//   id: number, status: string, fnAnim?: (velocity: number) => void) {
//     let movePermiss = false;
//     if (status === 'start' || status === 'drive') {
//     console.log(`Cannot run ID ${id} because its status is ${status}`);
//     return;
//   }
//     await fetch(`http://127.0.0.1:3000/engine/?id=${id}&status=${status}`, {
//       method: 'PATCH',
//     })
//     .then((response) => {
//       if (status === 'started' && response.status === 200) {
//         movePermiss = true;
//         return response.json();
//       } else if (status === 'drive' && response.status === 500) {
//         clearInterval(arrShipAnim[id - 1])
//         movePermiss = false;
//         return response.text();
//       } else if (status === 'drive' && response.status === 429) {
//         movePermiss = false;
//         return response.json;
//       } else if (status === 'stopped' && response.status === 200) {
//         clearInterval(arrShipAnim[id - 1])
//         movePermiss = false;
//         return response.json;
//       } else {
//         return response.json();
//       }
//     })
//     .then((data) => {
//       if (status === 'started' && data && movePermiss) {
//         console.log(data.velocity, '- velocity', data.distance, '- distance',data.success, '- success',data);
//         if (fnAnim) {
//           const generalWrap = document.querySelector('.wrap') as HTMLDivElement;
//           const widthTrack = generalWrap.offsetWidth;
//           const vel = Math.trunc(((widthTrack * data.velocity) / data.distance) * 10);
//           console.log(vel, ' - vel');
//           fnAnim(vel);
//         }
//       }
//       if (status === 'drive' && data.success === true) {
//         console.log('SUCCESS drive');
//       } 
//     })
//     .catch((error) => {
//       console.error('An error occurred:', error);
//     });
// }

import { arrShipAnim } from './startStopShip';
import { arrWrapSvg } from './animation'

export const arrShipBool: Array<boolean> = [];

export async function stpStrtDriveEngine(
  id: number, status: string, fnAnim?: (velocity: number) => void
  ) {
  
  // let movePermiss = false;
  
  await fetch(`http://127.0.0.1:3000/engine/?id=${id}&status=${status}`, {
    method: 'PATCH',
  })
  .then((response) => {
    if (status === 'started' && response.status === 200) {
      arrShipBool[id - 1] = false;
      return response.json();
    } else if (status === 'drive' && response.status === 500) {
      clearInterval(arrShipAnim[id - 1])
      arrShipBool[id - 1] = false;
      return 
    } else if (status === 'drive' && response.status === 429) {
      arrShipBool[id - 1] = false;
      return 
    } else if (status === 'stopped' && response.status === 200) {
      clearInterval(arrShipAnim[id - 1])
      arrShipBool[id - 1] = true;
      arrWrapSvg[id -1].style.left = '0px';
      return response.json;
    }
  })
  .then((data) => {
    if (status === 'started' && data) {
      console.log(data.velocity, '- velocity', data.distance, '- distance', data.success, '- success',data);
      if (fnAnim) {
        const generalWrap = document.querySelector('.wrap') as HTMLDivElement;
        const widthTrack = generalWrap.offsetWidth;
        const vel = Math.trunc(((widthTrack * data.velocity) / data.distance) * 10);
        console.log(vel, ' - vel');
        fnAnim(vel);
      }
    }
    if (status === 'drive' && data.success === true) {
      console.log('SUCCESS drive');
    } 
  })
  .catch((error) => {
    console.error('An error occurred:', error);
  });
}




export async function getWinners() {
  await fetch(`http://127.0.0.1:3000/winners`, {
      method: 'GET',
    })
    .then(data => data.json())
    .then(data => console.log(data, typeof (data)))
    .catch(error => console.error(error))
}

export async function getWinner(id: number) {
  await fetch(`http://127.0.0.1:3000/winners/${id}`, {
      method: 'GET',
    })
    .then(data => data.json())
    .then(data => console.log(data, typeof (data)))
    .catch(error => console.error(error))
}

export async function createWinner(id: number, wins: number, time: number) {

  const winnerShip = {
    id: id,
    wins: wins,
    time: time
  }

  await fetch(`http://127.0.0.1:3000/winners`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(winnerShip),
    })
    .then(response => {
      if (response.ok) {
        console.log('Winner created successfully');
      } else {
        console.error('Failed to create winner');
      }
    })
    .catch(error => {
      console.error('An error occurred:', error);
    });
}

export async function deleteWinner(id: number) {
  await fetch(`http://127.0.0.1:3000/winners/${id}`, {
      method: 'DELETE',
    })
    .then((response) => {
      if (response.ok) {
        console.log('Winner deleted succesfully')
      } else {
        console.error('Failed to delete winner or winner absent with such id')
      }
    })
    .catch((error) => {
      console.error('An error occurred:', error)
    })
}

export async function resetWinners() {
  await fetch(`http://127.0.0.1:3000/winners`, {
      method: 'GET',
    })
    .then(data => data.json())
    .then(async (data) => {
      for (const key of data) {
        await fetch(`http://127.0.0.1:3000/winners/${key.id}`, {
            method: 'DELETE',
          })
          .then((response) => {
            if (response.ok) {
              console.log('Winner deleted succesfully')
            } else {
              console.error('Failed to delete winner or winner absent with such id')
            }
          })
          .catch((error) => {
            console.error('An error occurred:', error)
          })
      }
    })
    .catch(error => console.error(error))
}

export async function updateWinner(id: number, wins: number, time: number) {

  const updateShip = {
    wins: wins,
    time: time,
  };

  await fetch(`http://127.0.0.1:3000/winners/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(updateShip),
    })
    .then((response) => {
      if (response.ok) {
        console.log('Winner updated successfully')
      } else {
        console.error('Failed to update winner')
      }
    })
    .catch(error => {
      console.error('An error occurred:', error)
    })
}