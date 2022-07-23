import { DAYS_UNTIL_BD, DESC, FIRST_NAME, LAST_NAME } from "../constants/AppConstants";

export function compareFirstName( a, b ) {
    if ( a.name.first < b.name.first ){
      return -1;
    }
    if ( a.name.first > b.name.first ){
      return 1;
    }
    return 0;
  }

  export function compareLastName( a, b ) {
    if ( a.name.last < b.name.last ){
      return -1;
    }
    if ( a.name.last > b.name.last ){
      return 1;
    }
    return 0;
  }

  export function compareDaysUntillBD( a, b ) {
    const days1 = daysUntilNextBD(a.dob.date);
    const days2 = daysUntilNextBD(b.dob.date);
    return days1-days2;
  }

  function daysUntilNextBD(dateStr){
    const today=new Date();
    const bDay = new Date(dateStr);
    bDay.setFullYear(today.getFullYear());
    if(bDay<today){
        bDay.setFullYear(bDay.getFullYear()+1)
    }
    const diffTime = Math.abs(bDay - today);
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24)); 
    return diffDays;
  }

  export function sortContacts(contacts, filedName, sortOrder) {
    if(filedName===LAST_NAME){
      contacts.sort(compareLastName);
    } else if(filedName===DAYS_UNTIL_BD){
      contacts.sort(compareDaysUntillBD);
    } else {
      contacts.sort(compareFirstName); //default
    }
    if(sortOrder===DESC){
      contacts.reverse();
    }
  }