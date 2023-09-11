function submitForm(event) {
    event.preventDefault(); 

    const form = event.target; 
    const formData = new FormData(form); 
    const dataObject = {};

    for (const [key, value] of formData.entries()) {
        dataObject[key] = value;
    }
    
    if (!dataObject.email || !dataObject.password) {
        alert("Всі поля повинні бути заповнені");
    } else {
        console.log(dataObject);

        form.reset();
      }
    }
