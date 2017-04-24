var apiKey = require('./../.env').apiKey;

function Doctor() {
}

Doctor.prototype.getDoctors = function(medicalIssue, displayDoctors) {

  $.get('https://api.betterdoctor.com/2016-03-01/doctors?query='+ medicalIssue+'&location=45.5231%2C-122.6765%2C%205&user_location=45.5231%2C-122.6765&sort=last-name-asc&skip=0&limit=20&user_key=' + apiKey).then(function(response) {

    if (response.data < 1) {
      $('#search-results').show().text('Sorry, your search of ' + '" ' + medicalIssue + ' "' + ' did not provide any results. Please try again.');
    } else {
      $('#search-results').show().text('Your search of ' + '" ' + medicalIssue + ' "' + ' found ' + response.meta.count + ' doctors near your location.');
      var allDoctors = [];
      response.data.map(function(doctor) {
        var individualDoctor = {};
        individualDoctor.name = doctor.profile.first_name + " " + doctor.profile.last_name + ", " + doctor.profile.title;
        individualDoctor.img = doctor.profile.image_url;
        individualDoctor.specialty = doctor.specialties[0].description;
        individualDoctor.actor = doctor.specialties[0].actor;
        individualDoctor.practice = doctor.practices[0].name;
        individualDoctor.phone = doctor.practices[0].phones[0].number;
        allDoctors.push(individualDoctor);
      });
      return displayDoctors(allDoctors);
      }
  }).fail(function(){
      $('#search-results').show().text('Oops - looks like you forgot to enter a search term. Please try again.');
  });
};

exports.doctorModule = Doctor;
