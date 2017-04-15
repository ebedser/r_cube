//cube.js
/* 012
   345
   678

    3
   405
    1
    2
 *
 */
class cube {
    constructior() {
        this.face = [];
        var colors = ['Y','R','W','O','B','G'];
        for(var i=0; i < 6; i++){
            this.face.push([]);

            for(var j=0; j<9; j++){
                this.face[i][j] = colors[i];
            }
        }
    }
}

aCube = new cube();
console.log(aCube.face);
