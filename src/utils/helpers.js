export const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
};

export const downloadCV = () => {
  const link = document.createElement('a');
  link.href = '/cv/Kirti-CV.pdf';
  link.download = 'Kirti_CV.pdf';
  link.click();
};

export const formatNumber = (num) => {
  if (num >= 1000) {
    return (num / 1000).toFixed(1) + 'k';
  }
  return num.toString();
};

export const getInitials = (name) => {
  return name.split(' ').map(n => n[0]).join('').toUpperCase();
};

export const debounce = (func, wait) => {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
};