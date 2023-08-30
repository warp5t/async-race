export async function getSheeps() {
  await fetch('http://127.0.0.1:3000/garage')
  .then(data => data.json())
  .then(data => console.log(data, typeof(data)))
  .catch(err => console.error(err))
}

export async function getSheep(id:number) {
  await fetch('http://127.0.0.1:3000/garage/'+id)
  .then(data => data.json())
  .then(data => console.log(data, typeof(data)))
  .catch(err => console.error(err))
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