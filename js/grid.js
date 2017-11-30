/**
 * Created by lx on 2017/11/24.
 */
var grid = {
    row:0,
    cls:0,
    size:0,
    gridBackground:"",
    //绘制院子清除画布
    draw:function(){
        context.clearRect(0,0,400,500);
    },
    //初始化院子的所有属性
    init:function(){
        grid.size = 20;
        grid.row = 25;
        grid.cls = 20;
    }
}