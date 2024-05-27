import '../styles/features.css';

export function loadFeatures(main) {
  main.innerHTML = `
  <section id="features" class="features">
    <header>
      <h2>Features</h2>
      <div id="image-placeholder">Loading image...</div>
      <figure class="features-image">
        <img id="image" src="./images/ultraphone.jpg" alt="UltraPhone X1"  style="display: none;">
        <figcaption>Image of UltraPhone X1</figcaption>
      </figure>
    </header>
    <dl>
      <dt>Processor</dt>
      <dd>X-Power 9000</dd>
      <dt>Display</dt>
      <dd>6.5-inch OLED Ultra HD</dd>
      <dt>Storage</dt>
      <dd>256GB, 512GB, 1TB</dd>
      <dt>Camera</dt>
      <dd>48MP quad-camera system (ultra-wide, wide, telephoto, depth sensor)</dd>
      <dt>Battery</dt>
      <dd>Up to 25 hours of video playback</dd>
      <dt>Operating System</dt>
      <dd>X-OS 5.0</dd>
      <dt>Connectivity</dt>
      <dd>5G, Wi-Fi 6E, Bluetooth 5.3</dd>
      <dt>Color</dt>
      <dd>Midnight Black, Silver, Gold, Emerald Green</dd>
    </dl>
  </section>
  `;
  document.getElementById('image').addEventListener('load', function () {
    document.getElementById('image-placeholder').style.display = 'none';
    document.getElementById('image').style.display = 'block';
  });
}
