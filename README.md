# Posts with Time Travel

## Demo video

[![Demo Video](https://img.youtube.com/vi/tvCQE_dx3gU/0.jpg)](https://youtu.be/tvCQE_dx3gU)

## Overview

"Posts with Time Travel" is a dynamic web application that allows users to
manage a list of posts with a somewhat innovative time-travel feature. Users can
reorder, add, or delete posts, and easily revert to previous states using
checkpoints.

## Features

### **Dynamic Post Management**

Users can:

- Move posts up or down in the list.
- Delete posts.
- Add new posts to the list.

### **Time Travel Functionality**

- Each action is saved as a checkpoint that the user can access
- Users can rewind to any checkpoint, allowing them to undo any number of
  actions at once.

### **Visual Feedback**:

- Checkpoints are color-coded and icon-based, representing different actions.
- Smooth animations for adding, moving, and deleting posts enhance user
  experience.

### **Mock Data Fetching**

Posts are retrieved using a mock fetch function that simulates asynchronous data
retrieval.

## Technologies Used

- Vue
- Vite
- TypeScript
- Tailwind CSS
- CSS
- Pinia
- Vuetify
- Tailwind Scrollbar

## License

This project is licensed under the MIT License - see the [License](LICENSE) file
for details.
