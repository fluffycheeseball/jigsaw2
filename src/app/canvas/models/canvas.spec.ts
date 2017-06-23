import { TestBed } from '@angular/core/testing';
import { CanvasHelper } from './canvas';

describe('Canvas Helper', function() {

  it('CanvasHelper.InitCanvas returns correctly sized array', function() {
    var rows = new Array<string>(8);
    var columns = new Array<string>(7);
    var actual = CanvasHelper.InitCanvas(rows,columns);
    expect(actual.length == 8 );
    expect(actual[0].length = 7)
  }); 

  it('CanvasHelper.InitCanvas return expected values', function() {
    var rows = new Array<string>(2);
    rows[0] = "A";
    rows[1] = "B";
    var columns = new Array<string>(2);
    columns[0] = "1";
    columns[0] = "2";
    var actual = CanvasHelper.InitCanvas(rows,columns);
    for(var row = 0;row<rows.length;row++){
        for(var column = 0;column<columns.length;column++) {
            expect(actual[row][column] == rows[row] + columns[column]);
            }
        }
  });    
});


