const words = ["Rodents", "Insects", "Ticks", "Mosquitoes", "Bugs", "Termites"];
let index = 0;
const textElement = document.querySelector(".changing-text");

setInterval(() => {
  textElement.style.opacity = 0;
  setTimeout(() => {
    index = (index + 1) % words.length;
    textElement.textContent = words[index];
    textElement.style.opacity = 1;
  }, 500);
}, 2000);

// Services Section
const services = [
  {
    title: "Fumigation Service",
    image: "images/services/fumigation.jpg",
    description:
      "We offer professional fumigation services to eliminate pests like termites, cockroaches, and bed bugs, ensuring a safe and hygienic environment for homes and businesses. Our treatments are effective, safe, and long-lasting.",
  },
  {
    title: "Pest Control",
    image: "images/services/pestcontrol.jpg",
    description:
      "We provide reliable and effective pest control solutions to keep your home and business safe from unwanted pests. Our expert team specializes in eliminating termites, rodents, cockroaches, bed bugs, and more using eco-friendly and safe methods.",
  },
  {
    title: "Termite Treatment",
    image: "images/services/termite.jpg",
    description:
      "Protect your property from destructive termites with our professional termite treatment solutions. We use advanced techniques to detect, eliminate, and prevent termite infestations, ensuring long-lasting protection for your home or business.",
  },
  {
    title: "Rodent Control",
    image: "images/services/rat-control.jpg",
    description:
      "Keep your home and business rodent-free with our expert rodent control solutions. We use safe and effective methods to eliminate rats and mice, preventing damage and health risks.",
  },
  {
    title: "Bed Bug Removal",
    image: "images/services/bed-bug-control.jpg",
    description:
      "Eliminate bed bugs quickly and effectively with our professional treatment. We use safe and advanced techniques to ensure complete eradication, giving you a peaceful and bite-free sleep.",
  },
  {
    title: "Water Tank Cleaning",
    image:
      "https://www.edgedxb.com/files/images/ecommerce/products/water-tank-cleaning-2.jpg",
    description:
      "Ensure clean and safe water with our professional water tank cleaning services. We use advanced techniques to remove dirt, bacteria, and algae, providing hygienic and fresh water for your home or business. Keep your water tank free from contamination with our expert cleaning solutions.",
  },
  {
    title: "Cockroach Control Treatment",
    image: "images/services/cockroachcontrol.jpg",
    description:
      "Our Cockroach Control Treatment effectively eliminates cockroaches using safe and proven methods. We target infestations at their source, preventing future outbreaks and ensuring a clean, pest-free environment for homes and businesses.",
  },
  {
    title: "Mosquitoes Control Treatment",
    image: "images/services/mosquitoes.jpg",
    description:
      "Our Mosquito Control Treatment helps eliminate mosquitoes and prevent their breeding using safe and effective methods. We ensure long-lasting protection for homes and businesses, creating a healthier, mosquito-free environment.",
  },
  {
    title: "Sofa Cleaning",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROoy8j_tEfNjEOYNETgr2hDUPBuV-LOFo2jw&s",
    description:
      "Our Sofa Cleaning Service removes dust, stains, and allergens using deep-cleaning techniques and eco-friendly products. We restore your sofa’s freshness, ensuring a clean, hygienic, and comfortable living space.",
  },
  {
    title: "Home Cleaning",
    image: "https://karsaaz.app/uploads/sub-category/7e022a36040e0fb3033d070326655da24cfaefb2.jpg",
    description:
      "Our Home Cleaning Service provides deep cleaning for a spotless, hygienic, and fresh living space. We remove dust, dirt, and germs using safe and effective methods, ensuring a healthy home for you and your family.",
  },
  {
    title: "Integrated Pest Management (IPM)",
    image:
      "https://blog.agribegri.com/public/blog_images/insights-into-integrated-pest-management-all-you-should-know-600x400.jpg",
    description:
      "Our Integrated Pest Management (IPM) Service provides a safe and effective approach to pest control by combining inspection, prevention, and targeted treatments. We use eco-friendly methods to minimize pesticide use while ensuring long-term pest management for homes and businesses.",
  },
  {
    title: "Waterproofing / Heat Proofing",
    image:
      "https://kcswaterproofing.com/wp-content/uploads/2023/03/Flat-Roof-Waterproofing-Services.jpg",
    description:
      "Our Waterproofing & Heatproofing Services protect buildings from water leakage, dampness, and extreme heat. We use high-quality materials and advanced techniques to ensure durable, energy-efficient, and weather-resistant solutions for homes and businesses.",
  },
];

function generateWhatsAppLink(serviceTitle) {
  const phone = "923353482478";
  const message = `Hello, I am interested in your ${serviceTitle} service. Can you provide more details?`;
  return `https://api.whatsapp.com/send?phone=${phone}&text=${encodeURIComponent(
    message
  )}`;
}

const servicesContainer = document.getElementById("services-container");

services.forEach((service) => {
  const card = document.createElement("div");
  card.classList.add("services-sec", "col-lg-6", "col-md-12", "mb-4");
  card.innerHTML = `
    <div class="service-card d-flex flex-column h-100 p-3" 
         data-aos="fade-up" data-aos-duration="3000" 
         style="border: 1px solid #ddd; border-radius: 10px; background: #fff;">
         
        <div class="service-image w-100 text-center mb-3" 
             style="max-width: 300px; margin: 0 auto;">
            <img src="${service.image}" alt="${service.title}" 
                 style="width: 100%; border-radius: 10px;">
        </div>
        
        <div class="service-content text-center text-md-start w-100 flex-grow-1 d-flex flex-column justify-content-between">
            <h4 class="mt-2 font-bold text-success text-center">${
              service.title
            }</h4>
            <p class="mb-2 flex-grow-1 text-center">${service.description}</p>
            <a href="${generateWhatsAppLink(
              service.title
            )}" target="_blank" class="btn btn-success mt-auto">Contact Us</a>
        </div>
    </div>
  `;
  servicesContainer.appendChild(card);
});

// Video Section
const videoId = "vbyEVjsBDGM"; // Replace with your YouTube video ID
const videoModal = document.getElementById("videoModal");
const youtubeVideo = document.getElementById("youtubeVideo");

videoModal.addEventListener("show.bs.modal", function () {
  youtubeVideo.src = `https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0`;
});

videoModal.addEventListener("hidden.bs.modal", function () {
  youtubeVideo.src = "";
});

// Contact Form Submission
$(document).ready(function () {
  $("#contactForm").submit(function (e) {
    e.preventDefault(); // Prevent default form submission

    let formData = $(this).serialize(); // Serialize form data

    // Basic validation before sending request
    let name = $("#name").val().trim();
    let email = $("#email").val().trim();
    let phone = $("#phone").val().trim();
    let services = $("#services").val();
    let message = $("#message").val().trim();

    if (!name || !email || !phone || !services || !message) {
      $("#responseMessage").html(
        '<div class="alert alert-danger">All fields are required.</div>'
      );
      return;
    }

    $.ajax({
      url: "send_mail.php", // PHP script URL
      type: "POST",
      data: formData,
      dataType: "json",
      beforeSend: function () {
        $("#responseMessage").html(
          '<div class="alert alert-info">Sending message...</div>'
        );
      },
      success: function (response) {
        if (response.success) {
          $("#responseMessage").html(
            '<div class="alert alert-success">' + response.message + "</div>"
          );
          $("#contactForm")[0].reset(); // Reset form on success
        } else {
          $("#responseMessage").html(
            '<div class="alert alert-danger">' + response.message + "</div>"
          );
        }
      },
      error: function () {
        $("#responseMessage").html(
          '<div class="alert alert-danger">Error submitting form. Try again later.</div>'
        );
      },
    });
  });
});
