export class Canvas {
    public Rows : number[] = [1,2, 3,4,5,6,7,8]
    public Columns : number[] = [1,2, 3,4,5,6,7,8]

    Locations: Location[][] = CanvasHelper.InitCanvas(this.Rows, this.Columns);
}

export class CanvasHelper {
    static InitCanvas(rows : number[], columns: number[]) {
        var locations : Location[][];
        var isWhite: boolean = false;

        locations = new Array<Location[]>(rows.length);
       
          for(var row = 0;row < rows.length; row++) {
              locations[row] = new Array<Location>(columns.length)
              for(var column= 0;column<columns.length;column++) {
                         locations[row][column] = new Location(row, column);
                  }
              }
     return locations;
    }
}

export class Location {
    public IsWhite:boolean;

    constructor(public Row: number, public Column: number) {
        this.IsWhite = (Row %2 == 0 && Column %2 !=0 ) || (Row %2 != 0 && Column %2 ==0 );
    }


    GetText(): string {
        return "r" + this.Row + "c" + this.Column;
    }
}

