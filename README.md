# Supertest API Project

This project uses [SuperTest](https://github.com/visionmedia/supertest) for API testing in Node.js with Mocha and Chai. It also includes **dotenv** for environment variable management and **Prettier** for maintaining code style consistency.

## Table of Contents

- [Installation](#installation)
- [Configuration](#configuration)
- [Project Structure](#project-structure)
- [Available Scripts](#available-scripts)
- [Using Prettier](#using-prettier)
- [Example Usage](#example-usage)

---

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/lucas-porto1/supertest-api.git
   cd supertest-api

   ```

2. Install project dependencies:

   ```bash
    npm install
   ```

## Configuration

1. Create a .env file in the project root to configure environment variables such as the API URL and test data:

```plaintext
URL=https://your-api.com
EMAIL=user@example.com
PASSWORD=securePassword123
```

2. Ensure that the .env file is listed in .gitignore to protect sensitive information.

   **Note**: The `.env` file in this repository includes sample credentials to facilitate smooth testing and setup. Ensure that sensitive credentials are replaced with secure values in production environments and avoid committing any sensitive information in live applications.

## Project Structure

The project is organized to separate functions and test data for better maintenance and reusability:

```plaintext
supertest-api/
├── fixtures/
│   ├── requestBody/
│   │   └── register.js                  # Request body data for registration
│   ├── responseBody/
│   │   └── register.js                  # Expected response data for registration
│   │   └── registerSchema.js            # Expected schema for registration
├── support/
│   ├── endpoints/
│   │   └── register.js                  # API call functions for registration
│   ├── helpers/
│   │   └── utility.js                   # Utility functions, e.g., random number generation
├── test/
│   └── register.test.js                 # API tests for the registration endpoint
├── .env                                 # Environment variables (URL, credentials)
├── .gitignore                           # Git ignored files and directories
├── .prettierrc.json                     # Prettier configuration
├── package.json                         # Project dependencies and scripts
└── README.md                            # Project documentation
```

## Folder Descriptions

- **fixtures**/: Contains simulated data for requests (requestBody) and expected responses (responseBody).
- **support**/: Includes endpoints for API call functions and helpers for utility functions.
- **test**/: The main folder for API tests.

## Available Scripts

- npm test: Runs the project tests with Mocha.
- npm run format: Runs Prettier to format the code automatically.

## Using Prettier

**Prettier** is used to ensure consistent and readable code. It is configured in the .prettierrc file with the following settings:

```json
{
  "printWidth": 100,
  "singleQuote": true,
  "trailingComma": "none",
  "semi": false,
  "tabWidth": 2
}
```

Run Prettier with:

```bash
npm run format
```

## Example Usage

Here’s a basic example of how to test the register endpoint:

```javascript
import { postRegister } from '../support/endpoints/register.js'
import { registerRequestBody } from '../fixtures/requestBody/register.js'

describe('Register - Validations', function () {
  it('Register a user', async function () {
    const body = registerRequestBody(process.env.EMAIL, process.env.PASSWORD)
    const response = await postRegister(body)

    expect(response.statusCode).to.be.equal(200)
    joi.assert(response.body, registerSchema)
  })
})
```

To run the API tests, use the command:

```bash
npm test
```

This project is set up to facilitate API testing, with a modular and organized structure. If you need support, feel free to open an issue on the repository!
