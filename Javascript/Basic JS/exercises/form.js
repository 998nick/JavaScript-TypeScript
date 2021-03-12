

function myScope() {

     const form = document.querySelector('.form');
     const result = document.querySelector('.result');

     const people = [];

    //  form.onsubmit = function (event) {
    //   event.preventDefault();
    //   alert(1);
    //   console.log("Foi enviado")
    //  };

    function receiveEventForm(event) {
       
        event.preventDefault();

        const name = form.querySelector('.nome').value;
        const surname = form.querySelector('.sobrenome').value;
        const weight = form.querySelector('.peso').value;
        const height = form.querySelector('.altura').value;
     
   people.push({
       name: name,
       surname: surname,
       weight: weight,
       height: height
   });

       result.innerHTML += `<p>${name} ${surname} ${weight} ${height}</p>`
    
    }


    form.addEventListener('submit', receiveEventForm);






}

myScope();