

function first_loading() {

    /********** ADDING TAGS **********/
    var firstLoading = document.createElement("div"); firstLoading.classList.add("first_loading")               // Create MAIN DIV


    /***** STEPS *****/
    var steps = document.createElement("div"); steps.classList.add("steps")                                     // Create DIV "STEPS" for all steps

    var middleLine = document.createElement("div"); middleLine.classList.add("middle_line")                     // Create WHITE "LOADING" MIDDLE LINE (First animation)
    var stepsTop = document.createElement("div"); stepsTop.classList.add("top")                                 // Create DIV for all top steps 
    var stepsBottom = document.createElement("div"); stepsBottom.classList.add("bottom");                       // Create DIV for all bottom steps 

    
    steps.appendChild(stepsTop); steps.appendChild(middleLine); steps.appendChild(stepsBottom)                  // Adding to STEPS DIV


    firstLoading.appendChild(steps)                                                                             // Adding to STEPS to MAIN DIV

                                                                                                                // Create Steps
    for (var i = 0; i < 4; i++) {
        var div = document.createElement("div")
        var table = document.createElement("table")
        var tr = document.createElement("tr")
        var td = document.createElement("td")
                                                                                                                // Add letters "STEP"
        if (i == 0) td.innerText = "S"
        if (i == 1) td.innerText = "T"
        if (i == 2) td.innerText = "E"
        if (i == 3) td.innerText = "P"
                                                                                                                // Add letters "STEP" (END)
        tr.appendChild(td)
        table.appendChild(tr)
        div.appendChild(table)

        stepsTop.appendChild(div)

        stepsBottom.appendChild(document.createElement("div"))
    }
                                                                                                                // Create Steps(END)

    /***** STEPS(END) *****/

    document.body.appendChild(firstLoading)
    /*************** ADDING TAGS(END) ***************/


    /***** ANIMATION *****/
    var linesArr = [stepsTop, stepsBottom]

    addClass(middleLine, "load", 0);                                                                               // Start "Middle line" animation
    setTimeout(() => {middleLine.classList.remove("load")}, 3*oneSecond)                                           // End "Middle line" animation

    addClass(linesArr, "line", 2 * oneSecond)

    addClassToAllChild(stepsTop, "step", 4 * oneSecond)
    addClassToAllChild(stepsBottom, "step", 4 * oneSecond)

    function addClass(els, className, wait) {
        setTimeout(() => {
            if (Array.isArray(els)) {
                for (var i = 0; i < els.length; i++) {
                    els[i].classList.add(className);
                }
            } else {
                els.classList.add(className);
            }

        }, wait)

    }

    function addClassToAllChild(els, className, wait) {
        setTimeout(() => {
            if (Array.isArray(els)) {
                for (var i = 0; i < els.length; i++) {
                    var el = els[i]; 
                    classList = 'classList' in el;
                    for (var i = 0; i < el.children.length; i++) {
                        var child = el.children[i];
                        child.classList.add(className);
                    }

                    els[i].classList.add(className);
                }
            } else {
                classList = 'classList' in els;
                for (var i = 0; i < els.children.length; i++) {
                    var child = els.children[i];
                    child.classList.add(className);
                }
            }

        }, wait)
    }
}
/***** ANIMATION(END) *****/