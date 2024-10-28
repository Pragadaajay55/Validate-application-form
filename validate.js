
    document.getElementById('jobApplicationForm').addEventListener('submit', function(event) {
        event.preventDefault(); 
        document.getElementById('nameError').textContent = '';
        document.getElementById('qualificationError').textContent = '';
        document.getElementById('genderError').textContent = '';
        document.getElementById('positionError').textContent = '';

        let isValid = true;

       
        const name = document.getElementById('name').value.trim();
        if (name === '') {
            document.getElementById('nameError').textContent = 'Name is required.';
            isValid = false;
        }

        const qualification = document.getElementById('qualification').value;
        if (qualification === '') {
            document.getElementById('qualificationError').textContent = 'Educational Qualification is required.';
            isValid = false;
        }

        const gender = document.querySelector('input[name="gender"]:checked');
        if (!gender) {
            document.getElementById('genderError').textContent = 'Gender is required.';
            isValid = false;
        }

    
        const position = document.getElementById('position').value;
        if (position === '') {
            document.getElementById('positionError').textContent = 'Position applied for is required.';
            isValid = false;
        }
        if (isValid) {
            alert(`Application Submitted!\n\nName: ${name}\nEducational Qualification: ${qualification}\nGender: ${gender.value}\nPosition: ${position}`);
            
        }
    });
