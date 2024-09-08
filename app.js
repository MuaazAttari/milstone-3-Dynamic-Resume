var _a;
// listing elements
(_a = document.getElementById("resume-form")) === null || _a === void 0 ? void 0 : _a.addEventListener("submit", function (event) {
    var _a;
    event.preventDefault();
    // type assertion
    var profilePictureInput = document.getElementById("profilePicture");
    var nameElement = document.getElementById("name");
    var emailElement = document.getElementById("email");
    var phoneElement = document.getElementById("phone");
    var addressElement = document.getElementById("address");
    var instituteElement = document.getElementById("institute");
    var degreeElement = document.getElementById("degree");
    var completionElement = document.getElementById("completion");
    var jobTitleElement = document.getElementById("jobTitle");
    var companyElement = document.getElementById("company");
    var workDatesElement = document.getElementById("workDates");
    var jobDescriptionElement = document.getElementById("jobDescription");
    var skillsElement = document.getElementById("skills");
    if (profilePictureInput && nameElement && emailElement && phoneElement && addressElement
        && instituteElement && degreeElement && completionElement
        && jobTitleElement && companyElement && workDatesElement && jobDescriptionElement
        && skillsElement) {
        var name_1 = nameElement.value;
        var email = emailElement.value;
        var phone = phoneElement.value;
        var address = addressElement.value;
        var institute = instituteElement.value;
        var degree = degreeElement.value;
        var completion = completionElement.value;
        var jobTitle = jobTitleElement.value;
        var company = companyElement.value;
        var workDates = workDatesElement.value;
        var jobDescription = jobDescriptionElement.value;
        var skills = skillsElement.value;
        // picture elements...
        var profilePictureFile = (_a = profilePictureInput.files) === null || _a === void 0 ? void 0 : _a[0];
        var profilePictureUrl = profilePictureFile ? URL.createObjectURL(profilePictureFile) : "";
        //creating resume output....
        var resumeOutput = "\n            <h2>Resume</h2>\n          ".concat(profilePictureUrl ? "<img src=\"".concat(profilePictureUrl, "\" alt=\"Profile Picture\" class=\"profilePicture\">") : "", "\n\n            <p><strong>Name:</strong> ").concat(name_1, " </p>\n            <p><strong>Email:</strong> ").concat(email, " </p>\n            <p><strong>Phone:</strong> ").concat(phone, " </p>\n            <p><strong>Address:</strong> ").concat(address, " </p>\n            \n            <h3>Education</h3>\n            <p>Institute: ").concat(institute, " </p>\n            <p>Degree: ").concat(degree, " </p>\n            <p>Completion: ").concat(completion, " </p>\n            \n            <h3>Experience</h3>\n            <p>Job-Title: ").concat(jobTitle, " </p>\n            <p>Company: ").concat(company, " </p>\n            <p>WorkDates: ").concat(workDates, " </p>\n            <p>Job-Description: ").concat(jobDescription, " </p>\n            \n            <h3> Skills</h3>\n            <p>Skills: ").concat(skills, " </p>\n            \n            ");
        var resumeOutputElement = document.getElementById('resume-Output');
        if (resumeOutputElement) {
            resumeOutputElement.innerHTML = resumeOutput;
        }
        else {
            console.error("resumeOutputElement not found");
        }
    }
    else {
        console.error("One or more elements not found");
    }
});
