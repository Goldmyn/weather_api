# My Weather App

A simple JavaScript-based weather application that allows users to search for a city and fetch real-time weather data using the OpenWeatherMap API. The app displays essential weather information such as temperature, humidity, wind speed, and more in a user-friendly interface.

## Features

- User-friendly interface for searching city weather.
- Displays city name, country code, latitude, longitude, temperature, humidity, wind speed, and weather conditions.
- Alerts the user when the input is left empty.

## Getting Started

### Prerequisites

- A web browser (Chrome, Firefox, etc.)
- Basic understanding of HTML, CSS, and JavaScript.
- An OpenWeatherMap API key (you can sign up for a free account on their website).

### Installation

1. **HTML File**: Open the `index.html` file. This file structures the layout of the weather application.
2. **JavaScript File**: Open the `script.js` file. This file contains the logic for fetching weather data and updating the UI.
3. **CSS File**: Open the `style.css` file. This file provides styles to enhance the visual layout and design of the application.
4. **API Key**: Be sure to replace the placeholder API key in the `script.js` file with your actual OpenWeatherMap API key.
5. Open the `index.html` file in your web browser to access the application.

### Usage

1. Enter a city name in the search input field located in the HTML form.
2. Click the "Submit" button.
3. The application will display the weather information for the specified city in the designated section of the page.

## Code Explanation

- **HTML Structure**: Defined in the `index.html` file, which includes a header, main section, and a form for users to enter their desired city.
- **JavaScript Functionality**:
  - In the `script.js` file, an event listener is attached to the submit button to capture user input and prevent default form submission.
  - An asynchronous API call is made using Axios to fetch weather data based on the user input.
  - The retrieved information is displayed dynamically in the weather container section of the app.
- **Error Handling**: The app includes error handling for API call failures and alerts users for empty inputs.

## Contributing

Contributions are welcome! If you have suggestions for improvements or enhancements, please feel free to create an issue or submit a pull request.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
