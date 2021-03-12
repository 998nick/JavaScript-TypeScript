

const date = new Date()
const weekDay = date.getDay() 


function getWeekDay(weekDay) {

    let weekDayText;

switch (weekDay) {
    
    case 0:
        weekDayText = 'Domingo'
        return weekDayText;
    case 1:
        weekDayText = 'Segunda'    
        return weekDayText;
    case 2:
        weekDayText = 'Terca'    
        return weekDayText;
    case 3:
        weekDayText = 'Quarta'    
        return weekDayText;
    case 4:
        weekDayText = 'Quinta'    
        return weekDayText;
    case 5:
        weekDayText = 'Sexta'    
        return weekDayText;
    case 6:
        weekDayText = 'Sabado'    
        return weekDayText;
    default:
        weekDay = 'Dia invalido'
  }


}

let weekDayText = getWeekDay(weekDay);


console.log(weekDay, weekDayText)


