// Toggle menú móvil
const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.getElementById("nav-links");

menuToggle.addEventListener("click", () => {
  navLinks.classList.toggle("show");
});

// Enhanced scroll animations with Intersection Observer
document.addEventListener("DOMContentLoaded", () => {
  const reveals = document.querySelectorAll(".reveal");

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry, index) => {
      if (entry.isIntersecting) {
        // Add staggered delay for multiple elements
        setTimeout(() => {
          entry.target.classList.add("visible");
        }, index * 100);
        observer.unobserve(entry.target);
      }
    });
  }, { 
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px"
  });

  reveals.forEach(r => observer.observe(r));

  // Add smooth scrolling to navigation links
  const navLinksList = document.querySelectorAll('.nav-links a[href^="#"]');
  navLinksList.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const targetId = link.getAttribute('href');
      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        targetElement.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });

  // Add loading animation
  document.body.classList.add('loaded');
});

// Enhanced parallax effect
let ticking = false;

function updateParallax() {
  const hero = document.querySelector(".hero");
  if (hero) {
    const scrolled = window.pageYOffset;
    const parallax = scrolled * 0.3;
    hero.style.backgroundPosition = `30% ${parallax}px`;
  }
  ticking = false;
}

function requestTick() {
  if (!ticking) {
    requestAnimationFrame(updateParallax);
    ticking = true;
  }
}

window.addEventListener("scroll", requestTick);

// Add navbar background on scroll
window.addEventListener("scroll", () => {
  const header = document.querySelector("header");
  if (window.scrollY > 50) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }
});

// Remove typing effect - display text normally

// Add hover effects to team members
document.addEventListener('DOMContentLoaded', () => {
  const teamMembers = document.querySelectorAll('.team-member');
  
  teamMembers.forEach(member => {
    member.addEventListener('mouseenter', () => {
      member.style.transform = 'translateY(-15px) scale(1.02)';
    });
    
    member.addEventListener('mouseleave', () => {
      member.style.transform = 'translateY(0) scale(1)';
    });
  });
});

// Add scroll progress indicator
function updateScrollProgress() {
  const scrollTop = window.pageYOffset;
  const docHeight = document.body.scrollHeight - window.innerHeight;
  const scrollPercent = (scrollTop / docHeight) * 100;
  
  const progressBar = document.querySelector('.scroll-progress');
  if (progressBar) {
    progressBar.style.width = scrollPercent + '%';
  }
}

window.addEventListener('scroll', updateScrollProgress);

// Blog post functionality
function openBlogPost(postType) {
  if (postType === 'school') {
    window.location.href = 'blog-post.html';
  } else {
    // For other posts, you can add more functionality later
    alert('Esta publicación estará disponible próximamente.');
  }
}

function showSchoolPost() {
  // Create modal
  const modal = document.createElement('div');
  modal.className = 'blog-modal';
  modal.innerHTML = `
    <div class="modal-overlay" onclick="closeBlogModal()"></div>
    <div class="modal-content">
      <div class="modal-header">
        <h2>CEBA 6052 José María Eguren - Barranco</h2>
        <button class="close-btn" onclick="closeBlogModal()">&times;</button>
      </div>
      <div class="modal-body">
        <div class="post-image">
          <img src="img/logo_colegio.jpg" alt="CEBA 6052 José María Eguren">
        </div>
        <div class="post-meta">
          <span class="post-date">15 Enero 2025</span>
          <span class="post-category">Institución</span>
        </div>
        <div class="post-content">
          <p>El <strong>CEBA 6052 José María Eguren</strong> es la institución educativa donde implementamos nuestro proyecto "Puentes de Aprendizaje". Esta institución pública pertenece a la DRE Lima Metropolitana y a la UGEL 07 – San Borja, ubicada en Barranco, Lima.</p>
          
          <h3>Historia y Contexto</h3>
          <p>El CEBA es más que una escuela, es una comunidad educativa donde una plana docente capacitada acompaña a cada estudiante en su proceso de aprendizaje, fortaleciendo su desarrollo personal, social y académico. Su propuesta se centra en formar personas competentes, con autoestima, habilidades sociales y una sólida base académica y emocional.</p>
          
          <h3>Misión y Visión</h3>
          <p><strong>Misión:</strong> Brindar servicios de educación básica alternativa en los niveles Inicial, Intermedio y Avanzado, en modalidades presencial, semipresencial y a distancia, con una formación integral, humana, inclusiva, científica y tecnológica.</p>
          
          <p><strong>Visión:</strong> Ser una institución líder de la Red de Escuelas Asociadas a la UNESCO en Lima, brindando una educación científica, tecnológica, humanista y competitiva, basada en principios éticos y morales.</p>
          
          <h3>Datos Institucionales</h3>
          <ul>
            <li><strong>Dirección:</strong> Av. Manuel de la Fuente Chávez 506, Barranco — Lima</li>
            <li><strong>Teléfono:</strong> (01) 251-7994</li>
            <li><strong>Estudiantes:</strong> 262</li>
            <li><strong>Docentes:</strong> 10</li>
            <li><strong>Modalidades:</strong> Presencial, Semipresencial y A distancia</li>
            <li><strong>Turnos:</strong> Mañana y Tarde</li>
          </ul>
          
          <h3>Compromiso con la Inclusión</h3>
          <p>La escuela ha demostrado un fuerte compromiso con la educación inclusiva, implementando diversas estrategias para atender a estudiantes con diferentes necesidades de aprendizaje. Este enfoque alineado con nuestros objetivos hizo que fuera la institución ideal para desarrollar nuestro proyecto "Puentes de Aprendizaje".</p>
          
          <h3>Colaboración con Nuestro Proyecto</h3>
          <p>La dirección y el cuerpo docente han mostrado gran receptividad hacia nuestro proyecto, facilitando el acceso a las aulas y proporcionando información valiosa sobre los estudiantes. Esta colaboración ha sido fundamental para el éxito de nuestra intervención en el área de detección y apoyo a dificultades de aprendizaje.</p>
        </div>
      </div>
    </div>
  `;
  
  document.body.appendChild(modal);
  document.body.style.overflow = 'hidden';
  
  // Add animation
  setTimeout(() => {
    modal.classList.add('show');
  }, 10);
}

function closeBlogModal() {
  const modal = document.querySelector('.blog-modal');
  if (modal) {
    modal.classList.remove('show');
    setTimeout(() => {
      document.body.removeChild(modal);
      document.body.style.overflow = 'auto';
    }, 300);
  }
}
