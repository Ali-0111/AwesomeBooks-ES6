import { DateTime } from "./luxon.js"
 export const timeDate = ()=> {   
    const dateText = document.querySelector('.date');
    const date = DateTime.now().toLocaleString(DateTime.DATE_MED);
    const time = DateTime.now()
    .toLocaleString(DateTime.TIME_WITH_SECONDS);
    dateText.innerText = date+" "+time;
}
