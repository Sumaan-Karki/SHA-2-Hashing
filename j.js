const input=document.querySelector('#input');
const output=document.querySelector('#output');
const out=document.querySelector('#out');
const outp=document.querySelector('#outp');
const degree=document.querySelector('#deg');
const university=document.querySelector('#uni');
const button=document.querySelector('#generate-button');
button.addEventListener('click',()=>{
  output.value=CryptoJS.MD5(input.value);
  out.value=CryptoJS.MD5(university.value);
  outp.value=CryptoJS.MD5(degree.value);

});
      