$(()=>{
    //点击放大镜，输入框显示和隐藏
    $(".magnifier").click(()=>{
        $(".searchInput").toggleClass("inputHidden");
    });
    //首先建立查询函数
    function search(){
        let val = $("[data-search='input']").val;
        
        // ajax({
        //     url:"XXX",
        //     data:val,
        //     dataType:get
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
});