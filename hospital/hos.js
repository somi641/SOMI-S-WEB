// Health Records
document.getElementById('health-form').addEventListener('submit', function(e) {
    e.preventDefault();
  
    const studentName = document.getElementById('student-name').value;
    const dob = document.getElementById('dob').value;
    const allergies = document.getElementById('allergies').value;
    const medications = document.getElementById('medications').value;
  
    const record = `<li><strong>${studentName}</strong> - DOB: ${dob} | Allergies: ${allergies} | Medications: ${medications}</li>`;
    
    document.getElementById('records-list').insertAdjacentHTML('beforeend', record);
    document.getElementById('health-form').reset();
  });
  
  // Appointment Booking
  document.getElementById('appointment-form').addEventListener('submit', function(e) {
    e.preventDefault();
  
    const studentName = document.getElementById('appointment-name').value;
    const appointmentDate = document.getElementById('appointment-date').value;
    const appointmentTime = document.getElementById('appointment-time').value;
  
    const appointment = `<li><strong>${studentName}</strong> - Date: ${appointmentDate} | Time: ${appointmentTime}</li>`;
    
    document.getElementById('appointments-list-content').insertAdjacentHTML('beforeend', appointment);
    document.getElementById('appointment-form').reset();
  });
  
  // Medication Tracker
  document.getElementById('medication-form').addEventListener('submit', function(e) {
    e.preventDefault();
  
    const medicationName = document.getElementById('medication-name').value;
    const dose = document.getElementById('medication-dose').value;
    const time = document.getElementById('medication-time').value;
  
    const medication = `<li><strong>${medicationName}</strong> - Dose: ${dose} | Time: ${time}</li>`;
  
    document.getElementById('medication-tracker-list').insertAdjacentHTML('beforeend', medication);
    document.getElementById('medication-form').reset();
  });
  
  // Health Alerts (Example)
  const alerts = [
    "Student John Doe has an allergy to peanuts!",
    "Student Mary Jane requires daily medication at 10:00 AM."
  ];
  
  alerts.forEach(alert => {
    const alertItem = `<li>${alert}</li>`;
    document.getElementById('health-alerts-list').insertAdjacentHTML('beforeend', alertItem);
  });
  