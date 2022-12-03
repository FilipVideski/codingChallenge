import React from "react";


class DisplayTable extends React.Component {
   constructor(props) {
      super(props)
      this.state = {
        list: []
      }

      this.callAPI = this.callAPI.bind(this)
      this.callAPI();
   }

   callAPI() {
      fetch("http://dummy.restapiexample.com/api/v1/employees").then(
        (response) => response.json()
      ).then((data) => {
        console.log(data)
        this.setState({
            list:data.data
        })
      })
   }

   render() {
     let table_data = this.state.list.map((item) => {
        return (
          <tr key={item.id}>
             
             <td>{ item.id }</td>
             <td>{ item.employee_name }</td>
             <td>{ item.employee_salary }</td>
             <td>{ item.employee_age }</td>
             <td>
                <button className="btn btn-danger">Remove</button>

               
             </td>
             
          </tr>
        )

     })
     return (
        <div className="container">
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Salary</th>
                        <th>Age</th>
                        <th>Remove</th>
                    </tr>
                </thead>
            
                <tbody>
                    { table_data }
                </tbody>
            </table>
        </div>
     )
   }

}

export default DisplayTable;