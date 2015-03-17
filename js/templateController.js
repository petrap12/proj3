"use strict";

angular.module("MyApp", []);

angular.module("MyApp").controller("CreateTemplateController",
function($scope, TemplateResourse, toastr) {
	$scope.template = {
		$scope.CourseQuestions = [];
		$scope.TeacherQuestions = [];
	};

	$scope.onSave = function() {
		if($scope.template.CourseQuestions.length === 0
		    && $scope.template.TeacherQuestions.lenght === 0){
			//TODO
			toastr.error("There must be at least one question defined");
			
		} else {
			TemplateResource.createTemplate($scope.template);
		}
	};

});

angular.module("MyApp").factory("TemplateResource",
function($http) {
	return {
		createTemplate: function(template){
			//return $http.post()
		}
	};
});
		