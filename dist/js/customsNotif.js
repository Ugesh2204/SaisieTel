// document.querySelector(".first").addEventListener('click', function(){
//     Swal.fire("Our First Alert");
//   });
   
//   document.querySelector(".second").addEventListener('click', function(){
//     Swal.fire("Our First Alert", "With some body text!");
//   });
   
  document.querySelector(".third").addEventListener('click', function(){
    event.preventDefault();
    Swal.fire({
        position: 'top-center',
        icon: 'success',
        title: 'User Created Successfully',
        showConfirmButton: false,
        timer: 2000
      });
  });

