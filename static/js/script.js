filterSelection('all')
function filterSelection(c) {
    // Declare your variables
    var x_col, x_sec, i;
    // x is the column class name
    x_col = document.getElementsByClassName('column');
    if (c == 'all') c = ''
    for (i = 0; i < x_col.length; i++) {
        RemoveClass(x_col[i], 'show');
        if (x_col[i].className.indexOf(c) > -1) AddClass(x_col[i], 'show');
    };

    x_sec = document.getElementsByClassName('section');
    console.log(x_sec)
    // if (c == 'all') c = ''
    for (i = 0; i < x_sec.length; i++) {
        RemoveClass(x_sec[i], 'show');
        if (x_sec[i].className.indexOf(c) > -1) AddClass(x_sec[i], 'show');
    };
}

function AddClass(element, name) {
    // Declare variables i, arr1, arr2
    var i, arr1, arr2;
    arr1 = element.className.split(" ")
    arr2 = name.split(' ');
    for (i = 0; i < arr2.length; i++) {
        if (arr1.indexOf(arr2[i]) == -1) {
            element.className += ' ' + arr2[i];
        }
    }
}

function RemoveClass(element, name) {
    var i, arr1, arr2;
    arr1 = element.className.split(' ');
    arr2 = name.split(' ');
    for (i = 0; i < arr2.length; i++) {
        while (arr1.indexOf(arr2[i]) > -1) {
            arr1.splice(arr1.indexOf(arr2[i]), 1);
        }
    }
    element.className = arr1.join(' ');
}

var btnContainer = document.getElementById('myBtnContainer');
var btns = btnContainer.getElementsByClassName('btn');
for (var i = 0; i < btns.length; i++) {
    btns[i].addEventListener('click', function(){
        var current = document.getElementsByClassName('active');
        current[0].className = current[0].className.replace(' active', '');
        this.className += ' active';
    });
}