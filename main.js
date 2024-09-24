const classmates = document.querySelectorAll('.classmate');

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible'); 
                } else {
                    entry.target.classList.remove('visible'); 
                }
            });
        });

        classmates.forEach(classmate => {
            observer.observe(classmate);
        });