// Add your code here

export function submitData(userName, userEmail) {
    const formData = {
      name: userName,
      email: userEmail,
    };
  
    const configurationObject = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(formData),
    };
  
    return fetch("http://localhost:3000/users", configurationObject)
      .then(function (response) {
        return response.json();
      })
      .then(function (object) {
        const userId = object.id;
        document.body.innerHTML += `<p>New user ID: ${userId}</p>`;
      })
      .catch(function (error) {
        document.body.innerHTML += `<p>Error message: ${error.message}</p>`;
      });
  }
  
  submitData("Emmanuel Terah", "emmanuelterah98@gmail.com");
