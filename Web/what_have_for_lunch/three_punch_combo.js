        $i = 0;
        const menu = {
            my: {checkToText:'切换为作者的菜单', checkToValue:'default'},
            default: {checkToText:'切换为更多菜单', checkToValue:'my'}
        }
        $('#start').click(function(){
            $i++;
            if($i >=6 ){
                $('#start').hide();
                $('#stop').show();
            }
        })
        $('#stop').click(function(){
            alert('这么作？今天别吃了！')
            $(this).hide();
        })
        $('#menu').click(function(){
            var dataValue = $(this).data().value;
            $(this).text(menu[dataValue].checkToText);
            $(this).data().value=menu[dataValue].checkToValue;
            $(this).attr('data-value', menu[dataValue].checkToValue);
        })