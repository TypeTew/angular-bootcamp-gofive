
import { Component,ComponentRef ,ViewContainerRef } from '@angular/core';
import { loadRemoteModule } from '@angular-architects/module-federation';

@Component({
  selector: 'app-category-add',
  standalone: true,
  imports: [],
  template: '',
})
export class CategoryAddComponent {

  private componentRef?: ComponentRef<any>;

  constructor(private viewContainer: ViewContainerRef) {}

  async ngOnInit() {
    const module = await loadRemoteModule({
      type: 'module',
      remoteEntry: 'http://localhost:4201/remoteEntry.js',
      exposedModule: './CategoryAdd',
    });

    console.log('module', module);
    this.viewContainer.createComponent(module.CategoryAddComponent)
  }
}




// import { Component, ViewContainerRef } from '@angular/core';
// import { loadRemoteModule } from '@angular-architects/module-federation';

// @Component({
//   selector: 'app-category-add',
//   standalone: true,
//   imports: [],
//   template: '',
// })
// export class CategoryAddComponent {
//   constructor(private viewContainer: ViewContainerRef) {}

//   async ngOnInit() {
//     const module = await loadRemoteModule({
//       type: 'module',
//       remoteEntry: 'http://localhost:4201/remoteEntry.js',
//       exposedModule: './CategoryAdd',
//     });

//     // console.log('module', module);
//     // this.viewContainer.createComponent(module.CategoryAddComponent);
//   }
// }