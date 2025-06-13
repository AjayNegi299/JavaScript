const requestUrl = 'https://api.github.com/users/AjayNegi299'
const xml = new XMLHttpRequest();
xml.open('get',requestUrl)
xml.onreadystatechange = function(){
if(xml.readyState===4){
const data = JSON.parse(this.responseText)
console.log(data.name);
}
}
xml.send()