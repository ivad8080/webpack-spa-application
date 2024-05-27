import '../styles/about.css';

export function loadAbout(main) {
  main.innerHTML = `
  <section id="about" class="about">
    <header>
      <h2>About</h2>
      <div class="about-video">
      <div id="video-placeholder">Loading video...</div>
      <iframe id="video" src="https://www.youtube.com/embed/aw_HMka5TxQ" allowfullscreen style="display: none;"></iframe>
      </div>
      <p>The UltraPhone X1 is a fictitious product created by Davi SAS. It represents the latest innovation in
        smartphone technology, offering revolutionary features, a sleek design, and outstanding performance.
        With its advanced quad-camera setup, crystal-clear OLED display, and the new X-Power 9000 processor,
        this model delivers an extraordinary user experience.</p>
    </header>
    <p class="about-price">Price: <data value="899">$899.00</data></p>
    <button type="button" class="attention">Add to Cart</button>
  </section>
  `;
  document.getElementById('video').addEventListener('load', function () {
    document.getElementById('video-placeholder').style.display = 'none';
    document.getElementById('video').style.display = 'block';
  });
}
