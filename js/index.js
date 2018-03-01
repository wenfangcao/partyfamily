$(()=>{
    //点击放大镜，输入框显示和隐藏
    $(".magnifier").click(()=>{
        $(".searchInput").toggleClass("inputHidden");
    });
    
    //首先建立查询函数
    function search(){
        let val = $("[data-search='input']").val;
        
        // ajax({
        //     type:"get",
        //     url:"XXX",
        //     data:val
        // }).then((response)=>{
        //     //继续执行其他操作...
        // });
        alert("查询成功");
    };
    //通过按钮点击或键盘enter触发查询函数
    $("[data-search='btn']").click(search);
    $("[data-search='input']").keydown((e)=>{
        if(e.keyCode == 13) search();
        //还可以改进，通过键盘点击，触发查询函数，实时查询
    });
    console.log(1);
    //通过AJAX过滤INPUT内容，提交node服务器，返回数据   1  发送成功，0 发送失败；
    function sendEmail(){
        console.log(2);
        var yourName = $("#yourName").val();
        var telephone = $("#telephoneNumber").val();
        if(!yourName || !telephone){
            alert("内容不能为空");
            console.log(3);
        }else{
            console.log(4);
            
            ajax({
                type:"get",
                url:'http://127.0.0.1:1234/email',
                data:"yourName="+yourName+"&telephone="+telephone,
                dataType:"jsonp"
            }).then((response)=>{
                if(JSON.parse(response).code == 1){
                    alert("感谢您的来信！");
                }else{
                    alert("操作失败，请稍后再试");
                }
            });
        }
    };
    $("[data-sendEmail='btn']").click(sendEmail);
    
})
