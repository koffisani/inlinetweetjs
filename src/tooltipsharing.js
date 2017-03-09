/**
*
*
*/

var selection = window.getSelection(),      // get the selection then
    range = selection.getRangeAt(0),        // the range at first selection group
    rect = range.getBoundingClientRect(); // and convert this to useful data

if(typeof(rect) === undefined)
    alert(rect);
