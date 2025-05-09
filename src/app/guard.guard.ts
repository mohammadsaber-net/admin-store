import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
export const gaurdGuard: CanActivateFn = (route, state) => {
  let router = inject(Router)
  if (localStorage.getItem("useradmin")) {
    return true;
  } else {
    router.navigate(["/login"])
    return false
  }
};
export const authGuard: CanActivateFn = (route, state) => {
  let router = inject(Router)
  if (localStorage.getItem("useradmin")) {
    router.navigate(["/products"])
    return false;
  } else {
    return true
  }
};
// export const authGuard: CanActivateFn = (route, state) => {

//   let router = inject(Router)
//   let doc = inject(Window)
//   let stor = doc.localStorage
//   .
//   if (stor.getItem("user")) {
//     router.navigate(["/products"])
//     return false;
//   } else {
//     return true
//   }
// };
