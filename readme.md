# Quote Generator Website


## Introduction
This is a simple Quote Generator website that displays random quotes to inspire and motivate users. The quotes are fetched from an external API using JavaScript's Fetch API method. The website is built using HTML, CSS, and JavaScript.

## Features
- Generates random quotes on page load and on button click.
- Displays the quote text along with the author.
- Simple and clean user interface.

## Technologies Used
- HTML
- CSS
- JavaScript
- Fetch API

## Setup Instructions
To get a local copy of the project up and running, follow these simple steps:

1. **Clone the repository:**
   ```sh
   git clone https://github.com/ZamanSikander/quotegen.git
   ```
2. **Navigate to the project directory:**
   ```sh
   cd quote-generator
   ```
3. **Open `index.html` in your preferred browser.**

## Usage
1. Upon opening the website, a random quote will be displayed.
2. Click the "New Quote" button to fetch and display a new random quote.

## Project Structure
```
quote-generator/
│
├── styles.css        # Stylesheet for the website
│
├── script.js         # JavaScript file containing the logic for fetching and displaying quotes
│
├── index.html            # Main HTML file
│
└── README.md             # This README file
```

## API Information
This project uses the [Quotable API](https://api.quotable.io/) to fetch random quotes. No authentication is required to use this API.

**API Endpoint:**
- Random Quote: `https://api.quotable.io/random`

**Sample Response:**
```json
{
  "_id": "1",
  "content": "The greatest glory in living lies not in never falling, but in rising every time we fall.",
  "author": "Nelson Mandela"
}
```

## Contributing
Contributions are what make the open-source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request
