

function first_loading() {

    /***** ADDING TAGS *****/

    
    var firstLoadingDiv = document.createElement("div")
    firstLoadingDiv.classList.add("first_loading")


    /***** STEPS *****/

    var firstLoadingStepsDiv = document.createElement("div")
    firstLoadingStepsDiv.classList.add("steps")

    var firstLoadingStepsMiddleLineDiv = document.createElement("div")
    firstLoadingStepsMiddleLineDiv.classList.add("middle_line")

    var firstLoadingStepsTopDiv = document.createElement("div")
    firstLoadingStepsTopDiv.classList.add("top")
    var firstLoadingStepsBottomDiv = document.createElement("div")
    firstLoadingStepsBottomDiv.classList.add("bottom");

    firstLoadingStepsDiv.appendChild(firstLoadingStepsTopDiv)
    firstLoadingStepsDiv.appendChild(firstLoadingStepsMiddleLineDiv)
    firstLoadingStepsDiv.appendChild(firstLoadingStepsBottomDiv)


    firstLoadingDiv.appendChild(firstLoadingStepsDiv)


    for (var i = 0; i < 4; i++) {
        var div = document.createElement("div")
        var table = document.createElement("table")
        var tr = document.createElement("tr")
        var td = document.createElement("td")
        if (i == 0) td.innerText = "S"
        if (i == 1) td.innerText = "T"
        if (i == 2) td.innerText = "E"
        if (i == 3) td.innerText = "P"

        tr.appendChild(td)
        table.appendChild(tr)
        div.appendChild(table)

        firstLoadingStepsTopDiv.appendChild(div)

        firstLoadingStepsBottomDiv.appendChild(document.createElement("div"))
    }
    
    /***** STEPS(END) *****/

    /***** FOREX GRAPH *****/

    var forexGraphDiv = document.createElement("img")
    forexGraphDiv.classList.add("forex_graph")
    forexGraphDiv.src = "img/forex_graph.png"
    firstLoadingDiv.appendChild(forexGraphDiv)

    /***** FOREX GRAPH(END) *****/

    document.body.appendChild(firstLoadingDiv)

    /***** ADDING TAGS(END) *****/


    /***** ANIMATION *****/

    var classNameMiddleLineLoad = "load"
    var middleLineAnimWait = 0
    var middleLineHide = 3 * oneSecond

    var classNameStepParentDiv = "line"
    var heightLinesAnimWait = 2 * oneSecond

    var classNameStepDiv = "step"
    var heightStepsAnimWait = 4 * oneSecond


    var linesArr = [firstLoadingStepsTopDiv, firstLoadingStepsBottomDiv]

    addClass(firstLoadingStepsMiddleLineDiv, classNameMiddleLineLoad, middleLineAnimWait)
    addClass(linesArr, classNameStepParentDiv, heightLinesAnimWait)

    addClassToAllChild(firstLoadingStepsTopDiv, classNameStepDiv, heightStepsAnimWait)
    addClassToAllChild(firstLoadingStepsBottomDiv, classNameStepDiv, heightStepsAnimWait)

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
        firstLoadingStepsMiddleLineDiv.classList.remove(classNameMiddleLineLoad);
    }, middleLineHide)

}

/***** ANIMATION(END) *****/