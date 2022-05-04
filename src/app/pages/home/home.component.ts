import { Component } from '@angular/core'
import { Title, Meta } from '@angular/platform-browser'

@Component({
  selector: 'app-home',
  templateUrl: 'home.component.html',
  styleUrls: ['home.component.css'],
})
export class Home {
  rawe70u: string = ' '
  rawki6w: string = ' '
  rawnne0: string = ' '

  constructor(private title: Title, private meta: Meta) {
    this.title.setTitle('MOBOX')
    this.meta.addTags([
      {
        name: 'description',
        content:
          'Macau CrossFit box, affiliated to The Process Programming, from Coastal Fitness Hong Kong',
      },
      {
        property: 'og:title',
        content: 'MOBOX',
      },
      {
        property: 'og:description',
        content:
          'Macau CrossFit box, affiliated to The Process Programming, from Coastal Fitness Hong Kong',
      },
    ])
  }
}
