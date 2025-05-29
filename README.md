# Hero UI Meme Gallery

This project is a simple web application built with
[Hero UI](https://www.heroui.com/) components and React to display and manage a
collection of memes.

## Features

- **Meme Table View**: View memes in a tabular format with ID, name, image URL
  and like count
- **Meme Gallery View**: Browse memes in a card-based gallery layout
- **Edit Functionality**: Modify meme properties through a modal interface
- **Data Persistence**: Changes are saved to browser cookies for persistent
  storage
- **Responsive Design**: Works on both desktop and mobile devices

## Technologies Used

- React with TypeScript
- Vite for fast build and development
- Hero UI component library
- React Router for navigation
- Browser cookies for data storage

## Project Structure

- `/src/pages`: Contains main page components
  - `table.tsx`: Editable tabular view of memes
  - `list.tsx`: Card-based gallery view of memes
- `/src/layouts`: Layout components
- `/src/config`: Configuration and utility functions

## Validation

The app includes validation for meme properties:

- Names must be between 3 and 100 characters
- Image URLs must be valid and end with .jpg
- Like counts must be integers between 0 and 99

## Getting Started

1. Clone the repository
2. Install dependencies with `npm install`
3. Start the development server with `npm run dev`
4. Navigate between table and gallery views using the navigation links

This project demonstrates the practical use of Hero UI components for building
modern, responsive React applications.
