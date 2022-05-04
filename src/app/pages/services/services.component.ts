import { Component } from '@angular/core'
import { Title, Meta } from '@angular/platform-browser'

@Component({
  selector: 'app-services',
  templateUrl: 'services.component.html',
  styleUrls: ['services.component.css'],
})
export class Services {
  constructor(private title: Title, private meta: Meta) {
    this.title.setTitle('Services - MOBOX')
    this.meta.addTags([
      {
        name: 'description',
        content:
          'Macau CrossFit box, affiliated to The Process Programming, from Coastal Fitness Hong Kong',
      },
      {
        property: 'og:title',
        content: 'Services - MOBOX',
      },
      {
        property: 'og:description',
        content:
          'Macau CrossFit box, affiliated to The Process Programming, from Coastal Fitness Hong Kong',
      },
    ])
  }
}
