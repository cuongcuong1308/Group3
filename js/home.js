<script>
    $(document).ready(function(){
        $("#btHide").on("click", function(){
            $("p").toggle(1000,function(){alert("Dont touch Me !")});

            //đổi nhãn của button
            let name = $(this).val();
            if(name == "Hide"){
                $(this).val("Show")
            }
            else{
                $(this).val("Hide")
            }
        })
        
    })
</script>