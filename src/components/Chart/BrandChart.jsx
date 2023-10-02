import React from 'react'
import ReactEcharts from "echarts-for-react"; 

const BrandChart = ({Data}) => {
  console.log(Data);

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
              { value: Data[0].total_brand_sale, name: Data[0].brand_name ,itemStyle :{color : '#8ab4f8'},emphasis :{disabled : true},},
              { value: Data[1].total_brand_sale, name: Data[1].brand_name,itemStyle :{color : '#6a88b8'},emphasis :{disabled : true}  },
              { value: Data[2].total_brand_sale, name: Data[2].brand_name,itemStyle :{color : '#404d64'},emphasis :{disabled : true}  },
              { value: Data[3].total_brand_sale, name: Data[3].brand_name,itemStyle :{color : '#e8eaed'},emphasis :{disabled : true}  },
              
            ]
          }
        ]
    };

  return (
     <ReactEcharts option={option} style={{width : '100%'}}  />
  )
}

export default BrandChart