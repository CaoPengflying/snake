/**
 * Created by lx on 2017/11/24.
 */
var snake = {
    headColor: "",//蛇头颜色
    bodyColor: "",
    snakeLength: "",
    body: [],//蛇的节点，节点有自己行号和列号
    speed: 0,//蛇的移动速度
    direction: "",//蛇的方向
    growing: false,
    //初始化，初始化蛇所有属性
    init: function () {
        snake.body = [];
        snake.headColor = "red";
        snake.bodyColor = "blue";
        snake.snakeLength = 4;
        snake.speed = 500;
        snake.direction = "right";
        //初始化蛇头
        snake.body[0] = {
            row: 0,
            cls: snake.snakeLength,
            direction:snake.direction,
            type:snakeHead[3]
        }
        //初始化蛇的身体
        for (var i = 1; i < snake.snakeLength-1; i++) {
            snake.body[i] = {
                row: 0,
                cls: snake.snakeLength - i,
                direction:snake.direction,
                type:snakeBody[0]
            }
        }
        //初始化蛇的尾巴
        snake.body[snake.snakeLength-1] = {
            row: 0,
            cls: 1,
            direction:snake.direction,
            type:snakeTail[3]
        }
    },
    //改变蛇前进的方向
    changeDirection: function (direction) {
        snake.direction = direction;
    },
    //实现蛇的移动

    move: function () {
        //在头部插入一个节点
        var newHead = {};
        newHead.row = snake.body[0].row;
        newHead.cls = snake.body[0].cls;
        //newHead.direction = snake.body[0].direction;
        //newHead.type = snake.body[0].type;
        newHead.direction = snake.direction;
        switch (snake.direction) {
            case "right":
                newHead.cls++;
                newHead.type = snakeHead[3];
                break;
            case "left":
                newHead.cls--;
                newHead.type = snakeHead[2];
                break;
            case "up":
                newHead.row--;
                newHead.type = snakeHead[1];
                break;
            case "down":
                newHead.row++;
                newHead.type = snakeHead[0];
                break;

        }
        //判断蛇转变还是没有转变方向
        //如果转变了方向就把原来头改成拐弯的
        //没变方向就要把头改为直的。
        //原来的方向就是没有插入头结点时的方向
        if(snake.body[0].direction != newHead.direction){
            switch (snake.body[0].direction){
                case "left":
                    if(newHead.direction == "up"){
                        snake.body[0].type = changeDirection[3];
                    }else if(newHead.direction == "down"){
                        snake.body[0].type = changeDirection[1];
                    }
                    break;
                case "right":
                    if(newHead.direction == "up"){
                        snake.body[0].type = changeDirection[2];
                    }else if(newHead.direction == "down"){
                        snake.body[0].type = changeDirection[0];
                    }
                    break;
                case "up":
                    if(newHead.direction == "left"){
                        snake.body[0].type = changeDirection[0];
                    }else if(newHead.direction == "right"){
                        snake.body[0].type = changeDirection[1];
                    }
                    break;
                case "down":
                    if(newHead.direction == "left"){
                        snake.body[0].type = changeDirection[2];
                    }else if(newHead.direction == "right"){
                        snake.body[0].type = changeDirection[3];
                    }
                    break;
            }


        }else{
            //alert('没有改变方向');
            switch (snake.body[0].direction){
                case "left":
                case "right":
                    snake.body[0].type = snakeBody[0];
                    break;
                case "up":
                case "down":
                    snake.body[0].type = snakeBody[1];
                    break;
            }

        }
        snake.body.unshift(newHead);

        //在尾部去掉一个节点
        //将新的蛇尾的type设为蛇尾的图片
        if (snake.growing) {
            snake.growing = false;
        } else {

           var flag = snake.body.pop();
            if(snake.body[snake.body.length-2].direction != snake.body[snake.body.length-1].direction){
                switch (snake.body[snake.body.length-2].direction){
                    case "left":
                        snake.body[snake.body.length-1].type = snakeTail[2];
                        break;
                    case "right":
                        snake.body[snake.body.length-1].type = snakeTail[3];
                        break;
                    case "up":
                        snake.body[snake.body.length-1].type = snakeTail[1];
                        break;
                    case "down":
                        snake.body[snake.body.length-1].type = snakeTail[0];
                        break;
                }
            }else{
                snake.body[snake.body.length-1].type = flag.type;
                }
        }

    },
    //判断蛇是否吃到食物
    eatFood: function () {
        //当蛇头的行号和列号与食物的行号与列号相同就吃到了食物
        if (snake.body[0].row == food.row && snake.body[0].cls == food.cls) {
            return true;
        } else {
            return false;
        }
    },

    //判断是否吃到自己
    eatSelf: function () {
        for (var i = 1; i < snake.body.length; i++) {
            if(snake.body[0].row == snake.body[i].row && snake.body[0].cls == snake.body[i].cls){
                return true;
            }
        }
        return false;
    },
    //判断是否撞墙
    touchGrid: function () {
        if(snake.body[0].row < 0 || snake.body[0].row >= grid.row || snake.body[0].cls < 0 || snake.body[0].cls >= grid.cls){
            return true;
        }else{
            false;
        }
    },
    //生长
    grow: function () {
        snake.growing = true;
    },
    //绘制
    draw: function () {
        //画蛇头：填充蛇头颜色
        //context.fillStyle = snake.headColor;
        //var x = snake.body[0].cls * grid.size;
        //var y = snake.body[0].row * grid.size;
        //context.drawImage(snake.body[0].type,x,y,grid.size,grid.size);
        //画
        //context.fillRect(x, y, grid.size, grid.size);
        //context.fillStyle = snake.bodyColor;
        for (var i = 0; i < snake.body.length; i++) {
            x = snake.body[i].cls * grid.size;
            y = snake.body[i].row * grid.size;
            context.drawImage(snake.body[i].type,x, y, grid.size, grid.size);
        }

    }

}