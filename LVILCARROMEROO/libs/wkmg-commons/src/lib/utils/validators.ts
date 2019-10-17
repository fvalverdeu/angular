import {FormControl} from '@angular/forms';

export const passwordStrong = (control: FormControl) => {
  const value = control.value;

  const hasSpecialCharacter = /[ !@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/.test(value);
  const hasNumber = /\d/.test(value);
  const hasUpper = /[A-Z]/.test(value);
  const hasLower = /[a-z]/.test(value);
  const isValid = hasSpecialCharacter && hasNumber && hasUpper && hasLower;
  return isValid ? null : { passwordStrong: 'La contraceña debe tener mayuscula, minusculas, números y caracters especiales' };
};

export const validExtension = (extensions: string[]) => {
 return (control: FormControl) => {
   const value: File = control.value as File;
   if (value) {
     const fileNameSplit = value.name.split('.');
     const fileExtension = fileNameSplit[fileNameSplit.length - 1];
     const isValid = extensions.includes(fileExtension);
     return isValid ? null : { validExtension: `Solo están permitidos archivos: ${extensions.join(', ')}` };
   }
   return false;
 };
};


