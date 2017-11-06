(function () {
    var Message;
    Message = function (arg) {
        this.text = arg.text, this.message_side = arg.message_side;
        this.draw = function (_this) {
            return function () {
                var $message;
                $message = $($('.message_template').clone().html());
                $message.addClass(_this.message_side).find('.text').html(_this.text);
                $('.messages').append($message);
                return setTimeout(function () {
                    return $message.addClass('appeared');
                }, 0);
            };
        }(this);
        return this;
    };
    $(function () {
        var getMessageText, message_side, sendMessage;
        message_side = 'right';
        getMessageText = function () {
            var $message_input;
            $message_input = $('.message_input');
            return $message_input.val();
        };
        sendMessage = function (text) {
            var $messages, message;
            if (text.trim() === '') {
                return;
            }
            $('.message_input').val('');
            $messages = $('.messages');
            message_side = message_side === 'left' ? 'right' : 'left';
            message = new Message({
                text: text,
                message_side: message_side
            });
            message.draw();
            return $messages.animate({ scrollTop: $messages.prop('scrollHeight') }, 300);
        };
        $('.send_message').click(function (e) {
            sendMessage(getMessageText());
            setTimeout(function () {
                return sendMessage(response());
            }, 1500);

        });
        $('.message_input').keyup(function (e) {
            if (e.which === 13) {
                 sendMessage(getMessageText());
                setTimeout(function () {
                    return sendMessage(response());
                }, 1500);
            }
        });

    });
}.call(this));

function response() {
  var resp;
  var word ={
    1 : ['สัส','ไรวะ','คว*','กระจอก','อะไรของมึงงงง','เดี๋ยวก่อน','ภาษาไทยดิเห้ย','กินข้าวอยู่','ไม่รู้เรื่องโว้ยย','ดีๆหน่อย'],
    2 : ['อิอิ','เหงาหรอ','แบบนี้ก็ได้หรอ','เขินอ่ะ','พูดไม่เพราะเลย','ไม่รู้','มาหาหน่อย','นิสัยไม่ดี'],
    3 : ['เห้อ','หิวข้าว','ง่วงแล้ว','อะไรนะ','กินข้าวกะเราป้าว','เราว่าเธอน่ารักดีนะ','ไม่น่ารักเลย'],
    4 : ['หลบตีนแปป','ยาวไปๆ','กระต่ายขี้เป็นผง','เจ็บขี้ง่ะ','งื้อออออ','+ดิแบบนี้'],
    5 : ['มีไรจะบอก',' กอดหน่อย','เศร้า','เหงาหรอมาทำอะไรแบบนี้'],
    6 : ['ระวังนะ','T T','--*','--"','บางทีก้ไม่น่าเสือกนะ','ปัญญาอ่อน','งงไปดิ']
  };

  var selectset = Math.floor(Math.random()*(Object.keys(word).length))+1;
  //console.log(Object.keys(word).length);

  resp =   Math.floor(Math.random()*word[selectset].length);
  return word[selectset][resp];

}
