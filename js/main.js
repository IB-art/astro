$(function(){
  //  слайдер
  $('.slider__item').slick({
    prevArrow:'<img class="arrow arrow-left" src="images/slider/arrow-left-2.png" alt="">',
    nextArrow:'<img class="arrow arrow-right" src="images/slider/arrow-right-2.png" alt="">',
    dots:false,
    // autoplay: true,
    slidesToShow: 3,
    slidesToScroll: 3,
    variableWidth: true,
   
    responsive: [
      {
        breakpoint: 996,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        }
      },
      {
        breakpoint: 677,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      }
    ]
  });

  //  табы
  $('.present__items .tab').on('click', function(event) {
    var id = $(this).attr('data-id');
      $('.present__items').find('.tab-item').removeClass('active-tab').hide();
      $('.present__items .tabs').find('.tab').removeClass('active');
      $(this).addClass('active');
      $('#'+id).addClass('active-tab').fadeIn();
      return false;
  });


  //  переключатель недель (написан Димой)
  const tabDates = [
    {min: new Date('10.9.2024'), max: new Date('10.15.2024 23:59:59')},
    {min: new Date('10.16.2024'), max: new Date('10.22.2024 23:59:59')},
    {min: new Date('10.23.2024'), max: new Date('10.29.2024 23:59:59')},
    {min: new Date('10.30.2024'), max: new Date('11.06.2024 23:59:59')}
  ]
  const currentDate = new Date();
 //  включатель недели наступившей, но ксожалению выключает открытие карточек прошедших недель (написан Димой)
  // tabDates.forEach((tab, index) => {
  //   if (currentDate >= tab.min && currentDate <= tab.max) {
  //     const id = index + 1;
  //     $('.present__items').find('.tab-item').removeClass('active-tab').hide();
  //     $('.present__items .tabs').find('.tab').removeClass('active');
  //     $('#tab_'+id).addClass('active');
  //     $('#'+id).addClass('active-tab tab-item__func').fadeIn();
  //   }
  // })



 // Модальное Окно 
 // Получаем элементы
 const modal = document.getElementById("modal");
 const closeModalBtn = document.getElementById("closeModalBtn");
 const openModalBtns = document.querySelectorAll(".openModalBtn");

 // Открытие модального окна для каждой кнопки
 openModalBtns.forEach((button) => {
    button.addEventListener("click", (event) => {
        event.preventDefault(); // Отменяем стандартное поведение кнопки
        modal.style.display = "flex";
        document.body.classList.add("modal-open"); // Блокируем скроллинг на странице
    });
 });

 // Закрытие модального окна при клике на крестик
 closeModalBtn.onclick = function() {
    modal.style.display = "none";
    document.body.classList.remove("modal-open"); // Включаем скроллинг на странице
 };

 // Закрытие модального окна при клике вне его
 window.onclick = function(event) {
    if (event.target === modal) {
        modal.style.display = "none";
        document.body.classList.remove("modal-open"); // Включаем скроллинг на странице
    }
 };

 


});





//  поворот карточки при клике 
function openItem(event) {
  if (event.className === 'tab-item__content') {
    event.className = 'tab-item__content tab-item__content--active';
  } else {
    event.className = 'tab-item__content';
  }
};


/* форма в модальном окне */
document.getElementById("registrationForm").addEventListener("submit", function(event) {
  event.preventDefault();

  // Получаем значения полей
  const name = document.getElementById("name").value.trim();
  const dob = document.getElementById("dob").value;
  const phone = document.getElementById("phone").value.trim();
  const email = document.getElementById("email").value.trim();
  const errorMessage = document.getElementById("error-message");

  // Простая валидация
  if (!name || !dob || !phone || !email) {
      errorMessage.textContent = "Заполните все обязательные поля.";
      return;
  }

  // Проверка паттерна телефона
  const phonePattern = /^\+?\d{10,15}$/;
  if (!phonePattern.test(phone)) {
      errorMessage.textContent = "Введите корректный номер телефона.";
      return;
  }

  // Проверка e-mail с помощью встроенной HTML5 валидации
  const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  if (!emailPattern.test(email)) {
      errorMessage.textContent = "Введите корректный E-mail.";
      return;
  }

  // Если валидация прошла, перенаправляем на другую страницу
  window.location.href = "https://ib-art.github.io/Galery/";
});


