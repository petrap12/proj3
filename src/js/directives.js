angular.module("EvalApp").directive("evaluationQuestionn",
function(){
	return{
		restrict: "E",
		scope: {
			ngModel: "="
			//question: "ngModel" eða "=ngModel"
		},
		templateUrl: "evaluationQuestion.tpl.html",
		link: function(scope, element, attributes){
			//if(attributes.smu)
			//if(scope.question.Type === "text")
		}
	};
});
