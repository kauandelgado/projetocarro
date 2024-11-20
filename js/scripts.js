document.addEventListener('DOMContentLoaded', () => {
    const cars = document.querySelectorAll('.car');
  
    cars.forEach(car => {
      car.addEventListener('click', () => {
        const carName = car.getAttribute('data-name');
        window.location.href = `car.html?name=${encodeURIComponent(carName)}`;
      });
    });
  });
  