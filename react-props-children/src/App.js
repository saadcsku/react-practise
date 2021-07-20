import React from 'react';
import Container from './Container';
import './App.css'


function App() {
  return (
    <Container className="mt200px">
        <table>
          <tr>
            <td>Name</td>
            <td>Age</td>
            <td>Email</td>
            <td>Phone</td>
          </tr>
          <tr>
            <td>Saad</td>
            <td>32</td>
            <td>saadcsku@gmail.com </td>
            <td>03432897544</td>
          </tr>
          <tr>
            <td>Wasi</td>
            <td>42</td>
            <td>wasi@gmail.com</td>
            <td>03432897543</td>
          </tr>
          <tr>
            <td>Akaram</td>
            <td>22</td>
            <td>akram@gmail.com</td>
            <td>02136854397</td>
          </tr>
        </table>
    </Container>
    );
}

export default App;
