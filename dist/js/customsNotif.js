// document.querySelector(".first").addEventListener('click', function(){
//     Swal.fire("Our First Alert");
//   });
   
  // document.querySelector(".second").addEventListener('click', function(){
  //   Swal.fire("Our First Alert", "With some body text!");
  // });


  function CreateUser(){
    event.preventDefault();
    Swal.fire({
            position: 'top-center',
            icon: 'success',
            title: 'User Created Successfully',
            showConfirmButton: false,
            timer: 2000
          });
  }

  function CreateCommittee(){
    event.preventDefault();
    Swal.fire({
        position: 'top-center',
        icon: 'success',
        title: 'Committee Created Successfully',
        showConfirmButton: false,
        timer: 50000
      });
  }
   
 