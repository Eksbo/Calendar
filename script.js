'uses cript' ;
let data = new Date
console.log(data.getMonth()+1);
console.log(data.getDate());
let day = data.getDate();
let mon = data.getMonth()+1;
let year =data.getFullYear()
let p =document.querySelector('#p');
let prev = document.querySelector('#prev');
let next = document.querySelector('#next');
let month = 
{
   1 : '31',
   2 : '28',
   3 : '31',
   4 : '30',
   5 : '31',
   6 : '30',
   7 : '31',
   8 : '31',
   9 : '30',
  10 : '31',
  11 : '30',
  12 : '31'
};

let monthName = 
{
   1 : 'Січень',
   2 : 'Лютий',
   3 : 'Березень',
   4 : 'Квітень',
   5 : 'Травень',
   6 : 'Червень',
   7 : 'Липень',
   8 : 'Серпень',
   9 : 'Вересень',
  10 : 'Жовтень',
  11 : 'Листопад',
  12 : 'Грудень'
};
if(year % 4 == 0){month[2]='29' }
let block = document.querySelector('#block');
console.log(month[data.getMonth()+1]);
let mounU = monthName[mon];
console.log(mounU);


p.append(mounU)
p.append(data.getFullYear())


let ul = document.createElement('ul');
ul.classList.add('ulStyle');
block.appendChild(ul);






for(let i = 1 ; i <= month[mon] ;i ++)
{
    let li = document.createElement('li');
    li.classList.add('numDay');
 
    li.textContent += i
    if( i == day )
    {
        li.classList.add('day');
    }
  ul.appendChild(li);
}

next.addEventListener('click', function()
{

ul.innerHTML = '';
p.innerHTML = '';
mon += 1 ;

for(let i = 1 ; i <= month[mon] ;i ++)
{
  if(mon == 2 && year % 4 == 0)
  {
    month[mon] = 29 ;
  }
  if(mon >= 12)
{
    mon = 1 ;
    year +=1 ;
}
    let li = document.createElement('li');
    li.classList.add('numDay');
 
    li.textContent += i
 
  ul.appendChild(li);
}
p.textContent=monthName[mon] + "  " + year;
})
prev.addEventListener('click', function()
{

ul.innerHTML = '';
p.innerHTML = '';
mon -= 1 ;
for(let i = 1 ; i <= month[mon] ;i ++)
{
  if(mon <= 1)
{
    mon = 12 ;
    year -=1 ;
}
    let li = document.createElement('li');
    li.classList.add('numDay');
    if(mon == 2 && year % 4 == 0 )
    {
      month[mon] = 29 ;
    }
    li.textContent += i;
  ul.appendChild(li);
  
}
p.textContent=monthName[mon] + "  " + year;
});