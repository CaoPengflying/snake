/**
 * Created by dell on 2017/10/11.
 */
var game = {
    init:function(){
        snake.init();
        food.init();
    },
    start:function(){
        //»√…ﬂ∂Ø∆¿¥
        var timer = setInterval(function () {
            snake.move();
            if(snake.eatFood()){
                snake.grow();
                food.init();
            }
            game.draw() ;

            if(snake.eatSelf() || snake.touchGrid()){
                clearInterval(timer);
                alert("Game Over!");
            }
        },500);
    },
    draw:function(){
        grid.draw();
        snake.draw();
        food.draw();
    }
}