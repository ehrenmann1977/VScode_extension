VS Code Extensions Repository
Welcome to the VS Code Extensions Repository! This repository contains various extensions for Visual Studio Code, each designed to enhance your development experience. Below is a summary of the available extensions, including the Text2Col extension.

Developer:
Sherif Omran

Table of Contents
Text2Col Extension
Introduction
Features
Usage
Example
Installation
Activation
Commands
Development
Code Overview
Contributing
License
Other Extensions
Contribution Guidelines
Text2Col Extension
Introduction
The Text2Col Extension processes selected text in the Visual Studio Code editor, formats it into a table, and replaces the selected text with the formatted table. This is particularly useful for converting structured text into a tabular format for better readability and organization.

Features
Extracts headers, steps, and results from the selected text.
Formats the extracted data into a neatly organized table.
Handles empty selections by providing a sample table.
Provides user feedback through information messages.
Usage
Install the extension in Visual Studio Code.
Select the text you want to format in the editor.
Run the command Text2Col: Format Text to Table.
Example
Input:

html
Code kopieren
<header1>Test steps</header1>
<header2>Test steps description</header2>
<header3>Expected results of test step</header3>
<step1>Step 1</step1>
<result1>Result of step 1</result1>
<step2>Step 2</step2>
<result2>Result of step 2</result2>
Output:

sql
Code kopieren
|---------------|----------------------------------------|----------------------------------------|
|Test steps     |Test steps description                  |Expected results of test step           |
|---------------|----------------------------------------|----------------------------------------|
|step1          |Step 1                                  |Result of step 1                        |
|step2          |Step 2                                  |Result of step 2                        |
|---------------|----------------------------------------|----------------------------------------|
Installation
Open Visual Studio Code.
Go to the Extensions view by clicking the Extensions icon in the Activity Bar on the side of the window.
Search for Text2Col.
Click Install.
Activation
The extension is activated the very first time the command is executed.

Commands
Text2Col: Format Text to Table - Processes the selected text, formats it into a table, and replaces the selected text with the formatted table.
Development
To set up the extension for development:

Clone the repository.
Run npm install to install the necessary dependencies.
Open the folder in Visual Studio Code.
Press F5 to open a new VS Code window with your extension loaded.
Code Overview
parseTextToData(text)
Extracts headers, steps, and results from the input text using regular expressions.
Returns a structured array of data.
formatTable(data, columnWidths)
Formats the extracted data into a table with specified column widths.
Returns the formatted table as a string.
wrapText(text, width)
Wraps text to fit within the specified column width.
Returns an array of wrapped text lines.
activate(context)
Registers the command and sets up the event listeners for the extension.
Replaces the selected text with the formatted table.
deactivate()
Cleans up the extension when it is deactivated.
Contributing
Contributions are welcome! Please submit a pull request or open an issue to discuss any changes.

License
This project is licensed under the MIT License.

Other Extensions
This repository also contains other Visual Studio Code extensions. Each extension has its own folder with a dedicated README.md file detailing its features, usage, and development instructions.

Contribution Guidelines
We welcome contributions to improve our extensions. Please follow the guidelines below:

Fork the repository.
Create a new branch (git checkout -b feature-branch).
Make your changes.
Commit your changes (git commit -m 'Add some feature').
Push to the branch (git push origin feature-branch).
Open a pull request.
For any questions or support, feel free to open an issue in the repository.

By following this guide, users and developers should be able to easily navigate the repository, understand the purpose of each extension, and contribute effectively.






