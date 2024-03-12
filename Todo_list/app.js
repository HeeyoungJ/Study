let openMassage = prompt("안녕하세요.새로운 Todo list 작성을 위해 'new'를 입력해주세요.(종료:q)")
const list = []

while (openMassage !== "q"){
    if(openMassage === 'new'){
        addList = prompt("일정을 입력해주세요. 'q'를 누르시면 시스템이 종료됩니다.")
        if (addList === 'list'){
                for(let i = 0; i < list.length ; i ++){
                    console.log(`${i} : ${list[i]}`);
                }
                break;
        } else if (addList === 'delete'){
            deleteList = prompt("삭제할 리스트의 번호를 입력해주세요.")
            while(!parseInt(deleteList)){
                deleteList = prompt("숫자를 입력해주세요.")
            }
            list.splice(deleteList , 1);
            for(let i = 0; i < list.length ; i ++){
                console.log(`${i} : ${list[i]}`);
            }
        } else if (addList === 'q'){
            openMassage = "q";
        } else {
            list.push(addList);
        }
    } else {
        openMassage = prompt("Todo list 작성을 위해 'new'를 입력해주세요. (종료:q)")
    }
}

while (openMassage === 'q'){
    console.log("이용해주셔서 감사합니다.");
    break;
}