export const setSideMenu = (type) => {
  if (type) {
    document.querySelector('body').style.overflow = 'hidden';
  } else {
    document.querySelector('body').style.overflow = 'auto';
  }
};
