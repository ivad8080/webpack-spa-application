import '../styles/reviews.css';

export function loadReviews(main) {
  main.innerHTML = `
  <section id="reviews" class="reviews">
    <header>
      <h2 class="reviews-title">Reviews</h2>
      <p>Rating: <meter min="0" max="5" value="4.9">4.9 out of 5 stars</meter> (200 reviews)</p>
    </header>
    <section>
      <article>
        <header>
          <h3>Alice Johnson</h3>
          <time datetime="2024-05-01">May 1, 2024</time>
        </header>
        <p>Fantastic phone! The camera quality is superb and the performance is top-notch.</p>
      </article>
      <article>
        <header>
          <h3>Bob Lee</h3>
          <time datetime="2024-05-02">May 2, 2024</time>
        </header>
        <p>Best smartphone I've used. The battery life is excellent and the display is stunning.</p>
      </article>
    </section>
  </section>
  <section class="submit-review">
    <h2 class='title bold big'>Submit a Review</h2>
    <form action="/submit-review" method="post">
      <fieldset class="personal-info">
        <legend>Personal Information</legend>
        <p>
          <label for="name">Name:</label>
          <input type="text" id="name" name="name" required>
        </p>
        <p>
          <label for="email">Email:</label>
          <input type="email" id="email" name="email" required>
        </p>
      </fieldset>
      <fieldset class="review-details">
        <legend>Review Details</legend>
        <p class="rating-input">
          <label for="rating">Rating:</label>
          <input type="number" id="rating" name="rating" min="1" max="5" required>
        </p>
        <p>
          <label for="message">Message:</label>
          <textarea id="message" name="message" rows="5" required></textarea>
        </p>
      </fieldset>
      <fieldset class="review-preferences">
        <legend>Preferences</legend>
        <p class="preferences-question">
          <label for=" usage">How do you use the phone?</label>
          <select id="usage" name="usage" title="Question">
            <option value="personal">Personal</option>
            <option value="professional">Professional</option>
            <option value="both">Both</option>
          </select>
        </p>
        <fieldset class="review-features">
          <legend>Features you like the most:</legend>
          <label for="feature-camera">
            <input type="checkbox" id="feature-camera" name="review" value="camera"> Camera
          </label>
          <label for="feature-battery">
            <input type="checkbox" id="feature-battery" name="review" value="battery"> Battery
          </label>
          <label for="feature-display">
            <input type="checkbox" id="feature-display" name="review" value="display"> Display
          </label>
          <label for="feature-performance">
            <input type="checkbox" id="feature-performance" name="review" value="performance"> Performance
          </label>
        </fieldset>
      </fieldset>
      <button type="submit" class="attention">Submit Review</button>
    </form>
  </section>
  `;
}
