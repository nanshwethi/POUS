import React from 'react'
import ReactEcharts from "echarts-for-react"; 

const BrandChart = () => {

   const option = {
        tooltip: {
          trigger: 'item'
        },
        // legend: {
        //   top: '5%',
        //   left: 'center'
        // },
        series: [
          {
            name: 'Access From',
            type: 'pie',
            radius: ['47%', '70%'],
            avoidLabelOverlap: true,
            label: {
              show: true,
              position: 'center',
              textShadowColor : 'none',
              shadowColor : 'none',
              formatter : 'Weekly Sale',
              color : '#afaaaa',
              fontSize : 15,
            },
            
            labelLine: {
              show: false
            },
            left : '-25px',
            right : '-25px',
            
            data: [
              { value: 1048, name: 'Search Engine',itemStyle :{color : '#8ab4f8'},emphasis :{disabled : true},},
              { value: 735, name: 'Direct',itemStyle :{color : '#6a88b8'},emphasis :{disabled : true}  },
              { value: 580, name: 'Email',itemStyle :{color : '#404d64'},emphasis :{disabled : true}  },
              { value: 484, name: 'Union Ads',itemStyle :{color : '#e8eaed'},emphasis :{disabled : true}  },
              
            ]
          }
        ]
    };

  return (
     <ReactEcharts option={option} style={{width : '100%'}}  />
  )
}

export default BrandChart