var CHA = {
    IsAnswered: function () {
        if (this.getSelectedChoices().length !== 0) {
            console.log("Already answered");
            return;
        }
        else {
            console.log("Setting answer . . . .");
        };
    }
};



//// Stacked Locally Scoped Object Literal
//var CHA = (function () {

//    var publicFunctions = {
//        HW: function helloWorld() {
//            console.log("Hello World!");
//        },
//        GW: function goodbyeWorld() {
//            console.log("Goodbye World!");
//        }
//    }

//    return publicFunctions;
//}());

//CHA.HW();
//CHA.GW();




// Revealing Method: really like for this library with multiple, somewhat lengthy functions
//var CHA = (function () {

//    var HW = function helloWorld() {
//        console.log("Hello World!");
//    };

//    var GW = function goodbyeWorld() {
//        console.log("Goodbye World!");
//    };


//    return {
//        HW: HW,
//        GW: GW
//    }
//}());

//CHA.HW();
//CHA.GW();