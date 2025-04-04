
let templateFile = await fetch('./component/MovieForm/template.html');
let template = await templateFile.text();


let MovieForm = {};

MovieForm.format = function(head, handler){
    let html= template;
    html = html.replace('{{head}}', head);
    html = html.replace('{{handler}}', handler);
    return html;
};


export {MovieForm};