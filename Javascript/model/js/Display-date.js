
// const h1 = document.querySelector('.container h1')
// const date = new Date();

// function getWeekDay(weekDay) {

//     let monthNameText;

//     switch (weekDay) {

//         case 0:
//             monthNameText = 'domingo'
//             return monthNameText;
//         case 1:
//             monthNameText = 'segunda-feira'
//             return monthNameText;
//         case 2:
//             monthNameText = 'terca-feira'
//             return monthNameText;
//         case 3:
//             monthNameText = 'quarta-feira'
//             return monthNameText;
//         case 4:
//             monthNameText = 'quinta-feira'
//             return monthNameText;
//         case 5:
//             monthNameText = 'sexta-feira'
//             return monthNameText;
//         case 6:
//             monthNameText = 'sabado'
//             return weekDayText;
//         default:
//             weekDay = 'Dia invalido'
//             return weekDayText;
//     }

// }

// function getMonthName(month) {

//     let monthNameText;

//     switch (month) {

//         case 0:
//             monthNameText = 'janeiro'
//             return monthNameText;
//         case 1:
//             monthNameText = 'fevereiro'
//             return monthNameText;
//         case 2:
//             monthNameText = 'março'
//             return monthNameText;
//         case 3:
//             monthNameText = 'abril'
//             return monthNameText;
//         case 4:
//             monthNameText = 'maio'
//             return monthNameText;
//         case 5:
//             monthNameText = 'junho'
//             return monthNameText;
//         case 6:
//             monthNameText = 'julho'
//             return monthNameText;
//         case 2:
//             monthNameText = 'agosto'
//             return monthNameText;
//         case 3:
//             monthNameText = 'setembro'
//             return monthNameText;
//         case 4:
//             monthNameText = 'outubro'
//             return monthNameText;
//         case 5:
//             monthNameText = 'novembro'
//             return monthNameText;
//         case 6:
//             monthNameText = 'dezembro'
//             return monthNameText;
//         default:
//             weekDay = 'Mes invalido'
//             return monthNameText;
//     }

// }

// function leftZero(num) {
//  return num >= 10 ? num : `0${num}`;
// }


// function createDate(date) {

//     const weekDay = date.getDay();
//     const numberMonth = date.getMonth();

//     const nameDay = getWeekDay(weekDay);
//     const nameMonth = getMonthName(numberMonth);
    
//     return (
//         `${nameDay}, ${date.getDate()} de ${nameMonth}, 
//          de ${leftZero(date.getFullYear())}
//         ${leftZero(date.getHours())}:${leftZero(date.getMinutes())}
//          `)
// }

// h1.innerHTML = createDate(date)


const h1 = document.querySelector('.container h1');
const date = new Date();
h1.innerHTML = date.toLocaleString('pt-BR', {dateStyle: 'full', timeStyle: 'short'})