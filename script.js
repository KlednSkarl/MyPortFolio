 // Mobile menu toggle
    const menuBtn = document.getElementById('menuBtn');
    const navLinks = document.getElementById('navLinks');
    menuBtn.addEventListener('click', ()=> navLinks.classList.toggle('open'));

    // Close menu on link click (mobile)
    document.querySelectorAll('.navlink').forEach(a => a.addEventListener('click', ()=> navLinks.classList.remove('open')));

    // Active link highlighting using IntersectionObserver
    const sections = document.querySelectorAll('section');
    const links = document.querySelectorAll('.navlink');
    const map = {}; links.forEach(l=> map[l.getAttribute('href').slice(1)] = l);

    const io = new IntersectionObserver((entries)=>{
      entries.forEach(entry => {
        if(entry.isIntersecting){
          links.forEach(l=> l.classList.remove('active'));
          const id = entry.target.id;
          (map[id]||links[0]).classList.add('active');
        }
      });
    },{rootMargin:'-40% 0px -55% 0px', threshold:0});

    sections.forEach(s=> io.observe(s));

    // Year
    document.getElementById('year').textContent = new Date().getFullYear();


    function sendMail(){
        let parms = {
          name: document.getElementById("name").value,
          email: document.getElementById("email").value,
          message:document.getElementById("message").value
        }


        emailjs.send("service_1w83nms","template_g2n76lz",parms).then(alert("Email sent "))
    }