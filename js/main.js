$(function () {

	$('.makestriped').on('click', function () {
		$('.table').toggleClass('table-striped');
		console.log('Does this work?');
	});

	$('.addborder').on('click', function () {
		$('.table').toggleClass('table-bordered');
		console.log('Does this work?');
	});

	$('.addhover').on('click', function () {
		$('.table').toggleClass('table-hover');
		console.log('Does this work?');
	});

	$('.makeyellow').on('click', function () {
		$('table tr:nth-child(even)').toggleClass('warning');
		console.log('Does this work?');
	});

	$('.makegreen').on('click', function () {
		$('tbody tr:nth-child(odd)').toggleClass('success');
		console.log('Does this work?');
	});


}); //End of main function