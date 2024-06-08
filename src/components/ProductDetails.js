import React from 'react';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Chip from '@mui/material/Chip';
import { LineChart, Line, XAxis, Tooltip, ResponsiveContainer } from 'recharts';
import { format, parseISO } from 'date-fns';
import DataTable from 'react-data-table-component';
import Divider from '@mui/material/Divider';
import moment from 'moment';


export default function ProductDetails() {
  const { id } = useParams();
  const products = useSelector((state) => state.products.products);
  const product = products.find((p) => p.id === id);

  if (!product) {
    return <div>Product not found</div>;
  }

  


  const columns = [
    {
      name: 'WEEK ENDING',
      selector: (row) => row.weekEnding,
      sortable: true
    },
    {
      name: 'RETAIL SALES',
      selector: (row) => row.retailSales,
      sortable: true
    },
    {
      name: 'WHOLESALE SALES',
      selector: (row) => row.wholesaleSales,
      sortable: true
    },
    {
      name: 'UNITS SOLD',
      selector: (row) => row.unitsSold,
      sortable: true
    },
    {
      name: 'RETAILER MARGIN',
      selector: (row) => row.retailerMargin,
      sortable: true
    },
  ];

  return (
    <div style={{ padding: '1rem' }}>
      <Grid container spacing={2}>
        <Grid item xs={12} md={3}>
          <Paper
            style={{
              height: '100%',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
            elevation={3}
          >
            <div>
              <img
                src={product.image}
                alt={product.title}
                loading='lazy'
                style={{
                  minWidth: 100,
                  width: 200,
                  margin: '0 auto',
                  padding: '10px 0',
                }}
              />
            </div>
            <h2 style={{ textAlign: 'center', margin: 0 }}>{product.title}</h2>
            <p
              style={{
                textAlign: 'center',
                margin: 0,
                padding: '0 2rem',
                textWrap: 'balance',
                color: 'slategray',
              }}
            >
              {product.subtitle}
            </p>
            <Divider sx={{width: "100%", marginTop: "1rem"}}/>
            <div style={{ margin: '1rem' }}>
              {product.tags.map((tag) => (
                <Chip
                  className='chip'
                  key={tag}
                  style={{ margin: '.5rem', borderRadius: '.5rem' }}
                  variant='outlined'
                  label={tag}
                />
              ))}
            </div>
            <Divider sx={{width: "100%"}}/>
          </Paper>
        </Grid>
        <Grid item xs={12} md={9}>
          <Paper elevation={3}>
            <h5 style={{ padding: '1rem', margin: 0 }}>Retail Sales</h5>
            <div style={{ width: '100%', height: 300 }}>
              <ResponsiveContainer>
                <LineChart
                  data={product.sales}
                  margin={{
                    top: 5,
                    right: 30,
                    left: 20,
                    bottom: 5,
                  }}
                >
                  <XAxis
                    dataKey='weekEnding'
                    tickFormatter={timeStr => moment(timeStr).format('MMM')} 
                    tickLine = {false}
                    interval={3}
                  />
                  <Tooltip />
                  <Line
                    type='monotone'
                    dataKey='retailSales'
                    stroke='#45A8F6'
                    strokeWidth={3}
                    dot={false}
                  />
                  <Line
                    type='monotone'
                    dataKey='wholesaleSales'
                    stroke='#9BA5BF'
                    strokeWidth={3}
                    dot={false}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </Paper>
          <Paper elevation={3} sx={{ marginTop: '1rem' }}>
            <DataTable pagination columns={columns} data={product.sales} />
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}
