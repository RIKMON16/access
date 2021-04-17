let ball = document.getElementById('float-circle');

function up(){
  ball.style.bottom = '250px';
}

function down(){
  ball.style.bottom = '50px';
}

ball.document.addEventListener('keydown', up);
ball.document.addEventListener('keyup', down);