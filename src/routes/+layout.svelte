<script>
  import './app.css';
</script>

<header>
  <a href="/" class="site-title">
    <img src="/images/sait-logo.png" alt="SAIT Logo" width="200" height="252">
    <div>Web Developer Fast Track</div>
    
  </a>
  <nav class="main-nav">
    <ul>
      <li><a href="/schedule">Schedule</a></li>
      <li><a href="/gallery">Gallery</a></li>
      <li><a href="/dailies">Daily Code</a></li>
    </ul>
  </nav>
</header>
<slot></slot>

<footer>
  <p>&copy; 2023 Tony Grimes</p>
</footer>