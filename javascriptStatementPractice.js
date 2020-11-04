const val = 180;
fac = printFactors(val);

function printFactors(val){
    while(val > 1){
        for(i=2;i<=val;i++)
            if(val%i == 0){
                val/=i;
                console.log(i);
                break;
            }
    }
}