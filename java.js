function SendMail(){
    console.log("Hello world!")
    // emailjs.send("service_tcctqpm","template_vzonodr");
    
    var params= {
        from_name : document.getElementById("fullName").value,
        email_id : document.getElementById("email_id").value,
        message : document.getElementById("message").value
    }
    // emailjs.send("service_tcctqpm","template_vzonodr",params).then(
    //     console.log("Hello Submit!")
    // )
    var templateParams = {
        name: 'James',
        notes: 'Check this out!'
    };
     
    emailjs.send('service_tcctqpm', 'template_vzonodr', params)
        .then(function(response) {
           console.log('SUCCESS!', response.status, response.text);
        }, function(error) {
           console.log('FAILED...', error);
        });
   
}
function SendMailForm() {
    emailjs.sendForm('service_tcctqpm', 'template_vzonodr', '#form_id')
    .then(function(response) {
       console.log('SUCCESS!', response.status, response.text);
    }, function(error) {
       console.log('FAILED...', error);
    });
    
}
