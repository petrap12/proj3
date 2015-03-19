"use strict";
var EvalApp = angular.module('EvalApp', ['ngRoute']);
angular.module('EvalApp'). constant('SERVER_URL', 'http://dispatch.hir.is/h14/api/v1/');

EvalApp.controller("templateController",
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
			TemplateResource.addTemplate($scope.template);
		}
	};

});

EvalApp.factory("TemplateResource",
function($http) {
	return {
		getTemplates: function () {
			return $http.get(SERVER_URL + "evaluationtemplates");
		},
		getTemplateByID: function(id){
			return $http.get(SERVER_URL + "evaluationtemplates/" + id, {id:ID});
		},
		addTemplate: function(template) {
			$http.post(SERVER_URL + "evaluationtemplates", undefined, template)
		}
	};
});
		