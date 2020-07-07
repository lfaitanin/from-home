import React from 'react';
import {Bar} from 'react-chartjs-2';
import axios from 'axios'
import {Line} from 'react-chartjs-2';

 export default function Grafico(){
    const [contas, setContas] = React.useState([])
    const [carteira, setCarteira] = React.useState([])
    const data = {
      labels: Object.keys(contas),
      datasets: [
        {
          label: 'Contas do Mês',
          backgroundColor: '#f44336',
          borderColor: '#3f51b5',
          borderWidth: 1,
          hoverBackgroundColor: '#f44336',
          hoverBorderColor: '#f44336',
          data: Object.values(contas)
        },{
          label: 'Carteira do Mês',
          fill: false,
          lineTension: 0.1,
          backgroundColor: '#3f51b5',
          borderColor: '#3f51b5',
          borderCapStyle: 'butt',
          borderDash: [],
          borderDashOffset: 0.0,
          borderJoinStyle: 'miter',
          pointBorderColor: '#3f51b5',
          pointBackgroundColor: '#fff',
          pointBorderWidth: 1,
          pointHoverRadius: 5,
          pointHoverBackgroundColor: 'rgba(75,192,192,1)',
          pointHoverBorderColor: 'rgba(220,220,220,1)',
          pointHoverBorderWidth: 2,
          pointRadius: 1,
          pointHitRadius: 10,
          data: Object.values(carteira)
        }
      ]
  };

    React.useEffect(() => {
      const fetchDatas = async () => {
        const CancelToken = axios.CancelToken;
        const source = CancelToken.source();
        const getContas = await axios.get('https://localhost:44347/api/Conta/totalmeses', { cancelToken: source.token })
        const getCarteiras = await axios.get('https://localhost:44347/api/Carteira/totalmeses', { cancelToken: source.token })
        
        setCarteira(getCarteiras.data)
        setContas(getContas.data)
      }
      fetchDatas()
      }, [])

    return (
      <div style={{marginTop:'50px'}}>
      <Bar
          data={data}
          width={700}
          height={500}
          options={{
            maintainAspectRatio: false
          }}
        />
      </div>
    );
  }