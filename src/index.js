
import React from 'react';
import moment from 'moment';
import styles from './styles'

class QuantityBreakdown extends React.Component {
  render() {

    let text = this.props.text; 
    let type = this.props.type;
    let chunks = this.props.chunks;
    let total = this.props.total;
    let supplemental = this.props.supplemental;

    return (
    <div style={styles.processContainer}>
      <div style={styles.processTitle}>{`${text}: `} {type == "cost" ? 'Cost' : 'Time'}</div>
        {
          chunks
            ? <div style={styles.processBar}>
                {
                  
                  !isNaN(total)
                    ? chunks.map((item, index) => {
                        return <div key={index} style={{height:'20px', width: `${getChunkWidth(total, item.value)}%`, background: getChunkColour(index)}}></div>
                      })
                    : <div style={{height:'20px', width: `100%`, background: 'rgb(244, 243, 243)'}}/>
                }
              </div>
            : ''
        }

        {

         /*
          * Display the rows of information for each part of the process.
          */

          chunks
            ? <ul style={styles.processListBreakdown}>
                <li>
                  <div style={styles.element}>
                    <div style={styles.totalName}>{type == "cost" ? 'Total Cost' : 'Total Time'}</div>
                    <div style={styles.divider}></div>
                    <div style={styles.value}>{type == "cost" ? isNaN(total) ? '$0.00' : `$${total.toFixed(2)}` : isNaN(total) ? '0:00' : `${fancyTimeFormat(total)}`}</div>
                  </div>
                </li>
                {
                  chunks.map((item, index) => {
                    return <li key={index}>
                              <div style={styles.element}>
                                <div style={styles.name}>
                                  <div style={{background: getChunkColour(index)}} style={styles.circle}></div>
                                    {item.name}
                                  </div>
                                <div style={styles.divider}></div>
                                <div style={styles.value}>{type == "cost" ? isNaN(total) ? '$0.00' : `$${item.value.toFixed(2)}`: isNaN(total) ? '0:00' : `${fancyTimeFormat(item.value)}`}</div>
                              </div>
                          </li>
                  })
                }
              </ul>
            : ''
        }
        

        {
          
         /*
          * Display the supplemental information here.
          */

          supplemental
            ? <div>
                <div style={styles.moreInfo}>More Info</div>
                <ul style={styles.supplementalList}>
                  {
                    supplemental.map((item, index) => {
                      return <li key={index}>
                        <div style={styles.element}>
                            <div style={styles.name}>{item.name}</div>

                            <div style={styles.value}>{item.type == "STRING" 
                              ? item.value 
                              : item.type == "INT"
                                  ? `${item.value.toFixed(0)}`
                                  : '' }</div>
                          </div>
                      </li>
                    })
                  }
              </ul>
            </div>
            : ''
        }
        
      </div>
    )
  }
}


function getChunkColour(index) {
  switch(index) {
    case 0:
      return '#16B96E'
    case 1: 
      return '#F88A32'
    case 2:
      return '#477779'
    case 2:
      return '#877779'
    default:
      return '#777778'
  }
}

function fancyTimeFormat (minutes) {
  var n = new Date(0,0);
  n.setSeconds(+minutes * 60 );

  return moment(n).format('H:mm:ss')
}

function getChunkWidth (total, value) {
  return Math.floor((value / total) * 100);
}

export default QuantityBreakdown;