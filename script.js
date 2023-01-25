var count = 0;
$('textarea').each(function () {
    this.setAttribute('style', 'height:' + (this.scrollHeight) + 'px;overflow-y:hidden;');
}).on('input', function () {
    this.style.height = 'auto';
    this.style.height = (this.scrollHeight) + 'px';
});
$("textarea").keyup(function () {
    $(this).next().children('.counter').text(($(this).val().length) + "/100");
    if ($(this).val() == "") {
        $(this).next().children('.black').text("This question requires answer");
        $(this).next().children('.black').css("background-color", "rgb(244, 67, 54)");
        $(this).next().children('.black').css("color", "white");
    } else {
        $(this).next().children('.black').text("Required");
        $(this).next().children('.black').css("background-color", "rgb(232, 232, 232)");
        $(this).next().children('.black').css("color", "black");
    }
});
$("textarea").focusout(function () {
    $(this).next().children('.counter').text("");
    if ($(this).val() == "") {
        $(this).next().children('.black').text("This question requires answer");
        $(this).next().children('.black').css("background-color", "rgb(244, 67, 54)");
        $(this).next().children('.black').css("color", "white");
        // count--;
        // $("#QA").text(count);
    } else {
        $(this).next().children('.black').text("Required");
        $(this).next().children('.black').css("background-color", "rgb(232, 232, 232)");
        $(this).next().children('.black').css("color", "black");
        // count++;
        // $("#QA").text(count);
    }
})
$("textarea").focusin(function () {
    $(this).next().children('.counter').text(($(this).val().length) + "/100");
});

function uploadFiles() {
    var files = document.getElementById('file_upload').files;
    if (files.length == 0) {
        alert("Please first choose or drop any file(s)...");
        return;
    }
    var filenames = "";
    for (var i = 0; i < files.length; i++) {
        filenames += files[i].name + "\n";
    }
    alert("Selected file(s) :\n____________________\n" + filenames);
}
$("#file_upload").change(function () {
    var hasNoFiles = this.files.length == 0;
    if (hasNoFiles) {
        $(".gap .flex .black").text("This question requires answer");
        $(".gap .flex .black").css("background-color", "rgb(244, 67, 54)");
        $(".gap .flex .black").css("color", "white");
        count--;
        $("#QA").text(count);
    } else {
        $(".gap .flex .black").text("Required");
        $(".gap .flex .black").css("background-color", "rgb(232, 232, 232)");
        $(".gap .flex .black").css("color", "black");
        counter++;
        $("#QA").text(count);
    }
});


$('input[type=checkbox]').change(function () {
    if ($(this).is(':checked')) {
        $(this).next().next().next().html("<span class='black space'>Required</span>");
        count++;
        $("#QA").text(count);
    } else {
        $(this).next().next().next().html("<span class='red'>This question requires answer</span>");
        count--;
        $("#QA").text(count);
    }
});


$('label.font-black').click(function () {
    $('.radio .red').text("Required");
    $('.radio .red').css("background-color", "rgb(232, 232, 232)");
    $('.radio .red').css("color", "black");
});

$('input[type=radio]').click(function () {
    $('.radio .red').text("Required");
    $('.radio .red').css("background-color", "rgb(232, 232, 232)");
    $('.radio .red').css("color", "black");
});

$("#btn1").click(function () {
    $("textarea").each(function () {
        if ($(this).val() == "") {
            $(this).next().children('.black').text("This question requires answer");
            $(this).next().children('.black').css("background-color", "rgb(244, 67, 54)");
            $(this).next().children('.black').css("color", "white");
        }
    })
    $("input[type=radio]").each(function () {
        if ($("input[name=fav_language]:checked").val() == undefined) {
            $(this).next().next().next().html("<span class='red'>This question requires answer</span>");
        }
    });

    $("input[type=checkbox]").each(function () {
        if ($("input[type=checkbox]:checked").val() == undefined) {
            $(this).next().next().next().html("<span class='red'>This question requires answer</span>");
        }
    });

    if (!$("#file_upload").val()) {
        $(".gap .flex .black").text("This question requires answer");
        $(".gap .flex .black").css("background-color", "rgb(244, 67, 54)");
        $(".gap .flex .black").css("color", "white");
    }
    var pos;
    $("textarea").each(function (index) {
        var flag = 0;
        if (index == 2) {
            $("input[type=radio]").each(function () {
                if ($("input[type=radio]:checked").val() == undefined) {
                    pos = $(this).offset();
                    flag = 1;
                    $(this).focus();
                    return false;
                }
            });
        }
        if (index == 8) {
            if (!$("#file_upload").val()) {
                pos = $(this).offset();
                flag = 1;
                $(this).focus();
                return false;
            }
            $("input[type=checkbox]").each(function () {
                if ($("input[type=checkbox]:checked").val() == undefined) {
                    pos = $(this).offset();
                    flag = 1;
                    $(this).focus();
                    return false;
                }
            });
        }
        if (flag == 1) {
            var x = pos.top;
            x = x - 100;
            $(document).scrollTop(x);

            return false;
        }
        if ($(this).val() == "") {
            pos = $(this).offset();
            var x = pos.top;
            $(document).scrollTop(x - 400);
            $(this).focus();
            return false;
        }
    });
});

$("textarea").each(function () {
    var focusin_checker = 0;
    $(this).on("focusin", function () {
        if ($(this).val().length > 0) {
            focusin_checker = true;
        } else {
            focusin_checker = false;
        }
    });
    var c = 0;
    $(this).on("focusout", function () {
        c = $(this).val().length;
    })
    if (focusin_checker && c > 0) {
        $("#QA").text(count);
        console.log(count);
    } else if (focusin_checker && c == 0) {
        count--;
        $("#QA").text(count);
    } else if (focusin_checker == false && c > 0) {
        count++;
        $("#QA").text(count);
        console.log(count);
    } else if (focusin_checker == false && c == 0) {
        $("#QA").text(count);
    } else { }
});
$(".circle").on("click", function () {
    window.scrollTo(0, 0);
})