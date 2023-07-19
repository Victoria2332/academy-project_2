const btnUp = {
  el: document.querySelector(".btn__up"),
  show() {
    // удалим у кнопки класс hide
    this.el.classList.remove("btns__up_hide");
  },
  hide(){
    //добавим к кнопке класс
    this.el.classList.add("btns__up_hide")
  },
  addEventListener() {
    // при прокрутки содержимого страницы 
    window.addEventListener('scroll', () => {
      // определить величину прокрутки
      const scrollY = window.scrollY || document.documentElement.scrollTop
      // если странцы прокручена больше чем на 80px, то делаем кнопку видимой, иначе мы ее должны скрыть
      scrollY > 80 ? this.show() : this.hide();
    });
    // при нажатии на кнопку
    document.querySelector('.btns__up').onclick = () => {
      //переместиться на начало страницы
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth",
      });
    };
  },
};

btnUp.addEventListener();