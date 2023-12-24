const boxBody = document.querySelector('.box-body')
const ratingState = boxBody.querySelector('.rating-scale')
let rate = ratingState.querySelectorAll('.rate')
const submitButton = boxBody.querySelector('.submit-button')
const thankuState = document.querySelector('.Thanku-state')
const appendNumber = thankuState.querySelector('#appendNumber')

let selectedId = 0;

rate.forEach(Span => {
    Span.addEventListener("click", () =>{
        const clickedId = parseInt(Span.id);

        if(selectedId === clickedId){
            selectedId = 0;
        }else{
            selectedId = clickedId;
        }

        console.log(selectedId)

        rate.forEach(s => {
            const spanId = parseInt(s.id);
            if (spanId <= selectedId) {
                s.style.backgroundColor = 'hsl(25, 97%, 53%)';
                s.style.color = 'hsl(0, 0%, 100%)';
            } else {
                s.style.backgroundColor = '';
                s.style.color = '';
            }

        })
    })
})

submitButton.addEventListener("click", () =>{

    if(selectedId==0){
        alert('Please select a rating before submitting.')
    }else{
        boxBody.style.display = 'none';
        thankuState.style.display = 'flex';
        appendNumber.textContent = selectedId;
    }
})




