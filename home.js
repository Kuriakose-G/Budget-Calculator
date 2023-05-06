var balanceamount = parseFloat(localStorage.getItem('Balance')) || 0;

function addition(){
    let amount=parseFloat(gained.value);
    const currenttime=new Date().toLocaleString();
    gainl=`${currenttime}-- Rs.${amount}`;
    list_gain.innerHTML=gainl;

    balanceamount+=amount;
    gained.value='';
    localStorage.setItem('Balance',balanceamount);
    balance();

}


function substraction(){
    let amount= lost.value;
    const currenttime=new Date().toLocaleString();
    lostl=`${currenttime}-- Rs.${amount}`;
    list_lost.innerHTML=lostl;

    balanceamount-=amount;
    lost.value='';
    localStorage.setItem('Balance',balanceamount);
    balance()

}


function balance(){
    let display=parseFloat(localStorage.getItem('Balance'))
    balan.innerHTML=display;
}

window.onload= function(){
    balance();
}


function logout(){
    window.location='./login.html';
}