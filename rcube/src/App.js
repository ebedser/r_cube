import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
/*   012
 *   345
 *   678
 *
 *    3
 *   405
 *    1
 *    2
 *
 *     012
 *     345
 *     678
 *
 * 012 012 012
 * 345 345 345
 * 678 678 678
 *
 *     012
 *     345
 *     678
 *
 *     012
 *     345
 *     678
 *
 *
 *
 *
 *
 */
class Cube {
    constructor(){
        //this.face = ["YYYYYYYYY","RRRRRRRRR","WWWWWWWWW","OOOOOOOOO","BBBBBBBBB","GGGGGGGGG"];
        this.face = [
            ["Y","Y","Y","Y","Y","Y","Y","Y","Y"],
            //["0","1","2","3","4","5","6","7","8"],
            ["R","R","R","R","R","R","R","R","R"],
            ["W","W","W","W","W","W","W","W","W"],
            ["O","O","O","O","O","O","O","O","O"],
            ["B","B","B","B","B","B","B","B","B"],
            ["G","G","G","G","G","G","G","G","G"]
        ];
    }

    display(){
        for(var i=0;i<this.face.length;i++){
            console.log(this.face[i]);
        }
    }

    outputString(){
        var newString = "";
        newString += "    " + this.face[3].slice(0,3) + "    \n";
        newString += "    " + this.face[3].slice(3,6) + "    \n";
        newString += "    " + this.face[3].slice(6,9) + "    \n";
        newString += this.face[4].slice(0,3) + " "
            + this.face[0].slice(0,3) + " " + this.face[5].slice(0,3) + "\n";
        newString += this.face[4].slice(3,6) + " "
            + this.face[0].slice(3,6)+ " " + this.face[5].slice(3,6) + "\n";
        newString += this.face[4].slice(6,9) + " "
            + this.face[0].slice(6,9)+ " " + this.face[5].slice(6,9) + "\n";
        newString += "    " + this.face[1].slice(0,3) + "    \n";
        newString += "    " + this.face[1].slice(3,6) + "    \n";
        newString += "    " + this.face[1].slice(6,9) + "    \n";
        newString += "    " + this.face[2].slice(0,3) + "    \n";
        newString += "    " + this.face[2].slice(3,6) + "    \n";
        newString += "    " + this.face[2].slice(6,9) + "    \n";
        return newString;
    }
    cycle(f1,b1,f2,b2,f3,b3,f4,b4){ //
        var x = this.face[f1][b1]; //temp
        this.face[f1][b1] = this.face[f2][b2];
        this.face[f2][b2] = this.face[f3][b3];
        this.face[f3][b3] = this.face[f4][b4];
        this.face[f4][b4] = x;
    }
    //U L- F R- B D M E S X Y
    RMove(){
        this.cycle(0,5,1,5,2,5,3,5);
        this.cycle(0,8,1,8,2,8,3,8);
        this.cycle(0,2,1,2,2,2,3,2);
        this.cycle(5,1,5,3,5,7,5,5);
        this.cycle(5,0,5,6,5,8,5,2);
    }
    RpMove(){
        this.cycle(3,5,2,5,1,5,0,5);
        this.cycle(3,8,2,8,1,8,0,8);
        this.cycle(3,2,2,2,1,2,0,2);
        this.cycle(5,5,5,7,5,3,5,1);
        this.cycle(5,2,5,8,5,6,5,0);
    }
    LMove(){
        this.cycle(0,3,1,3,2,3,3,3);
        this.cycle(0,0,1,0,2,0,3,0);
        this.cycle(0,6,1,6,2,6,3,6);
        this.cycle(4,5,4,7,4,3,4,1);
        this.cycle(4,2,4,8,4,6,4,0);
    }
    LpMove(){
        this.cycle(3,3,2,3,1,3,0,3);
        this.cycle(3,0,2,0,1,0,0,0);
        this.cycle(3,6,2,6,1,6,0,6);
        this.cycle(4,1,4,3,4,7,4,5);
        this.cycle(4,0,4,6,4,8,4,2);
    }
    UpMove(){
        this.cycle(0,1,0,5,0,7,0,3);
        this.cycle(0,2,0,8,0,6,0,0);

        this.cycle(4,2,3,8,5,6,1,0);
        this.cycle(4,5,3,7,5,3,1,1);
        this.cycle(4,8,3,6,5,0,1,2);
    }
}
var aCube = new Cube();
//aCube.display();
class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
           <span className="withprewrap">{aCube.outputString()}</span>
        </p>
      </div>
    );
  }
}
aCube.UpMove();
export default App;
