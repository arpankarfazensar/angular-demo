// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-student',
//   imports: [],
//   templateUrl: './student.html',
//   styleUrl: './student.css',
// })
// export class Student {}



// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-student',
//   templateUrl: './student.html'
// })
// export class Student {
//   name = 'Arpan';
//   course = 'Angular';
//   duration = 30;
// }



// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-student',
//   templateUrl: './student.html'
// })
// export class Student {

//   imageUrl = 'https://angular.dev/assets/images/press-kit/angular_icon_gradient.gif';

//   isDisabled = true;

//   placeholderText = 'Enter Student Name';
// }



// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-student',
//   templateUrl: './student.html'
// })
// export class Student {

//   message = '';
//   clickCount = 0;

//   showMessage() {
//     this.message = 'Button Clicked!';
//     this.clickCount++;
//   }

//   onKeyPress(event: Event) {
//     const input = event.target as HTMLInputElement;
//     this.message = 'You typed: ' + input.value;
//   }
// }


// import { Component } from '@angular/core';
// import { FormsModule } from '@angular/forms';

// @Component({
//   selector: 'app-student',
//   imports: [FormsModule],
//   templateUrl: './student.html'
// })
// export class Student {

//   name = 'Arpan';

// }


// import { Component } from '@angular/core';
// import { FormsModule } from '@angular/forms';

// @Component({
//   selector: 'app-student',
//   imports: [FormsModule],
//   templateUrl: './student.html'
// })
// export class Student {

//   name = '';

//   ngModelValue = '';
//   changeValue = '';

//   onNgModelChange(value: string) {
//     this.ngModelValue = value;
//   }

//   onChange(event: Event) {
//     const input = event.target as HTMLInputElement;
//     this.changeValue = input.value;
//   }
// }


import { Component } from '@angular/core';
import { Child } from '../child/child';

@Component({
  selector: 'app-student',
  imports: [Child],
  templateUrl: './student.html'
})
export class Student {

  name = 'Arpan';

}