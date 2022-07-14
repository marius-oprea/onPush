export function hightlight(el: any, className = 'checked') {
  const a = el.nativeElement.querySelector('div');
  if (a) {
    a.classList.add(className);
    setTimeout(() => {
        a.classList.remove(className);
    }, 500);
  }
} 