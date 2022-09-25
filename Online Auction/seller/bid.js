function validateForm(){

    let Min_Value=document.schedule.MinValue;
    let start_date=document.schedule.StartDate;
    let end_date=document.schedule.EndDate;

    if(Min_Value.value.length==0){
        alert("Field can not be empty");
        return false;
    }

    if(start_date.value.length==0){
        alert("Field can not be empty");
        return false;
    }

    if(end_date.value.length==0){
        alert("Field can not be empty");
        return false;
    }

return true;
    
}