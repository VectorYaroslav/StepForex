document.addEventListener('DOMContentLoaded', function () {
    
    var classNameStepDiv = "step"
    var heightAnimWait = 3*oneSecond

    var topStepsDiv = document.getElementsByClassName('first_loading')[0]
        .getElementsByClassName('steps')[0]
        .getElementsByClassName('top')[0]

    var bottomStepsDiv = document.getElementsByClassName('first_loading')[0]
        .getElementsByClassName('steps')[0]
        .getElementsByClassName('bottom')[0]

    addClassToAllChild(topStepsDiv, classNameStepDiv, heightAnimWait)
    addClassToAllChild(bottomStepsDiv, classNameStepDiv, heightAnimWait)


    function addClassToAllChild(el, className, wait) {
        setTimeout(() => {
            classList = 'classList' in el;
            for (var i = 0; i < el.children.length; i++) {
                var child = el.children[i];
                child.classList.add(className);
            }
        }, wait)

    }

});