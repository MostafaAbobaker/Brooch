import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const logedGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);
  if (localStorage.getItem("userToken")) {
    router.navigate(['admin/tasks']);
    return false;
  } else {
    return true;
  }
};
