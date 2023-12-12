import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivateFn, Router, RouterStateSnapshot } from '@angular/router'; 

export const authGuard : CanActivateFn = (route, state) => {


if(localStorage.getItem("usettoken")!==null){
  


  return true;
  
}
else{

  return false
}
};
