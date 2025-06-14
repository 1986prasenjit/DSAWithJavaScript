/*
    !Write a function which will print the following below pattern with numbers
    *Example:-
                1 2 3 4 5
                1 2 3 4 5
                1 2 3 4 5
                1 2 3 4 5
                1 2 3 4 5
*/


for (let i = 1; i <= 5; i++) {
        let str = "";
        for (let j = 1; j <= 5; j++) {
            str = str + " " + j;
        }
        console.log(str);
    }