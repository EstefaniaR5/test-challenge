// Calculate the factorial of a number using recursion

function factNum(num){
    if(num === 0) {
        return 1;
    } else{
        return (num * factNum(num - 1));
    }
}
module.exports = {factNum};
