let formData = [];

    window.onload = function() {
        if(localStorage.getItem('formData')) {
            formData = JSON.parse(localStorage.getItem('formData'));
            displayForms();
        }
    }

    function addForm() {
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const phone = document.getElementById('phone').value;
        const address = document.getElementById('address').value;

        if (name && email && phone && address) {
            const newForm = {
                name: name,
                email: email,
                phone: phone,
                address: address
            };
            formData.push(newForm);
            localStorage.setItem('formData', JSON.stringify(formData));
            displayForms();
            clearFields();
        } else {
            alert('Please fill in all fields.');
        }
    }

    function deleteForm(index) {
        formData.splice(index, 1);
        localStorage.setItem('formData', JSON.stringify(formData));
        displayForms();
    }

    function editForm(index) {
        const form = formData[index];
        document.getElementById('name').value = form.name;
        document.getElementById('email').value = form.email;
        document.getElementById('phone').value = form.phone;
        document.getElementById('address').value = form.address;

        deleteForm(index);
    }

    function displayForms() {
        const detailList = document.getElementById('detailList');
        detailList.innerHTML = '';
        formData.forEach((form, index) => {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${form.name}</td>
                <td>${form.email}</td>
                <td>${form.phone}</td>
                <td>${form.address}</td>
                <td>
                    <button onclick="editForm(${index})">Edit</button>
                    <button onclick="deleteForm(${index})">Delete</button>
                </td>
            `;
            detailList.appendChild(row);
        });
    }

    function clearFields() {
        document.getElementById('name').value = '';
        document.getElementById('email').value = '';
        document.getElementById('phone').value = '';
        document.getElementById('address').value = '';
    }