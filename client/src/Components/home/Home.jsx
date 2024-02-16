import React from 'react';

const Home = () => {
  return (
    <div className="home">
      {/* Header Section */}
      <header className="header">
        <div className="logo">FitHub</div>
        <nav className="navigation">
          <ul>
            <li><a href="#">Home</a></li>
            <li className="dropdown">
              <a href="#">Dashboard <i className="fas fa-chevron-down"></i></a>
              <div className="dropdown-content">
                <div className="column">
                  <h3>Overview</h3>
                  <a href="#">Analytics</a>
                  <a href="#">Performance</a>
                  <a href="#">Progress</a> {/* New addition */}
                </div>
                <div className="column">
                  <h3>Settings</h3>
                  <a href="#">Profile Settings</a>
                  <a href="#">Account Settings</a>
                  <a href="#">Notification</a> {/* New addition */}
                </div>
              </div>
            </li>
            <li className="dropdown">
              <a href="#">Activities <i className="fas fa-chevron-down"></i></a>
              <div className="dropdown-content">
                <div className="column">
                  <h3>Body Building</h3>
                  <a href="#">Cardio</a>
                  <a href="#">Boxing</a>
                  <a href="#">Equipment Bodybuilding</a>
                  <a href="#">Calisthenics</a>
                </div>
                <div className="column">
                  <h3>Yoga</h3> {/* New addition */}
                  <a href="#">Hatha Yoga</a>
                  <a href="#">Vinyasa Yoga</a>
                  <a href="#">Ashtanga Yoga</a>
                  <a href="#">Bikram Yoga</a>
                </div>
              </div>
            </li>
            <li className="dropdown">
              <a href="#">Profile <i className="fas fa-chevron-down"></i></a>
              <div className="dropdown-content">
                <a href="#">View Profile</a>
                <a href="#">Edit Profile</a>
                <a href="#">Change Password</a> {/* New addition */}
              </div>
            </li>
          </ul>
        </nav>
        <div className="search-bar">
          <input type="text" placeholder="Search..." />
          <button type="submit"><i className="fas fa-search"></i></button>
        </div>
        <div className="authentication">
          <button className="btn">Log In</button>
          <button className="btn btn-primary">Sign Up</button>
        </div>
      </header>


      {/* Hero Section */}
      <section className="hero">
        <h1>Track Your Fitness Journey</h1>
        <p>Start achieving your fitness goals today with our app!</p>
        <button className="btn btn-primary">Get Started</button>
      </section>

      {/* Features Section */}
      <section className="features">
        <h2>Key Features</h2>
        <div className="feature">
          <span className="icon">🏋️‍♂️</span>
          <p>Activity Tracking</p>
        </div>
        <div className="feature">
          <span className="icon">🎯</span>
          <p>Goal Setting</p>
        </div>
        <div className="feature">
          <span className="icon">📅</span>
          <p>Personalized Plans</p>
        </div>
        <div className="feature">
          <span className="icon">👥</span>
          <p>Community Support</p>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="how-it-works">
        <h2>How It Works</h2>
        <ol>
          <li>Sign up for an account.</li>
          <li>Set your fitness goals.</li>
          <li>Track your activities and progress.</li>
          <li>Connect with the fitness community.</li>
        </ol>
      </section>

      {/* Testimonials Section */}
      <section className="testimonials">
        <h2>Testimonials</h2>
        <div className="testimonial">
          <blockquote>"I've never felt better since I started using FitHub. Highly recommend!"</blockquote>
          <cite>- Abdullahi Abass</cite>
        </div>
      </section>

      {/* Call-to-Action Section */}
      <section className="cta">
        <h2>Start Your Fitness Journey Today!</h2>
        <button className="btn btn-primary">Sign Up Now</button>
      </section>

      {/* Pricing Section */}
      <section className="pricing">
        <h2>Choose Your Plan</h2>
        <div className="plan">
          <h3>Basic Plan</h3>
          <p>Access to basic features</p>
          <button className="btn btn-secondary">Get Started</button>
        </div>
        <div className="plan">
          <h3>Premium Plan</h3>
          <p>Access to advanced features</p>
          <button className="btn btn-primary">Get Started</button>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="faq">
        <h2>Frequently Asked Questions</h2>
        <div className="question">
          <h3>How do I track my activities?</h3>
          <p>Our app provides easy-to-use activity tracking tools.</p>
        </div>
        <div className="question">
          <h3>Can I sync my data with other fitness apps?</h3>
          <p>Yes, our app supports data synchronization with popular fitness platforms.</p>
        </div>
        <div className="question">
          <h3>Is there a mobile app available?</h3> {/* New addition */}
          <p>Yes, you can download our mobile app from the App Store or Google Play Store.</p> {/* New addition */}
        </div>
        <div className="question">
          <h3>How can I contact customer support?</h3> {/* New addition */}
          <p>You can contact our customer support team via email or phone.</p> {/* New addition */}
        </div>
      </section>

      {/* Footer Section */}
      <footer className="footer">
        <div className="contact-info">
          <p>Contact Us: FitHub.ke@gmail.com</p>
          <p>Phone: +254798491946</p>
        </div>
        <div className="social-media">
          <a href="#" className="icon-link"><i className="fab fa-facebook-f"></i></a>
          <a href="#" className="icon-link"><i className="fab fa-twitter"></i></a>
          <a href="#" className="icon-link"><i className="fab fa-instagram"></i></a>
        </div>
        <div className="legal">
          <a href="#">Privacy Policy</a>
          <a href="#">Terms of Service</a>
          <a href="#">Cookie Policy</a> {/* New addition */}
        </div>
      </footer>
    </div>
  );
}

export default Home;
