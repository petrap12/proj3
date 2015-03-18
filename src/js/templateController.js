"use strict";
angular.module("EvalApp", ["ngRoute"]);

angular.module("EvalApp").controller("templateController",
function($scope, TemplateResourse, toastr) {
	$scope.template = {
		CourseQuestions: [],
		TeacherQuestions: []
	};

	$scope.onSave = function() {
		if($scope.template.CourseQuestions.length === 0 && 
		$scope.template.TeacherQuestions.lenght === 0){
			//TODO
			toastr.error("There must be at least one question defined");
			
		} else {
			TemplateResource.createTemplate($scope.template);
		}
	};

});

angular.module("EvalApp").factory("TemplateResource",
function($http) {
	return {
		createTemplate: function(template){
			//return $http.post()
		}
	};
});
		