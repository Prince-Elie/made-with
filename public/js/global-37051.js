(function() {
  const init = () => {
    // Hero animations
    const heroLines = document.querySelectorAll('.hero-line');
    heroLines.forEach((line, index) => {
      line.style.opacity = '0';
      line.style.transform = 'translateY(60px)';
      line.style.transition = 'all 0.8s cubic-bezier(0.16, 1, 0.3, 1)';
      line.style.transitionDelay = `${index * 0.15}s`;
      setTimeout(() => {
        line.style.opacity = '1';
        line.style.transform = 'translateY(0)';
      }, 100);
    });

    const heroFades = document.querySelectorAll('.hero-fade');
    heroFades.forEach((el, index) => {
      el.style.opacity = '0';
      el.style.transform = 'translateY(30px)';
      el.style.transition = 'all 0.6s cubic-bezier(0.16, 1, 0.3, 1)';
      el.style.transitionDelay = `${0.6 + index * 0.1}s`;
      setTimeout(() => {
        el.style.opacity = '1';
        el.style.transform = 'translateY(0)';
      }, 100);
    });

    // Card stack animation
    const cards = document.querySelectorAll('.card-item');
    cards.forEach((card, index) => {
      card.style.opacity = '0';
      card.style.transform = 'translateY(100px) rotate(10deg)';
      card.style.transition = 'all 0.8s cubic-bezier(0.16, 1, 0.3, 1)';
      card.style.transitionDelay = `${0.8 + index * 0.1}s`;
      setTimeout(() => {
        card.style.opacity = '1';
        card.style.transform = 'translateY(0) rotate(0deg)';
      }, 100);
    });

    // Scroll indicator pulse
    const scrollIndicator = document.querySelector('.scroll-indicator');
    if (scrollIndicator) {
      scrollIndicator.style.animation = 'pulse 2s infinite';
    }

    // Intersection Observer for scroll animations
    const observerOptions = {
      threshold: 0.2,
      rootMargin: '0px 0px -100px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-in');
          entry.target.style.opacity = '1';
          entry.target.style.transform = 'translateY(0)';
        }
      });
    }, observerOptions);

    // Feature cards
    const featureCards = document.querySelectorAll('.feature-card');
    featureCards.forEach((card, index) => {
      card.style.opacity = '0';
      card.style.transform = 'translateY(40px)';
      card.style.transition = 'all 0.6s cubic-bezier(0.16, 1, 0.3, 1)';
      card.style.transitionDelay = `${index * 0.1}s`;
      observer.observe(card);
    });

    // Content rows
    const contentRows = document.querySelectorAll('.content-row');
    contentRows.forEach((row) => {
      row.style.opacity = '0';
      row.style.transform = 'translateY(60px)';
      row.style.transition = 'all 0.8s cubic-bezier(0.16, 1, 0.3, 1)';
      observer.observe(row);
    });

    // Text reveal
    const textReveals = document.querySelectorAll('.text-reveal span');
    textReveals.forEach((span, index) => {
      span.style.display = 'block';
      span.style.opacity = '0';
      span.style.transform = 'translateX(-100px)';
      span.style.transition = 'all 0.8s cubic-bezier(0.16, 1, 0.3, 1)';
      span.style.transitionDelay = `${index * 0.15}s`;
    });

    const textRevealObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const spans = entry.target.querySelectorAll('span');
          spans.forEach(span => {
            span.style.opacity = '1';
            span.style.transform = 'translateX(0)';
          });
        }
      });
    }, { threshold: 0.3 });

    document.querySelectorAll('.text-reveal').forEach(el => {
      textRevealObserver.observe(el);
    });

    // Marquee animation
    const marqueeTrack = document.querySelector('.marquee-track');
    if (marqueeTrack) {
      let position = 0;
      const speed = 1;
      const animate = () => {
        position -= speed;
        if (position <= -marqueeTrack.scrollWidth / 2) {
          position = 0;
        }
        marqueeTrack.style.transform = `translateX(${position}px)`;
        requestAnimationFrame(animate);
      };
      animate();
    }

    // Counter animation
    const counterObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const counter = entry.target;
          let count = 0;
          const target = 60;
          const duration = 2000;
          const increment = target / (duration / 16);
          const updateCounter = () => {
            count += increment;
            if (count < target) {
              counter.textContent = Math.floor(count) + '+';
              requestAnimationFrame(updateCounter);
            } else {
              counter.textContent = target + '+';
            }
          };
          updateCounter();
          counterObserver.unobserve(counter);
        }
      });
    }, { threshold: 0.5 });

    document.querySelectorAll('.counter-number').forEach(el => {
      counterObserver.observe(el);
    });

    // Add CSS keyframes
    const style = document.createElement('style');
    style.textContent = `
      @keyframes pulse {
        0%, 100% { opacity: 1; transform: scaleY(1); }
        50% { opacity: 0.5; transform: scaleY(1.2); }
      }
    `;
    document.head.appendChild(style);
  };

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();