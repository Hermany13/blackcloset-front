export const isMobile = () => {
  if (typeof window !== 'undefined') {
    return /android|webos|iphone|ipad|ipod|blackberry|iemobile|opera mini/i.test(
      navigator.userAgent.toLowerCase(),
    );
  }
  return false;
};
