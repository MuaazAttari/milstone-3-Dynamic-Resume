
// listing elements
document.getElementById("resume-form")?.addEventListener("submit", function(event) {

    event.preventDefault();



    // type assertion

    const profilePictureInput = document.getElementById("profilePicture") as HTMLInputElement;

    const nameElement = document.getElementById("name") as HTMLInputElement;
    const emailElement = document.getElementById("email") as HTMLInputElement;
    const phoneElement = document.getElementById("phone") as HTMLInputElement;
    const addressElement = document.getElementById("address") as HTMLInputElement;

    const instituteElement = document.getElementById("institute") as HTMLInputElement;
    const degreeElement = document.getElementById("degree") as HTMLInputElement;
    const completionElement = document.getElementById("completion") as HTMLInputElement;

    const jobTitleElement = document.getElementById("jobTitle") as HTMLInputElement;
    const companyElement = document.getElementById("company") as HTMLInputElement;
    const workDatesElement = document.getElementById("workDates") as HTMLInputElement;
    const jobDescriptionElement = document.getElementById("jobDescription") as HTMLTextAreaElement;

    const skillsElement = document.getElementById("skills") as HTMLInputElement;



    
    if( profilePictureInput && nameElement && emailElement && phoneElement && addressElement
        && instituteElement && degreeElement && completionElement
        && jobTitleElement && companyElement && workDatesElement && jobDescriptionElement
        && skillsElement
    ){
        const name = nameElement.value;
        const email = emailElement.value;
        const phone = phoneElement.value;
        const address = addressElement.value;
        const institute = instituteElement.value;
        const degree = degreeElement.value;
        const completion = completionElement.value;
        const jobTitle = jobTitleElement.value;
        const company = companyElement.value;
        const workDates = workDatesElement.value;
        const jobDescription = jobDescriptionElement.value;
        const skills = skillsElement.value;

        
        // picture elements...

        const profilePictureFile = profilePictureInput.files?.[0];
        const profilePictureUrl = profilePictureFile ? URL.createObjectURL(profilePictureFile) : "";


            //creating resume output....
        
            const resumeOutput = `
            <h2>Resume</h2>
          ${profilePictureUrl ? `<img src="${profilePictureUrl}" alt="Profile Picture" class="profilePicture">` : ""}

            <p><strong>Name:</strong> ${name} </p>
            <p><strong>Email:</strong> ${email} </p>
            <p><strong>Phone:</strong> ${phone} </p>
            <p><strong>Address:</strong> ${address} </p>
            
            <h3>Education</h3>
            <p>Institute: ${institute} </p>
            <p>Degree: ${degree} </p>
            <p>Completion: ${completion} </p>
            
            <h3>Experience</h3>
            <p>Job-Title: ${jobTitle} </p>
            <p>Company: ${company} </p>
            <p>WorkDates: ${workDates} </p>
            <p>Job-Description: ${jobDescription} </p>
            
            <h3> Skills</h3>
            <p>Skills: ${skills} </p>
            
            ` ;

            const resumeOutputElement = document.getElementById('resume-Output')
            if(resumeOutputElement){
                resumeOutputElement.innerHTML = resumeOutput
            }
            else{
                console.error("resumeOutputElement not found")
            }
        }
        else{
            console.error("One or more elements not found")
        }
    })