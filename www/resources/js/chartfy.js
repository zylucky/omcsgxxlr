
/**
 * 柱形图
 *  myChart:初始化图形的对象
 *  sr:收入
 *  zc:支出
 */
function column(myChart,dj,zj){
	 option = {
    title: {
        text:'房源租赁价格走势',
        subtext: ''
    },
    tooltip: {
        trigger: 'axis'
    },
    legend: {
        data:['单价','总价']
    },
    toolbox: {
        show: true,
        feature: {
            dataZoom: {
                yAxisIndex: 'none'
            },
            dataView: {readOnly: false},
            magicType: {type: ['line', 'bar']},
            restore: {},
            saveAsImage: {}
        }
    },
    xAxis:  {
        type: 'category',
        boundaryGap: false,
        data: ['一月','二月','三月','四月','五月','六月','七月','八月','九月','十月','十一月','十二月']
    },
    yAxis: {
        type: 'value',
        axisLabel: {
            formatter: '{value}'
        }
    },
    series: [
        {
            name:'单价',
            type:'line',
            data:dj,
            markPoint: {
                data: [
                    {type: 'max', name: '最大值'},
                    {type: 'min', name: '最小值'}
                ]
            },
            markLine: {
                data: [
                    {type: 'average', name: '平均值'}
                ]
            }
        },{
            name:'总价',
            type:'line',
            data:zj,
            markPoint: {
                data: [
                    {type: 'max', name: '最大值'},
                    {type: 'min', name: '最小值'}
                ]
            },
            markLine: {
                data: [
                    {type: 'average', name: '平均值'}
                ]
            }
        }
       
    ]
};

		myChart.setOption(option);	
}
//地图需要使用的函数
function randomData() {
    return Math.round(Math.random()*1000);
}
/**
 * 地图
 *  myChart2:初始化地图的对象
 */
function mapdistri(myChart2,dtLand,dtTourism,dtTravel,dtOther){
	//初始化地图
	myChart2.setOption({
	    series: [{
	        type: 'map',
	        map: 'china'
	    }]
	});

var option = {
    title: {
        text: '项目分布',
        subtext: '项目分布',
        left: 'center'
    },
    tooltip: {
        trigger: 'item'
    },
    legend: {
        orient: 'vertical',
        left: 'left',
        data:['地产业务','旅游业务','旅行社','其他'],
    	left:65
    },
    visualMap: {
        min: 0,
        max: 2000,
        left: 65,
        top: 'bottom',
        text: ['高','低'],           // 文本，默认为数值文本
        calculable: true
    },
    toolbox: {
        show: true,
        orient: 'vertical',
        left: 'right',
        top: 'center',
        feature: {
            dataView: {readOnly: false},
            restore: {},
            saveAsImage: {}
        }
    },
    series: [
        {
            name: '地产业务',
            type: 'map',
            mapType: 'china',
            roam: false,
            label: {
                normal: {
                    show: true
                },
                emphasis: {
                    show: true
                }
            },
            data:dtLand
        },
        {
            name: '旅游业务',
            type: 'map',
            mapType: 'china',
            label: {
                normal: {
                    show: true
                },
                emphasis: {
                    show: true
                }
            },
            data:dtTourism
        },
        {
            name: '旅行社',
            type: 'map',
            mapType: 'china',
            label: {
                normal: {
                    show: true
                },
                emphasis: {
                    show: true
                }
            },
            data:dtTravel
        },
        {
            name: '其他',
            type: 'map',
            mapType: 'china',
            label: {
                normal: {
                    show: true
                },
                emphasis: {
                    show: true
                }
            },
            data:dtOther
        }
    ]
};
 // 使用刚指定的配置项和数据显示图表。
myChart2.setOption(option);
}
/**
 * 饼型图
 */
function piechart(myChart3){
	myChart3.title = '业务占比图';
	var option = {
		
	    tooltip: {
	        trigger: 'item',
	        formatter: "{a} <br/>{b}: {c} ({d}%)",
	    },
	    legend: {
	        orient: 'vertical',
	        x: 'left',
	        data:['直达','营销广告','搜索引擎','邮件营销','联盟广告','视频广告','百度','谷歌','必应','其他'],
	        left:65
	    },
	    series: [
	        {
	        	center:['65%','65%'],
	            name:'访问来源',
	            type:'pie',
	            selectedMode: 'single',
	            radius: [0, '30%'],
	
	            label: {
	                normal: {
	                    position: 'inner'
	                }
	            },
	            labelLine: {
	                normal: {
	                    show: false
	                }
	            },
	            data:[
	                {value:335, name:'直达', selected:true},
	                {value:679, name:'营销广告'},
	                {value:1548, name:'搜索引擎'}
	            ]
	        },
	        {
	        	//控制上下左右
	        	center:['65%','65%'],
	            name:'访问来源',
	            type:'pie',
	            radius: ['40%', '55%'],
	
	            data:[
	                {value:335, name:'直达'},
	                {value:310, name:'邮件营销'},
	                {value:234, name:'联盟广告'},
	                {value:135, name:'视频广告'},
	                {value:1048, name:'百度'},
	                {value:251, name:'谷歌'},
	                {value:147, name:'必应'},
	                {value:102, name:'其他'}
	            ]
	        }
	    ]
	}; 
	 // 使用刚指定的配置项和数据显示图表。
	myChart3.setOption(option);
}