// Example inside ThoughtForm.jsx
import { useState } from "react";

const API_URL = "https://example-api.com/thoughts"; // Replace with your API URL

const ThoughtForm = () => {
  const [newThought, setNewThought] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    fetch(API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ message: newThought })
    })
      .then(response => response.json())
      .then(data => {
        console.log("Posted:", data);
        setNewThought(""); // Clear input field
      })
      .catch(error => console.error("Error posting thought:", error));
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={newThought}
        onChange={(e) => setNewThought(e.target.value)}
        placeholder="Write a happy thought..."
        rows="4"
        maxLength="140"
      />
      <button type="submit" aria-label="Send Happy Thought">
         Send Happy Thought   
       </button>
       {error && <p className="error-message">{error}</p>} 
    </form>
  );
};

export default ThoughtForm;