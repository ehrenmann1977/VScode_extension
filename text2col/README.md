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
```
<test_case_method_name>Method Name 1</test_case_method_name>
<test_case_short_description>Short Description </test_case_short_description>
<test_case_authors_list1>Author 1</test_case_authors_list1>
<test_case_authors_list2>Author 2</test_case_authors_list2>
<test_case_authors_email_list1>email1@example.com</test_case_authors_email_list1>
<test_case_authors_email_list2>email2@example.com</test_case_authors_email_list2>
<requirements_list_id1> id 1 </requirements_list_id1>
<requirements_list_hash1> hash 1 </requirements_list_hash1>
<requirements_list_hashdate1> date 1 </requirements_list_hashdate1>
<requirements_list_id2> id 2 </requirements_list_id2>
<requirements_list_hash2> hash 2 </requirements_list_hash2>
<requirements_list_hashdate2> date 2 </requirements_list_hashdate2>
<preconditions_list1>Precondition 1</preconditions_list1>
<preconditions_list2>Precondition 2</preconditions_list2>
<header1> Test steps </header1>
<header2> Test steps description</header2> 
<header3> Expected results of test step</header3>
<step1> procedure step 1 </step1>
<result1>result of step 1</result1>
<step2> procedure step 2 with long description text</step2>
<result2> result of step 2 with long description text than other</result2>
<step3> procedure step 3 </step3>
<result3> result of step3  </result3>
<step4> procedure step 4 </step4>
<result4>  result of step 4  </result4>
```

Output
------


def Method Name 1() -> None:

	Short Description 


	Authors:
		- Author 1
		- Author 2
	

	E-mails:
		- email1@example.com
		- email2@example.com
	

	-------------------------------------------------------------------------------
	|Requirement ID |Requirement Hash              |Hash generation date          |
	-------------------------------------------------------------------------------
	|id 1           |hash 1                        |date 1                        |
	-------------------------------------------------------------------------------
	|id 2           |hash 2                        |date 2                        |
	-------------------------------------------------------------------------------



	preconditions
	    - Precondition 1
	    - Precondition 2
	



	|---------------|----------------------------------------|----------------------------------------|
	| Test steps    | Test steps description                 | Expected results of test step          |
	|---------------|----------------------------------------|----------------------------------------|
	|step1          | procedure step 1                       |result of step 1                        |
	|---------------|----------------------------------------|----------------------------------------|
	|step2          | procedure step 2 with long description | result of step 2 with long description |
	|               |text                                    |text than other                         |
	|---------------|----------------------------------------|----------------------------------------|
	|step3          | procedure step 3                       | result of step3                        |
	|---------------|----------------------------------------|----------------------------------------|
	|step4          | procedure step 4                       |  result of step 4                      |
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


History
-------
Ver 0.2 release n 14.06.2024 with additional fields added for testing






