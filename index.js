// code your solution here
function superbowlWin(record){
    let obj = record.find(item => item.result ==='W');
    if (obj){
        return obj.year
    }
}

