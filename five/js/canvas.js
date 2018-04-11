    var a_canvas,context;
    var isWhite = true;//设置是否该轮到白棋
    var isWell = false;//设置该局棋盘是否赢了，如果赢了就不能再走了
    var img_w = new Image(),img_b = new Image();
    img_b.src = "images/black.png";
    img_w.src = "images/white.png";img_w.height = "30px";
    var chessData = new Array(10);//这个为棋盘的二维数组用来保存棋盘信息，初始化0为没有走过的，1为白棋走的，2为黑棋走的
    for (var x = 0; x < 10; x++) {
        chessData[x] = new Array(10);
        for (var y = 0; y < 10; y++) {
            chessData[x][y] = 0;
        }
    }
    function init(){
      
     a_canvas = document.getElementById('a_canvas');
     context = a_canvas.getContext("2d");

      // 绘制背景
      var gradient = context.createLinearGradient(0,0,0,300);


      gradient.addColorStop(0,"#e0e0e0");
      gradient.addColorStop(1,"#ffffff");


      context.fillStyle = gradient;

      context.fillRect(0,0,a_canvas.width,a_canvas.height);

      
      // 描绘边框
      var grid_cols = 10;
      var grid_rows = 10;
      var cell_height = a_canvas.height / grid_rows;
      var cell_width = a_canvas.width / grid_cols;
      context.lineWidth = 1;
      context.strokeStyle = "#a0a0a0";

      // 结束边框描绘
      context.beginPath();
      // 准备画横线
      for (var col = 0; col <= grid_cols; col++) {
        var x = col * cell_width;
        context.moveTo(x,0);
        context.lineTo(x,a_canvas.height);
      }
      // 准备画竖线
      for(var row = 0; row <= grid_rows; row++){
        var y = row * cell_height;
        context.moveTo(0,y);
        context.lineTo(a_canvas.width, y);
      }
      context.stroke();
    }
    function play(e) {
        var x = parseInt((e.clientX - 8) / 30);//计算鼠标点击的区域，如果点击了（65，65），那么就是点击了（1，1）的位置
        var y = parseInt((e.clientY - 8) / 30);

        if (chessData[x][y] != 0) {//判断该位置是否被下过了
            alert("你不能在这个位置下棋");
            return;
        }

        if (isWhite) {
            isWhite = false;
            drawChess(1, x, y);
        }
        else {
            isWhite = true;
            drawChess(2, x, y);
        }

    }
    function drawChess(chess, x, y) {//参数为，棋（1为白棋，2为黑棋），数组位置
        if (isWell == true) {
            alert("已经结束了，如果需要重新玩，请刷新");
            return;
        }
        if (x >= 0 && x < 15 && y >= 0 && y < 15) {
            if (chess == 1) {

                context.drawImage(img_w, x * 30 + 8, y * 30 + 8);//绘制白棋
                chessData[x][y] = 1;
            }
            else {
                context.drawImage(img_b, x * 30 + 8, y * 30 + 8);
                chessData[x][y] = 2;
            }
            judge(x, y, chess);
        }
    }
    function judge(x, y, chess) {//判断该局棋盘是否赢了
            var count1 = 0;
            var count2 = 0;
            var count3 = 0;
            var count4 = 0;
 
            //左右判断
            for (var i = x; i >= 0; i--) {
                if (chessData[i][y] != chess) {
                    break;
                }
                count1++;
            }
            for (var i = x + 1; i < 15; i++) {
                if (chessData[i][y] != chess) {
                    break;
                }
                count1++;
            }
            //上下判断
            for (var i = y; i >= 0; i--) {
                if (chessData[x][i] != chess) {
                    break;
                }
                count2++;
            }
            for (var i = y + 1; i < 15; i++) {
                if (chessData[x][i] != chess) {
                    break;
                }
                count2++;
            }
            //左上右下判断
            for (var i = x, j = y; i >= 0, j >= 0; i--, j--) {
                if (chessData[i][j] != chess) {
                    break;
                }
                count3++;
            }
            for (var i = x + 1, j = y + 1; i < 15, j < 15; i++, j++) {
                if (chessData[i][j] != chess) {
                    break;
                }
                count3++;
            }
            //右上左下判断
            for (var i = x, j = y; i >= 0, j < 15; i--, j++) {
                if (chessData[i][j] != chess) {
                    break;
                }
                count4++;
            }
            for (var i = x + 1, j = y - 1; i < 15, j >= 0; i++, j--) {
                if (chessData[i][j] != chess) {
                    break;
                }
                count4++;
            }
 
            if (count1 >= 5 || count2 >= 5 || count3 >= 5 || count4 >= 5) {
                if (chess == 1) {
                    alert("白棋赢了");
                }
                else {
                    alert("黑棋赢了");
                }
                isWell = true;//设置该局棋盘已经赢了，不可以再走了
            }
        }
    window.addEventListener("load", function(){
        init();

    },false);
