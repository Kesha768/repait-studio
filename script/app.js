document.addEventListener('DOMContentLoaded', function () {
  const burgerMenu = document.querySelector('.burger-menu');
  const mobileNav = document.querySelector('.header-nav--mobile');
  const mobile = document.querySelector('.mobile');
  const mobileOrderButton = document.querySelector('.header-nav-button--mobile');

  if (burgerMenu) {
    burgerMenu.addEventListener('click', function () {
      this.classList.toggle('active');

      if (this.classList.contains('active')) {
        document.documentElement.style.overflow = 'hidden';
        if (window.innerWidth < 768) {
          mobile.style.right = '0';
        }
      } else {
        document.documentElement.style.overflow = '';
        if (window.innerWidth < 768) {
          mobile.style.right = '100%';
        }
      }
    });
  }

  if (mobileOrderButton) {
    mobileOrderButton.addEventListener('click', function () {
      if (burgerMenu.classList.contains('active')) {
        burgerMenu.classList.remove('active');
        document.documentElement.style.overflow = '';
        if (window.innerWidth < 768) {
          mobile.style.right = '100%';
        }
      }
    });
  }
});

document.addEventListener('DOMContentLoaded', function () {
  const burgerMenu = document.getElementById('main-burger');
  const adaptrNav = document.querySelector('.right-white-click');
  const adaptlNav = document.querySelector('.left-white-click');
  const mobileNav = document.querySelector('.header-nav--mobile');
  const mobile = document.querySelector('.mobile');
  const orderButton = document.querySelector('.header-nav-button');
  const mobileOrderButton = document.querySelector('.header-nav-button--mobile');

  if (burgerMenu) {
    burgerMenu.addEventListener('click', function () {
      this.classList.toggle('active');

      if (this.classList.contains('active')) {
        adaptrNav.style.marginRight = '0';
        adaptlNav.style.marginLeft = '0px';
        document.documentElement.style.overflow = 'hidden';
        if (window.innerWidth < 1024) {
          mobile.style.right = '0';
        }
      } else {
        adaptrNav.style.marginRight = '-15%';
        adaptlNav.style.marginLeft = '-88%';
        document.documentElement.style.overflow = '';
        if (window.innerWidth < 1024) {
          mobile.style.right = '100%';
        }
      }
    });
  }

  if (orderButton) {
    orderButton.addEventListener('click', function () {
      if (burgerMenu.classList.contains('active')) {
        burgerMenu.classList.remove('active');
        adaptrNav.style.marginRight = '-15%';
        adaptlNav.style.marginLeft = '-88%';
        document.documentElement.style.overflow = '';
        if (window.innerWidth < 1024) {
          mobile.style.right = '100%';
        }
      }
    });
  }

  if (mobileOrderButton) {
    mobileOrderButton.addEventListener('click', function () {
      if (burgerMenu.classList.contains('active')) {
        burgerMenu.classList.remove('active');
        adaptrNav.style.marginRight = '-15%';
        adaptlNav.style.marginLeft = '-88%';
        document.documentElement.style.overflow = '';
        if (window.innerWidth < 1024) {
          mobile.style.right = '100%';
        }
      }
    });
  }
});

function handleMouseOver(elementSelector) {
  const sl1 = document.querySelector('.sl1');
  const sl2 = document.querySelector('.sl2');
  const sl3 = document.querySelector('.sl3');
  const element = document.querySelector(elementSelector);

  sl1.style.marginRight = '0px';
  sl2.style.marginRight = '0px';
  sl3.style.marginRight = '0px';

  let marginRightValue;

  if (window.innerWidth >= 1024 && window.innerWidth < 1440) {
    marginRightValue = '226px';
  } else if (window.innerWidth >= 1440 && window.innerWidth < 1920) {
    marginRightValue = '286px';
  } else if (window.innerWidth >= 1920) {
    marginRightValue = '386px';
  }

  element.style.marginRight = marginRightValue;
}

function handleMouseOver3() {
  const sl1 = document.querySelector('.last-slide');
  const sl2 = document.querySelector('.sl2');

  sl2.style.marginRight = '0px';
  sl1.style.marginLeft = '0px';

  let marginLeftValue;

  if (window.innerWidth < 1025) {
    marginLeftValue = '-226px';
  } else if (window.innerWidth >= 1440 && window.innerWidth < 1920) {
    marginLeftValue = '-286px';
  } else {
    marginLeftValue = '-386px';
  }

  element.style.marginLeft = marginLeftValue;
}

function handleMouseOff3() {
  console.log('12');
  const slof = document.querySelector('.last-slide');

  if (window.innerWidth < 1025) {
    marginLeftValue = '-226px';
  } else if (window.innerWidth >= 1440 && window.innerWidth < 1920) {
    marginLeftValue = '-286px';
  } else {
    marginLeftValue = '-386px';
  }

  slof.style.marginLeft = marginLeftValue;
}

function adjustGridStyles(containerSelector, itemSelector) {
  document.addEventListener('DOMContentLoaded', function () {
    const containers = document.querySelectorAll(containerSelector);

    containers.forEach((container) => {
      const items = container.querySelectorAll(itemSelector);
      const itemCount = items.length;

      let gridTemplateAreas = `"a a b" "c c b" "d d ."`;
      let gridGap = '20px';

      if (itemCount === 1) {
        gridTemplateAreas = `"a a a" "a a a" "a a a"`;
      } else if (itemCount === 2) {
        gridTemplateAreas = `"a b b" ". . ." ". . ."`;
        console.log('12');
        container.classList.add('two-items');
      } else if (itemCount === 3) {
        gridTemplateAreas = `"a b c" "a b c"`;
        container.classList.add('three-items');
      } else if (itemCount === 4) {
        gridTemplateAreas = `"a a b" "c d d"`;
        container.classList.add('four-items');
      } else if (itemCount === 5) {
        gridTemplateAreas = `"a a b" "c d b" "c e e"`;
      } else if (itemCount > 5) {
        return;
      }

      container.style.gridTemplateAreas = gridTemplateAreas;
      container.style.gridGap = gridGap;

      for (let i = 0; i < items.length; i++) {
        const item = items[i];
        switch (i) {
          case 0:
            item.style.gridArea = 'a';
            break;
          case 1:
            item.style.gridArea = 'b';
            break;
          case 2:
            item.style.gridArea = 'c';
            break;
          case 3:
            item.style.gridArea = 'd';
            break;
          case 4:
            item.style.gridArea = 'e';
            break;
        }
      }
    });
  });
}

adjustGridStyles('.grid-sc', '.grid-item');
adjustGridStyles('.main-grid-container', '.grid-item');
adjustGridStyles('.main-grid-container', '.grid-item');

function checkAllReviewLengths() {
  const reviewBlocks = document.querySelectorAll('.review');

  reviewBlocks.forEach((block) => {
    const reviewTextElement = block.querySelector('.review-text');
    const reviewButtonElement = block.querySelector('.review-button');

    const textWithNewlines = reviewTextElement.innerHTML.replace(/<br\s*[\/]?>/gi, '\n');
    const textLength = textWithNewlines.length;

    if (textLength < 400) {
      reviewButtonElement.style.display = 'none';
    }
  });
}

document.addEventListener('DOMContentLoaded', function () {
  checkAllReviewLengths();
});

checkAllReviewLengths();
