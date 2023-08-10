export async function getCars() {
  await fetch('http://127.0.0.1:3000/garage')
  .then(data => data.json())
  .then(data => console.log(data, typeof(data)))
  .catch(err => console.error(err))
}

export async function getCar(id:number) {
  await fetch('http://127.0.0.1:3000/garage/'+id)
  .then(data => data.json())
  .then(data => console.log(data, typeof(data)))
  .catch(err => console.error(err))
}

export async function createCar(id:number, name:string, color:string) {

  const newCar = {
    name: name,
    color: color,
    id: id,
  };

  await fetch(`http://127.0.0.1:3000/garage`, {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify(newCar),
})
.then(response => {
  if (response.ok) {
    console.log('Car updated successfully');
  } else {
    console.error('Failed to update car');
  }
})
.catch(error => {
  console.error('An error occurred:', error);
});
}

const btnSelect = document.getElementById('SELECT-0') as HTMLButtonElement;

btnSelect.addEventListener('click',() => { createCar(6, 'pobeda', 'red') })