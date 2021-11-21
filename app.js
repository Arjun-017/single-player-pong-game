const container = document.getElementById("game-container")
let paddley1 = 300
let paddley2 = 100
let ball_pos = [150,150]
let ball_vel = [-2,2]
var gameOver = false
var paddle_vel = 10
var paddle1 = document.createElement("div")
var paddle2 = document.createElement("div")
var ball = document.createElement("div")
paddle1.classList.add('paddle')
paddle2.classList.add('paddle')
paddle2.style.right = '2px'
ball.classList.add('ball')
container.appendChild(paddle1)
container.appendChild(paddle2)
container.appendChild(ball)
var id = 1

function init(){
	paddley1 = 300
	paddley2 = 100
	ball_pos = [150,150]
	ball_vel = [-2,2]
	gameOver = false
	paddle1.style.top = paddley1+"px"
	paddle2.style.top = paddley2+"px"
	ball.style.top = ball_pos[1]+"px"
	ball.style.left = ball_pos[0]+"px"

}

init()
var ballMove = setInterval(moveBall,20)
	document.addEventListener('keydown', (e) => {
		if(id ==1){
		if((paddley1<=0)||(paddley1 >= 500)){
			move = false
		}
		if((paddley1>=0)||(paddley1 <= 500)){
			move = true
		}
		if(move){
			if(e.keyCode == 38){
				paddley1 = paddley1 - paddle_vel
				paddle1.style.top = paddley1+"px"
			}
			if(e.keyCode == 40){
				paddley1 = paddley1 + paddle_vel
				paddle1.style.top = paddley1+"px"			
			}	
		}
		}
		if(id ==2){
		if((paddley2<=0)||(paddley2 >= 500)){
			move = false
		}
		if((paddley2>=0)||(paddley2 <= 500)){
			move = true
		}
		if(move){
			if(e.keyCode == 38){
				paddley2 = paddley2 - paddle_vel
				paddle2.style.top = paddley2+"px"
			}
			if(e.keyCode == 40){
				paddley2 = paddley2 + paddle_vel
				paddle2.style.top = paddley2+"px"			
			}	
		}
		}
	})

function moveBall(){
	checkCollision()
	checkGameOver()
	ball_pos[0] += ball_vel[0]
	ball_pos[1] += ball_vel[1]
	ball.style.left = ball_pos[0]+"px"
	ball.style.top = ball_pos[1]+"px"
}

function checkCollision(){
	
	if((ball_pos[0]<=10)&&(ball_pos[1]>=paddley1)&&(ball_pos[1]<=paddley1+100)){
		ball_vel[0] = -ball_vel[0]

	}
	if((ball_pos[0]>=770)&&((ball_pos[1]>=paddley2)&&(ball_pos[1]<=paddley2+100))){
		ball_vel[0] = -ball_vel[0]

	}
	if((ball_pos[1]<=0)||(ball_pos[1]>=580)){
		ball_vel[1] = -ball_vel[1]
	}
	if((ball_pos[0]<=0)||(ball_pos[0]>=780)){
		gameOver = true
		console.log( ball_pos[1],paddley1, ball_pos[0])	

	}
	
}
function checkGameOver(){
	if(gameOver){
	gameOver = false
	init()
	}
}