var CHA = (function () {

    function matrixSingleAnswer()
    {
        // Global Variables: These are constant
        var qId = "QR~" + this.questionId + "~";
        var embeddedData;
        var previousAnswers = [];
        var getChoice;


        // Local Variables: These change per question
        // questionNumber = "PYQID149_"; // PreviousYear survey data pointer
        var questionNumber = "PY" + this.questionId; // PreviousYear survey data pointer


        // Exit script if question has already been answered
        if (this.getSelectedChoices().length !== 0) {
            return;
        }


        // Build Choice Array
        try {
            for (var i = 1; i < 100; i++) // Notice i starts at 1, not 0!
            {
                getChoice = document.getElementById(qId + i);
                if (getChoice !== null) {
                    previousAnswers.push(i);
                }
                else {
                    continue;
                }
            }
        }
        catch (error) {
            console.log("Inside catch block! Array failed to populate.");
        }


        // Handle Embedded Data
        previousAnswers.forEach(function () {
            embeddedData = Qualtrics.SurveyEngine.getEmbeddedData(questionNumber);

            if (embeddedData !== null) {
                document.getElementById(qId + embeddedData).checked = true;
            }
        });   
    }

}());