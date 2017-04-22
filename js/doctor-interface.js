var Doctor = require('./../js/doctor.js').doctorModule;

var displayDoctors = function(allDoctors) {
  allDoctors.map(function(individualDoctor) {
    $('#results').append( '<div class="media">'+
                            '<div class="media-left">'+
                              '<a href="#">'+
                                '<img class="media-object" src="' + individualDoctor.img + '" alt="profile image">'+
                              '</a>'+
                            '</div>'+
                            '<div class="media-body">'+
                              '<h4 class="media-heading">' + individualDoctor.name + '</h4>'+
                              '<h5><em>' + individualDoctor.actor + ' - ' + individualDoctor.specialty + '</em></h5>'+
                            '</div>'+
                          '</div>');
  });
};

$(document).ready(function(){
  $('#btnResults').click(function(){
    var doctorObject = new Doctor();
    var medicalIssue = $('#userInput').val();
    $('#userInput').val("");
    $('#results').empty();
    doctorObject.getDoctors(medicalIssue, displayDoctors);
  });

  // $('a.media-left').click(function(){
  //
  // })
});
