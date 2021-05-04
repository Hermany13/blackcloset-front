export const setSideMenu = (type: boolean) => {
  if (type) {
    document.querySelector('body')!.style.overflow = 'hidden';
  } else {
    document.querySelector('body')!.style.overflow = 'auto';
  }
};
