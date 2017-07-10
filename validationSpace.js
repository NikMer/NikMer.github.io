//Проверка формы по полям
function validate() {
   //Считаем значения из полей Аккаутунт и E-mail в переменные x и y
   var x=document.forms["form"]["growth"].value;
   var y=document.forms["form"]["weight"].value;
	 //Значения radiobuttons пихаем в свои переменные
   var yes=document.getElementById("sx1");
   var no=document.getElementById("sx2");
   var bools=true;
   
   //Если поле Аккаутунт пустое выведем сообщение и предотвратим отправку формы
   if ((x.length==0) || (y.length==0) || ((yes.checked==false)&&(no.checked==false))) {
      document.getElementById("growthf").innerHTML="*";
      document.getElementById("weightf").innerHTML="*";
      document.getElementById("sxf").innerHTML="*";
      document.getElementById("sendf").innerHTML="Заполните все поля";

      ga('send', 'event', {
          'eventCategory': 'FailFormSubmit',
          'eventAction': 'FailSpace_EmptyField',
          'eventLabel': 'growth: ' + x + ';' + 'weight: ' + y + ';' + 'Yes: ' + yes.checked + ';' + 'No: ' + no.checked + ';'
         });


      bools=false;
      return false;
   }
   //Если поле не содержит эти символы знач weight введен не верно
    if((new RegExp(/[012]+[0-9]+[0-9]/).test(x))&&((new RegExp(/[012]+[0-9]+[0-9]/).test(y))||(new RegExp(/[3-9]+[0-9]/).test(y))))

	  
    {
	   	bools=true;
	   }
			   else
			   {
			      document.getElementById("weightf").innerHTML="*";
            document.getElementById("growthf").innerHTML="*";
			      document.getElementById("sendf").innerHTML="Значения введены не верно";

         ga('send', 'event', {
            'eventCategory': 'FailFormSubmit',
            'eventAction': 'FailSpace_GrowthWeightFail',
            'eventLabel': 'growth: ' + x + ';' + 'weight: ' + y + ';'
         });

			      bools=false;
			      return false;
			   }

		if (bools) {
               //document.getElementById("sendf").innerHTML="Validation";           
			   	// alert('Форма отправлена!');
               return true;
			   }
}