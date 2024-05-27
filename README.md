# Webpack SPA Application

This project is a Single Page Application (SPA) developed with vanilla JavaScript. It uses Webpack to bundle and optimize JavaScript and CSS files, generating separate and minified static files for production. The application "UltraPhone" includes three "pages" (About, Features, Reviews) that are dynamically loaded without reloading the entire page, keeping a fixed header and footer.

## Project Structure

```
webpack-spa/
├── build/
│ ├── images/
│ │ ├── ultraphone.jpg
│ ├── bundle.js
│ ├── styles.css
│ └── index.html
├── src/
│ ├── images/
│ │ ├── ultraphone.jpg
│ ├── pages/
│ │ ├── about.js
│ │ ├── features.js
│ │ ├── reviews.js
│ ├── styles/
│ │ ├── main.css
│ │ ├── about.css
│ │ ├── features.css
│ │ ├── reviews.css
│ ├── index.js
│ └── template.html
├── package.json
├── webpack.config.js
└── README.md
```

## Modules and Plugins Used

- **Webpack**: A modern and highly configurable JavaScript module bundler.
- **Webpack Dev Server**: A development server that provides hot-reloading.
- **HTML Webpack Plugin**: A plugin to simplify the creation of HTML files to serve webpack bundles.
- **Mini CSS Extract Plugin**: A plugin to extract CSS into separate files.
- **CSS Minimizer Webpack Plugin**: A plugin to optimize and minify CSS files.
- **Copy Webpack Plugin**: A plugin to copy individual files or entire directories to the build directory.

## Technical Description

Webpack is configured to bundle all JavaScript and CSS files starting from the entry point defined in `src/index.js`.

Different plugins were used to improve and optimize the build process:

- **HtmlWebpackPlugin**: Generates an HTML file from a template and automatically injects the generated bundles.
- **MiniCssExtractPlugin**: Extracts CSS from JavaScript bundles into separate CSS files, improving loading performance.
- **CssMinimizerPlugin**: Minimizes the generated CSS files to reduce the final bundle size.
- **CopyWebpackPlugin**: Copies files or entire directories from the source to the build directory, ensuring that static assets like images are available in the final build.

## Application Functionality

The application "UltraPhone" consists of three main pages (About, Features, Reviews) that are dynamically loaded into a central `<main>` element, keeping a fixed header and footer on all pages. Navigation between pages is managed using URL hashes (`#about`, `#features`, `#reviews`).

The main file `index.js` initializes the application, sets up event listeners for navigation, and loads the correct page based on the URL hash.

## Getting Started

`npm install`

Installs project dependencies.

`npm start`

Runs the application in development mode. Open http://localhost:3000 to view it in the browser.

`npm run build`

Builds the application for production in the build folder.
It correctly bundles the files in production mode and optimizes the build for the best performance.

## License

Distributed under the MIT License.

## Contact

Davi SAS - https://linkedin.com/in/davisas

## Final Considerations

This is my first detailed documentation, I hope you like it.
