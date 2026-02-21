import '@testing-library/jest-dom';

// Глобальные настройки для тестов
window.matchMedia = window.matchMedia || function() {
  return {
    matches: false,
    addListener: function() {},
    removeListener: function() {}
  };
};