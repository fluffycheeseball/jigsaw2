export class Canvas {
    rows : string[] = ["1","2", "3","4","5","6","7","8"]
    columns : string[] = ["a","b", "c","d","e","f","g","h"]

    Locations: string[][] = CanvasHelper.InitCanvas(this.rows, this.columns);
}

export class CanvasHelper {
    static InitCanvas(rows : string[], columns: string[]) {
        var locations : string[][];
        locations = new Array<string[]>(rows.length);
       
          for(var row = 0;row < rows.length; row++) {
              locations[row] = new Array<string>(columns.length)
              for(var column= 0;column<columns.length;column++) {
                  locations[row][column] = rows[row] + columns[column]
                 }
              }
        return locations;
    }
}
