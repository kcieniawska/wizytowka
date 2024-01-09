

            //Tekst animowany na stronie//
              document.addEventListener('DOMContentLoaded', function() {
              const mainContentElement = document.getElementById('kc');
              const text = mainContentElement.innerText;
              mainContentElement.innerText = '';

              for (let i = 0; i < text.length; i++) {
                  setTimeout(function() {
                  if (text[i] === ' ') {
                      mainContentElement.innerHTML += '&nbsp;'; 
                  } else {
                      mainContentElement.innerText += text[i];
                  }
                  }, 100 * i);
              }
              });
              //Ciekawa funkcja//
              function tel(){
                     var phoneLink = document.getElementById("phone-link");
                                  phoneLink.addEventListener("click", function() {
                                      alert("Nie można zobaczyć numeru telefonu.");
                                  })
                                }

               function email(){
                                  const emailTextElement = document.getElementById('email');
            
                                    emailTextElement.addEventListener('click', () => {
                                      const emailText = emailTextElement.innerText;
                                      navigator.clipboard.writeText(emailText)
                                        .then(() => alert('Skopiowano treść: ' + emailText));
                                    });
                                  }
          //Galeria zdjęć//
          function scrollToTop() {
            content.scrollIntoView({ behavior: "smooth" });
          }
          function openModal(imagePath) {
            var modal = document.getElementById('myModal');
            var modalImage = document.getElementById('modalImage');
        
            modal.style.display = 'flex';
            modalImage.src = imagePath;
          }
        
          function closeModal() {
            var modal = document.getElementById('myModal');
            modal.style.display = 'none';
          }
        
          window.onclick = function (event) {
            var modal = document.getElementById('myModal');
            if (event.target === modal) {
              modal.style.display = 'none';
            }
          };
//Strzałka //
function scrollToTop() {
  const arrow = document.getElementById("arrow");
  const content = document.getElementById("cont");

  document.addEventListener("scroll", () => {
   
    const halfPageHeight = window.innerHeight / 2;

    if (window.scrollY > halfPageHeight) {
      arrow.classList.add("show");
    } else {
      arrow.classList.remove("show");
    }
  });

  arrow.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  });
}
