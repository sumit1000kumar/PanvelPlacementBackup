
  
// document.getElementById('addJobBtn').addEventListener('click', () => {
//     document.getElementById('addJobForm').style.display = 'block';
//   });
  
//   document.getElementById('jobForm').addEventListener('submit', async (e) => {
//     e.preventDefault();
  
//     const jobId = document.getElementById('jobId').value;  // Get jobId to determine if it's edit or add
//     const formData = new FormData();
//     formData.append('company', document.getElementById('company').value);
//     formData.append('location', document.getElementById('location').value);
//     formData.append('post', document.getElementById('post').value);
//     formData.append('salary', document.getElementById('salary').value);
//     formData.append('deadline', document.getElementById('deadline').value);
//     formData.append('description', document.getElementById('description').value);
    
//     // If a file is selected, append it to formData
//     const logoFile = document.getElementById('logo').files[0];
//     if (logoFile) {
//       formData.append('logo', logoFile);
//     }
  
//     try {
//       let response;
//       if (jobId) {
//         // Edit existing job
//         response = await fetch(`http://localhost:5000/admin-jobs/edit-job/${jobId}`, {
//           method: 'PUT',
//           body: formData,
//         });
//       } else {
//         // Add new job
//         response = await fetch('http://localhost:5000/admin-jobs/add-job', {
//           method: 'POST',
//           body: formData,
//         });
//       }
  
//       const result = await response.json();
//       if (response.ok) {
//         alert(jobId ? 'Job updated successfully!' : 'Job added successfully!');
//         console.log(result);
//         document.getElementById('addJobForm').style.display = 'none';  // Hide form after submission
//         fetchJobs(); // Refresh the job list
//       } else {
//         alert('Error submitting the form');
//         console.error(result);
//       }
//     } catch (error) {
//       alert('Error submitting the form');
//       console.error(error);
//     }
//   });
  

//   document.addEventListener('DOMContentLoaded', () => {
//     fetchJobs();
//   });
  
//   function fetchJobs() {
//     fetch('http://localhost:5000/admin-jobs/jobs')
//       .then(response => response.json())
//       .then(data => {
//         const tableBody = document.getElementById('jobsTableBody');
//         tableBody.innerHTML = '';
  
//         data.forEach(job => {
//             const row = document.createElement('tr');
//             row.innerHTML = `
//               <td>${job.jobId}</td>
//               <td>${job.company}</td>
//               <td><img src="${job.logo}" alt="Logo" width="50" height="50"/></td>
//               <td>${job.location}</td>
//               <td>${job.post}</td>
//               <td>${job.salary}</td>
//               <td>${job.deadline}</td>
//               <td>${job.description}</td>
//               <td>
//                 <button class="editBtn" data-id="${job.jobId}">Edit</button>
//                 <button class="deleteBtn" data-id="${job.jobId}">Delete</button>
//               </td>
//             `;
//             tableBody.appendChild(row);
//           });
          
  
//         // Add event listeners for Edit and Delete buttons
//         document.querySelectorAll('.editBtn').forEach(button => {
//           button.addEventListener('click', (e) => {
//             const jobId = e.target.dataset.id;
//             loadJobDetails(jobId);
//           });
//         });
  
//         document.querySelectorAll('.deleteBtn').forEach(button => {
//           button.addEventListener('click', (e) => {
//             const jobId = e.target.dataset.id;
//             deleteJob(jobId);
//           });
//         });
//       })
//       .catch(err => {
//         console.error('Error fetching jobs:', err);
//       });
//   }
  
//   function loadJobDetails(jobId) {
//     fetch(`http://localhost:5000/admin-jobs/jobs/${jobId}`)
//       .then(response => response.json())
//       .then(job => {
//         document.getElementById('company').value = job.company;
//         document.getElementById('location').value = job.location;
//         document.getElementById('post').value = job.post;
//         document.getElementById('salary').value = job.salary;
//         document.getElementById('deadline').value = job.deadline;
//         document.getElementById('description').value = job.description;
//         document.getElementById('jobId').value = job.jobId;
  
//         // If there's a logo, display it in the form (optional)
//         document.getElementById('currentLogo').src = job.logo;
  
//         document.getElementById('addJobForm').style.display = 'block';
//         document.getElementById('addJobBtn').style.display = 'none'; // Hide Add Job button when editing
//       })
//       .catch(err => {
//         console.error('Error loading job details:', err);
//       });
//   }
  
//   function deleteJob(jobId) {
//     const confirmation = window.confirm("Are you sure you want to delete this job?");
//     if (!confirmation) return;
  
//     fetch(`http://localhost:5000/admin-jobs/delete-job/${jobId}`, {
//       method: 'DELETE',
//     })
//       .then(response => response.json())
//       .then(result => {
//         if (result.success) {
//           alert('Job deleted successfully!');
//           fetchJobs(); // Refresh the job list
//         } else {
//           alert('Error deleting the job');
//           console.error(result);
//         }
//       })
//       .catch(err => {
//         alert('Error deleting the job');
//         console.error(err);
//       });
//   }
  
//   document.getElementById('exportBtn').addEventListener('click', exportJobsToExcel);

//   function exportJobsToExcel() {
//     const table = document.getElementById('jobsTableBody');
//     const rows = Array.from(table.querySelectorAll('tr'));
    
//     const data = rows.map(row => {
//       const cells = row.querySelectorAll('td');
//       return {
//         JobID: cells[0]?.innerText,
//         Company: cells[1]?.innerText,
//         Location: cells[3]?.innerText,
//         Post: cells[4]?.innerText,
//         Salary: cells[5]?.innerText,
//         Deadline: cells[6]?.innerText,
//         Description: cells[7]?.innerText
//       };
//     });
  
//     const worksheet = XLSX.utils.json_to_sheet(data);
//     const workbook = XLSX.utils.book_new();
//     XLSX.utils.book_append_sheet(workbook, worksheet, "Jobs");
  
//     XLSX.writeFile(workbook, "jobs-list.xlsx");
//   }
  

//   document.getElementById('searchCompanyInput').addEventListener('input', function() {
//     const searchText = this.value.toLowerCase();
//     const tableRows = document.querySelectorAll('#jobsTableBody tr');
  
//     tableRows.forEach(row => {
//       const companyCell = row.querySelector('td:nth-child(2)'); // 2nd column = Company Name
//       const companyName = companyCell.textContent.toLowerCase();
  
//       if (companyName.includes(searchText)) {
//         row.style.display = '';
//       } else {
//         row.style.display = 'none';
//       }
//     });
//   });
  

//   // Toggle sidebar on hamburger click
//     document.addEventListener("DOMContentLoaded", function() {
//       fetchCandidates();
      
//       const menuToggle = document.getElementById('menuToggle');
//       const sidebar = document.getElementById('sidebar');
      
//       menuToggle.addEventListener('click', function() {
//         sidebar.classList.toggle('active');
//         // Change icon based on state
//         const icon = menuToggle.querySelector('i');
//         if (sidebar.classList.contains('active')) {
//           icon.classList.remove('fa-bars');
//           icon.classList.add('fa-times');
//         } else {
//           icon.classList.remove('fa-times');
//           icon.classList.add('fa-bars');
//         }
//       });
      
//       // Close sidebar when clicking outside on mobile
//       document.addEventListener('click', function(e) {
//         if (window.innerWidth <= 768 && 
//             !sidebar.contains(e.target) && 
//             e.target !== menuToggle && 
//             !menuToggle.contains(e.target)) {
//           sidebar.classList.remove('active');
//           const icon = menuToggle.querySelector('i');
//           icon.classList.remove('fa-times');
//           icon.classList.add('fa-bars');
//         }
//       });
//     });



const BASE_URL = 'https://panvel-placement-backend.onrender.com'; // <-- change this to your backend's real URL

document.getElementById('addJobBtn').addEventListener('click', () => {
    document.getElementById('addJobForm').style.display = 'block';
});

document.getElementById('jobForm').addEventListener('submit', async (e) => {
    e.preventDefault();

    const jobId = document.getElementById('jobId').value;
    const formData = new FormData();
    formData.append('company', document.getElementById('company').value);
    formData.append('location', document.getElementById('location').value);
    formData.append('post', document.getElementById('post').value);
    formData.append('salary', document.getElementById('salary').value);
    formData.append('deadline', document.getElementById('deadline').value);
    formData.append('description', document.getElementById('description').value);

    const logoFile = document.getElementById('logo').files[0];
    if (logoFile) {
        formData.append('logo', logoFile);
    }

    try {
        let response;
        if (jobId) {
            response = await fetch(`${BASE_URL}/admin-jobs/edit-job/${jobId}`, {
                method: 'PUT',
                body: formData,
            });
        } else {
            response = await fetch(`${BASE_URL}/admin-jobs/add-job`, {
                method: 'POST',
                body: formData,
            });
        }

        const result = await response.json();
        if (response.ok) {
            alert(jobId ? 'Job updated successfully!' : 'Job added successfully!');
            console.log(result);
            document.getElementById('addJobForm').style.display = 'none';
            fetchJobs();
        } else {
            alert('Error submitting the form');
            console.error(result);
        }
    } catch (error) {
        alert('Error submitting the form');
        console.error(error);
    }
});

document.addEventListener('DOMContentLoaded', () => {
    fetchJobs();
});

function fetchJobs() {
    fetch(`${BASE_URL}/admin-jobs/jobs`)
        .then(response => response.json())
        .then(data => {
            const tableBody = document.getElementById('jobsTableBody');
            tableBody.innerHTML = '';

            data.forEach(job => {
                const row = document.createElement('tr');
                row.innerHTML = `
                    <td>${job.jobId}</td>
                    <td>${job.company}</td>
                    <td><img src="${job.logo}" alt="Logo" width="50" height="50"/></td>
                    <td>${job.location}</td>
                    <td>${job.post}</td>
                    <td>${job.salary}</td>
                    <td>${job.deadline}</td>
                    <td>${job.description}</td>
                    <td>
                        <button class="editBtn" data-id="${job.jobId}">Edit</button>
                        <button class="deleteBtn" data-id="${job.jobId}">Delete</button>
                    </td>
                `;
                tableBody.appendChild(row);
            });

            document.querySelectorAll('.editBtn').forEach(button => {
                button.addEventListener('click', (e) => {
                    const jobId = e.target.dataset.id;
                    loadJobDetails(jobId);
                });
            });

            document.querySelectorAll('.deleteBtn').forEach(button => {
                button.addEventListener('click', (e) => {
                    const jobId = e.target.dataset.id;
                    deleteJob(jobId);
                });
            });
        })
        .catch(err => {
            console.error('Error fetching jobs:', err);
        });
}

function loadJobDetails(jobId) {
    fetch(`${BASE_URL}/admin-jobs/jobs/${jobId}`)
        .then(response => response.json())
        .then(job => {
            document.getElementById('company').value = job.company;
            document.getElementById('location').value = job.location;
            document.getElementById('post').value = job.post;
            document.getElementById('salary').value = job.salary;
            document.getElementById('deadline').value = job.deadline;
            document.getElementById('description').value = job.description;
            document.getElementById('jobId').value = job.jobId;

            document.getElementById('currentLogo').src = job.logo;

            document.getElementById('addJobForm').style.display = 'block';
            document.getElementById('addJobBtn').style.display = 'none';
        })
        .catch(err => {
            console.error('Error loading job details:', err);
        });
}

function deleteJob(jobId) {
    const confirmation = window.confirm("Are you sure you want to delete this job?");
    if (!confirmation) return;

    fetch(`${BASE_URL}/admin-jobs/delete-job/${jobId}`, {
        method: 'DELETE',
    })
        .then(response => response.json())
        .then(result => {
            if (result.success) {
                alert('Job deleted successfully!');
                fetchJobs();
            } else {
                alert('Error deleting the job');
                console.error(result);
            }
        })
        .catch(err => {
            alert('Error deleting the job');
            console.error(err);
        });
}

document.getElementById('exportBtn').addEventListener('click', exportJobsToExcel);

function exportJobsToExcel() {
    const table = document.getElementById('jobsTableBody');
    const rows = Array.from(table.querySelectorAll('tr'));

    const data = rows.map(row => {
        const cells = row.querySelectorAll('td');
        return {
            JobID: cells[0]?.innerText,
            Company: cells[1]?.innerText,
            Location: cells[3]?.innerText,
            Post: cells[4]?.innerText,
            Salary: cells[5]?.innerText,
            Deadline: cells[6]?.innerText,
            Description: cells[7]?.innerText
        };
    });

    const worksheet = XLSX.utils.json_to_sheet(data);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "Jobs");

    XLSX.writeFile(workbook, "jobs-list.xlsx");
}

document.getElementById('searchCompanyInput').addEventListener('input', function () {
    const searchText = this.value.toLowerCase();
    const tableRows = document.querySelectorAll('#jobsTableBody tr');

    tableRows.forEach(row => {
        const companyCell = row.querySelector('td:nth-child(2)');
        const companyName = companyCell.textContent.toLowerCase();

        if (companyName.includes(searchText)) {
            row.style.display = '';
        } else {
            row.style.display = 'none';
        }
    });
});

// Toggle sidebar on hamburger click
document.addEventListener("DOMContentLoaded", function () {
    fetchCandidates();

    const menuToggle = document.getElementById('menuToggle');
    const sidebar = document.getElementById('sidebar');

    menuToggle.addEventListener('click', function () {
        sidebar.classList.toggle('active');
        const icon = menuToggle.querySelector('i');
        if (sidebar.classList.contains('active')) {
            icon.classList.remove('fa-bars');
            icon.classList.add('fa-times');
        } else {
            icon.classList.remove('fa-times');
            icon.classList.add('fa-bars');
        }
    });

    document.addEventListener('click', function (e) {
        if (window.innerWidth <= 768 &&
            !sidebar.contains(e.target) &&
            e.target !== menuToggle &&
            !menuToggle.contains(e.target)) {
            sidebar.classList.remove('active');
            const icon = menuToggle.querySelector('i');
            icon.classList.remove('fa-times');
            icon.classList.add('fa-bars');
        }
    });
});
