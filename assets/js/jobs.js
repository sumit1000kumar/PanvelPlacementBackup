// document.addEventListener("DOMContentLoaded", () => {
//     const jobList = document.getElementById("jobList");
//     const jobCount = document.getElementById("jobCount");
//     const applyBtn = document.getElementById("applyFilters");
//     const clearBtn = document.getElementById("clearFilters");
  
//     const apiBase = "http://localhost:5000/api/jobs";
  
//     function fetchJobs(filters = {}) {
//       let query = new URLSearchParams(filters).toString();
//       fetch(`${apiBase}?${query}`)
//         .then(res => res.json())
//         .then(data => {
//           jobCount.textContent = `Active Job Opportunities: ${data.length}`;
//           jobList.innerHTML = "";
//           data.forEach(job => {
//             const div = document.createElement("div");
//             div.className = "col-md-6";
//             div.innerHTML = `
//               <div class="card p-3 shadow-sm">
//                 <h5>${job.title}</h5>
//                 <p><strong>Company:</strong> ${job.company}</p>
//                 <p><strong>Location:</strong> ${job.location}</p>
//                 <p><strong>Salary:</strong> ₹${job.salary}</p>
//                 <button class="btn btn-outline-primary" onclick='showDetails(${JSON.stringify(job)})'>View Details</button>
//               </div>`;
//             jobList.appendChild(div);
//           });
//         });
//     }
  
//     applyBtn.addEventListener("click", () => {
//       const filters = {
//         minSalary: document.getElementById("minSalary").value,
//         maxSalary: document.getElementById("maxSalary").value,
//         cgpa: document.getElementById("cgpa").value,
//         liveKT: document.getElementById("liveKT").value,
//         experience: document.getElementById("experience").value
//       };
//       fetchJobs(filters);
//     });
  
//     clearBtn.addEventListener("click", () => {
//       document.querySelectorAll("input, select").forEach(e => e.value = "");
//       fetchJobs();
//     });
  
//     window.showDetails = function (job) {
//       document.getElementById("modalJobTitle").innerText = job.title;
//       document.getElementById("modalCompany").innerText = job.company;
//       document.getElementById("modalLocation").innerText = job.location;
//       document.getElementById("modalSalary").innerText = job.salary;
//       document.getElementById("modalCgpa").innerText = job.cgpa;
//       document.getElementById("modalLiveKT").innerText = job.liveKT;
//       document.getElementById("modalExperience").innerText = job.experience;
//       document.getElementById("modalDescription").innerText = job.description;
  
//       document.getElementById("jobDetailsModal").style.display = "flex";
//     };
  
//     window.closeJobDetails = function () {
//       document.getElementById("jobDetailsModal").style.display = "none";
//     };
  
//     // Initial load
//     fetchJobs();
//   });
  

// document.addEventListener("DOMContentLoaded", () => {
//     const jobList = document.getElementById("jobList");
//     const jobCount = document.getElementById("jobCount");
//     const applyBtn = document.getElementById("applyFilters");
//     const clearBtn = document.getElementById("clearFilters");
  
//     const apiBase = "http://localhost:5000/api/jobs";
  
//     function fetchJobs(filters = {}) {
//       let query = new URLSearchParams(filters).toString();
//       fetch(`${apiBase}?${query}`)
//         .then(res => res.json())
//         .then(data => {
//           jobCount.textContent = `Active Job Opportunities: ${data.length}`;
//           jobList.innerHTML = "";
//           data.forEach(job => {
//             const div = document.createElement("div");
//             div.className = "col-md-6";
//             div.innerHTML = `
//               <div class="card p-3 shadow-sm">
//                     <div class="d-flex align-items-center">
//                     ${job.logo ? `<img src="http://localhost:5000${job.logo}" alt="Logo" class="company-logo" style="width: 50px; height: 50px; object-fit: contain; margin-right: 15px;">` : ''}
//                     <h5>${job.company}</h5>
//                     </div>

//                 <p><strong>Location:</strong> ${job.location}</p>
//                 <p><strong>Salary:</strong> ₹${job.salary}</p>
//                  <p><strong>Post:</strong> ${job.post}</p>
//                  <p><strong>Post:</strong> ${job.deadline}</p>
//                 <button class="btn btn-outline-primary" onclick='showDetails(${JSON.stringify(job)})'>View Details</button>
//                 <a class="btn btn-danger" href="apply.html?jobId=${job.jobId}">Apply Now</a>
//               </div>`;
//             jobList.appendChild(div);
//           });
//         });
//     }
  
//     applyBtn.addEventListener("click", () => {
//       const filters = {
//         minSalary: document.getElementById("minSalary").value,
//         maxSalary: document.getElementById("maxSalary").value,
//         cgpa: document.getElementById("cgpa").value,
//         liveKT: document.getElementById("liveKT").value,
//         experience: document.getElementById("experience").value
//       };
//       fetchJobs(filters);
//     });
  
//     clearBtn.addEventListener("click", () => {
//       document.querySelectorAll("input, select").forEach(e => e.value = "");
//       fetchJobs();
//     });
  
//     window.showDetails = function (job) {
//       console.log("Job Details:", job);  // For debugging
  
//       // Function to conditionally set or hide content in the modal
//       const setOrHide = (id, value) => {
//         const el = document.getElementById(id);
//         if (value) {
//           el.innerText = value;
//           el.parentElement.style.display = "block";
//         } else {
//           el.parentElement.style.display = "none";
//         }
//       };
  
//       // Setting the job details in the modal
//       setOrHide("modalJobTitle", job.post);
//       setOrHide("modalCompany", job.company);
//       setOrHide("modalLocation", job.location);
//       setOrHide("modalSalary", `₹${job.salary}`);
//       setOrHide("modalCgpa", job.cgpa || "Not specified");
//       setOrHide("modalLiveKT", job.liveKT || "Not specified");
//       setOrHide("modalExperience", job.experience || "Not mentioned");
//       setOrHide("modalDescription", job.description || "No details available");
  
//       // Set the company logo if available
//       const logoElement = document.getElementById("modalLogo");
//       if (job.logo) {
//         logoElement.src = `http://localhost:5000${job.logo}`;  // Assuming your server serves static files
//         logoElement.style.display = "block";  // Show the logo if it's available
//       } else {
//         logoElement.style.display = "none";  // Hide the logo if not available
//       }
  
//       // Display the modal
//       document.getElementById("jobDetailsModal").style.display = "flex";
//     };
  
//     window.closeJobDetails = function () {
//       document.getElementById("jobDetailsModal").style.display = "none";
//     };
  
//     // Initial load
//     fetchJobs();
//   });
   

//   function renderJobs(jobs) {
//     const jobList = document.getElementById('jobList');
//     jobList.innerHTML = "";
  
//     jobs.forEach(job => {
//       const jobCard = document.createElement('div');
//       jobCard.className = 'col-md-6 col-lg-4';
  
//       jobCard.innerHTML = `
//         <div class="card shadow-sm h-100">
//           <div class="card-body">
//             <h5 class="card-title">${job.jobTitle}</h5>
//             <p class="card-text"><strong>Company:</strong> ${job.company}</p>
//             <p class="card-text"><strong>Location:</strong> ${job.location}</p>
//             <button class="btn btn-outline-primary btn-sm mb-2" onclick="showJobDetails('${job.jobId}')">View Details</button>
//             <a href="apply.html?jobId=${job.jobId}" class="btn btn-danger btn-sm">Apply Now</a>
//           </div>
//         </div>
//       `;
//       jobList.appendChild(jobCard);
//     });
//   }
  


// for UI

document.addEventListener("DOMContentLoaded", () => {
  const jobList = document.getElementById("jobList");
  const jobCount = document.getElementById("jobCount");
  const applyBtn = document.getElementById("applyFilters");
  const clearBtn = document.getElementById("clearFilters");

  const apiBase = "http://localhost:5000/api/jobs";

  function fetchJobs(filters = {}) {
    let query = new URLSearchParams(filters).toString();
    fetch(`${apiBase}?${query}`)
      .then(res => res.json())
      .then(data => {
        jobCount.textContent = `Active Job Opportunities: ${data.length}`;
        jobList.innerHTML = "";

        if (data.length === 0) {
          jobList.innerHTML = `<p class="text-center text-muted">No jobs found. Try changing filters.</p>`;
          return;
        }

        data.forEach(job => {
          const div = document.createElement("div");
          div.className = "col-md-6 col-lg-4 mb-4";

          div.innerHTML = `
            <div class="job-card card p-4 h-100 d-flex flex-column justify-content-between shadow-sm">
              <div>
                <div class="d-flex align-items-center mb-3">
                  ${job.logo ? `<img src="http://localhost:5000${job.logo}" alt="Logo" class="company-logo me-3" style="width: 50px; height: 50px; object-fit: contain;">` : ''}
                  <h5 class="mb-0 text-primary">${job.company}</h5>
                </div>
                <p><strong>Post:</strong> ${job.post}</p>
                <p><strong>Location:</strong> ${job.location}</p>
                <p><strong>Salary:</strong> ₹${job.salary}</p>
                <p><strong>Deadline:</strong> ${job.deadline}</p>
              </div>
              <div class="d-flex justify-content-between mt-3">
                <button class="btn btn-outline-primary btn-sm me-2" onclick='showDetails(${JSON.stringify(job)})'>View Details</button>
                <a class="btn btn-danger btn-sm" href="apply.html?jobId=${job.jobId}">Apply Now</a>
              </div>
            </div>`;
          jobList.appendChild(div);
        });
      });
  }

  applyBtn.addEventListener("click", () => {
    const filters = {
      minSalary: document.getElementById("minSalary").value,
      maxSalary: document.getElementById("maxSalary").value,
      cgpa: document.getElementById("cgpa").value,
      liveKT: document.getElementById("liveKT").value,
      experience: document.getElementById("experience").value
    };
    fetchJobs(filters);
  });

  clearBtn.addEventListener("click", () => {
    document.querySelectorAll("input, select").forEach(e => e.value = "");
    fetchJobs();
  });

  window.showDetails = function (job) {
    // Utility to toggle visibility of modal fields
    const setOrHide = (id, value) => {
      const el = document.getElementById(id);
      if (value) {
        el.innerText = value;
        el.parentElement.style.display = "block";
      } else {
        el.parentElement.style.display = "none";
      }
    };

    setOrHide("modalJobTitle", job.post);
    setOrHide("modalCompany", job.company);
    setOrHide("modalLocation", job.location);
    setOrHide("modalSalary", `₹${job.salary}`);
    setOrHide("modalCgpa", job.cgpa || "Not specified");
    setOrHide("modalLiveKT", job.liveKT || "Not specified");
    setOrHide("modalExperience", job.experience || "Not mentioned");
    setOrHide("modalDescription", job.description || "No details available");

    const logoElement = document.getElementById("modalLogo");
    if (job.logo) {
      logoElement.src = `http://localhost:5000${job.logo}`;
      logoElement.style.display = "block";
    } else {
      logoElement.style.display = "none";
    }

    document.getElementById("jobDetailsModal").style.display = "flex";
  };

  window.closeJobDetails = function () {
    document.getElementById("jobDetailsModal").style.display = "none";
  };

  // Initial fetch
  fetchJobs();
});
