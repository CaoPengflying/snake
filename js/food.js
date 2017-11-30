/**
 * Created by lx on 2017/11/24.
 */
var food = {
    row:0,
    cls:0,
    color:"",
    type:{},
    //初始化食物，初始化食物的位置（随机出现）和食物的颜色
    init:function(){
        food.row = Math.floor(Math.random()*grid.row);
        food.cls = Math.floor(Math.random()*grid.cls);
        var index = Math.floor(Math.random()*fruits.length);
        food.type = fruits[index];
    },
    //绘制一个食物
    draw:function(){
        context.beginPath();
        context.fillStyle = food.color;
        var x = food.cls * grid.size;
        var y = food.row * grid.size;
        //context.fillRect(x,y,grid.size,grid.size);
        context.drawImage(food.type,x,y,grid.size,grid.size)
    }
};