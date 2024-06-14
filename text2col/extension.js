// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
const vscode = require('vscode');

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed

/**
 * @param {vscode.ExtensionContext} context
 */

function extractContents(regexPattern, text) {
    const regex = new RegExp(regexPattern);
    const contents = [];
    let match;

    // Loop to find all matching tags
    while ((match = regex.exec(text)) !== null) {
        contents.push(match[1]);
    }

    return [contents];
}



// function parseTextToData(text, option) {

// 	if (option==1){
// 		//1st field: Extract test_case_method_name
// 		const testCaseMethodNameRegex = /<test_case_method_name>(.*?)<\/test_case_method_name>/gi;
// 		const testCaseMethodNames = [];
// 		let match; // Loop to find all test_case_method_name tags
// 		while ((match = testCaseMethodNameRegex.exec(text)) !== null) {
// 			testCaseMethodNames.push(match[1]);
// 		}
// 		const testCaseMethodNames_output = [testCaseMethodNames];
// 	}

// 	if (option ==2){
// 		// 2nd filed: Extract test_case_short_description
// 		const testCaseShortDescriptionRegex = /<test_case_short_description>(.*?)<\/test_case_short_description>/gi;
// 		const testCaseShortDescriptions = [];
// 		while ((match = testCaseShortDescriptionRegex.exec(text)) !== null) {
// 			testCaseShortDescriptions.push(match[1]);
// 		}
// 		const testCaseShortDescriptions_output = [testCaseShortDescriptions];
// 	}

// 	if (option == 3){
// 		// 3rd field: Extract test case authors list
// 		const testCaseAuthorsListRegex = /<test_case_authors_list\s*\d+>(.*?)<\/test_case_authors_list\s*\d+>/gi;
// 		const testCaseAuthorsList = [];
// 		while ((match = testCaseAuthorsListRegex.exec(text)) !== null) {
// 			testCaseAuthorsList.push(match[1]);
// 		}
// 		const testCaseAuthorsList_output = [testCaseAuthorsList];
// 	}

// 	if (option ==4){
// 		// 4th field: Extract Authors email list
// 		// Extract test case authors email list
// 		const testCaseAuthorsEmailListRegex = /<test_case_authors_email_list\s*\d+>(.*?)<\/test_case_authors_email_list\s*\d+>/gi;
// 		const testCaseAuthorsEmailList = [];
// 		while ((match = testCaseAuthorsEmailListRegex.exec(text)) !== null) {
// 			testCaseAuthorsEmailList.push(match[1]);
// 		}
// 		const testCaseAuthorsEmailList_output = [testCaseAuthorsEmailList];
// 	}

// 	if (option == 5){
// 		// 5th field: Extract requirements list 
// 		const requirementsListRegex = /<requirements_list\s*\d+>(.*?)<\/requirements_list\s*\d+>/gi;
// 		const requirementsList = [];
// 		while ((match = requirementsListRegex.exec(text)) !== null) {
// 			requirementsList.push(match[1]);
// 		}
// 		const requirementsList_output = [requirementsList];
// 	}

// 	if (option==6){
// 		// 6th field: Precondition list
// 		const preconditionsListRegex = /<preconditions_list\s*\d+>(.*?)<\/preconditions_list\s*\d+>/gi;
// 		const preconditionsList = [];	
// 		while ((match = preconditionsListRegex.exec(text)) !== null) {
// 			preconditionsList.push(match[1]);
// 		}
// 		const preconditionsList_output = [preconditionsList];
// 	}

// 	if (opition == 7){
// 		// ----- version 0.1 ------------------------
// 		// Extract headers
// 		// Extract headers using a regular expression
// 		const headerRegex = /<header\s*\d+>(.*?)<\/header\s*\d+>/gi;
// 		const headers = [];

// 		// Loop to find all header tags
// 		while ((match = headerRegex.exec(text)) !== null) {
// 			headers.push(match[1]);
// 		}
// 		// Prepare the output with headers
// 		const output = [headers];

// 		// Extract steps and results using regular expressions
// 		const stepRegex = /<step\s*\d+>(.*?)<\/step\s*\d+>/gi;
// 		const resultRegex = /<result\s*\d+>(.*?)<\/result\d+>/gi;
// 		const steps = [];
// 		const results = [];

// 		// Loop to find all step tags
// 		while ((match = stepRegex.exec(text)) !== null) {
// 			steps.push(match[1]);
// 		}

// 		// Loop to find all result tags
// 		while ((match = resultRegex.exec(text)) !== null) {
// 			results.push(match[1]);
// 		}
// 		// Combine steps and results
// 		for (let i = 0; i < steps.length; i++) {
// 			const row = [`step${i + 1}`, steps[i], results[i]];
// 			output.push(row);
// 		}
// 		return output;
// 	}
// }

function parseTextToData(text, option) {

	let match;
    if (option == 1) {
        // 1st field: Extract test_case_method_name
        const testCaseMethodNameRegex = /<test_case_method_name>(.*?)<\/test_case_method_name>/gi;
        const testCaseMethodNames = [];
        while ((match = testCaseMethodNameRegex.exec(text)) !== null) {
            testCaseMethodNames.push(match[1]);
        }
		const methodDefinitions = generateMethodDefinitions(testCaseMethodNames);
        return methodDefinitions; // Return array containing extracted data
    }

    if (option == 2) {
        // 2nd field: Extract test_case_short_description
        const testCaseShortDescriptionRegex = /<test_case_short_description>(.*?)<\/test_case_short_description>/gi;
        const testCaseShortDescriptions = [];
        while ((match = testCaseShortDescriptionRegex.exec(text)) !== null) {
            testCaseShortDescriptions.push(match[1]);
        }
        return testCaseShortDescriptions; // Return array containing extracted data
    }

    if (option == 3) {
        // 3rd field: Extract test case authors list
        const testCaseAuthorsListRegex = /<test_case_authors_list\s*\d+>(.*?)<\/test_case_authors_list\s*\d+>/gi;
        const testCaseAuthorsList = [];
        while ((match = testCaseAuthorsListRegex.exec(text)) !== null) {
            testCaseAuthorsList.push(match[1]);
        }
        return testCaseAuthorsList; // Return array containing extracted data
    }

    if (option == 4) {
        // 4th field: Extract Authors email list
        const testCaseAuthorsEmailListRegex = /<test_case_authors_email_list\s*\d+>(.*?)<\/test_case_authors_email_list\s*\d+>/gi;
        const testCaseAuthorsEmailList = [];
        while ((match = testCaseAuthorsEmailListRegex.exec(text)) !== null) {
            testCaseAuthorsEmailList.push(match[1]);
        }
        return testCaseAuthorsEmailList; // Return array containing extracted data
    }

    if (option == 5) {
        // 5th field: Extract requirements list
        const requirementsListRegex = /<requirements_list_id\s*\d+>(.*?)<\/requirements_list_id\s*\d+>/gi;
        const requirements_list_id = [];
        while ((match = requirementsListRegex.exec(text)) !== null) {
            requirements_list_id.push(match[1]);
        }

        const requirementsListHashRegex = /<requirements_list_hash\s*\d+>(.*?)<\/requirements_list_hash\s*\d+>/gi;
        const requirements_list_hash = [];
        while ((match = requirementsListHashRegex.exec(text)) !== null) {
            requirements_list_hash.push(match[1]);
        }

        const requirementsListHashDateRegex = /<requirements_list_hashdate\s*\d+>(.*?)<\/requirements_list_hashdate\s*\d+>/gi;
        const requirements_list_hashdate = [];
        while ((match = requirementsListHashDateRegex.exec(text)) !== null) {
            requirements_list_hashdate.push(match[1]);
        }
				

		const transformedData = [];
		// Loop through the arrays to construct each row of data
		for (let i = 0; i < requirements_list_id.length; i++) {
			const newRow = [
				requirements_list_id[i].trim(),     // Remove leading/trailing spaces if any
				requirements_list_hash[i].trim(),   // Remove leading/trailing spaces if any
				requirements_list_hashdate[i].trim() // Remove leading/trailing spaces if any
			];
			transformedData.push(newRow);
		}


		output = generateHorizontalTable (["Requirement ID","Requirement Hash", "Hash generation date"],transformedData,[15,30,30]);
        return output; // Return array containing extracted data
    }

    if (option == 6) {
        // 6th field: Precondition list
        const preconditionsListRegex = /<preconditions_list\s*\d+>(.*?)<\/preconditions_list\s*\d+>/gi;
        const preconditionsList = [];
        while ((match = preconditionsListRegex.exec(text)) !== null) {
            preconditionsList.push(match[1]);
        }
        return preconditionsList; // Return array containing extracted data
    }

    if (option == 7) {
        // 7th field: Steps and results
        const output = [];

        // Extract headers
        const headerRegex = /<header\s*\d+>(.*?)<\/header\s*\d+>/gi;
        const headers = [];
        while ((match = headerRegex.exec(text)) !== null) {
            headers.push(match[1]);
        }
        output.push(headers);

        // Extract steps and results using regular expressions
        const stepRegex = /<step\s*\d+>(.*?)<\/step\s*\d+>/gi;
        const resultRegex = /<result\s*\d+>(.*?)<\/result\s*\d+>/gi;
        const steps = [];
        const results = [];

        // Loop to find all step tags
        while ((match = stepRegex.exec(text)) !== null) {
            steps.push(match[1]);
        }

        // Loop to find all result tags
        while ((match = resultRegex.exec(text)) !== null) {
            results.push(match[1]);
        }

        // Combine steps and results
        for (let i = 0; i < steps.length; i++) {
            const row = [`step${i + 1}`, steps[i], results[i] || '']; // results[i] might be undefined, ensure it's a string
            output.push(row);
        }

        return output;
    }

    // Handle invalid option
    return []; // Return empty array if option is not recognized
}



function generateTable(data, columnSizes) {
    // Helper function to generate a row separator
    function generateSeparator() {
        return `|${columnSizes.map(size => '-'.repeat(size)).join('|')}|`;
    }

    // Helper function to wrap text based on column size
    function wrapText(text, size) {
        let wrappedText = [];
        for (let i = 0; i < text.length; i += size) {
            wrappedText.push(text.slice(i, i + size));
        }
        return wrappedText;
    }

    // Helper function to format a row with the given column sizes
	function formatRow(row) {
		// Ensure row is treated as an array, even if it's a single string
		if (!Array.isArray(row)) {
			row = [row.toString()]; // Convert to string and wrap in an array
		}
	
		let wrappedRows = row.map((cell, i) => wrapText(cell, columnSizes[i] || 0));
		let maxLines = Math.max(...wrappedRows.map(wrappedCell => wrappedCell.length));
	
		let formattedRows = [];
		for (let line = 0; line < maxLines; line++) {
			let formattedLine = wrappedRows.map(wrappedCell => wrappedCell[line] || ' '.repeat(columnSizes[wrappedCell.indexOf(wrappedCell)] || 0));
			formattedRows.push(`|${formattedLine.map((cell, i) => (cell || '').padEnd(columnSizes[i] || 0, ' ')).join('|')}|`);
		}
		return formattedRows.join('\n');
	}

    // Generate the table
    let table = [];

    // Add the header separator
    table.push(generateSeparator());

    // Add the data rows
    for (let row of data) {
        table.push(formatRow(row));
        table.push(generateSeparator());
    }

    // Join the table rows into a single string with newline separators
    return table.join('\n');
}


function formatTestStepsTable(data, columnWidths) {
    const col1Width = columnWidths[0];
    const col2Width = columnWidths[1];
    const col3Width = columnWidths[2];

	// Extract headers from the data itself
	const headers = data.length > 0 ? data[0] : []; // Assuming the first row contains headers

	// Generate separator based on column widths
	const separator = `|${'-'.repeat(col1Width)}|${'-'.repeat(col2Width)}|${'-'.repeat(col3Width)}|`;

	let formattedOutput = `${separator}\n`;
	formattedOutput += `|${headers.map((header, i) => header.padEnd(columnWidths[i])).join('|')}|\n`;
	formattedOutput += `${separator}\n`;

	// Format each row of data
	data.slice(1).forEach(([header, step, result]) => { // Start from index 1 to skip header row
		const wrappedHeader = wrapText(header, col1Width);
		const wrappedStep = wrapText(step, col2Width);
		const wrappedResult = wrapText(result, col3Width);

		const maxLines = 1; //Math.max(wrappedHeader.length, wrappedStep.length, wrappedResult.length);

		for (let i = 0; i < maxLines; i++) {
			const line = [
				wrappedHeader[i] || '',
				wrappedStep[i] || '',
				wrappedResult[i] || ''
			];
			formattedOutput += `|${line.map((cell, j) => cell.padEnd(columnWidths[j])).join('|')}|\n`;
		}
		formattedOutput += `${separator}\n`;
	});


    return formattedOutput;
}

// function wrapText(text, width) {
//     const regex = new RegExp(`(.{1,${width}})(\\s|$)|(.{${width}})`, 'g');
//     return text.match(regex) || [];
// }
function wrapText(text, width) {
	// wrap text to specific with
    if (text.length <= width) {
        return [text+('\n')]; // Return the text as-is if it's shorter than or equal to the width
    }

    const regex = new RegExp(`(.{1,${width}})(\\s|$)|(.{${width}})`, 'g');
    const wrappedLines = text.match(regex) || [];
    return wrappedLines.join('\n');
}

function addTabBeforeLines(text) {
    if (!text.includes('\n')) {
        return `\t${text}`; // Add a tab before single-line text
    }
    const lines = text.split('\n'); // Split the text into lines
    const tabbedLines = [];

    for (let i = 0; i < lines.length; i++) {
        tabbedLines.push(`\t${lines[i]}`); // Add a tab before each line
    }

    return tabbedLines.join('\n'); // Join the tabbed lines back into a single string with newline characters
}

function generateMethodDefinitions(methodName) {
	// this function create the function definition of the method
	// ex: def methodName() -> None:
    return methodName.map(name => `def ${name}() -> None:`);
}


function formatAuthorsEmailsList(title, authors) {
    let formattedText = `${title}\n`; // Start with the title and a newline

    // Loop through each author and format them with a tab before their name
    for (let i = 0; i < authors.length; i++) {
        formattedText += `\t- ${authors[i]}\n`; // Add a tab and hyphen before each author's name
    }
    
    return formattedText;
}

function generateHorizontalTable(headers, data, columnSizes) {
    // Function to generate the boundary row
    function generateBoundaryRow() {
        return `-${columnSizes.map(size => '-'.repeat(size)).join('-')}-`;
    }

    // Function to format a row of data
    function formatRow(row) {
        return `|${row.map((cell, i) => cell.padEnd(columnSizes[i], ' ')).join('|')}|`;
    }

    // Truncate headers if they exceed column width
    headers = headers.map((header, i) => {
        if (header.length > columnSizes[i]) {
            return header.substring(0, columnSizes[i]);
        } else {
            return header.padEnd(columnSizes[i], ' ');
        }
    });

    // Generate the table
    let table = [];

    // Add the header boundary
    table.push(generateBoundaryRow());

    // Add the header row
    table.push(formatRow(headers));

    // Add the data rows
    data.forEach(row => {
        table.push(generateBoundaryRow());
        table.push(formatRow(row));
    });

    // Add the closing boundary
    table.push(generateBoundaryRow());

    // Join the table rows into a single string with newline separators
    return table.join('\n');
}




function generateRequirementsTable(ids, hashs, dates) {
    let table = "Verifies\n";
    table += "    |----------------|------------------|----------------------|\n";
    table += "    | Requirement id | Requirement hash | Hash generation date |\n";
    table += "    |----------------|------------------|----------------------|\n";
	table += generateTable([ids,hashs,dates],[15,20,20])

    return table;
}

function generatePreconditionsList(preconditions) {
    let list = "preconditions\n";

    for (let i = 0; i < preconditions.length; i++) {
        list += `    - ${preconditions[i]}\n`;
    }
    return list;
}

function activate(context) {
	// Use the console to output diagnostic information (console.log) and errors (console.error)
	// This line of code will only be executed once when your extension is activated
	console.log('Congratulations, your extension "text2col extension" is now active!');

	// The command has been defined in the package.json file
	// Now provide the implementation of the command with  registerCommand
	// The commandId parameter must match the command field in package.json
    let disposable = vscode.commands.registerCommand('extension.text2col', () => {
        const editor = vscode.window.activeTextEditor;
        if (editor) {
            const document = editor.document;
            const selection = editor.selection;
            const selectedText = document.getText(selection);
			let formattedOutput ="";
			if (selectedText.trim() === "")
			{
				formattedOutput = `
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
				`;
			}
			else
			{
        	    // Here you can process `selectedText` as needed

				// 1st field: Extract test_case_method_name
				const testCaseMethodName = parseTextToData(selectedText,1);
				console.log(testCaseMethodName);

				// 2nd field: Extract test_case_short_description
				const testCaseShortDescriptions = parseTextToData(selectedText,2);
				const testCaseShortDescriptionsWrapped = wrapText(testCaseShortDescriptions,80)
				const testCaseShortDescriptionsWrappedTabbed = addTabBeforeLines(testCaseShortDescriptionsWrapped);		
				console.log(testCaseShortDescriptionsWrappedTabbed);

				// 3rd field: Extract test case authors list	
				const authors = parseTextToData(selectedText,3);
				const formattedAuthorsList = formatAuthorsEmailsList("Authors:", authors);
				const formattedAuthorsListTabbed = addTabBeforeLines(formattedAuthorsList);		
				console.log(formattedAuthorsListTabbed);

				
				// 4th field: Extract Authors email list
				const emailsList = parseTextToData(selectedText,4);
				const formattedEmailsList = formatAuthorsEmailsList("E-mails:", emailsList);
				const formattedEmailsListTabbed = addTabBeforeLines(formattedEmailsList);		
				console.log(formattedEmailsListTabbed);


				// 5th field: Extract requirements list
				const requirementsTable = parseTextToData(selectedText,5);
				const requirementsTableTabbed = addTabBeforeLines(requirementsTable)+("\n\n");
				console.log(requirementsTableTabbed);


				// 6th field: Extract preconditions list
				const preconditions = parseTextToData(selectedText,6);
				const preconditionsList = generatePreconditionsList(preconditions);
				const preconditionsListTabbed = addTabBeforeLines(preconditionsList)+("\n\n");
				console.log(preconditionsListTabbed);


				// prepare the test steps table
				const data = parseTextToData(selectedText,7);
				const testStepsTable = generateTable(data, [15,40,40])
				const testStepsTabletabbed = addTabBeforeLines(testStepsTable);
				console.log(testStepsTabletabbed);


				// Concatenate formatted strings with an empty line between them
				formattedOutput = `${testCaseMethodName}\n\n${testCaseShortDescriptionsWrappedTabbed}\n\n${formattedAuthorsListTabbed}\n\n${formattedEmailsListTabbed}\n\n${requirementsTableTabbed}\n\n${preconditionsListTabbed}\n\n${testStepsTabletabbed}`;
			}

            // Replace the selected text with formattedTable
            editor.edit(editBuilder => {
                editBuilder.replace(selection, formattedOutput);
            }).then(applied => {
                if (applied) {
                    vscode.window.showInformationMessage(`Selected Text formatted and replaced successfully.`);
                } else {
                    vscode.window.showErrorMessage('Failed to replace selected text.');
                }
            });

            // Output the formatted table to the console
            console.log(formattedOutput);
        }
		// Display a message box to the user
		vscode.window.showInformationMessage('text2col extension!');
	});

	context.subscriptions.push(disposable);
}

// this method is called when your extension is deactivated
function deactivate() {}

// eslint-disable-next-line no-undef
module.exports = {
	activate,
	deactivate
}
