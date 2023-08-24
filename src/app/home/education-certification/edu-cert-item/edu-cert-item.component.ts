import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-edu-cert-item',
  templateUrl: './edu-cert-item.component.html',
  styleUrls: ['./edu-cert-item.component.css']
})
export class EduCertItemComponent {
  @Input() item = ''; // decorate the property with @Input()
}
