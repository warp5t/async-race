export async function getSheeps() {
  await fetch('http://127.0.0.1:3000/garage')
  .then(data => data.json())
  .then(data => console.log(data, typeof(data)))
  .catch(error => console.error(error))
}

export async function getSheep(id:number) {
  await fetch('http://127.0.0.1:3000/garage/'+id)
  .then(data => data.json())
  .then(data => console.log(data, typeof(data)))
  .catch(error => console.error(error))
}

export async function createSheep(name:string, color:string) {

  const newSheep = {
    name: name,
    color: color,
  };

  await fetch(`http://127.0.0.1:3000/garage`, {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify(newSheep),
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

export async function updateSheep(id:number, name:string, color:string) {

  const newSheep = {
    name: name,
    color: color,
  };

  await fetch(`http://127.0.0.1:3000/garage/${id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(newSheep),
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

export async function deleteSheep(id:number) {
  await fetch(`http://127.0.0.1:3000/garage/${id}`, {
    method: 'DELETE',
  })
  .then((response) => {
    if(response.ok) {
      console.log('Sheep deleted succesfully')
    } else {
      console.error('Failed to delete sheep')
    }
  })
    .catch((error) => {
      console.error('An error occurred:', error)
  })
}

export async function stpStrtDriveEngine(id:number, status:string) {
  await fetch(`http://127.0.0.1:3000/engine/?id=${id}&status=${status}`, {
    method: 'PATCH',
  })
  .then(data => data.json())
  .then(data => console.log(data.velocity, data.distance, data.success, typeof(data)))
  .catch((error) => {
    console.error('An error occurred:', error)
  })
}

export async function getWinners() {
  await fetch(`http://127.0.0.1:3000/winners`, {
    method: 'GET',
  })
  .then(data => data.json())
  .then(data => console.log(data, typeof(data)))
  .catch(error => console.error(error))
}

export async function getWinner(id:number) {
  await fetch(`http://127.0.0.1:3000/winners/${id}`, {
    method: 'GET',
  })
  .then(data => data.json())
  .then(data => console.log(data, typeof(data)))
  .catch(error => console.error(error))
}

export async function createWinner(id:number, wins:number, time:number) {

  const winnerSheep =  {
    id: id,
    wins: wins,
    time: time
  }

  await fetch(`http://127.0.0.1:3000/winners`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(winnerSheep),
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

export async function deleteWinner(id:number) {
  await fetch(`http://127.0.0.1:3000/winners/${id}`, {
    method: 'DELETE',
  })
  .then((response) => {
    if(response.ok) {
      console.log('Sheep deleted succesfully')
    } else {
      console.error('Failed to delete sheep')
    }
  })
    .catch((error) => {
      console.error('An error occurred:', error)
  })
}

export async function updateWinner(id:number, wins:number, time:number) {

  const updateSheep = {
    wins: wins,
    time: time,
  };

  await fetch(`http://127.0.0.1:3000/winners/${id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(updateSheep),
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