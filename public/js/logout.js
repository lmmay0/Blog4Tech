const logout = async function() {
  // async function fetchLogout() {
    const response = await fetch('/api/users/logout',{
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    // console.log(response);
  });



  // const response = await fetch('/api/users/logout', {
  //   method: 'POST',
  //   headers: { 'Content-Type': 'application/json' },
  // });

  if (response.ok) {
    document.location.replace('/');
  } else {
    alert(response.statusText);
  }
};

document.querySelector('#logout').addEventListener('click', logout);

//this should sign users out

