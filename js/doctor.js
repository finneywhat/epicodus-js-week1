var apiKey = require('./../.env').apiKey;

function Doctor() {
}

Doctor.prototype.getDoctors = function(medicalIssue, displayDoctors) {

  $.get('https://api.betterdoctor.com/2016-03-01/doctors?query='+ medicalIssue+'&location=45.5231%2C-122.6765%2C%205&user_location=45.5231%2C-122.6765&skip=0&limit=20&user_key=' + apiKey).then(function(response) {

    var allDoctors = [];

    response.data.map(function(doctor){
      var individualDoctor = {};
      individualDoctor.name = doctor.profile.first_name + " " + doctor.profile.last_name + ", " + doctor.profile.title;
      individualDoctor.img = doctor.profile.image_url;
      individualDoctor.specialty = doctor.specialties[0].description;
      individualDoctor.actor = doctor.specialties[0].actor;
      individualDoctor.practice = doctor.practices[0].name;
      allDoctors.push(individualDoctor);
    });
    console.log(allDoctors);
    return displayDoctors(allDoctors);
    })
   .fail(function(error){
      console.log("error");
    });
};

exports.doctorModule = Doctor;
