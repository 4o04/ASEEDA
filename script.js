// const icon = document.getElementById('#click');

// const list = document.getElementById('#list');

// const sidebar = document.querySelector('.side-bar');

// icon.onclick = function() {
//     sidebar.classList.toggle('active');
//     list.classList.toggle('active');
// }

// const icon = document.querySelector('#icon')
// const sidebar = document.querySelector('#side-bar')

// icon.addEventListener('click', () => {
//     if (sidebar.display === 'none' || sidebar.style.display === '') {
//         sidebar.style.display = 'block'
//     }
//     else {
//         sidebar.style.display = 'none';
//     }
// });

const icon = document.querySelector('#icon')
const sidebar = document.querySelector('#side-bar')

icon.addEventListener('click', () => {
    if (sidebar.style.display === 'none' || sidebar.style.display === '') {
        sidebar.style.display = 'block'
    }
    else {
        sidebar.style.display = 'none';
    }
});

const mainContent = document.querySelector('#main-content');

icon.addEventListener('click', () => {
    sidebar.classList.toggle('sidebar-hidden');
    if (sidebar.classList.contains('sidebar-hidden')) {
        mainContent.style.width = '80%';
    } else {
        mainContent.style.width = '100%'; 
    }
});


$(document).ready(function(){
    $('.grid').click(function(){
      window.location.href="account.html"
    });
  });
  
  
  

