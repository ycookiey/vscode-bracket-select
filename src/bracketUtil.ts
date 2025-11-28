import * as vscode from 'vscode';

export namespace bracketUtil {
    function getBrackets(): string[][] {
        const config = vscode.workspace.getConfiguration('bracket-select');
        return config.get('brackets', [["(", ")"], ["{", "}"], ["[", "]"]]);
    }

    function getQuotes(): string[] {
        const config = vscode.workspace.getConfiguration('bracket-select');
        return config.get('quotes', ['"', "'", "`"]);
    }

    export function isMatch(open: string, close: string): Boolean {
        if (isQuoteBracket(open)) {
            return open === close;
        } 
        return getBrackets().findIndex(p => p[0] === open && p[1] === close) >= 0;
    }

    export function isOpenBracket(char: string): Boolean {
        return getBrackets().findIndex(pair => pair[0] === char) >= 0;
    }

    export function isCloseBracket(char: string): Boolean {
        return getBrackets().findIndex(pair => pair[1] === char) >= 0;
    }

    export function isQuoteBracket(char: string): Boolean {
        return getQuotes().indexOf(char) >= 0;
    }
}
