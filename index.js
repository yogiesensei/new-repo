const container = document.getElementById('container')

const fetchDataUser = async () => {
    const data = await fetch('https://jsonplaceholder.typicode.com/users')
        .then(result => result.json())
    data.map(item => {
        const name = document.createElement('p')
        name.style.fontWeight = 'bold'
        const email = document.createElement('p')
        name.innerText = `name: ${item.name}`
        const phone = document.createElement('span')
        phone.innerText = `phone: ${item.phone}`
        email.innerText = `email: ${item.email}`
        container.appendChild(name)
        container.appendChild(email)
        container.appendChild(phone)
    })
    console.log(data)
}

fetchDataUser()