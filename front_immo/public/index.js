const deleteAnnonce = id => {
  fetch(`http://localhost:3000/delete/${id}`, {
      method: 'delete',
  })
      .then(() => {
          window.location.assign('/')
      })
      .catch(err => {
          throw err
      })
}

const updateAnnonce = id => {
  event.preventDefault()

  fetch(`http://localhost:3000/update/${id}`, {
      method: 'put',
      body: JSON.stringify({
          titre: document.getElementById('titre').value,
          description: document.getElementById('description').value,
          adresse: document.getElementById('adresse').value,
          code_postal: document.getElementById('code_postal').value,
          ville: document.getElementById('ville').value,
          prix: document.getElementById('prix').value,
      }),
      headers: {
          'Content-Type': 'application/json',
      },
  })
      .then(() => {
          window.location.assign(`/detail/${id}`)
      })
      .catch(err => {
          throw err
      })
}

const createAnnonce = () => {
  event.preventDefault()
  fetch('http://localhost:3000/', {
      method: 'post',
      body: JSON.stringify({
          titre: document.getElementById('titre').value,
          description: document.getElementById('description').value,
          adresse: document.getElementById('adresse').value,
          code_postal: document.getElementById('code_postal').value,
          ville: document.getElementById('ville').value,
          prix: document.getElementById('prix').value,
      }),
      headers: {
          'Content-Type': 'application/json',
      },
  })
      .then(() => {
          window.location.assign('/')
      })
      .catch(err => {
          throw err
      })
}