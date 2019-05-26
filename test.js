var x = true;

setInterval(() => {
    return;
    x = !x;
    $('.content').append($(`<li style="font-weight:${x ? 'bold' : '200'}; color:${x ? 'red' : 'blue'};">`).text(`${x ? '♦ ' : '♣'}: haha`));
    $('.content').animate({ scrollTop: $(document).height() }, 800);
}, 1000);

function startRecognition() {
    $('.status').text('Listening...');
    var recognition = new webkitSpeechRecognition();
    recognition.onresult = function(event) {
        console.log(event);
    }
    recognition.onend = function(callback) {
        $('.status').text('');
    }
    recognition.start();
}

function showMessage(msg, isAnswer) {
    $('.content').append($(`<li style="font-weight:${isAnswer ? 'bold' : '200'}; color:${isAnswer ? 'red' : 'blue'};">`).text(`${isAnswer ? '♦ ' : '♣'}: ${msg}`));
    $('.content').animate({ scrollTop: $(document).height() }, 800);
}