document.addEventListener("DOMContentLoaded",function(){var forms=document.querySelectorAll(".experience-form");forms.forEach(function(form){form.addEventListener("submit",function(event){event.preventDefault();var formData=new FormData(form);var alertMessage=form.querySelector('.alertMessage');alertMessage.innerText="Sending Experience...";alertMessage.style.display="block";fetch(form.action,{method:'POST',body:formData}).then(response=>{if(response.ok){alertMessage.innerText="Experience Shared Successfully!";setTimeout(function(){form.reset();alertMessage.innerText="Your Experience Pending Review for Website."},5000)}else{alertMessage.innerText="Failed to send message"}}).catch(error=>{console.error('Error:',error);alertMessage.innerText="Something Went Wrong: "+error})})})})

document.addEventListener("DOMContentLoaded",function(){document.querySelectorAll(".contact-form").forEach(function(e){e.addEventListener("submit",function(t){t.preventDefault();var n=new FormData(e),a=e.querySelector('.contactMessage');a.innerText="Your Message is sending...",a.style.display="block",fetch(e.action,{method:'POST',body:n}).then(function(t){t.ok?(a.innerText="Your Message is Sended",setTimeout(function(){e.reset(),a.innerText=""},5000)):a.innerText="Failed to send message"}).catch(function(t){console.error('Error:',t),a.innerText="Something Went Wrong: "+t})})})});

jQuery(document).ready(function ($) {
    let ratings = {};

    // Star rating logic
    $(".rating .star")
      .hover(function () {
        $(this).addClass("to_rate");
        $(this)
          .parent()
          .find(".star:lt(" + $(this).index() + ")")
          .addClass("to_rate");
        $(this)
          .parent()
          .find(".star:gt(" + $(this).index() + ")")
          .addClass("no_to_rate");
      })
      .mouseout(function () {
        $(this).parent().find(".star").removeClass("to_rate");
        $(this)
          .parent()
          .find(".star:gt(" + $(this).index() + ")")
          .removeClass("no_to_rate");
      })
      .click(function () {
        $(this).removeClass("to_rate").addClass("rated");
        $(this)
          .parent()
          .find(".star:lt(" + $(this).index() + ")")
          .removeClass("to_rate")
          .addClass("rated");
        $(this)
          .parent()
          .find(".star:gt(" + $(this).index() + ")")
          .removeClass("no_to_rate")
          .removeClass("rated");

        // Store the selected rating value
        const ratingField = $(this).parent().data("name");
        ratings[ratingField] = $(this).index() + 1;
      });
  });

  document
    .querySelector(".feedback-form")
    .addEventListener("submit", function (e) {
      e.preventDefault();

      // Collect the form data
      let formData = {
        fullname: document.querySelector("input[name=fullname]").value,
        email: document.querySelector("input[name=email]").value,
      
        // Correctly select stars based on the data-name attribute
        nurseRating: document.querySelectorAll("[data-name=nurseRating] .star.rated").length,
        staffRating: document.querySelectorAll("[data-name=staffRating] .star.rated").length,
        doctorAvailability: document.querySelectorAll("[data-name=doctorAvailability] .star.rated").length,
        routingCheckup: document.querySelectorAll("[data-name=routingCheckup] .star.rated").length,
        cleanliness: document.querySelectorAll("[data-name=cleanliness] .star.rated").length,
        foodBeverages: document.querySelectorAll("[data-name=foodBeverages] .star.rated").length,
        overallExperience: document.querySelectorAll("[data-name=overallExperience] .star.rated").length,
      };
      

      fetch(
        "https://script.google.com/macros/s/AKfycbxDvTxX7SXU02sPc1NCuO1V7bis9Phig_702zPPTGM5lVG5-bD710Sgw9BUjCvVoWGy/exec",
        {
          method: "POST",
          mode: "cors", // Set the mode to CORS
          
          body: JSON.stringify(formData), // Send the form data as JSON
        }
      )
        .then((response) => {
          if (response.ok) {
            return response.json();
          } else {
            throw new Error("Network response was not ok.");
          }
        })
        .then((data) => {
          console.log("Success:", data);
          alert("Feedback submitted successfully! Click OK to reset the form.");
          // Reset form and ratings
          document.querySelector(".feedback-form").reset();
          document
            .querySelectorAll(".star")
            .forEach((star) => star.classList.remove("rated"));
        })
        .catch((error) => {
          console.error("Error:", error);
          alert("Feedback submitted successfully!");
          document.querySelector(".feedback-form").reset();
        });
    });