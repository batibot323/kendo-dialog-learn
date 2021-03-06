import { Component } from '@angular/core';

@Component({
  selector: 'my-dialogs',
  template: `
  <div class="example-wrapper">
    <button kendoButton *ngIf="!dialogOpened && !windowOpened" (click)="open('dialog')">Open dialog</button>
    <button kendoButton *ngIf="!dialogOpened && !windowOpened" (click)="open('window')">Open window</button>
    <kendo-dialog title="Please confirm" *ngIf="dialogOpened" (close)="close('dialog')" [minWidth]="250" [width]="450">
        <p style="margin: 30px; text-align: center;">Are you sure you want to continue?</p>
        <kendo-dialog-actions>
            <button kendoButton (click)="action('no')">No</button>
            <button kendoButton (click)="action('yes')" primary="true">Yes</button>
        </kendo-dialog-actions>
    </kendo-dialog>

    <kendo-window [minWidth]="200" [minHeight]="125" title="About" *ngIf="windowOpened" (close)="close('window')">
      <p style="text-align: center;">Additional info</p>
    </kendo-window>
  </div>

  `
})
export class DialogsComponent {
  public dialogOpened = false;
  public windowOpened = false;

    public close(component) {
      this[component + 'Opened'] = false;
    }

    public open(component) {
      this[component + 'Opened'] = true;
    }

    public action(status) {
      console.log(`Dialog result: ${status}`);
      this.dialogOpened = false;
    }
}
