// Mock job data
const jobs = [
    {
        id: 1,
        title: "Frontend Developer",
        company: "Tech Solutions Inc.",
        logo: "/assets/img/dummyJobTrial.jpg  ",
        location: "Bangalore",
        salary: "8,00,000 - 12,00,000",
        cgpa: "7.5",
        liveKT: "0",
        experience: "1-3 years",
        description: "We are looking for a skilled Frontend Developer to join our team. You will be responsible for building user interfaces using React.js and ensuring high performance on mobile and desktop.",
        applicants: 42,
        type: "fulltime"
    },
    {
        id: 2,
        title: "Backend Engineer",
        company: "Data Systems Ltd.",
        logo: "/assets/img/dummyJobTrial.jpg",
        location: "Delhi",
        salary: "10,00,000 - 15,00,000",
        cgpa: "8.0",
        liveKT: "2",
        experience: "3-5 years",
        description: "Join our backend team to develop scalable server-side applications. Experience with Node.js and databases is required.",
        applicants: 28,
        type: "fulltime"
    },
    {
        id: 3,
        title: "UI/UX Designer",
        company: "Creative Minds",
        logo: "/assets/img/dummyJobTrial.jpg",
        location: "Mumbai",
        salary: "6,00,000 - 9,00,000",
        cgpa: "7.0",
        liveKT: "1",
        experience: "1-3 years",
        description: "We need a creative UI/UX designer to create amazing user experiences for our products. Proficiency in Figma and Adobe XD is required.",
        applicants: 35,
        type: "fulltime"
    },
    {
        id: 4,
        title: "Marketing Intern",
        company: "Growth Hackers",
        logo: "/assets/img/dummyJobTrial.jpg",
        location: "Hyderabad",
        salary: "15,000 - 20,000",
        cgpa: "6.5",
        liveKT: "3",
        experience: "Fresher",
        description: "Great opportunity for marketing students to learn digital marketing strategies and work on real campaigns.",
        applicants: 65,
        type: "internship"
    }
];

// Display all jobs initially
document.addEventListener('DOMContentLoaded', function () {
    displayJobs(jobs);

    // Add event listener for filter button
    document.getElementById('applyFilters').addEventListener('click', applyFilters);
});

// Function to display jobs
function displayJobs(jobsToDisplay) {
    const jobListings = document.getElementById('jobListings');
    jobListings.innerHTML = '';

    jobsToDisplay.forEach(job => {
        const jobCard = document.createElement('div');
        jobCard.className = 'col-md-6 mb-4';
        jobCard.innerHTML = `
            <div class="job-card">
                <div class="job-header">
                    <span class="badge" style="border: 1px solid var(--primary-color); color: var(--primary-color);">${job.type === 'fulltime' ? 'Full-time' : job.type === 'parttime' ? 'Part-time' : 'Internship'}</span>
                    <span class="applicants">${job.applicants} applicants</span>
                </div>
                <div class="job-title gradient-text">${job.title}</div>
                <div class="company-info">
                    <img src="${job.logo}" alt="${job.company}" class="company-logo">
                    <div>
                        <div>${job.company}</div>
                        <div class="location">${job.location}</div>
                    </div>
                </div>
                <div class="buttons">
                    <button class="details-btn" onclick="showJobDetails(${job.id})">View Details</button>
                    <button class="apply-btn">Apply Now</button>
                </div>
            </div>
        `;
        jobListings.appendChild(jobCard);
    });
}

// Function to show job details in modal
function showJobDetails(jobId) {
    const job = jobs.find(j => j.id === jobId);
    if (job) {
        document.getElementById('modalJobTitle').textContent = job.title;
        document.getElementById('modalCompany').textContent = job.company;
        document.getElementById('modalLocation').textContent = job.location;
        document.getElementById('modalSalary').textContent = job.salary;
        document.getElementById('modalCgpa').textContent = job.cgpa;
        document.getElementById('modalLiveKT').textContent = job.liveKT;
        document.getElementById('modalExperience').textContent = job.experience;
        document.getElementById('modalDescription').textContent = job.description;

        document.getElementById('jobDetailsModal').style.display = 'flex';
    }
}

// Function to close job details modal
function closeJobDetails() {
    document.getElementById('jobDetailsModal').style.display = 'none';
}

// Function to apply filters
function applyFilters() {
    const jobType = document.getElementById('jobType').value;
    const location = document.getElementById('location').value;
    const experience = document.getElementById('experience').value;

    let filteredJobs = jobs;

    if (jobType !== 'all') {
        filteredJobs = filteredJobs.filter(job => job.type === jobType);
    }

    if (location !== 'all') {
        filteredJobs = filteredJobs.filter(job => job.location.toLowerCase() === location);
    }

    if (experience !== 'all') {
        if (experience === 'fresher') {
            filteredJobs = filteredJobs.filter(job => job.experience.toLowerCase() === 'fresher');
        } else {
            filteredJobs = filteredJobs.filter(job => job.experience === experience);
        }
    }

    displayJobs(filteredJobs);
}

// Function to toggle filters on mobile
function toggleFilters() {
    const filterSection = document.getElementById('filterSection');
    filterSection.classList.toggle('show');
}