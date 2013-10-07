var exercises = require('../exercises.json');
var markedejs = require('markedejs');

exports.intro = function(req, res){
	markedejs.renderFile('content/introduction.md', {}, function(err, html){
		res.render('layout',
		{
			title: 'Introduction',
			subtitle: 'Arduino Experimenters Guide for NodeJS',
			exercises: exercises,
			isExercise: false,
			thumbnail: '',
			content: html
		});
	});
};
exports.eprimer = function(req, res){
	markedejs.renderFile('content/eprimer.md', {}, function(err, html){
		res.render('layout',
		{
			title: 'Electronics Primer',
			subtitle: '',
			exercises: exercises,
			isExercise: false,
			thumbnail: '',
			content: html
		});
	});
};
exports.jprimer = function(req, res){
	markedejs.renderFile('content/jsprimer.md', {}, function(err, html){
		res.render('layout',
		{
			title: 'JavaScript Primer',
			subtitle: '',
			exercises: exercises,
			isExercise: false,
			thumbnail: '',
			content: html
		});
	});
};
exports.exercise = function(req, res){
	var exIndex = parseInt(req.params.ex, 10) - 1;
	if (exIndex >= 0 && exIndex < exercises.length) {
		var data = exercises[exIndex];
		data.exercises = exercises;
		var exNumber = (exIndex + 1) + "";
		if (exNumber.length == 1) {
			exNumber = "0" + exNumber;
		}
		data.circCode = exNumber;
		data.content = "exercise content"
		data.isExercise = true;
		res.render('layout', data);
	} else {
		res.send(404, 'Unable to find exercise ' + req.params.ex);
	}
};