
const alpha = people.sort(function(lastOne,nextOne){
    const [aLast, aFirst] = lastOne.split(', ')
    const [bLast,bFirst] = nextOne.split(', ')
    return aLast > bLast ? 1 : -1