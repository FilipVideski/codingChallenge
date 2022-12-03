
const FetchRandomData = async (fetchEmployee) => {
    const response = await fetch("http://dummy.restapiexample.com/api/v1/employees/random")
    const data = await response.json()
    const [employee] = data.employee
    fetchEmployee(employee)

};

export default FetchRandomData;