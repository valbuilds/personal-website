function validateBCForm() {
    let name = document.forms["bioCreator"]["name"].value;
    if (name == "") {
        alert("Please fill out the name field.");
        return false;
    } else {
        validBCForm2();
    }
}

function validBCForm2() {
    let pronouns = document.forms["bioCreator"]["pronouns"].value;
    if (pronouns == "") {
        alert("Please select a pronoun set.");
        return false;
    } else {
        validBCForm3();
    }
}

function validBCForm3() {
    let fact = document.forms["bioCreator"]["fact"].value;
    if (fact == "") {
        alert("Please input a fun fact about yourself.");
        return false;
    } else {
        finalizeValidationBCForm();
    }
}

function finalizeValidationBCForm() {
    let website = document.forms["bioCreator"]["website"].value;

    if (website == "") {
        generateNoWebsite();
    } else {
        generateWebsite();
    }
}

function generateWebsite() {
    let titleElement = document.getElementById("genBio-title");
    let generatedBioElement = document.getElementById("genBio-a");

    let n = document.forms["bioCreator"]["name"].value;
    let p = document.forms["bioCreator"]["pronouns"].value;
    let f = document.forms["bioCreator"]["fact"].value;
    let w = document.forms["bioCreator"]["website"].value;

    titleElement.innerHTML = "Your generated bio:"
    generatedBioElement.innerHTML = `Hi! I'm ${n}. I use ${p} pronouns, A fun fact about me is that ${f}. You can check me out at ${w}.`
}

function generateNoWebsite() {
    let titleElement = document.getElementById("genBio-title");
    let generatedBioElement = document.getElementById("genBio-a");

    let n = document.forms["bioCreator"]["name"].value;
    let p = document.forms["bioCreator"]["pronouns"].value;
    let f = document.forms["bioCreator"]["fact"].value;

    titleElement.innerHTML = "Your generated bio:"
    generatedBioElement.innerHTML = `Hi! I'm ${n}. I use ${p} pronouns, A fun fact about me is that ${f}.`
}