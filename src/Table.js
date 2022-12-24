import React, { Component } from 'react';
import './Table.css';

class Table extends Component {
  render() {
    return (
      <div className='centered'>
        <table>
        <thead>
          <tr>
            <th>Caos</th>
            <th>1</th>
            <th>2</th>
            <th>3</th>
            <th>4</th>
            <th>5</th>
            <th>6</th>
            <th>7</th>
            <th>8</th>
            <th>9</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Impossible</td>
            <td>0<span>-20</span>77</td>
            <td>0<span>0</span>81</td>
            <td>0<span>0</span>81</td>
            <td>1<span>5</span>82</td>
            <td>1<span>5</span>82</td>
            <td>2<span>10</span>83</td>
            <td>3<span>15</span>84</td>
            <td>5<span>25</span>86</td>
            <td>10<span>50</span>91</td>
          </tr>
          <tr>
            <td>No Way</td>
            <td>0<span>0</span>81</td>
            <td>1<span>5</span>82</td>
            <td>1<span>5</span>82</td>
            <td>2<span>10</span>83</td>
            <td>3<span>15</span>84</td>
            <td>5<span>25</span>86</td>
            <td>7<span>35</span>88</td>
            <td>10<span>50</span>91</td>
            <td>10<span>75</span>96</td>
          </tr>
        </tbody>
      </table>
      </div>
    )
  }
}

export default Table
