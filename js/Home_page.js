/**
 * Created by Administrator on 2017/10/26.
 */


//    Xabin




//应急事件处置
$(".message_scroll").click(function () {
    EventClick();
});

//    地图切换buttn-start
$(".map_change").click(function () {
    $(this).addClass("map_change_chose");
    $(this).siblings().removeClass("map_change_chose")
    $(this).show()
    $(this).siblings().hide()
})
$(".map_change_box").mouseenter(function () {
    $(".map_change").show()
}).mouseleave(function () {
    $(".map_change_chose").show()
    $(".map_change_chose").siblings().hide()
})
//    地图切换buttn-end
$(".tab_msg").click(function () {
    $(this).addClass("tab_msg_current");
    $(this).siblings().removeClass("tab_msg_current")
})
$(".tab_msg01").click(function () {
    $(".table1").show()
    $(".table2").hide()
})
$(".tab_msg02").click(function () {
    $(".table2").show()
    $(".table1").hide()
})
$(".video_around").click(function () {
    $(this).siblings().removeClass("video_around_chose")
    $(this).addClass("video_around_chose")
})
$(".display_type_funct_sure").click(function () {
    $(".display_box").hide()
})
$(".display_type_btn").click(function () {
    $(".display_type_box").show()
    $(".city_chose_box").hide()
})
$(".city_chose_btn").click(function () {
    $(".city_chose_box").show()
    $(".display_type_box").hide()
})
//轮播推送隐藏功能
$(".scroll_tool_outbox").mouseenter(function(){
    $(".scroll_tool_outbox").addClass("scroll_tool_outbox_current")
});
$(".scroll_tool_outbox").mouseleave(function(){
    $(".scroll_tool_outbox").removeClass("scroll_tool_outbox_current")
})
//轨迹回放功能激活
$(".search_guiji").click(function () {
    $("#divRouteReview").show();
});
$(".close_playback").click(function () {
    $(".trajectory_box").hide();
});
$("#btnBuffer").click(function () {
    $("#divBufferSetting").show();
});

// $(".total_chose_pl").click(function () {
//     $(".total_chose_box").show()
// })

$(".total_chose_fr").click(function () {
    $(".total_chose_box").hide()
})
//    Xabin_end


$(function(){
        var myChart = echarts.init($("#allAly03")[0]);
        option = {
            title : {
                text: '销售量与投入量分析',
                textStyle:{
                    color:"#e9ebee"

                },
                x:'center'

            },
            tooltip : {
                trigger: 'axis'
            },
            legend: {
                orient : 'vertical',
                x : 'left',
                data:['营销投入量','销售量'],
                textStyle:{
                    color:"#e9ebee"

                },
            },

            calculable : false,
            xAxis : [
                {
                    type : 'category',
                    splitLine:{show: false},
                    axisLabel : {
                        formatter: '{value} ',
                        textStyle: {
                            color: '#a4a7ab',
                            align: 'right'
                        }
                    },
                    data : ['1月','2月','3月','4月','5月','6月','7月','8月','9月','10月','11月','12月']
                }
            ],
            yAxis : [
                {
                    type : 'value',
                    splitLine:{show: false},
                    axisLabel : {
                        formatter: '{value} ',
                        textStyle: {
                            color: '#a4a7ab',
                            align: 'right'
                        }
                    }
                }
            ],
            grid:{
                borderWidth:0
            },
            series : [
                {
                    name:'营销投入量',
                    type:'bar',
                    data:[2.0, 4.9, 7.0, 23.2, 25.6, 76.7, 135.6, 162.2, 32.6, 20.0, 6.4, 3.3],
                    itemStyle: {
                        normal: {
                            color: '#2481ff'
                        }
                    },
                    markPoint : {
                        data : [
                            {type : 'max', name: '最大值'},
                            {type : 'min', name: '最小值'}
                        ]
                    },
                    markLine : {
                        data : [
                            {type : 'average', name: '平均值'}
                        ]
                    }
                },
                {
                    name:'销售量',
                    type:'bar',
                    data:[2.6, 5.9, 9.0, 26.4, 28.7, 70.7, 175.6, 182.2, 48.7, 18.8, 6.0, 2.3],
                    itemStyle: {
                        normal: {
                            color: '#1afffd'
                        }
                    },

                    markPoint : {
                        data : [
                            {name : '最高', value : 182.2, xAxis: 7, yAxis: 183, symbolSize:18},
                            {name : '最低', value : 2.3, xAxis: 11, yAxis: 3}
                        ]
                    },
                    markLine : {
                        data : [
                            {type : 'average', name : '平均值'}
                        ]
                    }
                }
            ]
        };


        myChart.setOption(option);
    });









