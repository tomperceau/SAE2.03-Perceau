let templateFile = await fetch('./component/UpdateProfileForm/template.html');
let template = await templateFile.text();


let updateProfileForm = {};


updateProfileForm.format = function(handler, hProfile) {
    let html= template;
    html = html.replace('{{handler}}', handler);
    html = html.replace('{{hProfile}}', hProfile);   
    return html;
}


export {updateProfileForm};