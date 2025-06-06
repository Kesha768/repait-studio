document.addEventListener("DOMContentLoaded", function () {
  const buttons = document.querySelectorAll("[data-aplSelect]");
  const screens = document.querySelectorAll(".application--mobile__screen-");
  const parentContainer = document.querySelector(".application--mobile");

  buttons.forEach((button) => {
    button.addEventListener("click", function (event) {
      const targetScreen = this.getAttribute("data-aplSelect");
      const thisScreen = this.getAttribute("data-aplSelectThis");
      if (
        event.target.id === "applicationForm--mob--btn" &&
        thisScreen === "4"
      ) {
        event.preventDefault();
        const formElements = document.getElementById(
          "applicationForm--mob"
        ).elements;
        let allFieldsFilled = true;

        for (let i = 0; i < formElements.length; i++) {
          const element = formElements[i];
          if (element.type !== "submit" && !element.value) {
            allFieldsFilled = false;
            element.classList.add("application-form__input--red");
          } else {
            element.classList.remove("application-form__input--red");
          }
        }

        if (!document.querySelector(".sogl-mob").checked) {
          allFieldsFilled = false;
          alert("Пожалуйста, согласитесь с условиями!");
        }

        if (!allFieldsFilled) {
          console.log("Пожалуйста, заполните все поля.");
          return;
        }
      }
      screens.forEach((screen) => {
        screen.style.display = "none";
      });

      const nextEl = document.querySelector(
        `.application--mobile__screen-${targetScreen}`
      );
      const thisEl = document.querySelector(
        `.application--mobile__screen-${thisScreen}`
      );
      if (nextEl && thisEl) {
        document.querySelector('.application--mobile').classList.remove(`formActive-${thisScreen}`);
        document.querySelector('.application--mobile').classList.add(`formActive-${targetScreen}`);
        thisEl.classList.add("hide")
        nextEl.classList.remove("hide");
        nextEl.classList.add("show");

        setTimeout(() => {
            thisEl.style.display = "none";
            nextEl.style.display = "flex";
            nextEl.classList.remove("show");
        }, 350);
    }
    });
  });
});


document.addEventListener('DOMContentLoaded', function() {
  const submitButton = document.getElementById('applicationForm--btn');
  const checkbox = document.querySelector('.sogl-mob');

  submitButton.addEventListener('click', function(event) {
    if (!checkbox.checked) {
      event.preventDefault();
      alert("Пожалуйста, согласитесь с условиями!");
    }
  });
});

document.addEventListener('DOMContentLoaded', function() {
    const scrollToButtons = document.querySelectorAll('.scroll-to-form');
    scrollToButtons.forEach(function(scrollToButton) {
        scrollToButton.addEventListener('click', function(event) {
            event.preventDefault();

            const target = document.querySelector('#form'); 
            if (target) {
                const targetPosition = target.getBoundingClientRect().top + window.scrollY; 
                const offset = 50;
                const scrollToPosition = targetPosition - offset; 

                window.scrollTo({
                    top: scrollToPosition,
                    behavior: 'smooth'
                });
            } else {
                console.error("Цель с id 'form' не найдена.");
            }
        });
    });

    if (scrollToButtons.length === 0) {
        console.error("Кнопки с классом 'scroll-to-form' не найдены.");
    }
});