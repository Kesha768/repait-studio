document.addEventListener("DOMContentLoaded", function () {
document
  .getElementById("modalForm--btn")
  .addEventListener("click", function (event) {
    event.preventDefault();
    const formElements = document.getElementById(
      "modalForm"
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

    if (!document.querySelector(".modal-sogl").checked) {
      allFieldsFilled = false;
      alert("Пожалуйста, согласитесь с условиями!");
    }

    if (!allFieldsFilled) {
      console.log("Пожалуйста, заполните все поля.");
      return;
    }

    if (allFieldsFilled && document.querySelector(".modal-sogl").checked) {
        document.querySelector(".modal-form__title").style.display = "none";
      document.querySelector(".modal-form__form").style.display = "none";
      document.querySelector(".modal-complete").style.display = "flex";
       document.querySelector(".modal-complete-text").style.display = "flex";
    }
  });

document.querySelector('.modal-trigger').addEventListener('click', function() {
    document.querySelector('.modal').classList.add('show');
            document.documentElement.style.overflow = 'hidden';
});

document.querySelector('.modal').addEventListener('click', function(event) {
    if (event.target === this) {
        document.querySelector('.modal').classList.remove('show');
        this.close();
        document.documentElement.style.overflow = '';
    }
});

document.querySelector('.modal-close').addEventListener('click', function() {
    document.querySelector('.modal').classList.remove('show');
    document.querySelector('.modal').close();
    document.documentElement.style.overflow = '';
});
});