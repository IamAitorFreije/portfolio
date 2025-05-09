function toggleTheme() {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    
    // Actualizar texto button
    const button = document.querySelector('.theme-toggle');
    button.textContent = `Switch to ${currentTheme === 'dark' ? 'Dark' : 'Light'} Mode`;
  }
  
  // Revisar preferencias
  document.addEventListener('DOMContentLoaded', () => {
    const savedTheme = localStorage.getItem('theme') || 'light';
    document.documentElement.setAttribute('data-theme', savedTheme);
    
    const button = document.querySelector('.theme-toggle');
    button.textContent = `Switch to ${savedTheme === 'dark' ? 'Light' : 'Dark'} Mode`;
  });