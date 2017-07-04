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

//Проверка формы по полям
function validate() {
   //Считаем значения из полей Аккаутунт и E-mail в переменные x и y
   var x=document.forms["form"]["account"].value;
   var y=document.forms["form"]["email"].value;
	 //Значения radiobuttons пихаем в свои переменные
   var yes=document.getElementById("sx1");
   var no=document.getElementById("sx2");
   var bools=true;
   
   //Если поле Аккаутунт пустое выведем сообщение и предотвратим отправку формы
   if ((x.length==0) || (y.length==0) || ((yes.checked==false)&&(no.checked==false))) {
      document.getElementById("accountf").innerHTML="*";
      document.getElementById("emailf").innerHTML="*";
      document.getElementById("sxf").innerHTML="*";

                      ga('send', 'event', 'FielFail', 'None var', 'Пустые поля');

      document.getElementById("sendf").innerHTML="Заполните все поля";
      bools=false;
      return 0;
   }
   //Если поле не содержит эти символы знач email введен не верно
   if(new RegExp(/^[a-z0-9\!\#\$\%\&\'\*\+\/\=\?\^\_\`\{\|\}\~\-]+(?:\.[a-z0-9\.\!\#\$\%\&\'\*\+\/\=\?\^\_\`\{\|\}\~\-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+(?:[a-z]{2,6})$/i).test(y))
	   {
	   	bools=true;
	   }
			   else
			   {
			      document.getElementById("emailf").innerHTML="*";
			      document.getElementById("sendf").innerHTML="E-mail введен не верно";
			      bools=false;
			      return 0;
			   }
			   if (bools) {
			   	alert('Форма отправлена!');
			   }
}