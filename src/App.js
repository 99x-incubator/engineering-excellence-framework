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

    document.querySelectorAll(".glass-card, .lifecycle-item, .stat-card").forEach((el, index) => {
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
          <div className="logo">99x Engineering</div>
          <div className="nav-links">
            <a href="#framework">Framework</a>
            <a href="#performance">Performance</a>
            <a href="#culture">Culture</a>
            <a href="#practices">Practices</a>
          </div>
        </nav>
        <header>
          <div className="hero-badge">ENGINEERING EXCELLENCE FRAMEWORK</div>
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

        <div className="stats-section">
          <div className="stat-card">
            <div className="stat-number">8</div>
            <div className="stat-label">Lifecycle Phases</div>
          </div>
          <div className="stat-card">
            <div className="stat-number">3</div>
            <div className="stat-label">Ways of DevOps</div>
          </div>
          <div className="stat-card">
            <div className="stat-number">18+</div>
            <div className="stat-label">Core Practices</div>
          </div>
          <div className="stat-card">
            <div className="stat-number">6</div>
            <div className="stat-label">Key Objectives</div>
          </div>
        </div>

        <section className="lifecycle-section" id="framework">
          <h2 className="section-title">Engineering Lifecycle Phases</h2>
          <div className="lifecycle">
            <div className="lifecycle-item">
              <span className="emoji-icon">🔍</span>
              Explore
            </div>
            <div className="lifecycle-item">
              <span className="emoji-icon">🎯</span>
              Focus
            </div>
            <div className="lifecycle-item">
              <span className="emoji-icon">💡</span>
              Immerse
            </div>
            <div className="lifecycle-item">
              <span className="emoji-icon">📋</span>
              Plan
            </div>
            <div className="lifecycle-item">
              <span className="emoji-icon">🔨</span>
              Build
            </div>
            <div className="lifecycle-item">
              <span className="emoji-icon">⚡</span>
              Optimize
            </div>
            <div className="lifecycle-item">
              <span className="emoji-icon">🌟</span>
              Harvest
            </div>
            <div className="lifecycle-item">
              <span className="emoji-icon">🔄</span>
              Retire
            </div>
          </div>
        </section>

        <div className="main-content" id="performance">
          <div className="glass-card">
            <div className="card-header">
              <span className="card-icon">🚀</span>
              <h2>Product Team Performance</h2>
            </div>
            <div className="goals-grid">
              <div className="goal-card">
                <h3>🎯 Enhance Software Product Delivery Performance</h3>
              </div>
              <div className="goal-card">
                <h3>⚡ Reduce Rework and Increase Team Efficiency</h3>
              </div>
              <div className="goal-card">
                <h3>💰 Reduce the Cost of the Product Engineering Team</h3>
              </div>
            </div>
            <div className="practices-section" id="practices">
              <div className="practice-category">
                <div className="category-header">
                  <span className="way-badge">FIRST WAY</span>
                  <h3>of DevOps</h3>
                </div>
                <div className="practices-list">
                  <div className="practice-item">Work in Small Batches</div>
                  <div className="practice-item">Limit Work in Progress (WIP)</div>
                  <div className="practice-item">Version Control</div>
                  <div className="practice-item">Continuous Integration</div>
                  <div className="practice-item">Loosely Coupled Architecture</div>
                  <div className="practice-item">Test Automation</div>
                  <div className="practice-item">Trunk-Based Development</div>
                  <div className="practice-item">Shift Left on Privacy and Security</div>
                  <div className="practice-item">Deployment Automation</div>
                  <div className="practice-item">Continuous Delivery</div>
                  <div className="practice-item">Test Data Management</div>
                  <div className="practice-item">Coding Standards</div>
                  <div className="practice-item">Shift Left on Quality</div>
                  <div className="practice-item">Lightweight Change Approval</div>
                </div>
              </div>
              <div className="practice-category">
                <div className="category-header">
                  <span className="way-badge">SECOND WAY</span>
                  <h3>of DevOps</h3>
                </div>
                <div className="practices-list">
                  <div className="practice-item">Proactive Notification on Build and Deployment Process</div>
                  <div className="practice-item">Make Flow of Work Visible to Team and Customer</div>
                  <div className="practice-item">Monitoring and Obtaining Feedback from Production</div>
                  <div className="practice-item">Visual Management of current application production, build and deployment state</div>
                </div>
              </div>
            </div>
          </div>
          <div className="glass-card" id="culture">
            <div className="card-header">
              <span className="card-icon">💎</span>
              <h2>Product Team Culture</h2>
            </div>
            <div className="goals-grid">
              <div className="goal-card">
                <h3>😊 Reduce the Team Development Pain</h3>
              </div>
              <div className="goal-card">
                <h3>🔥 Reduce the Team Burnout</h3>
              </div>
              <div className="goal-card">
                <h3>✨ Improve 99x Employee Job Satisfaction</h3>
              </div>
            </div>
            <div className="practices-section">
              <div className="practice-category">
                <div className="category-header">
                  <span className="way-badge">THIRD WAY</span>
                  <h3>of DevOps</h3>
                </div>
                <div className="practices-list">
                  <div className="practice-item">Empowered Teams</div>
                  <div className="practice-item">Team Experimentation</div>
                  <div className="practice-item">Training and Development</div>
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