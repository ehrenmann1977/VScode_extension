Text2Col Extension
-------------------
The Text2Col Extension is a Visual Studio Code extension that processes selected text in the editor, formats it into a table, and replaces the selected text with the formatted table. This extension is particularly useful for converting structured text into a tabular format for better readability and organization.

Features
--------
- Extracts headers, steps, and results from the selected text.
- Formats the extracted data into a neatly organized table.
- Handles empty selections by providing a sample table.
- Provides user feedback through information messages.

Usage
-----
- Install the extension in Visual Studio Code.
- Select the text you want to format in the editor.
- Run the command Text2Col: Format Text to Table.

Example
-------

- Input
--------

<header1>Test steps</header1>
<header2>Test steps description</header2>
<header3>Expected results of test step</header3>
<step1>Step 1</step1>
<result1>Result of step 1</result1>
<step2>Step 2</step2>
<result2>Result of step 2</result2>


Output
------

|---------------|----------------------------------------|----------------------------------------|
|Test steps     |Test steps description                  |Expected results of test step           |
|---------------|----------------------------------------|----------------------------------------|
|step1          |Step 1                                  |Result of step 1                        |
|step2          |Step 2                                  |Result of step 2                        |
|---------------|----------------------------------------|----------------------------------------|

Installation
-------------
- Open Visual Studio Code.
- Go to the Extensions view by clicking the Extensions icon in the Activity Bar - on the side of the window.
- Search for Text2Col.
- Click Install.

Activation
----------
The extension is activated the very first time the command is executed.

Commands
--------
Text2Col: Format Text to Table - Processes the selected text, formats it into a table, and replaces the selected text with the formatted table.
Development
To set up the extension for development:

Clone the repository.
---------------------
- Run npm install to install the necessary dependencies.
- Open the folder in Visual Studio Code.
- Press F5 to open a new VS Code window with your extension loaded.

Code Overview
-------------

- parseTextToData(text)

Extracts headers, steps, and results from the input text using regular expressions.
Returns a structured array of data.

- formatTable(data, columnWidths)

Formats the extracted data into a table with specified column widths.
Returns the formatted table as a string.

- wrapText(text, width)

Wraps text to fit within the specified column width.
Returns an array of wrapped text lines.

- activate(context)

Registers the command and sets up the event listeners for the extension.
Replaces the selected text with the formatted table.

- deactivate()

Cleans up the extension when it is deactivated.


Contributing
------------
Contributions are welcome! Please submit a pull request or open an issue to discuss any changes.

License
-------

This project is licensed under the MIT License.

By following this guide, you should be able to use and understand the functionality provided by the Text2Col extension in Visual Studio Code.


Developper
----------
Sherif Omran







