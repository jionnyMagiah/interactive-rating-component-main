const submitBtn = document.getElementById('submit')
const scoreBtn = document.getElementsByClassName('score')
const selectedScore = document.getElementById('voteSpan')
let score

submitBtn.addEventListener('click', () => {
    score = document.getElementsByClassName('clicked').length > 0 ?
        document.getElementsByClassName('clicked')[0].innerHTML : 0
    document.body.classList.add('thankyou-view')
    selectedScore.innerHTML = "&nbsp;" + score + "&nbsp;"
})

Array.prototype.forEach.call(scoreBtn, s => {

    s.addEventListener('click', event => {

        const boxes = document.getElementsByClassName('clicked');
        Array.prototype.forEach.call(boxes, box => {
            box.classList.remove('clicked');
        });

        s.classList.toggle('clicked')
    })
})