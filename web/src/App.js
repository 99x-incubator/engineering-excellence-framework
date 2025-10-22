import React, { useEffect } from "react";
import "./App.css";

function App() {
  useEffect(() => {
    // Particle effect on mousemove
    const handleMouseMove = (e) => {
      if (Math.random() > 0.95) {
        const particle = document.createElement("div");
        particle.className = "particle";
        particle.style.left = e.clientX + "px";
        particle.style.top = e.clientY + "px";
        particle.style.width = Math.random() * 5 + 2 + "px";
        particle.style.height = particle.style.width;
        particle.style.background = `rgba(${Math.random() * 255}, ${Math.random() * 255}, 255, 0.8)`;
        particle.style.position = "absolute";
        particle.style.borderRadius = "50%";
        particle.style.pointerEvents = "none";
        particle.style.animation = `particleFloat ${Math.random() * 3 + 2}s ease-out forwards`;
        document.body.appendChild(particle);
        setTimeout(() => particle.remove(), 5000);
      }
    };
    document.addEventListener("mousemove", handleMouseMove);

    // Accent color animation
    let hue = 0;
    const hueInterval = setInterval(() => {
      hue = (hue + 1) % 360;
      document.documentElement.style.setProperty("--accent", `hsl(${hue}, 80%, 70%)`);
    }, 100);

    // Scroll background effect
    const handleScroll = () => {
      const scrollPosition = window.pageYOffset;
      const bg = document.querySelector(".background-animation");
      if (bg) bg.style.transform = `translateY(${scrollPosition * 0.5}px)`;
    };
    window.addEventListener("scroll", handleScroll);

    // Intersection observer for fade-in animation
    const observerOptions = {
      threshold: 0.1,
      rootMargin: "0px 0px -100px 0px",
    };
    const observer = new window.IntersectionObserver((entries) => {
      entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            entry.target.style.opacity = "1";
            entry.target.style.transform = "translateY(0)";
          }, index * 100);
        }
      });
    }, observerOptions);

  document.querySelectorAll(".glass-card, .lifecycle-item").forEach((el, index) => {
      el.style.opacity = "0";
      el.style.transform = "translateY(50px)";
      el.style.transition = "all 0.8s ease";
      observer.observe(el);
    });

    // Ripple effect for goal and practice cards
    document.querySelectorAll(".goal-card, .practice-item").forEach((card) => {
      card.addEventListener("click", function (e) {
        const ripple = document.createElement("div");
        ripple.style.position = "absolute";
        ripple.style.borderRadius = "50%";
        ripple.style.background = "rgba(255,255,255,0.5)";
        ripple.style.width = ripple.style.height = "100px";
        ripple.style.left = e.clientX - this.getBoundingClientRect().left - 50 + "px";
        ripple.style.top = e.clientY - this.getBoundingClientRect().top - 50 + "px";
        ripple.style.animation = "ripple 0.6s ease-out";
        this.appendChild(ripple);
        setTimeout(() => ripple.remove(), 600);
      });
    });

    // Add ripple animation CSS
    const style = document.createElement("style");
    style.textContent = `
      @keyframes ripple {
        to {
          transform: scale(4);
          opacity: 0;
        }
      }
    `;
    document.head.appendChild(style);

    // Cleanup listeners and interval
    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("scroll", handleScroll);
      clearInterval(hueInterval);
      document.head.removeChild(style);
    };
  }, []);

  // Smooth scroll function
  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <div>
      <div className="background-animation"></div>
      <div className="container">
        <nav>
          <div>
            <div className="logo">Engineering Excellence Framework</div>
            <div className="logo-subtext">
              by <img src={`${process.env.PUBLIC_URL}/99xlogo.svg`} alt="99x" className="logo-inline" />
            </div>
          </div>
          <div className="nav-links">
            <a href="#framework">Framework</a>
            <a href="#practices">Practices</a>
          </div>
        </nav>
        <header>
          <h1>
            Building the Future
            <br />
            of Engineering
          </h1>
          <p>
            A comprehensive framework designed to elevate engineering teams to world-class performance through proven practices and continuous improvement
          </p>
          <div className="cta-buttons">
            <button className="btn btn-primary" onClick={() => scrollToSection("framework")}>
              Explore Framework
            </button>
            <button className="btn btn-secondary" onClick={() => scrollToSection("practices")}>
              View Practices
            </button>
          </div>
        </header>

        <section className="framework-section" id="framework">
          <h2 className="section-title">Explore Our Framework</h2>
          <div className="framework-image-container">
            {/* Replace the lifecycle cards with an illustrative image. */}
            <img src={`${process.env.PUBLIC_URL}/framework.jpg`} alt="Framework illustration" className="framework-image" />
          </div>
        </section>

        <div className="main-content" id="performance">
          <div className="glass-card" id="practices">
            <div className="card-header">
              <span className="card-icon">🚀</span>
                <div>
                  <h2>Practices</h2>
                  <div className="card-subtitle">Engineering Excellence Framework</div>
                </div>
            </div>
            {/* performance goals moved to culture card */}
            <div className="practices-section">
              <div className="practice-category">
                <div className="category-header">
                  <span className="way-badge">FIRST WAY</span>
                  <h3>of DevOps</h3>
                </div>
                <div className="practices-list">
                  <a href={`${process.env.PUBLIC_URL}/practices/work-in-small-batches.html`} className="practice-item practice-link">Work in Small Batches</a>
                  <a href={`${process.env.PUBLIC_URL}/practices/limit-work-in-progress.html`} className="practice-item practice-link">Limit Work in Progress (WIP)</a>
                  <a href={`${process.env.PUBLIC_URL}/practices/version-control.html`} className="practice-item practice-link">Version Control</a>
                  <a href={`${process.env.PUBLIC_URL}/practices/continuous-integration.html`} className="practice-item practice-link">Continuous Integration</a>
                  <a href={`${process.env.PUBLIC_URL}/practices/loosely-coupled-architecture.html`} className="practice-item practice-link">Loosely Coupled Architecture</a>
                  <a href={`${process.env.PUBLIC_URL}/practices/test-automation.html`} className="practice-item practice-link">Test Automation</a>
                  <a href={`${process.env.PUBLIC_URL}/practices/test-data-management.html`} className="practice-item practice-link">Test Data Management</a>
                  <a href={`${process.env.PUBLIC_URL}/practices/trunk-based-development.html`} className="practice-item practice-link">Trunk-Based Development</a>
                  <a href={`${process.env.PUBLIC_URL}/practices/shift-left-security-privacy.html`} className="practice-item practice-link">Shift Left on Privacy and Security</a>
                  <a href={`${process.env.PUBLIC_URL}/practices/deployment-automation.html`} className="practice-item practice-link">Deployment Automation</a>
                  <a href={`${process.env.PUBLIC_URL}/practices/continuous-delivery.html`} className="practice-item practice-link">Continuous Delivery</a>
                  <a href={`${process.env.PUBLIC_URL}/practices/test-data-management.html`} className="practice-item practice-link">Test Data Management</a>
                  <a href={`${process.env.PUBLIC_URL}/practices/adhering-to-coding-standards.html`} className="practice-item practice-link">Coding Standards</a>
                  <a href={`${process.env.PUBLIC_URL}/practices/shift-left-on-quality.html`} className="practice-item practice-link">Shift Left on Quality</a>
                  <a href={`${process.env.PUBLIC_URL}/practices/lightweight-change-approval.html`} className="practice-item practice-link">Lightweight Change Approval</a>
                </div>
              </div>
              <div className="practice-category">
                <div className="category-header">
                  <span className="way-badge">SECOND WAY</span>
                  <h3>of DevOps</h3>
                </div>
                <div className="practices-list">
                  <a href={`${process.env.PUBLIC_URL}/practices/proactive-notification-build-deploy.html`} className="practice-item practice-link">Proactive Notification on Build and Deployment Process</a>
                  <a href={`${process.env.PUBLIC_URL}/practices/make-flow-of-work-visible.html`} className="practice-item practice-link">Make Flow of Work Visible to Team and Customer</a>
                  <a href={`${process.env.PUBLIC_URL}/practices/monitoring-and-feedback-production.html`} className="practice-item practice-link">Monitoring and Obtaining Feedback from Production</a>
                  <a href={`${process.env.PUBLIC_URL}/practices/visual-management-production-build-deployment.html`} className="practice-item practice-link">Visual Management of current application production, build and deployment state</a>
                </div>
              </div>
              <div className="practice-category">
                <div className="category-header">
                  <span className="way-badge">THIRD WAY</span>
                  <h3>of DevOps</h3>
                </div>
                <div className="practices-list">
                  <a href={`${process.env.PUBLIC_URL}/practices/empowered-teams.html`} className="practice-item practice-link">Empowered Teams</a>
                  <a href={`${process.env.PUBLIC_URL}/practices/team-experimentation.html`} className="practice-item practice-link">Team Experimentation</a>
                  <a href={`${process.env.PUBLIC_URL}/practices/training-and-development.html`} className="practice-item practice-link">Training and Development</a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <footer>
          <p>
            © 2025 99x Engineering Excellence Framework. Built with passion for engineering excellence.
          </p>
        </footer>
      </div>
    </div>
  );
}

export default App;