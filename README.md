# Masks Input Form

This project is a simple HTML page with input fields for various types of data, such as numbers, dates, card numbers, postal codes (CEP), CPF (Brazilian tax ID), and currency. A JavaScript script applies masks to these fields using regular expressions, ensuring that the data is formatted correctly as the user types.

---

## Features

- **Masked Input Fields**:

  - Automatically formats user input based on the field type.
  - Masks include:
    - Numbers
    - Dates (`dd/mm/yyyy`)
    - Credit Card Numbers
    - CEP (Brazilian postal code)
    - CPF (Brazilian tax ID)
    - Currency values (Brazilian format, `9.999,99`)

- **Lightweight and Efficient**:
  - Uses regular expressions for efficient masking.
  - Plain HTML, CSS, and JavaScript (no dependencies).

---

## File Structure

- **`index.html`**: Contains the form with labeled input fields.
- **`script.js`**: Contains the JavaScript logic to apply masks to input fields.

---

## How to Use

1. Clone or download the repository.
2. Open the `index.html` file in your favorite web browser.
3. Interact with the input fields. As you type, the JavaScript logic will automatically format the input according to the respective mask.

---

## Example Input Formatting

| Input Field  | Example Placeholder   | Mask Format           |
| ------------ | --------------------- | --------------------- |
| **Number**   | `0`                   | Plain numbers only    |
| **Date**     | `dd/mm/aaaa`          | `23/12/2024`          |
| **Card**     | `0000 0000 0000 0000` | `1234 5678 9101 1121` |
| **CEP**      | `00000-000`           | `12345-678`           |
| **CPF**      | `000.000.000-00`      | `123.456.789-10`      |
| **Currency** | `9.999,99`            | `1.234,56`            |

---

## Development

1. Add your JavaScript code for custom masking logic in the `script.js` file.
2. Modify the HTML structure in `index.html` to include or remove fields as needed.

---

## Contribution

Feel free to fork this repository and submit pull requests to improve the project or add new features!
