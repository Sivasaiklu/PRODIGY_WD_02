let ms=0, s=0, m=0, h=0;
let timeshow = document.getElementById('timeshow')
let timeref;

document.getElementById('start').onclick = function(){
    timeref = setInterval(updateTime, 10)
}

function updateTime(){
    ms=ms+10;
    if(ms==1000){
        s=s+1;
        ms=0;
        if(s==60){
            m=m+1;
            s=0;
            if(m==60){
                h=h+1;
                m=0;
            }
        }
    }

let hr, min, sec, millisec;

if(h < 10){
    hr = '0' + h
}
else{
    hr = h
}
if(m < 10){
    min = '0' + m
}
else{
    min = m
}
if(s < 10){
    sec = '0' + s
}
else{
    sec = s
}
if(ms < 10){
    millisec = '0' + ms
}
else if(ms < 100){
    millisec = '00' + ms
}
else{
    millisec = ms
}
   timeshow.innerHTML = `${hr} : ${min} : ${sec} : ${millisec}`
}

document.getElementById('stop').onclick = function(){
    clearInterval(timeref)
}   

document.getElementById('reset').onclick = function(){
    clearInterval(timeref)
    ms = 0;
    s = 0;
    m = 0;
    h = 0;
    timeshow.innerHTML = "00 : 00 : 00 : 00"
}


