
// fetch('./json/people.json')
//     .then(response => response.json())
//     .then(json => loadPageElements(json))

axios('./json/people.json')
.then(response => loadPageElements(response.data))

function loadPageElements(json) {
    const table = document.createElement('table')
    for (let person of json) {
      const tr = document.createElement('tr')

      let td = document.createElement('td')
      td.innerHTML = person.name
      tr.appendChild(td)

      td = document.createElement('td')
      td.innerHTML = person.age
      tr.appendChild(td)

      td = document.createElement('td')
      td.innerHTML = person.salary
      tr.appendChild(td)

      table.appendChild(tr)
    }

    const result = document.querySelector('.result')
    result.appendChild(table)

}



