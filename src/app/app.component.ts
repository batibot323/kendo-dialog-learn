import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
    <div class="example-config">
      <h4>Status: {{ status }}</h4>
    </div>

    <kendo-dialog title="Action required" (close)="onClose()">
      <p style="margin: 30px; text-align: center;">Do you accept?</p>

      <kendo-dialog-actions>
        <button kendoButton (click)="onAccept()">Yes</button>
        <button kendoButton (click)="onDecline()">No</button>
      </kendo-dialog-actions>
    </kendo-dialog>
  `
})
export class AppComponent {
  public status = "open";

  public onClose() { this.status = "closed"; }
  public onAccept() { this.status = "accepted"; }
  public onDecline() { this.status = "declined"; }
}