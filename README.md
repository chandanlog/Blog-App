# News Geek - A Responsive React Blog Application

This is a single-page blog application built with React.js, serving as a dynamic platform for creating, viewing, and managing blog posts. It leverages `json-server` for a mock backend API, making it easy to get started with local development.

---

## ✨ Features

* **Blog Listing:** Displays all available blog posts in a responsive grid layout.
* **Category Filtering:** Allows users to filter blog posts by various categories (e.g., Entertainment, Technology, Sports, Business, Health, Science, World).
* **Detailed Blog View:** Click on any blog post to view its full content on a dedicated details page.
* **New Blog Submission:** Features a user-friendly form to add new blog entries with validation for all required fields (category, title, blogger name, image URL, and description).
* **Responsive Navigation:** Includes a clear two-part navigation bar: a brand logo (`News Geek`) at the top-left and category links directly below it, providing intuitive navigation across different screen sizes.
* **Data Management:** Utilizes `json-server` for mock API calls, demonstrating how to fetch, post, and retrieve data using `axios`.

---

## 🚀 Technologies Used

* **React.js:** For building the user interface.
* **React Router DOM:** For client-side routing.
* **Axios:** For making HTTP requests to the API.
* **JSON-Server:** To quickly set up a mock REST API for development.
* **CSS3:** For styling and layout.

---

## 🛠️ Setup and Installation

Follow these steps to get the project up and running on your local machine.

### Prerequisites

* Node.js (LTS version recommended)
* npm (comes with Node.js) or Yarn

### Installation Steps

1.  **Clone the Repository:**
    ```bash
    git clone [https://github.com/YOUR_GITHUB_USERNAME/YOUR_REPO_NAME.git](https://github.com/YOUR_GITHUB_USERNAME/YOUR_REPO_NAME.git)
    cd YOUR_REPO_NAME
    ```
    *(Remember to replace `YOUR_GITHUB_USERNAME` and `YOUR_REPO_NAME` with your actual GitHub details).*

2.  **Install Dependencies:**
    Navigate to the project directory and install the necessary npm packages for the React app:
    ```bash
    npm install
    ```

3.  **Set Up JSON-Server:**
    Create a `db.json` file in the root of your project to serve as your mock database. You can start with an empty `blogs` array:
    ```json
    {
      "blogs": []
    }
    ```
    Or, you can populate it with some initial data for testing:
    ```json
    {
      "blogs": [
        {
          "id": "1",
          "category": "Technology",
          "title": "The Future of AI in Web Development",
          "blogger_name": "Alice Tech",
          "image": "[https://via.placeholder.com/400x200?text=AI+Web+Dev](https://via.placeholder.com/400x200?text=AI+Web+Dev)",
          "description": "Artificial Intelligence is rapidly changing how we build websites..."
        },
        {
          "id": "2",
          "category": "Entertainment",
          "title": "Top 10 Must-Watch Movies This Summer",
          "blogger_name": "Bob Cinema",
          "image": "[https://via.placeholder.com/400x200?text=Summer+Movies](https://via.placeholder.com/400x200?text=Summer+Movies)",
          "description": "Grab your popcorn! Here are the hottest picks for your movie nights..."
        }
      ]
    }
    ```

---

## 🚀 Running the Application

This application requires two separate processes to run: the JSON-Server (your mock API) and the React development server.

1.  **Start JSON-Server:**
    Open a **new terminal window** in your project's root directory and start `json-server`:
    ```bash
    npx json-server --watch db.json --port 5000
    ```
    This will start your API server, usually accessible at `http://localhost:5000/blogs`.

2.  **Start the React Development Server:**
    Open **another new terminal window** (keep the JSON-Server running in its own window) in your project's root directory and start the React app:
    ```bash
    npm start
    ```
    This will open your application in your browser at `http://localhost:3000/`.

---

## 💡 Usage

* **View Blogs:** The home page (`/`) will display all blog posts.
* **Filter by Category:** Use the navigation links to filter blogs by specific categories.
* **Add New Blog:** Fill out the form on the home page and submit a new blog post. It will be added to your `db.json` file.
* **View Details:** Click on "Read More..." from any blog card to navigate to its dedicated details page.

---

## 🤝 Contributing

Contributions are welcome! If you have suggestions or improvements, please:
1.  Fork the repository.
2.  Create a new branch (`git checkout -b feature/your-feature-name`).
3.  Make your changes.
4.  Commit your changes (`git commit -m 'Feat: Add new feature'`).
5.  Push to the branch (`git push origin feature/your-feature-name`).
6.  Open a Pull Request.

---

## 📄 License

This project is open source and available under the [MIT License](https://opensource.org/licenses/MIT).
