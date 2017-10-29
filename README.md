# labsWeb
Помни про то о чем мы говорили <code>header</code> для шапки, <code>div</code> - это блочный элемент. 
Просмотри код перед сдачей перечитай.
<p>Я добавил небольшой скрипт для того чтоб показывался полный текст записи</p>
<code>
<pre>
$(document).ready(function(){
    $('.collapsed').next('.btn-template').click(function(e){
        e.preventDefault();
        $(this).parent().children('.collapsed').slideToggle();
    })
})
</pre>
</code>
ЧО ЭТО ВСЕ ЗНАЧИТ. ААААААААААААААААААААААА СтРаШна .
Не ссы все просто.
Эта штука говорит браузеру мол "все что внутри меня подгрузи после загрузки страницы" 
<code>
<pre>
$(document).ready(function(){
</pre>
</code> 
Эта конструкция вешает обработчик нажатия на кнопку с классом <code>.btn-template</code> перед которой есть блок с классом <code>.collapsed</code>
<code>
<pre>
$('.collapsed').next('.btn-template').click(function(e){})
</pre>
</code>
<p>А вот эта штука отключает стандартное поведение для ссылок, тоесть не перезагружает страницу если жмакать на ссылку</p>
<code>e.preventDefault();</code>
А весь магический скрипт шоб оно показывалось и скрывалось вот тута:<br>
<code>$(this).parent().children('.collapsed').slideToggle();</code>
тута такая штука.

Есть <code>$(this)</code> - тоесть это обращение к текущей кнопке на которую ты вот прям сейчас нажал, относительно этой кнопки говоришь мол смотрим на родителя 
<code>.parent()</code> и потом говоришь найди мне в этом родителе класс <code>.collapsed</code>.
А функция <code>slideToggle()</code> эта штука из jQuery которая смотрит если этот элемент скрыт то показвает его и наоборот.
<p>Хмммм. А чо такое jQuery?</p>
<p>А это библиотечка для JS со своим синтаксисом, и кстати этот скрипт написан как раз на этой библиотечке.</p>
<p>Суть вот в чем, вот этот знак доллара <code>$</code> это функция jQuery просто карочи чтоб не писать каждый раз длинное слово "jQuery" его заменили символом доллара</p>
<p>И по сути весь этот код написан не на чистом скрипте. Если доебеться скажи что написано на jQuery и все</p>
<p>Если спросит почему именно jQuery - скажи что так проще всего работать с HTML вот</p>
