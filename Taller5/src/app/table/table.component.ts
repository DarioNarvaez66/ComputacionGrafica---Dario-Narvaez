import { Component } from '@angular/core';
import { PanelModule } from 'primeng/panel';

@Component({
    selector: 'panel-basic-demo',
    templateUrl: './table.component.html',
    standalone: true,
    imports: [PanelModule]
})
export class PanelBasicDemo {}