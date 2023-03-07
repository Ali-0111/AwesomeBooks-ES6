export const links = document.querySelectorAll('.nav li');
const input = document.querySelector('.inputs');
const list = document.querySelector('.newlst');
const contact = document.querySelector('.contact2');

export const browse =(e)=> {
    const element = e.target.className;
    switch (element) {
      case 'add':  input.classList.remove('hide');
         list.classList.add('hide');
         contact.classList.add('hide');
        break;
      case 'list':  list.classList.remove('hide');
         input.classList.add('hide');
         contact.classList.add('hide');
        break;
      default:
         input.classList.add('hide');
         list.classList.add('hide');
         contact.classList.remove('hide');
    }
  }