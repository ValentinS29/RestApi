<h1>RestApi</h1>

<p>
  A simple full-stack REST API project built with <strong>Spring Boot</strong> (backend) and
  <strong>React</strong> (frontend).
</p>

<hr />

<h2>📌 Features</h2>
<ul>
  <li>Spring Boot REST API backend</li>
  <li>React client app</li>
  <li>Full-stack repo layout (backend at root, frontend inside <code>client/</code>)</li>
</ul>

<hr />

<h2>🧰 Tech Stack</h2>
<ul>
  <li>Java + Spring Boot</li>
  <li>React (JavaScript)</li>
  <li>Maven (with Maven Wrapper: <code>mvnw</code> / <code>mvnw.cmd</code>)</li>
</ul>

<hr />

<h2>📁 Project Structure</h2>
<pre><code>RestApi/
├── client/              # React frontend
├── src/                 # Spring Boot backend source
├── pom.xml              # Maven config
├── mvnw / mvnw.cmd      # Maven wrapper
└── README.md
</code></pre>

<hr />

<h2>✅ Getting Started</h2>

<h3>Prerequisites</h3>
<ul>
  <li>Java (JDK installed)</li>
  <li>Node.js + npm</li>
  <li>Git</li>
</ul>

<hr />

<h2>▶️ Run the Backend (Spring Boot)</h2>
<p>From the repo root:</p>
<pre><code>./mvnw spring-boot:run</code></pre>

<p>On Windows:</p>
<pre><code>mvnw.cmd spring-boot:run</code></pre>

<p>
  By default, Spring Boot commonly runs on <code>http://localhost:8080</code> (unless you changed the port).
</p>

<hr />

<h2>▶️ Run the Frontend (React)</h2>
<p>From the repo root:</p>
<pre><code>cd client
npm install
npm start</code></pre>

<p>
  React commonly runs on <code>http://localhost:3000</code>.
</p>

<p>
  <em>Note:</em> If your frontend calls the backend API, you may need:
</p>
<ul>
  <li>a proxy setting in the React app, or</li>
  <li>to update the API base URL used by the frontend.</li>
</ul>

<hr />

<h2>🛠 Troubleshooting</h2>
<ul>
  <li><strong>CORS errors:</strong> enable CORS in Spring Boot or use a React proxy.</li>
  <li><strong>Port conflicts:</strong> change the frontend or backend port.</li>
  <li><strong>API not found:</strong> make sure the backend is running before using the frontend.</li>
</ul>

<hr />