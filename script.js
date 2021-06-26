let div = document.getElementById("counter");
let counter = 10;


var button = document.getElementById('button');
button.addEventListener('click', ()=>{
  timer();
})


function timer(){
setTimeout(() => {
  
  playSound('beep');
  $('#tmer').fadeOut(100).fadeIn(100)
  div.innerHTML = counter;
  counter -= 1;

  setTimeout(() => {
    $('#tmer').fadeOut(100).fadeIn(100)
    playSound('beep')
    div.innerHTML = counter;
    counter -= 1;

    setTimeout(() => {
      $('#tmer').fadeOut(100).fadeIn(100)
      playSound('beep')
      div.innerHTML = counter;
      counter -= 1;

      setTimeout(() => {
        $('#tmer').fadeOut(100).fadeIn(100)
        playSound('beep')
        div.innerHTML = counter;
        counter -= 1;

        setTimeout(() => {
          $('#tmer').fadeOut(100).fadeIn(100)
          playSound('beep')
          div.innerHTML = counter;
          counter -= 1;

          setTimeout(() => {
            $('#tmer').fadeOut(100).fadeIn(100)
            playSound('beep')
            div.innerHTML = counter;
            counter -= 1;

            setTimeout(() => {
              $('#tmer').fadeOut(100).fadeIn(100)
              playSound('beep')
              div.innerHTML = counter;
              counter -= 1;

              setTimeout(() => {
                $('#tmer').fadeOut(100).fadeIn(100)
                playSound('beep')
                div.innerHTML = counter;
                counter -= 1;

                setTimeout(() => {
                  $('#tmer').fadeOut(100).fadeIn(100)
                  playSound('beep')
                  div.innerHTML = counter;
                  counter -= 1;

                  setTimeout(() => {
                    $('#tmer').fadeOut(100).fadeIn(100)
                    playSound('beep')
                    div.innerHTML = counter;
                    counter -= 1;

                    setTimeout(() => {
                      $('#tmer').fadeOut(100).fadeIn(100)
                      playSound('completed')
                      div.classList.add('complete')
                      div.innerHTML = "Completed the task";
                    }, 2000);
                  }, 1000);
                }, 1000);
              }, 1000);
            }, 1000);
          }, 1000);
        }, 1000);
      }, 1000);
    }, 1000);
  }, 1000);
}, 1000);
}


function playSound(sound){
var audio = new Audio(sound  + '.mp3');
audio.play();
}










