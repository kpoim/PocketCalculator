var equation = [],
    arr = [];
    console.log("APP STARTED");
$(document).ready(function () {
    $(".value").click(function () {
        equation.push($(this).val());
        arr.push($(this).val());
        toScreen(arr.join(""), equation.join(""));
    });
    $("#point").click(function () {
        if (arr.indexOf($(this).val()) == -1) {
            if (arr.length === 0) {
                arr.push("0");
                equation.push("0");
            }
            arr.push($(this).val());
            equation.push($(this).val());
            toScreen(arr.join(""), equation.join(""));
        }
    });
    $(".operator").click(function () {
        if (equation.length === 0) {
            arr.push("0");
            equation.push("0");
        }
        isNaN(Number(equation[equation.length - 1]))
            ? equation.splice(equation.length - 1, 1, $(this).val())
            : equation.push($(this).val());
        arr = [];
        toScreen($(this).val(), equation.join(""));
    });
    $("#equals").click(function () {
        if (isNaN(Number(equation[equation.length - 1]))) equation.pop();
        var result = eval(equation.join(""));
        equation.push("=");
        toScreen(result, equation.join(""));
        equation = String(result).split("");
        arr = String(result).split("");
    });
    $("#AC").click(function () {
        equation = [];
        arr = [];
        toScreen(0, "");
    });
    $("#CE").click(function () {
        equation.pop();
        arr.pop();
        if (equation.length === 0) toScreen('0', '');
        else toScreen(arr.join(""), equation.join(""));
    });
    $(".btn").click(function () {
        if (arr.length > 13 || equation.length > 19) {
            arr = [];
            equation = [];
            toScreen(0, "digit limit reached");
        }
    });
});

function toScreen(arg1, arg2) {
    $("#screenrow1").text(arg1);
    $("#screenrow2").text(arg2);
}

$(document).on("keydown", function (key) {
    if (key.keyCode === 27) {
        $("#AC").trigger("click");
    } else if (key.keyCode === 96) {
        $("#zero").trigger("click");
    } else if (key.keyCode === 97) {
        $("#one").trigger("click");
    } else if (key.keyCode === 98) {
        $("#two").trigger("click");
    } else if (key.keyCode === 99) {
        $("#three").trigger("click");
    } else if (key.keyCode === 100) {
        $("#four").trigger("click");
    } else if (key.keyCode === 101) {
        $("#five").trigger("click");
    } else if (key.keyCode === 102) {
        $("#six").trigger("click");
    } else if (key.keyCode === 103) {
        $("#seven").trigger("click");
    } else if (key.keyCode === 104) {
        $("#eight").trigger("click");
    } else if (key.keyCode === 105) {
        $("#nine").trigger("click");
    } else if (key.keyCode === 8 || key.keyCode === 46) {
        $("#CE").trigger("click");
    } else if (key.keyCode === 111) {
        $("#divide").trigger("click");
    } else if (key.keyCode === 106) {
        $("#multiply").trigger("click");
    } else if (key.keyCode === 109) {
        $("#minus").trigger("click");
    } else if (key.keyCode === 107) {
        $("#plus").trigger("click");
    } else if (key.keyCode === 13) {
        $("#equals").trigger("click");
    } else if (key.keyCode === 110) {
        $("#point").trigger("click");
    }
});
