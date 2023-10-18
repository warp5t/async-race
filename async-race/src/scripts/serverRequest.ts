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
  return new Promise((resolve, reject) => {
     fetch('http://127.0.0.1:3000/garage/' + id)
    .then(response => response.json())
      .then((data) => {
        const ship = {
          id: data.id,
          name: data.name,
          color: data.color
        };
        resolve(ship);
      })
      .catch((error) => {
        console.error(error);
        reject(error);
      });
}) 

    // .then(data => data.json())
    // .then(data => console.log(data, typeof (data)))
    // .catch(error => console.error(error))
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

import { arrShipAnim } from './startStopShip';
import { arrWrapSvg } from './animation'


export const arrShipBool: Array<boolean> = [];
export const arrTimeStart: Array<number> = [];

// export async function stpStrtDriveEngine(
//   id: number, status: string, fnAnim?: (velocity: number) => void) {
//    arrTimeStart[id -1] = Date.now();
//   await fetch(`http://127.0.0.1:3000/engine/?id=${id}&status=${status}`, {
//     method: 'PATCH',
//   })
//   .then((response) => {
//     if (status === 'started' && response.status === 200) {   
//       arrShipBool[id - 1] = false;
//       return response.json();
//     } else if (status === 'drive' && response.status === 500) {
//       clearInterval(arrShipAnim[id - 1])
//       arrShipBool[id - 1] = false;
//       return 
//     } else if (status === 'drive' && response.status === 429) {
//       arrShipBool[id - 1] = false;
//       return 
//     } else if (status === 'stopped' && response.status === 200) {
//       clearInterval(arrShipAnim[id - 1])
//       arrShipBool[id - 1] = true;
     
//       arrWrapSvg[id -1].style.left = '0px';
//       return response.json;
//     }
//   })
//   .then((data) => {
//     if (status === 'started' && data) {
//       // console.log(data.velocity, '- velocity', data.distance, '- distance', data.success, '- success',data);
//       if (fnAnim) {
//         const generalWrap = document.querySelector('.wrap') as HTMLDivElement;
//         const widthTrack = generalWrap.offsetWidth;
//         const vel = Math.trunc(((widthTrack * data.velocity) / data.distance) * 10);
//         // console.log(vel, ' - vel');
//         fnAnim(vel);
//       }
//     }
//     if (status === 'drive' && data.success === true) {
//       console.log('SUCCESS drive');
//     } 
//   })
//   .catch((error) => {
//     console.error('An error occurred:', error);
//   });
// }
export async function stpStrtDriveEngine(
  id: number, status: string, fnAnim?: (velocity: number) => void
) {
  arrTimeStart[id - 1] = Date.now();

  try {
    const response = await fetch(`http://127.0.0.1:3000/engine/?id=${id}&status=${status}`, {
      method: 'PATCH',
    });

    if (status === 'started' && response.status === 200) {
      arrShipBool[id - 1] = false;
      const data = await response.json();
      if (fnAnim) {
        const generalWrap = document.querySelector('.wrap') as HTMLDivElement;
        const widthTrack = generalWrap.offsetWidth;
        const vel = Math.trunc(((widthTrack * data.velocity) / data.distance) * 10);
        fnAnim(vel);
      }
    } else if (status === 'drive' && response.status === 500) {
      clearInterval(arrShipAnim[id - 1]);
      arrShipBool[id - 1] = false;
    } else if (status === 'drive' && response.status === 429) {
      arrShipBool[id - 1] = false;
    } else if (status === 'stopped' && response.status === 200) { 
      console.log(id - 1);
      clearInterval(arrShipAnim[id - 1]);
      arrShipBool[id - 1] = true;
      arrWrapSvg[id - 1].style.left = '0px';
      const data = await response.json();
      console.log(data);
      
    }
  } catch (error) {
    console.error('An error occurred:', error);
  }
}


export async function getWinners(order?: string, sort?: string) {
  return new Promise((resolve, reject) => {
    fetch(`http://127.0.0.1:3000/winners?_order=${order}&_sort=${sort}`, {
      method: 'GET',
    })
      .then(response => response.json())
      .then(data => {
        // console.log(data, typeof data);
        resolve(data);
      })
      .catch(error => {
        console.error(error);
        reject(error);
      });
  });
}


// export async function getWinner(id: number): Promise<string | void> {
//   await fetch(`http://127.0.0.1:3000/winners/${id}`, {
//       method: 'GET',
//     })
//     .then((response) => {
//       if(response.status === 200) {
//         return response.json()
//       } else if (response.status === 404) {
//         return 'no winner'
//       }
//     })
//     // .then(data => console.log(
//     //   data.wins, typeof (data)))
//     .catch(error => console.error(error))
// }

export interface Winner {
  time: number,
  wins: number,
  persistance: boolean
}

export async function getWinner(id: number): Promise<Winner> {
  const winner: Winner = {
  time: 0,
  wins: 0,
  persistance: false,
  }
  try {
    const response = await fetch(`http://127.0.0.1:3000/winners/${id}`, {
      method: 'GET',
    });

    if (response.status === 200) {
      const data = await response.json();
      console.log(data.time, ' - data.time', data.wins, ' - data.wins');
      winner.time = data.time;
      winner.wins = data.wins;
      winner.persistance = true;
      return winner;
    } else if (response.status === 404) {
      winner.persistance = false;
      return winner;
    }
  } catch (error) {
    console.error(error);
  }

  throw new Error('Failed to retrieve winner'); // Add a return statement for error case
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
    id: id,
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