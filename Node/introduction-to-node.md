# 📚 Lesson: Introduction to Node.js

**Objective:** Understand what Node.js is, how its architecture differs from traditional web servers, and how to write your very first Node.js web server.

## Part 1: What exactly is Node.js?

Historically, JavaScript was a language that lived exclusively inside the web browser. Node.js changed the game.

- **Definition:** Node.js is an open-source and cross-platform JavaScript runtime environment.
- **The Engine:** It runs the **V8 JavaScript engine** (the same high-performance core that powers Google Chrome) _outside_ of the browser.
- **The Advantage:** Millions of frontend developers who already know JavaScript can now write server-side code without having to learn a completely different language (like PHP, Python, or Ruby).
- **Modern JS:** Because you control the Node.js version on your server, you can use the latest ECMAScript (ES6+) standards immediately, without worrying if your users have updated their web browsers.

## Part 2: The Magic of "Non-Blocking" Architecture

Traditional web servers often create a _new thread_ for every single request they receive. Node.js takes a completely different approach.

### 🔑 Key Characteristics:

1.  **Single Process:** A Node.js app runs in a single process rather than spawning a new thread for every request.
2.  **Asynchronous I/O:** Node.js provides a set of asynchronous I/O (Input/Output) primitives.
3.  **Non-Blocking:** When Node.js performs an operation that takes time (like fetching data from a database, reading a file, or making a network request), it **does not block the thread**.

### How it works in practice:

Instead of wasting CPU cycles sitting around waiting for a database to return data, Node.js fires off the request and says, _"Let me know when you're done!"_ It then immediately moves on to handle the next user's request. When the database finishes, Node.js resumes that specific operation.

## Part 3: Your First Node.js Application

The most common "Hello World" in Node.js is creating a simple HTTP Web Server. Node.js has a fantastic standard library, including first-class support for networking.

### The Code (CommonJS format)

Take a look at the code below. Read the inline comments to understand what each part is doing.

```javascript
// 1. Import the built-in HTTP module
const { createServer } = require("node:http");

// 2. Define where the server will live
const hostname = "127.0.0.1"; // Localhost
const port = 3000;

// 3. Create the server
const server = createServer((req, res) => {
  // 'req' is the request from the user
  // 'res' is the response we are sending back

  res.statusCode = 200; // 200 means "OK/Success"
  res.setHeader("Content-Type", "text/plain"); // We are sending plain text

  // Close the response and send the text payload
  res.end("Hello World");
});

// 4. Tell the server to start listening for traffic
server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
```
