import { Component, OnInit, ViewChild, Inject } from '@angular/core';
import { MatTableDataSource, MatPaginator, MatSort,
       MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { SelectionModel } from '@angular/cdk/collections';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent{

  displayedColumns = ['select','position', 'name', 'weight', 'symbol'];
  dataSource: MatTableDataSource<Element>;
  selection = new SelectionModel<Element>(true, []);
  
  animal: string;
  name: string;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(public dialog: MatDialog) {
    // Create 100 elements
    const elements: Element[] = [];
    for (let i = 1; i <= 100; i++) { elements.push(createNewElement(i)); }

    // Assign the data to the data source for the table to render
    this.dataSource = new MatTableDataSource(elements);

    
  }

  openDialog(): void {
    let dialogRef = this.dialog.open(DialogOverviewExampleDialog, {
      width: '250px',
      height: '50px',
      data: { name: this.name, animal: this.animal }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.animal = result;
    });
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }

   /** Whether the number of selected elements matches the total number of rows. */
   isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }

  /** Selects all rows if they are not all selected; otherwise clear selection. */
  masterToggle() {
    this.isAllSelected() ?
        this.selection.clear() :
        this.dataSource.data.forEach(row => this.selection.select(row));
  }
}

function createNewElement(id: number): Element {
  
  return {
    position: id.toString(),
    name: NAMES[Math.round(Math.random() * (NAMES.length - 1))],
    weight: Math.round(Math.random() * 100).toString(),
    symbol: SYMBOL[Math.round(Math.random() * (SYMBOL.length - 1))]
  };
}
const SYMBOL = ['Aguardando Aprovação', 'Cancelada', 'Enviada' ];
const NAMES = ['AVILA', 'Eletronica', 'Nota' ];;

export interface Element {
  name: string;
  position: string;
  weight: string;
  symbol: string;
}

@Component({
  selector: 'dialog-overview-example-dialog',
  templateUrl: 'dialog-overview-example-dialog.html',
  styleUrls: ['./dialog-overview-example-dialog.scss']  
})
export class DialogOverviewExampleDialog {

  constructor(
    public dialogRef: MatDialogRef<DialogOverviewExampleDialog>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  onNoClick(): void {
    this.dialogRef.close();
  }

}