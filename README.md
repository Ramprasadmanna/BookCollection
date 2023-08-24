# [Book Collection Web App 📚](https://ramprasadmanna.github.io/BookCollection/)

## Overview
The Book Collection web app is a simple yet effective tool designed to help users keep track of books they wish to buy. It enables users to store relevant details about books they come across, ensuring they don't forget about their interests. The app is developed using HTML, CSS, and JavaScript.

![image](https://github.com/Ramprasadmanna/BookCollection/assets/97107928/660195c4-bc88-4a5d-841b-2243fc271a68)


## Features

### Adding a Book

![image](https://github.com/Ramprasadmanna/BookCollection/assets/97107928/3df489a3-35b0-4acc-bca6-9257b1a1e4f8)

1. Open the app and click on the "Add Book" button.
2. A form will appear where you can enter book details:
   - **Book Name**: Enter the name of the book.
   - **Author Name**: Enter the name of the book's author.
   - **Book Image**: Upload an image of the book for easy identification.
   - **Status**: Choose between "Bought" and "Not Bought."
   - **If Bought**:
     - **Purchase Price**: Enter the price at which you bought the book.
     - **Purchase Date**: Select the date when you purchased the book.
3. After entering the required details, click the "Submit" button to save the book to the collection.

### Viewing Book List

![image](https://github.com/Ramprasadmanna/BookCollection/assets/97107928/660195c4-bc88-4a5d-841b-2243fc271a68)

- After saving the book, the app will display a list of all saved books.
- Each book in the list shows its name, author, status (bought/not bought), and additional details if bought (purchase price and date).

### Editing Book Details

![image](https://github.com/Ramprasadmanna/BookCollection/assets/97107928/7bb733c2-1361-43cf-836a-3fa9e2baf28e)

- Users have the ability to edit book details after they've been added.
- Click on the book you want to edit from the list, and its details will be loaded into the form.
- Modify the desired fields and click "Submit" to save the changes.

### Deleting Books

![image](https://github.com/Ramprasadmanna/BookCollection/assets/97107928/578b2472-e67c-4b3e-ae9a-acb805140298)

- To remove a book from the collection, click the "Delete" button next to the book in the list.

### Resetting the Collection

![image](https://github.com/Ramprasadmanna/BookCollection/assets/97107928/36b4ded6-9745-407a-b211-53bd091764d6)

- The "Reset" button allows you to erase all saved book data.
- Be cautious, as this action cannot be undone.

## Visual Indicators
- Each book entry has a color-coded identifier in the bottom-right corner:
  - **Red**: The book is marked as "Not Bought."
    
    ![image](https://github.com/Ramprasadmanna/BookCollection/assets/97107928/f28f85d1-daa0-469c-a5d6-5e732c36dc72)
    
  - **Green**: The book is marked as "Bought."
    
    ![image](https://github.com/Ramprasadmanna/BookCollection/assets/97107928/c8b921d9-4af2-45d4-aef7-0af04520afae)

## Data Storage
- All book data is stored locally in the web browser's `localStorage`.
- The app's author does not have control over user data, ensuring privacy and security.

## How to Use
1. Open the web app in a browser.
2. Click the "Add Book" button to enter book details.
3. After saving, view the list of saved books.
4. Edit or delete books as needed.
5. Use the "Reset" button to clear all saved data.

Enjoy using the Book Collection web app to effortlessly manage and track books you're interested in purchasing!
