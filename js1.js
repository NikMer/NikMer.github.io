function cl1() {
location.href = 'prog.html';
}
function cl2() {
location.href = 'space.html';
}
function cl3() {
location.href = 'sub.html';
}
function cl4() {
location.href = 'index.html';
}
function buttonYes() {

   ga('send', 'event', {
          'eventCategory': 'BenefitButton',
          'eventAction': 'YesPressed'
         });
}

function buttonNo() {

   ga('send', 'event', {
          'eventCategory': 'BenefitButton',
          'eventAction': 'NoPressed'
         });
}