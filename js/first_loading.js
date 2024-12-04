

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
                                                                                                                // Add letters "FOREX"
        if (i == 0) td.innerText = "S"
        if (i == 1) td.innerText = "T"
        if (i == 2) td.innerText = "E"
        if (i == 3) td.innerText = "P"
                                                                                                                // Add letters "FOREX" (END)
        tr.appendChild(td)
        table.appendChild(tr)
        div.appendChild(table)

        stepsTop.appendChild(div)

        stepsBottom.appendChild(document.createElement("div"))
    }
                                                                                                                // Create Steps(END)

    /***** STEPS(END) *****/

    /***** FOREX GRAPH *****/
    var forexGraph = document.createElement("img"); forexGraph.classList.add("forex_graph");                    // Add FOREX GRAPH image
    forexGraph.src = "img/forex_graph.png"
    firstLoading.appendChild(forexGraph)

    var forexGraphShow = document.createElement("div"); forexGraphShow.classList.add("forex_graph_show")        // Create DIV for slowly show FOREX GRAPH image
    firstLoading.appendChild(forexGraphShow)
    /***** FOREX GRAPH(END) *****/

    document.body.appendChild(firstLoading)
    /*************** ADDING TAGS(END) ***************/


    /***** ANIMATION *****/
    var className__middleLineLoad = "load"
    var wait__middleLineLoading = 0
    var wait__middleLineHide = 3 * oneSecond

    var className__forexGraphLoad = "load"
    var wait__forexGraphShow = 3 * oneSecond

    var className__stepParent = "line"
    var wait__heightLines = 2 * oneSecond

    var className__step = "step"
    var wait_heightSteps = 4 * oneSecond


    var linesArr = [stepsTop, stepsBottom]

    addClass(middleLine, className__middleLineLoad, wait__middleLineLoading)
    addClass(linesArr, className__stepParent, wait__heightLines)

    addClassToAllChild(stepsTop, className__step, wait_heightSteps)
    addClassToAllChild(stepsBottom, className__step, wait_heightSteps)

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

    function addClassToAllChild(el, className, wait) {
        setTimeout(() => {
            classList = 'classList' in el;
            for (var i = 0; i < el.children.length; i++) {
                var child = el.children[i];
                child.classList.add(className);
            }
        }, wait)

    }

    setTimeout(() => {
        middleLine.classList.remove(className__middleLineLoad)
    }, wait__middleLineHide)

    setTimeout(() => {
        forexGraphShow.classList.add(className__forexGraphLoad)
    }, wait__forexGraphShow)
        
}
/***** ANIMATION(END) *****/