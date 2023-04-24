window.addEventListener('load',function (){
    setTimeout(auth,2000);
    console.log('ok')
  });
var idx = 0
var ans = ""
function helper(){
  var text="Hello! I am Ayush.Nice to meet you."
  if(idx==text.length){
    idx=0;
    ans=""
    return
  }
  ans=ans+text[idx]
  document.getElementById('typingAnime').innerHTML=ans+"|"
  idx++
}
function auth(){
  setInterval(helper,120)
}