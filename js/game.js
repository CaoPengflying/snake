/**
 * Created by lx on 2017/11/24.
 */
var game = {
    //分数
    score:0,
    pausing:false,
    //游戏的开始
    addScore:function(){
        game.score ++;
        val.innerHTML = game.score;
    },
    changeSpeed:function(){
        if(game.score % 2 == 0 && game.score != 0){
            snake.speed /= 2;
            clearInterval(timer);
            game.start();
        }
    },
    start:function(){
        game.draw();
        timer = setInterval(function(){
            //
            snake.move();
            if(snake.eatFood()){
                snake.grow();
                food.init();
                game.addScore();
                game.changeSpeed();

            }
            if(snake.eatSelf()){
                game.gameOver();
            }
            if(snake.touchGrid()){
                game.gameOver();
            }


            game.draw();
        },snake.speed);
    },
    //暂停游戏
    pause:function(){
        game.pausing = game.pausing?false:true;
        if(game.pausing){
            clearInterval(timer);
            pause.src = "img/start.png";
        }else{
            game.start();
            pause.src = "img/parse.png";
        }

    },
    //游戏结束
    gameOver:function(){
        clearInterval(timer);

        over.style.top = "60px";
    },
    //重新开始游戏
    restart:function(){
        over.style.top = "-100%";
        game.init();
        game.start();
    },
    //初始化蛇食物和院子
    init:function(){
        game.score = 0;
        grid.init();
        snake.init();
        food.init();

    },
    //绘制蛇、食物和院子
    draw:function(){
        grid.draw();
        snake.draw();
        food.draw();
    }
}