let checkPrime= function(num) {
            let i;
            for( i = 2; i < num && num % i != 0; i++ );
            if(i == num)
                return num+", ";
                return "";
        };
        let str = "";
        let n = prompt("enter n :");
        for(let i = 2; i <= n; i++){
            str = str + checkPrime(i);
        }
        console.log(str);
