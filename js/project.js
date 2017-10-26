var SomeAjax;
var ElementHandler;

/**
 * Runs on load of the site
 * It add eventlistners to all the buttons
 */
(function() {
  let buttons = selectAll('button');
  buttons.forEach(function(value, index, array) {
    buttons[index].addEventListener('click', function(){ SomeAjax.run(this); });
    console.log(index);
  });
})();

(function() {
  SomeAjax = {
    run: function(buttonContent) {
      let buttonText = buttonContent.innerHTML;
      switch (buttonText) {
        case 'Hello World':
        select('#result').innerHTML = 'Hello World!';
        removeButton(buttonText);
          break;
        case 'Lorem ipsum':
          let loremResult = Ajax.get_withCallback('lorem.html');
          select('#result').innerHTML = loremResult.responseText;
          removeButton(buttonText);
          break;
        case 'Image':
          select('#result').innerHTML = "<img src='https://i.vimeocdn.com/portrait/58832_300x300'>";
          removeButton(buttonText);
        break;

      }

    },
  }
})();

/**
 * To remove a button by the text it has
 * @param  {[string]} textOnButton [The text on the button]
 * @return {[boolean]}              [On succes it returns true]
 */
function removeButton(textOnButton) {
  let buttons = selectAll('button');

  buttons.forEach(function(value, index, array) {
    if (buttons[index].innerHTML == textOnButton) {
      // remove the button
      select('#buttonContainer').removeChild(buttons[index]);
      return(true);
    }
  });
}
