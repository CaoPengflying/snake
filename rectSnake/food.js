/**
 * Created by dell on 2017/10/11.
 */
var food = {
    row:0,
    col:0,
    color:"yellow",
    init:function(){
        while (true) {
            //随机生成网格内的一个节点
            var row = Math.floor(Math.random() * grid.rows);
            var col = Math.floor(Math.random() * grid.cols);
            if(row != this.row || col != this.col){
                this.row = row;
                this.col = col;
                break;
            }
        }
    },
    draw:function(){
        context.beginPath();
        context.fillStyle = this.color;
        var x = this.col*grid.size;
        var y = this.row*grid.size;
        context.rect(x,y,grid.size,grid.size);

        context.fill();
        context.stroke();
    }
}