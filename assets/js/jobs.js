

// for UI

// document.addEventListener("DOMContentLoaded", () => {
//   const jobList = document.getElementById("jobList");
//   const jobCount = document.getElementById("jobCount");
//   const applyBtn = document.getElementById("applyFilters");
//   const clearBtn = document.getElementById("clearFilters");

//   const apiBase = "http://localhost:5000/api/jobs";

//   function fetchJobs(filters = {}) {
//     let query = new URLSearchParams(filters).toString();
//     fetch(`${apiBase}?${query}`)
//       .then(res => res.json())
//       .then(data => {
//         jobCount.textContent = `Active Job Opportunities: ${data.length}`;
//         jobList.innerHTML = "";

//         if (data.length === 0) {
//           jobList.innerHTML = `<p class="text-center text-muted">No jobs found. Try changing filters.</p>`;
//           return;
//         }

//         data.forEach(job => {
//           const div = document.createElement("div");
//           div.className = "col-md-6 col-lg-4 mb-4";

//           div.innerHTML = `
//             <div class="job-card card p-4 h-100 d-flex flex-column justify-content-between shadow-sm">
//               <div>
//                 <div class="d-flex align-items-center mb-3">
//                   ${job.logo ? `<img src="http://localhost:5000${job.logo}" alt="Logo" class="company-logo me-3" style="width: 50px; height: 50px; object-fit: contain;">` : ''}
//                   <h5 class="mb-0 text-primary">${job.company}</h5>
//                 </div>
//                 <p><strong>Post:</strong> ${job.post}</p>
//                 <p><strong>Location:</strong> ${job.location}</p>
//                 <p><strong>Salary:</strong> ₹${job.salary}</p>
//                 <p><strong>Deadline:</strong> ${job.deadline}</p>
//               </div>
//               <div class="d-flex justify-content-between mt-3">
//                 <button class="btn btn-outline-primary btn-sm me-2" onclick='showDetails(${JSON.stringify(job)})'>View Details</button>
//                 <a class="btn btn-danger btn-sm" href="apply.html?jobId=${job.jobId}">Apply Now</a>
//               </div>
//             </div>`;
//           jobList.appendChild(div);
//         });
//       });
//   }

//   applyBtn.addEventListener("click", () => {
//     const filters = {
//       minSalary: document.getElementById("minSalary").value,
//       maxSalary: document.getElementById("maxSalary").value,
//       cgpa: document.getElementById("cgpa").value,
//       liveKT: document.getElementById("liveKT").value,
//       experience: document.getElementById("experience").value
//     };
//     fetchJobs(filters);
//   });

//   clearBtn.addEventListener("click", () => {
//     document.querySelectorAll("input, select").forEach(e => e.value = "");
//     fetchJobs();
//   });

//   window.showDetails = function (job) {
//     // Utility to toggle visibility of modal fields
//     const setOrHide = (id, value) => {
//       const el = document.getElementById(id);
//       if (value) {
//         el.innerText = value;
//         el.parentElement.style.display = "block";
//       } else {
//         el.parentElement.style.display = "none";
//       }
//     };

//     setOrHide("modalJobTitle", job.post);
//     setOrHide("modalCompany", job.company);
//     setOrHide("modalLocation", job.location);
//     setOrHide("modalSalary", `₹${job.salary}`);
//     setOrHide("modalCgpa", job.cgpa || "Not specified");
//     setOrHide("modalLiveKT", job.liveKT || "Not specified");
//     setOrHide("modalExperience", job.experience || "Not mentioned");
//     setOrHide("modalDescription", job.description || "No details available");

//     const logoElement = document.getElementById("modalLogo");
//     if (job.logo) {
//       logoElement.src = `http://localhost:5000${job.logo}`;
//       logoElement.style.display = "block";
//     } else {
//       logoElement.style.display = "none";
//     }

//     document.getElementById("jobDetailsModal").style.display = "flex";
//   };

//   window.closeJobDetails = function () {
//     document.getElementById("jobDetailsModal").style.display = "none";
//   };

//   // Initial fetch
//   fetchJobs();
// });



document.addEventListener("DOMContentLoaded", () => {
  const jobList = document.getElementById("jobList");
  const jobCount = document.getElementById("jobCount");
  const applyBtn = document.getElementById("applyFilters");
  const clearBtn = document.getElementById("clearFilters");

  const apiBase = "https://panvel-placement-backend.onrender.com/api/jobs"; // URL updated here

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
                  ${job.logo ? `<img src="https://panvel-placement-backend.onrender.com${job.logo}" alt="Logo" class="company-logo me-3" style="width: 50px; height: 50px; object-fit: contain;">` : ''}
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
      logoElement.src = `https://panvel-placement-backend.onrender.com${job.logo}`; // URL updated here
      logoElement.style.display = "block";
    } else {
      logoElement.style.display = "none";
    }

    document.getElementById("jobDetailsModal").style.display = "flex";
  };

  window.closeJobDetails = function () {
    document.getElementById("jobDetailsModal").style.display = "none";
  };

  fetchJobs();
});
