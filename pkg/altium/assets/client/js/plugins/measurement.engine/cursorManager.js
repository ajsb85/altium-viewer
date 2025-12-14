/**
 * Measurement Engine - Cursor Manager
 * 
 * SVG cursor management for measurement tools.
 */
"use strict";

(function (measurementEngine) {

    /**
     * Cursor types enum
     */
    measurementEngine.CursorType = {
        None: 0,
        Wait: 1,
        Cross: 2,
        Box: 3,
        Circle: 4,
        Triangle: 5,
        Default: 6,
    };

    /**
     * SVG cursor templates
     */
    measurementEngine.cursors = {
        circle: '<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="none" viewBox="0 0 32 32"><g fill-rule="evenodd" clip-rule="evenodd" filter="url(%23a)"><path fill="#%23000" d="M15.5 7 25 23H6l9.5-16Zm-4.23 13 4.23-7.124L19.73 20h-8.46Z"/><path fill="%23fff" d="M7.757 22 15.5 8.959 23.243 22H7.757Zm1.756-1h11.973L15.5 10.917 9.513 21Z"/></g></svg>',

        cross: '<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="none" viewBox="0 0 32 32"><g filter="url(%23a)"><path fill="%23000" d="M17 14V7h-3v7H7v3h7v7h3v-7h7v-3h-7Z"/><path fill="%23fff" d="M16 15V8h-1v7H8v1h7v7h1v-7h7v-1h-7Z"/></g></svg>',

        square: '<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="none" viewBox="0 0 32 32"><g fill-rule="evenodd" clip-rule="evenodd" filter="url(%23a)"><path fill="%23fff" d="M8 8h15v15H8V8Zm3 3h9v9h-9v-9Z"/><path fill="%23000" d="M10 10v11h11V10H10Zm1 1h9v9h-9v-9Z"/><path fill="%23000" d="M8 8v15h15V8H8Zm1 1h13v13H9V9Z"/></g></svg>',

        triangle: '<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="none" viewBox="0 0 32 32"><g fill-rule="evenodd" clip-rule="evenodd" filter="url(%23a)"><path fill="#%23000" d="M15.5 7 25 23H6l9.5-16Zm-4.23 13 4.23-7.124L19.73 20h-8.46Z"/><path fill="%23fff" d="M7.757 22 15.5 8.959 23.243 22H7.757Zm1.756-1h11.973L15.5 10.917 9.513 21Z"/></g></svg>',
    };

    /**
     * Build cursor CSS url from SVG
     */
    measurementEngine.buildCursor = function (svg) {
        return "url('data:image/svg+xml;utf8," + svg + "') 16 16, auto";
    };

    /**
     * Set cursor on workspace element
     */
    measurementEngine.setCursor = function (workspace, cursorType) {
        var self = measurementEngine;
        switch (cursorType) {
            case self.CursorType.None:
                workspace.style.cursor = "none";
                break;
            case self.CursorType.Wait:
                workspace.style.cursor = "wait";
                break;
            case self.CursorType.Cross:
                workspace.style.cursor = self.buildCursor(self.cursors.cross);
                break;
            case self.CursorType.Box:
                workspace.style.cursor = self.buildCursor(self.cursors.square);
                break;
            case self.CursorType.Circle:
                workspace.style.cursor = self.buildCursor(self.cursors.circle);
                break;
            case self.CursorType.Triangle:
                workspace.style.cursor = self.buildCursor(self.cursors.triangle);
                break;
            default:
                workspace.style.cursor = "default";
        }
    };

})(window.measurementEngine = window.measurementEngine || {});
