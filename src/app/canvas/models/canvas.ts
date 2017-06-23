export class Canvas {
    public Rows : number[] = [1,2, 3,4,5,6,7,8]
    public Columns : number[] = [1,2, 3,4,5,6,7,8]

    Locations: string[][] = CanvasHelper.InitCanvas(this.Rows, this.Columns);
}

export class CanvasHelper {
    static InitCanvas(rows : number[], columns: number[]) {
        var locations : string[][];
        locations = new Array<string[]>(rows.length);
       
          for(var row = 0;row < rows.length; row++) {
              locations[row] = new Array<string>(columns.length)
              for(var column= 0;column<columns.length;column++) {
                  locations[row][column] = "r" + rows[row].toString() + "-c" + columns[column].toString()
                 }
              }
        return locations;
    }
}
