/**
 * Created by dell on 2017/10/11.
 */

var snake = {
    nodes:[] ,//整蛇数组、包括蛇头
    direction:"right",//蛇的运动方向，后期根据键盘来定
    colorHead:"red",
    colorBody:"gray",
    init:function() {
        for(var i = 0;i < 4;i++){
            this.nodes[i] = {row:0,col:4-i};
        }
        this.direction = "right";
    },
    draw:function(){
        context.beginPath();
        context.fillStyle = this.colorHead;
        var x = this.nodes[0].col*grid.size;
        var y = this.nodes[0].row*grid.size;
        context.rect(x,y,grid.size,grid.size);
        context.fill();
        context.stroke();

        context.beginPath();
        context.fillStyle = this.colorBody;
        for(var i=1; i<this.nodes.length; i++){
            var x = this.nodes[i].col*grid.size;
            var y = this.nodes[i].row*grid.size;
            context.rect(x,y,grid.size,grid.size);
        }
        context.fill();
        context.stroke();
    },
    changeDirection:function(d){
        this.direction = d;
    },
    move:function(){
        var head = this.nodes[0];
        var newHead = {row:head.row,col:head.col};
        switch (this.direction){
            case "up" :
                newHead.row--;
                break;
            case "down" :
                newHead.row++;
                break;
            case "left" :
                newHead.col--;
                break;
            case "right" :
                newHead.col++;
                break;
        }
        this.nodes.unshift(newHead);

        if(this.growing){
            this.growing = false;
        }else{
            this.nodes.pop();
        }
    },
    grow:function(){
        this.growing = true;
    },
    eatSelf: function(){
        var head = this.nodes[0];
        for(var i=1; i<this.nodes.length; i++){
            if(this.nodes[i].col == head.col && this.nodes[i].row == head.row){
                return true;
            }
        }
        return false;
    },
    eatFood:function(){
        var head = this.nodes[0];
        return(food.col == head.col && food.row == head.row);
    },
    touchGrid:function(){
        var head = this.nodes[0];
        if(head.row<0 || head.row>=grid.rows){
            return true;
        }
        if(head.col<0 || head.col>=grid.cols){
            return true;
        }
        return false;
    }
};
