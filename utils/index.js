const getData = (data, count) => {
   return data.slice(0, count);
};

// TODO функция c двумя параметрами getUsers(data, firstName)
const getUsers = (data) => {
    // data.filter((item) => (firstName == item));
    return data;
};

module.exports = {
    getData, getUsers
};
