import { Component, Input } from '@angular/core';

import { NavigationNode, VersionInfo } from '../../navigation/navigation.service';

@Component({
  selector: 'fio-footer',
  templateUrl: 'footer.component.html',
})
export class FooterComponent {
  @Input() nodes: NavigationNode[];
  @Input() versionInfo: VersionInfo;
}
