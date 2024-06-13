// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
const vscode = require('vscode');

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed

/**
 * @param {vscode.ExtensionContext} context
 */

function parseTextToData(text) {
	// Extract headers
    // Extract headers using a regular expression
    const headerRegex = /<header\s*\d+>(.*?)<\/header\d+>/gi;
    const headers = [];
    let match;

    // Loop to find all header tags
    while ((match = headerRegex.exec(text)) !== null) {
        headers.push(match[1]);
    }
	// Prepare the output with headers
	const output = [headers];

	// Extract steps and results using regular expressions
	const stepRegex = /<step\s*\d+>(.*?)<\/step\s*\d+>/gi;
	const resultRegex = /<result\s*\d+>(.*?)<\/result\d+>/gi;
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
		const row = [`step${i + 1}`, steps[i], results[i]];
		output.push(row);
	}

	return output;
}

function formatTable(data, columnWidths) {
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

		const maxLines = Math.max(wrappedHeader.length, wrappedStep.length, wrappedResult.length);

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
function wrapText(text, width) {
    const regex = new RegExp(`(.{1,${width}})(\\s|$)|(.{${width}})`, 'g');
    return text.match(regex) || [];
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
			let formattedTable ="";
			if (selectedText.trim() === "")
			{
				formattedTable = `
				<header1> Test steps </header1>
				<header2> Test steps description</header2> 
				<header3> Expected results of test step</header3>
				<step1>step 1 </step1>
				<result1>result of step 1</result1>
				<step2> step 2 </step2>
				<result2> result of step 2 </result2>
				<step3> step 3 </step3>
				<result3> result of step3  </result3>
				<step4> step 4 procedure </step4>
				<result4>  result of step 4  </result4>
				`;
			}
			else
			{
        	    // Here you can process `selectedText` as needed
				const data = parseTextToData(selectedText);
				formattedTable = formatTable(data, [15, 40, 40]);
			}

            // Replace the selected text with formattedTable
            editor.edit(editBuilder => {
                editBuilder.replace(selection, formattedTable);
            }).then(applied => {
                if (applied) {
                    vscode.window.showInformationMessage(`Selected Text formatted and replaced successfully.`);
                } else {
                    vscode.window.showErrorMessage('Failed to replace selected text.');
                }
            });

            // Output the formatted table to the console
            console.log(formattedTable);
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
